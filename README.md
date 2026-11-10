# Md Sazzad Hossain Minhaz — Portfolio

Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Motion · next-themes · Lucide + React Icons

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```
Requires Node.js 20+.

## Where to edit things
| What | File |
|---|---|
| Name, links, email, resume, tagline | `src/lib/site-config.ts` |
| Projects (add/edit) | `src/data/projects.ts` + screenshot in `public/images/` |
| Skills | `src/data/skills.ts` |
| Education & activities | `src/data/education.ts` |
| Colors / light & dark themes | `src/app/globals.css` (CSS variables) |
| Profile photo | replace `public/images/profile.webp` |

## Resume
Put your PDF at `public/resume/Sazzad-Hossain-Minhaz-CV.pdf`, then set `resume.available` to `true` in `src/lib/site-config.ts`.

## Contact form
By default the form opens the visitor's email app with the message pre-filled (no backend needed).
To send directly to your inbox: get a free key at https://web3forms.com and set `NEXT_PUBLIC_WEB3FORMS_KEY` (see `.env.example`).

## Case-study write-ups
Each project can have a "What I learned" section. Add `reflection: ["paragraph", ...]` to the project in `src/data/projects.ts` and it appears automatically.

## Deploy on Vercel
1. Push this folder to a new GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repo, keep the defaults, and click **Deploy**.
3. Optional: add `NEXT_PUBLIC_SITE_URL` (your final domain) and `NEXT_PUBLIC_WEB3FORMS_KEY` under Settings → Environment Variables, then redeploy.
