# Deployment Guide

## 🚀 Option 1: Deploy to Vercel (Recommended)

This is the easiest and most robust method. Vercel supports Next.js features (Auth, API Routes, Image Optimization) out of the box.

### 1. Push Code to GitHub

1. Create a repository on GitHub.
2. Push your `pulse-quick-next` code to it.

### 2. Import to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **"Add New..."** > **"Project"**.
3. Import your GitHub repository.

### 3. Configure Environment Variables

In the "Configure Project" screen, expand **"Environment Variables"** and add these from your `.env.local`:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `SANITY_API_TOKEN`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL` (Set this to your production domain, e.g., `https://pulsequik.com` - omit this if just testing on vercel.app initially, Vercel sets a default URL automatically but NextAuth needs the canonical one for production).

### 4. Deploy

Click **"Deploy"**. Vercel will build and serve your site automatically.

### 5. Point Hostinger Domain to Vercel

1. Log in to **Hostinger**.
2. Go to **Domains** > **DNS / Nameservers**.
3. Delete any existing **A records** for `@` and `www`.
4. Add the Vercel DNS records:
   - **Type**: `A`
   - **Name**: `@`
   - **Points to**: `76.76.21.21` (Vercel IP)
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Points to**: `cname.vercel-dns.com`

5. Back in **Vercel Project Settings** > **Domains**:
   - Add your custom domain (e.g., `pulsequik.com`).
   - Add the `www` version (`www.pulsequik.com`).
   - **Redirection**: Vercel will ask which one should be the "Canonical" (main) domain.
     - **Recommendation**: Set `pulsequik.com` as main. Vercel will automatically redirect `www.pulsequik.com` -> `pulsequik.com`.
     - _This improves SEO by preventing duplicate content._
   - Vercel will verify the DNS configuration. It might take up to 24h to propagate (usually minutes).

---

## 🛠 Option 2: Hostinger Node.js Hosting (Alternative)

Use this if you absolutely must host the app directly on Hostinger's servers.

### 1. Prepare Locally

1. Run `npm run build` locally to verify success.
2. **Zip** everything **EXCEPT**: `node_modules`, `.next`, `.git`.
   - **Include**: `package.json`, `next.config.ts`, `server.js` (see below), `src`, `public` (with `.htaccess`).

### 2. Configure Hostinger

1. **Websites** > **Manage** > **Node.js**.
2. **Create Application**:
   - Version: **v18** or **v20**.
   - Mode: **Production**.
   - Application Root: `public_html` (or subfolder).
   - Startup File: `server.js`.

### 3. Upload & Install

1. **File Manager**: Upload and extract your zip.
2. **Node.js Panel**: Click **"NPM Install"**.
3. **Environment**: Add variables (`NEXTAUTH_SECRET`, etc.) in the panel.

### 4. Custom Server File (`server.js`)

Create `server.js` in your app root to handle startup:

```javascript
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
```

### 5. Build & Start

1. **Build**: Run `npm run build` via SSH or "Run Command" (or upload local `.next` folder).
2. **Start**: Click "Restart" in the Node.js panel.
