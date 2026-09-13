# Dev Stack Builder

A single-page React application that lets developers explore frontend, backend, database, language, styling and DevOps technologies, compare them side by side, and assemble their own ideal development stack.

Technology data is loaded from a local JSON file (not hardcoded), and every selection is managed in React state — pick the tools you like, see them collect in the **Your Stack** panel, and remove them one by one or all at once.

## Live Site

Coming soon.

## Technologies Used

- **React.js** — component-based UI
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **React Toastify** — toast notifications
- **JSON** — technology data source

## Features

1. **Explore technologies from JSON data** — 12 technologies are loaded from a local JSON file with `useEffect`, each shown on a card with its icon, badge, category, difficulty level and rating.
2. **Build your own stack** — clicking *Add to Stack* moves a technology into the Your Stack panel; the same technology cannot be added twice, and the card's button becomes disabled once it is selected.
3. **Remove one or remove all** — every stack item has its own remove button, and a single *Remove All* button clears the whole stack, with a toast notification confirming each action.

## Getting Started

```bash
npm install
npm run dev
```

## React Questions

**1. What is JSX, and why is it used in React?**

_To be written._

**2. What is the difference between props and state?**

_To be written._

**3. What does the `useState` hook do, and where did you use it in this project?**

_To be written._

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

_To be written._

**5. Why does every item in a `.map()` list need a unique `key` prop?**

_To be written._

**6. What is conditional rendering? Show one place you used it.**

_To be written._

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

_To be written._

---

Built by [Kawsar Akando](https://github.com/kawsar-codes)
