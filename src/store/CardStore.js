/**
 * Pure state & validation manager for the card playlist and animation settings.
 */

export function createDefaultCards() {
  return [
    {
      id: 'demo-1',
      title: '致夜空下的你',
      text: '愿你在忙碌的日常里，依然保有一片属于自己的星光与温柔。',
      imageDataUrl: null,
      imageElement: null,
      layout: 'letter',
      paperTone: 'ivory',
      imageFit: 'contain',
      origamiShape: 'inherit',
    },
    {
      id: 'demo-2',
      title: '那些闪闪发光的日子',
      text: '每一次抬头仰望星空，都会想起我们一起走过的路与并肩看过的风景。',
      imageDataUrl: null,
      imageElement: null,
      layout: 'letter',
      paperTone: 'ivory',
      imageFit: 'contain',
      origamiShape: 'inherit',
    },
    {
      id: 'demo-3',
      title: '风起时，记得微笑',
      text: '把所有的心事折成千纸鹤与纸飞机，随晚风飞向远方，只留下轻盈与期待。',
      imageDataUrl: null,
      imageElement: null,
      layout: 'letter',
      paperTone: 'ivory',
      imageFit: 'contain',
      origamiShape: 'inherit',
    },
  ];
}

export class CardStore {
  constructor(initialCards = createDefaultCards()) {
    this.cards = initialCards.map((c) => ({ ...c }));
    this.nextSeq = 100;
    this.settings = {
      holdDuration: 3.0,
      origamiShape: 'auto',
      envelopeTheme: 'pearl-ivory',
      endingTitle: '愿所有温柔与星光，都奔你而来',
      endingSignature: '—— 致最特别的你',
      cinemaHideControls: true,
      autoFullscreen: false,
      aspectRatio: 'auto',
    };
  }

  _genId() {
    this.nextSeq += 1;
    return `card-${Date.now()}-${this.nextSeq}`;
  }

  addTextCard({ title = '', text = '', paperTone = 'ivory', origamiShape = 'inherit' } = {}) {
    const cleanTitle = String(title).trim();
    const cleanText = String(text).trim();
    if (!cleanTitle && !cleanText) {
      return null;
    }
    const card = {
      id: this._genId(),
      title: cleanTitle,
      text: cleanText,
      imageDataUrl: null,
      imageElement: null,
      layout: 'letter',
      paperTone,
      imageFit: 'contain',
      origamiShape,
    };
    this.cards.push(card);
    return card;
  }

  addImageCard({
    imageDataUrl,
    imageElement = null,
    title = '',
    text = '',
    layout = 'polaroid',
    paperTone = 'ivory',
    imageFit = 'contain',
    origamiShape = 'inherit',
  }) {
    if (!imageDataUrl) return null;
    const card = {
      id: this._genId(),
      title: String(title).trim(),
      text: String(text).trim(),
      imageDataUrl,
      imageElement,
      layout,
      paperTone,
      imageFit,
      origamiShape,
    };
    this.cards.push(card);
    return card;
  }

  updateCard(id, patch) {
    const idx = this.cards.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    this.cards[idx] = { ...this.cards[idx], ...patch };
    return this.cards[idx];
  }

  removeCard(id) {
    const idx = this.cards.findIndex((c) => c.id === id);
    if (idx === -1) return false;
    this.cards.splice(idx, 1);
    return true;
  }

  moveCard(id, delta) {
    const idx = this.cards.findIndex((c) => c.id === id);
    if (idx === -1) return false;
    const targetIdx = idx + delta;
    if (targetIdx < 0 || targetIdx >= this.cards.length) return false;
    const [item] = this.cards.splice(idx, 1);
    this.cards.splice(targetIdx, 0, item);
    return true;
  }

  clearCards() {
    this.cards = [];
  }

  loadDemoCards() {
    this.cards = createDefaultCards();
  }

  exportConfig() {
    return {
      version: 1,
      savedAt: new Date().toISOString(),
      settings: { ...this.settings },
      cards: this.cards.map((c) => ({
        id: c.id,
        title: c.title || '',
        text: c.text || '',
        imageDataUrl: c.imageDataUrl || null,
        layout: c.layout || (c.imageDataUrl ? 'polaroid' : 'letter'),
        paperTone: c.paperTone || 'ivory',
        imageFit: c.imageFit || 'contain',
        origamiShape: c.origamiShape || 'inherit',
      })),
    };
  }

  importConfig(payload) {
    if (!payload || typeof payload !== 'object' || !Array.isArray(payload.cards)) {
      return false;
    }

    const s = payload.settings && typeof payload.settings === 'object' ? payload.settings : {};
    const validHold = Number(s.holdDuration);
    const validShapes = ['auto', 'plane', 'butterfly', 'crane'];
    const validThemes = ['pearl-ivory', 'midnight-gold', 'lavender-mist'];
    const validRatios = ['auto', '9:16'];

    this.settings = {
      holdDuration: Number.isFinite(validHold) ? Math.max(1, Math.min(8, validHold)) : this.settings.holdDuration,
      origamiShape: validShapes.includes(s.origamiShape) ? s.origamiShape : this.settings.origamiShape,
      envelopeTheme: validThemes.includes(s.envelopeTheme) ? s.envelopeTheme : this.settings.envelopeTheme,
      endingTitle:
        typeof s.endingTitle === 'string' && s.endingTitle.trim()
          ? s.endingTitle.trim()
          : this.settings.endingTitle,
      endingSignature:
        typeof s.endingSignature === 'string' ? s.endingSignature.trim() : this.settings.endingSignature,
      cinemaHideControls:
        typeof s.cinemaHideControls === 'boolean' ? s.cinemaHideControls : this.settings.cinemaHideControls,
      autoFullscreen:
        typeof s.autoFullscreen === 'boolean' ? s.autoFullscreen : this.settings.autoFullscreen,
      aspectRatio: validRatios.includes(s.aspectRatio) ? s.aspectRatio : this.settings.aspectRatio,
    };

    const validTones = ['ivory', 'sky', 'lavender', 'blush'];
    const validCardShapes = ['inherit', 'plane', 'butterfly', 'crane'];

    this.cards = payload.cards
      .filter((c) => c && typeof c === 'object' && (c.imageDataUrl || c.title || c.text))
      .map((c) => {
        const hasImage = typeof c.imageDataUrl === 'string' && c.imageDataUrl.startsWith('data:');
        return {
          id: typeof c.id === 'string' && c.id ? c.id : this._genId(),
          title: typeof c.title === 'string' ? c.title.trim() : '',
          text: typeof c.text === 'string' ? c.text.trim() : '',
          imageDataUrl: hasImage ? c.imageDataUrl : null,
          imageElement: null,
          layout: c.layout === 'polaroid' || hasImage ? 'polaroid' : 'letter',
          paperTone: validTones.includes(c.paperTone) ? c.paperTone : 'ivory',
          imageFit: c.imageFit === 'cover' ? 'cover' : 'contain',
          origamiShape: validCardShapes.includes(c.origamiShape) ? c.origamiShape : 'inherit',
        };
      });

    return true;
  }
}
