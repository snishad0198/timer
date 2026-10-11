const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname);
const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));

const authorName = (typeof pkg.author === 'object' && pkg.author ? pkg.author.name : pkg.author) || 'SNishad';
const homepage = pkg.homepage || (pkg.author && pkg.author.url) || 'https://github.com/snishad0198';
const currentYear = new Date().getFullYear();

const banner = `/*
 * ${pkg.name} v${pkg.version} - ${pkg.description}
 * Copyright (c) ${currentYear} ${authorName} - ${homepage}
 */
`;

const bannerJS = `/* eslint-disable */\n\n` + banner;

function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // remove comments
    .replace(/\s+/g, ' ')             // collapse whitespace
    .replace(/\s*([:;{}])\s*/g, '$1') // trim around tokens
    .replace(/;}/g, '}')              // remove trailing semicolon
    .trim();
}

function buildStyles() {
  console.log('Compiling styles...');
  const coreCssPath = path.join(ROOT, 'tick', 'tick.core.css');
  const viewCssPath = path.join(ROOT, 'dist', 'tick.view.flip.css');
  
  const coreCss = fs.existsSync(coreCssPath) ? fs.readFileSync(coreCssPath, 'utf8') : '';
  const viewCss = fs.existsSync(viewCssPath) ? fs.readFileSync(viewCssPath, 'utf8') : '';

  const combined = banner + '\n' + coreCss + '\n' + viewCss;
  const outCss = path.join(ROOT, 'dist', 'flip.css');
  fs.writeFileSync(outCss, combined, 'utf8');
  console.log(`  ✓ Built dist/flip.css (${(combined.length / 1024).toFixed(1)} KB)`);

  const minified = banner + '\n' + minifyCss(coreCss + '\n' + viewCss);
  const outMinCss = path.join(ROOT, 'dist', 'flip.min.css');
  fs.writeFileSync(outMinCss, minified, 'utf8');
  console.log(`  ✓ Built dist/flip.min.css (${(minified.length / 1024).toFixed(1)} KB)`);
}

function buildScripts() {
  console.log('Compiling scripts...');
  const polyfillPath = path.join(ROOT, 'tick', 'tick.core.polyfill.js');
  const globalPath = path.join(ROOT, 'dist', 'tick.view.flip.global.js');
  const kickstartPath = path.join(ROOT, 'tick', 'tick.core.kickstart.js');

  const polyfill = fs.existsSync(polyfillPath) ? fs.readFileSync(polyfillPath, 'utf8') : '';
  const globalJs = fs.existsSync(globalPath) ? fs.readFileSync(globalPath, 'utf8') : '';
  const kickstart = fs.existsSync(kickstartPath) ? fs.readFileSync(kickstartPath, 'utf8') : '';

  const combined = bannerJS + '\n' + polyfill + '\n' + globalJs + '\n' + kickstart;
  const outJs = path.join(ROOT, 'dist', 'flip.js');
  fs.writeFileSync(outJs, combined, 'utf8');
  console.log(`  ✓ Built dist/flip.js (${(combined.length / 1024).toFixed(1)} KB)`);

  // Minified version: read existing flip.min.js body if available and update header banner
  const outMinJs = path.join(ROOT, 'dist', 'flip.min.js');
  if (fs.existsSync(outMinJs)) {
    let existingMin = fs.readFileSync(outMinJs, 'utf8');
    // Remove old header banner if present
    existingMin = existingMin.replace(/^\/\*[\s\S]*?\*\/\s*/g, '').replace(/^\/\*[\s\S]*?\*\/\s*/g, '');
    const updatedMin = bannerJS + '\n' + existingMin.trim();
    fs.writeFileSync(outMinJs, updatedMin, 'utf8');
    console.log(`  ✓ Updated dist/flip.min.js (${(updatedMin.length / 1024).toFixed(1)} KB)`);
  }
}

function runBuild() {
  console.log('\n--- Building Time Utility Assets ---\n');
  buildStyles();
  buildScripts();
  console.log('\n✔ Build completed successfully!\n');
}

runBuild();
