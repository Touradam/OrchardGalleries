const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const QRCode = require('qrcode');

const ROOT = path.resolve(__dirname, '..');
const FLYER_HTML = path.join(ROOT, 'flyer', 'dome-today-flyer.html');
const OUTPUT_DIR = path.join(ROOT, 'assets');
const OUTPUT_PDF = path.join(OUTPUT_DIR, 'The-Dome-Today-Flyer-Orchard-Galleries.pdf');
const QR_PNG = path.join(OUTPUT_DIR, 'qr-orchard-galleries.png');
const GALLERY_URL = 'https://touradam.github.io/OrchardGalleries/';

async function generateQrCode() {
  await QRCode.toFile(QR_PNG, GALLERY_URL, {
    errorCorrectionLevel: 'H',
    width: 512,
    margin: 1,
    color: {
      dark: '#2C2C2C',
      light: '#FFFFFF',
    },
  });
  console.log(`QR code saved to ${QR_PNG}`);
}

async function waitForImages(page) {
  await page.evaluate(() =>
    Promise.all(
      Array.from(document.images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve, reject) => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', reject);
        });
      })
    )
  );
}

async function main() {
  if (!fs.existsSync(FLYER_HTML)) {
    throw new Error(`Flyer HTML not found: ${FLYER_HTML}`);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  await generateQrCode();

  const fileUrl = `file:///${FLYER_HTML.replace(/\\/g, '/')}`;

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(fileUrl, { waitUntil: 'networkidle0' });
  await page.evaluateHandle('document.fonts.ready');
  await waitForImages(page);

  await page.pdf({
    path: OUTPUT_PDF,
    format: 'Letter',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await browser.close();

  console.log(`PDF saved to ${OUTPUT_PDF}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
