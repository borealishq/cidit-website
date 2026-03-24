import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('http://localhost:4321/');
  await page.waitForLoadState('networkidle');

  const overflowingElements = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const elements = Array.from(document.querySelectorAll('*'));
    const overflows = [];
    
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth) {
        overflows.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          right: rect.right,
          docWidth
        });
      }
    }
    return overflows;
  });

  console.log('Overflowing elements:', overflowingElements);

  await browser.close();
})();
