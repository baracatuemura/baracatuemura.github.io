const puppeteer = require('puppeteer')
const { createServer } = require('http')
const { readFileSync, writeFileSync } = require('fs')
const { join, extname } = require('path')

const PORT = 4174
const DIST = join(__dirname, 'dist')

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
}

const server = createServer((req, res) => {
  const filePath = join(DIST, req.url === '/' ? 'index.html' : req.url)
  const ext = extname(filePath)
  try {
    const data = readFileSync(filePath)
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' })
    res.end(data)
  } catch {
    res.writeHead(404)
    res.end()
  }
})

server.listen(PORT, async () => {
  console.log(`Prerender server on http://localhost:${PORT}`)

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/google-chrome-stable',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()

  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' })
  const html = await page.content()

  writeFileSync(join(DIST, 'index.html'), html)
  console.log('Prerendered index.html written')

  await browser.close()
  server.close()
})
