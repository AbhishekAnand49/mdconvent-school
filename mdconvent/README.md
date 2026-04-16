# M.D Convent School — Next.js Website

A professional Next.js website for M.D Convent School, Rajendra Nagar, Patna.

## Pages
- `/` — Home (Hero, Why Choose Us, Gallery Preview, CTA)
- `/about` — About, Principal's Message, Milestones, Features
- `/academics` — All Classes (Play Group to Std. 8), Subjects
- `/gallery` — Full photo gallery
- `/contact` — Contact form (Formspree), School info

## Tracking
- **Google Analytics 4** — ID: `G-R0M486SJX8`
- **Microsoft Clarity** — Project ID: `w8kcjjf9t6`
- Both load via `next/script` with `strategy="afterInteractive"` for optimal performance

## Contact Form
- Powered by **Formspree** — endpoint: `https://formspree.io/f/mjgpzaqn`
- Submissions go directly to `mdconvent49@gmail.com`

---

## How to Deploy on Vercel

### Step 1 — Upload to GitHub
1. Create a new GitHub repository named `mdconvent-school`
2. Upload ALL files from this folder to the repository
3. Make sure the folder structure is maintained exactly as-is

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in
2. Click **"Add New Project"**
3. Select your `mdconvent-school` GitHub repository
4. Vercel will auto-detect it as a Next.js project
5. Leave all settings as default
6. Click **"Deploy"**

Your site will be live at: `https://mdconvent-school.vercel.app`

### Step 3 — Verify Tracking
- Visit your live site
- Check **Google Analytics → Realtime** for active users
- Check **Microsoft Clarity → Dashboard** for session recordings

---

## Local Development (optional)
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## School Info
- **Name:** M.D Convent School
- **Address:** Rajendra Nagar, Road No. 13-A, Patna – 800016
- **Email:** mdconvent49@gmail.com
- **Principal:** Awadh Kishor Prasad
- **Classes:** Play Group to Standard 8
- **Established:** 1981
