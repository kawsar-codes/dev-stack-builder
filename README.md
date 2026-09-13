# Dev Stack Builder

A single-page React application that lets developers explore frontend, backend, database, language, styling and DevOps technologies, compare them side by side, and assemble their own ideal development stack.

Technology data is loaded from a local JSON file (not hardcoded), and every selection is managed in React state — pick the tools you like, see them collect in the **Your Stack** panel, and remove them one by one or all at once.

## Live Site

https://dev-stack-builder-beta.vercel.app

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

JSX is a syntax that looks like HTML but is written inside JavaScript. The browser cannot read JSX directly, so it is converted into normal JavaScript at build time. I use it because it makes the code clearer — you can look at the code and see what the UI will look like.

**2. What is the difference between props and state?**

Props are data sent from a parent component down to a child component. They are immutable, so the component that receives them cannot change them. State is a component's own internal data. It is mutable, the component can change it itself, and whenever state changes the component re-renders.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` holds data inside a component that is allowed to change, and when that data changes the UI updates with it. In this project I used it in `TechnologiesSection.tsx` to track and update `selectedStack`, the list of technologies the user has chosen.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs a side effect after the component has rendered, or after one of its dependencies changes. `fetch` is an asynchronous outside job, so calling it directly inside render would run it again on every render and create an infinite loop. I used it in `TechnologyGrid.tsx` to fetch the technology data safely.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses `key` to tell each item of a dynamic list apart. Without a key, or with keys that are not unique, React can update the wrong item when the list changes — when something is added, removed, or reordered. In my card grid I used `technology.id`, which is unique for every technology.

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different UI on the screen depending on a condition. In `YourStack.tsx` I used it to show the "Your stack is empty." message when nothing is selected, and the list of selected items when the stack is not empty.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child through props. A child cannot hand data back directly, so the parent passes a callback function to it as a prop and the child calls that function with the data as an argument. In my project `TechnologiesSection` passes `onAdd` to the card; when the card's button is clicked the card calls `onAdd(technology)`, and that updates the parent's state.

---

Built by [Kawsar Akando](https://github.com/kawsar-codes)
