# Music App (React + Vite)

Simple music player web app built with React and Vite. This README documents the tech stack, setup, available scripts, and contributor information.

## Project summary
- A lightweight music player UI with song list, search, like and playlist features.
- Uses local audio assets located in `src/assets` and a small in-memory songs catalog in `src/songs.js`.

## Tech stack
- Framework: React (v19)
- Bundler / Dev server: Vite
- Styling: Tailwind CSS
- State management: Redux Toolkit (for liked and playlist slices)
- Icons: react-icons
- Linting: ESLint
- Build & dev tools: Node.js / npm, PostCSS

## Files of interest
- `src/components/` — UI components (`Card.jsx`, `Player.jsx`, `Nav.jsx`, `Footer.jsx`)
- `src/pages/` — app pages (`Home.jsx`, `Search.jsx`, `Playlist.jsx`, `Liked.jsx`)
- `src/context/` — React context for player state (`UserContext.jsx`, `ActivePageContext.jsx`)
- `src/redux/` — Redux store and slices (`store.js`, `LikedSlice.js`, `PlaylistSlice.js`)
- `src/songs.js` — song metadata and imports for audio/image assets

## Setup & run
1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Available scripts (from `package.json`)
- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — preview production build
- `lint` — run ESLint

## Notes & development tips
- Tailwind classes are used directly in JSX; if you change class names, ensure they are whitelisted by your Tailwind config when enabling purge/JIT.
- Recently-played songs and player state are managed in `src/context/UserContext.jsx`. Redux is used for playlist/liked features.
- Audio files are referenced from `src/assets` and imported in `src/songs.js`.

## Author / Maintainer
- Name: Rahul
- Contact: (add your email or link if you want it listed)

## License
- This project does not include a license file. Add one if you intend to publish or share the project.
