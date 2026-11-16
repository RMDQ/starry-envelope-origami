/**
 * Browser persistence helper for saving/loading full video configurations
 * (settings + all cards including base64 imageDataUrls) using IndexedDB
 * with a localStorage fallback.
 */

const DB_NAME = 'starry-envelope-db';
const DB_VERSION = 1;
const STORE_NAME = 'configs';
const CONFIG_KEY = 'starry-envelope-config-v1';

function openDb() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB unavailable'));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('Failed to open IndexedDB'));
  });
}

export async function saveConfigToBrowser(config) {
  try {
    const db = await openDb();
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).put(config, CONFIG_KEY);
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error || new Error('IndexedDB write failed'));
    });
    db.close();
    return { storage: 'indexeddb' };
  } catch (err) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
      return { storage: 'localstorage' };
    }
    throw err;
  }
}

export async function loadConfigFromBrowser() {
  try {
    const db = await openDb();
    const result = await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const req = tx.objectStore(STORE_NAME).get(CONFIG_KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error || new Error('IndexedDB read failed'));
    });
    db.close();
    if (result) return result;
  } catch {
    // Fall through to localStorage fallback
  }

  if (typeof localStorage !== 'undefined') {
    const raw = localStorage.getItem(CONFIG_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  }
  return null;
}

