const http = require('http');
const fs = require('fs');
const path = require('path');

let port = parseInt(process.env.PORT, 10) || 3000;
const ROOT = path.resolve(__dirname);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm'
};

const SPA_ROUTES = new Set(['/', '/clock', '/timer', '/countdown', '/stopwatch']);

function createServer() {
  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];

    // If request contains /dist/ or /assets/, resolve directly to their root directory
    if (reqUrl.includes('/dist/')) {
      reqUrl = reqUrl.substring(reqUrl.indexOf('/dist/'));
    }
    if (reqUrl.includes('/assets/')) {
      reqUrl = reqUrl.substring(reqUrl.indexOf('/assets/'));
    }

    // Strip trailing slash if present (except root)
    if (reqUrl.length > 1 && reqUrl.endsWith('/')) {
      reqUrl = reqUrl.slice(0, -1);
    }

    // If requesting a known route or root, serve index.html
    if (SPA_ROUTES.has(reqUrl) || reqUrl === '') {
      reqUrl = '/index.html';
    }

    const safePath = path.normalize(reqUrl).replace(/^(\.\.[/\\])+/, '');
    const filePath = path.join(ROOT, safePath);

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        // Fallback for SPA routing when no extension is specified
        if (!path.extname(reqUrl)) {
          const indexPath = path.join(ROOT, 'index.html');
          res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
          });
          return fs.createReadStream(indexPath).pipe(res);
        }

        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      // Byte-range support for mobile video decoders (iOS Safari & Chrome)
      const range = req.headers.range;
      if (range && (ext === '.mp4' || ext === '.webm')) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
        const chunksize = end - start + 1;
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${stats.size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        return fs.createReadStream(filePath, { start, end }).pipe(res);
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': stats.size,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      });

      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      port++;
      server.listen(port, '0.0.0.0');
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(port, '0.0.0.0', () => {
    const os = require('os');
    const ifaces = os.networkInterfaces();
    const networkIps = [];
    for (const addrs of Object.values(ifaces)) {
      for (const addr of addrs || []) {
        if (addr.family === 'IPv4' && !addr.internal) {
          networkIps.push(addr.address);
        }
      }
    }

    console.log('\n  Time Utility - Made By SNishad\n');
    console.log(`  ➜  Local:   http://localhost:${port}/`);
    networkIps.forEach(ip => {
      console.log(`  ➜  Network: http://${ip}:${port}/`);
    });
    console.log('\n  Open the Network URL on your phone or other devices on the same Wi-Fi!\n');
  });
}

createServer();
