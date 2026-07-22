import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, ".tmp-screens");
const base = process.env.APP_URL || "http://127.0.0.1:8000";
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(`${base}/landing/saas-starter`, { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.screenshot({
    path: path.join(outDir, "landing-saas-desktop-fold.png"),
    fullPage: false,
});
await page.screenshot({
    path: path.join(outDir, "landing-saas-desktop-full.png"),
    fullPage: true,
});

await page.goto(`${base}/landing/mobile-mvp`, { waitUntil: "networkidle" });
await page.waitForTimeout(700);
await page.screenshot({
    path: path.join(outDir, "landing-mobile-mvp-fold.png"),
    fullPage: false,
});

await page.setViewportSize({ width: 390, height: 844 });
await page.goto(`${base}/landing/saas-starter`, { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({
    path: path.join(outDir, "landing-saas-mobile-full.png"),
    fullPage: true,
});

console.log("campaign landing screenshots ok");
await browser.close();
