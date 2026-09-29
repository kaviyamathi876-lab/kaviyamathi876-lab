# Kaviya M — Personal Portfolio & ProtoSem Learning Log

> **"Politics, People & Purpose — Building Ideas That Matter."**  
> Portfolio website for **Kaviya M**, B.A. Political Science student at Kumaraguru College of Liberal Arts and Sciences (KCLAS) and ProtoSem Innovation Fellow at Forge.

---

## 🧭 Project Overview & Architecture

This website is built with **Vite + React + TypeScript + Tailwind CSS** using a data-driven architecture.
All user content, achievements, dates, experiences, and configurations reside inside `src/data/` files and `public/` directories. **You never have to hunt inside React components to update your content.**

---

## 📁 Quick Content Customization Guide

| Item to Change | File / Location | Notes / How to Edit |
| :--- | :--- | :--- |
| **Profile Photo** | `public/images/profile.jpg` | Replace this file with your professional portrait (JPG or PNG). If deleted or missing, an elegant placeholder prompt is displayed automatically. |
| **ATS Resume PDF** | `public/resume/Kaviya-M-ATS-Resume.pdf` | Replace this file with your updated resume PDF. The **View ATS Resume** button in the Hero section and Navbar links directly to this file. |
| **Basic Info & Links** | `src/data/site.ts` | Edit your full name, tagline, intro summary, email, college, location, social profile URLs (LinkedIn, GitHub), and contact form action URL. |
| **About Section** | `src/data/about.ts` | Update degree, college, bio statement, career goals, motivation statements, core interest tags, and key strength chips. |
| **Skills** | `src/data/skills.ts` | Edit skill categories and add/remove skills without progress bars or fake percentages. |
| **Club & Internship** | `src/data/experiences.ts` | Update IGNITE club role, duration, activities, contributions, and the 21-day MLA Internship details (activities & key learnings). |
| **ProtoSem (20 Weeks)** | `src/data/protosem.ts` | Update any week (`week-00` to `week-19`) with your real learning milestones: title, date, what you learned, exercises, challenges, photos, and personal reflections. |
| **Projects** | `src/data/projects.ts` | Update the 3 project cards with title, description, problem statement, solution, tools used, and demo / GitHub links. |
| **Certifications** | `src/data/certifications.ts` | Add earned certificates or toggle the entire section on/off with `enabled: true / false`. |

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn or pnpm

### Installation & Development Server
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev
```

Open your browser at `http://localhost:3000` (or the URL printed in the terminal).

### Production Build
```bash
# Build production bundle with TypeScript checking
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Deployment Instructions

### 1. Vercel
1. Push your repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**. Since the site uses `HashRouter`, all deep routes like `#/protosem/week-05` work out of the box with zero 404 configuration required.

### 2. Netlify
1. Connect your repository on Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy Site**.

### 3. GitHub Pages
1. In `vite.config.ts`, if deploying to a repository subpath (e.g., `https://username.github.io/MyPortfolio/`), set:
   ```ts
   export default defineConfig({
     base: './', // or '/MyPortfolio/'
     plugins: [react()],
   });
   ```
2. Build and push the `dist/` directory or set up GitHub Actions to deploy automatically.

---

## ⚙️ How to Toggle or Remove Optional Sections

### Certifications Section:
- To hide the Certifications section and its link from the navbar, open `src/data/certifications.ts` and set:
  ```ts
  export const certificationsConfig = {
    enabled: false, // <-- Set to false
    ...
  };
  ```
- To show it again once credentials are earned, set `enabled: true`.

### Contact Form Action (Formspree or Backend):
- Open `src/data/site.ts` and update `contactFormActionUrl`:
  ```ts
  contactFormActionUrl: "https://formspree.io/f/your-form-id",
  ```
- If left empty, the contact form automatically uses a safe `mailto:` fallback that opens the user's default email client with the message pre-filled.

---

## ⚖️ License & Copyright
© 2026 Kaviya M. All rights reserved.
