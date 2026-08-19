// Этот скрипт выполняется в контексте страницы (MAIN world)
// и подменяет все JS-свойства, которые Apple проверяет для определения устройства

const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';

// Подменяем navigator.userAgent
Object.defineProperty(navigator, 'userAgent', {
  get: () => IPHONE_UA,
  configurable: true
});

// Подменяем navigator.platform
Object.defineProperty(navigator, 'platform', {
  get: () => 'iPhone',
  configurable: true
});

// Подменяем navigator.vendor
Object.defineProperty(navigator, 'vendor', {
  get: () => 'Apple Computer, Inc.',
  configurable: true
});

// Подменяем navigator.maxTouchPoints (у iPhone = 5)
Object.defineProperty(navigator, 'maxTouchPoints', {
  get: () => 5,
  configurable: true
});

// Подменяем navigator.appVersion
Object.defineProperty(navigator, 'appVersion', {
  get: () => '5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1',
  configurable: true
});

// Подменяем navigator.userAgentData (Chrome API)
if (navigator.userAgentData) {
  Object.defineProperty(navigator, 'userAgentData', {
    get: () => null,
    configurable: true
  });
}

// Подменяем screen.width и screen.height под iPhone 14
Object.defineProperty(screen, 'width', { get: () => 390, configurable: true });
Object.defineProperty(screen, 'height', { get: () => 844, configurable: true });

console.log('[Apple UA Spoofer] navigator подменён на iPhone iOS 17.5');
