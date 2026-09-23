
# AI Smart Task Optimizer — Client

The React frontend for [AI Smart Task Optimizer](#) — an AI-powered to-do app that breaks a plainly-written task into an ordered checklist of sub-steps with time estimates.

> Type: *"I need to prepare for my Rails interview on Friday"*
> Get back: a numbered, time-estimated plan you can check off as you go.

API repo: [https://github.com/KipletingEdwin/AI-Smart-Task-Optimizer-Server]

## Tech stack

- React (Vite)
- Tailwind CSS v4
- React Router
- Axios
- Lucide React (icons)

## Features

- **Public homepage** with a live-typing, canned demo of the AI breakdown — no signup needed to see how it works
- **JWT-based auth** — signup/login, token persisted and attached automatically to every request via an Axios interceptor
- **Protected dashboard** — task input, AI-generated sub-task checklist, completion toggling, task deletion
- **Global 401 handling** — an expired/invalid token automatically clears and redirects to login, with no per-component logic needed

## Project structure

```
src/
├── api/            # axios instance + endpoint wrappers (authApi, taskApi)
├── components/
│   ├── tasks/      # TaskInput, TaskCard, SubtaskItem, DemoPreview
│   └── ui/         # shared UI primitives
├── context/        # AuthContext — global auth state
├── hooks/          # useTasks — centralizes task state + API calls
└── pages/          # HomePage, LoginPage, SignupPage, DashboardPage
```

## Why this architecture

- **All API calls are isolated in `api/`.** Components import named functions like `createTaskFromAI(title)` and never deal with URLs, headers, or axios directly — if the API shape changes, there's one place to update.
- **The Axios interceptor handles auth globally.** The JWT is attached to every outgoing request automatically, and a `401` response anywhere in the app triggers an automatic logout + redirect — no component needs its own auth-expiry logic.
- **`useTasks` centralizes state instead of scattering `useEffect` calls.** Task fetching, creation, deletion, and toggling all live in one hook, keeping components focused on rendering rather than data-fetching logic.
- **The homepage demo is a real component, not a screenshot.** `DemoPreview` uses the same visual language (timeline-style sub-tasks) as the authenticated dashboard, so what a visitor sees before signing up is an honest preview of the real product, not marketing copy.

## Getting started

### Prerequisites
- Node.js
- The [API](#) running locally (or deployed)

### Setup

```bash
npm install
```

Create a `.env` file:
```
VITE_API_URL=http://localhost:3000/api/v1
```

Start the dev server:
```bash
npm run dev
```

Visit `http://localhost:5173`.

## Roadmap

- [ ] Deployment (Vercel/Netlify)
- [ ] Loading skeletons for task fetch

## License

MIT