# DeepSkills Complete React Website Structure

This is a React + Vite + React Router starter for the DeepSkills website.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Structure

- `src/components/Layout.jsx` — common page layout
- `src/components/Navbar.jsx` — same navbar on every page
- `src/components/Footer.jsx` — same footer on every page
- `src/pages/` — all website pages
- `src/styles/global.css` — shared styles
- `src/App.jsx` — all routes

## Dropdown behavior

Desktop:
- About, Courses and Certificate open on mouse hover.
- Moving the mouse away closes the dropdown.
- Clicking a dropdown item navigates to its page.

Mobile:
- Hamburger opens the full mobile navigation.
- Dropdown buttons open/close on click.
- Every dropdown item is a real React Router link.
- Selecting a page closes the mobile menu.

## Important

Replace the placeholder logo/map/social links with your actual assets and URLs.
