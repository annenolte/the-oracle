# The Oracle

**Live site:** https://the-oracle-pi.vercel.app

**Ancient wisdom for the modern age.**

A full-stack web app where users chat with mythological figures who give wisdom and advice through the lens of their ancient persona. Built for the "Myths and Legends: Ancient stories, modern technology" hackathon.

## Characters

- **Athena** — Goddess of wisdom and strategy (Greek)
- **Odysseus** — The cunning wanderer (Greek)
- **Odin** — The Allfather who sacrificed all for wisdom (Norse)
- **Loki** — The trickster who sees all angles (Norse)
- **Thoth** — God of knowledge, writing, and the moon (Egyptian)
- **Isis** — Goddess of magic and healing (Egyptian)
- **Sun Wukong** — The Monkey King who defied heaven (East Asian)
- **Guanyin** — Bodhisattva of infinite compassion (East Asian)

## Tech Stack

- **Frontend**: React (Vite) + Tailwind CSS + Framer Motion
- **Backend**: Python (FastAPI)
- **AI**: Google Gemini API (gemini-2.5-flash, free tier)
- **Auth & Database**: Supabase (PostgreSQL + Auth)

## Setup

### 1. Supabase

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the migration in `supabase/migrations/001_initial_schema.sql`
3. Enable Email/Password auth in Authentication → Providers
4. Copy your project URL and anon key from Settings → API

### 2. Gemini API Key

1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Create a free API key (no credit card needed)

### 3. Environment Variables

Backend (`backend/.env`):
```
GEMINI_API_KEY=your-key-here
```

Frontend (`frontend/.env`):
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Run

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173` with the API proxied to `http://localhost:8000`.

## Screenshots

*Coming soon*
