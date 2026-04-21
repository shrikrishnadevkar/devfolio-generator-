# 🚀 How to Deploy DevFolio.in

Since your app has a **Backend (for reading PDFs)** and a **Frontend (the website)**, there are two main ways to deploy it.

---

## Option 1: The Easiest Way (AI Studio Share)
Simply click the **"Share"** button in top right corner of AI Studio. 
- **Pros:** Instant, works exactly like it does now, backend is managed for you.
- **Cons:** Shared link starts with `ais-pre-...`

---

## Option 2: Deploying to Netlify
Netlify is great for the "Frontend" (the design), but needs a little extra help with the "Backend" (PDF parsing).

### Step 1: Download the Files
1. Click the **Settings (Gear Icon)** in the left sidebar.
2. Select **"Download ZIP"**.
3. Extract this ZIP folder on your computer.

### Step 2: Upload to GitHub
1. Create a new repository on [GitHub](https://github.com).
2. Upload all the extracted files to that repository.

### Step 3: Connect to Netlify
1. Go to [Netlify](https://app.netlify.com) and click **"Add new site"** -> **"Import an existing project"**.
2. Select your GitHub repository.
3. Netlify will automatically detect the settings:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. **Environment Variables (CRITICAL):**
   - Go to **Site Settings** -> **Environment Variables**.
   - Add a variable named `GEMINI_API_KEY` and paste your Gemini API key there.

> **Note:** Because Netlify is a "Static" host, the PDF parsing feature might need additional setup (Netlify Functions) if you want it to work exactly like the preview. For a full-stack Express server like yours, **Render.com** or **Cloud Run** are often easier.

---

## Option 3: Professional Deployment (Render / Railway / Cloud Run)
If you want the PDF Resume upload to work perfectly without extra configuration:
1. Upload your code to GitHub.
2. Go to [Render.com](https://render.com).
3. Connect your Repo and choose **"Web Service"**.
4. Use these settings:
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npx tsx server.ts`
5. Add your `GEMINI_API_KEY` in the Environment section.

---

### ✅ Ready to Go!
Check the QR code and contact number one last time to make sure they are correct in the source code!
