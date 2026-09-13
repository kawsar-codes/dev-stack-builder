# Build steps — prompts and commits

Give ONE prompt at a time to Claude in VS Code. After each step: check the site in the
browser, then run that step's commit commands, then move to the next step.

---

## Step 1 — Navbar

**Prompt**

> Read CLAUDE.md and docs/ASSIGNMENT.md, then look at docs/ui/full-page-design.png.
> Build the Navbar component. On desktop: brand logo + "Dev Stack" name on the left, nav links
> (Home, Technologies, Projects, About, Contact) in the center, "Sign In" text button and
> "Sign Up" filled pill button on the right. On mobile: hamburger icon on the left, brand logo
> in the center, both buttons on the right. The navbar must stay sticky at the top while
> scrolling. Use the brand-gradient utilities for the logo badge and the Sign Up button.
> Explain in Bangla what you are going to do before writing the code.

**Commit**

```bash
git add -A
git commit -m "feat: add sticky navbar with responsive mobile menu"
git push
```

---

## Step 2 — Hero / banner

**Prompt**

> Now build the Hero section, matching docs/ui/full-page-design.png. It needs a two-tone
> heading ("Build Your Ideal" in plain dark text, "Development Stack" using the
> brand-gradient-text utility), a description paragraph, two buttons ("Explore Technologies"
> with the gradient background and "Learn More" outlined), and the illustration at
> public/hero-image.png on the right. Stack it into one column on mobile.
> Explain your plan in Bangla first.

**Commit**

```bash
git add -A
git commit -m "feat: add hero section with gradient heading and call-to-action buttons"
git push
```

---

## Step 3 — Technology cards + JSON loading

**Prompt**

> Now load the technology data and render the cards. Create the TypeScript types in
> src/types.ts, then fetch '/technologies.json' inside useEffect (do not import the JSON as a
> module and do not hardcode the array). Show a loading state while the data is being fetched.
> Render the technologies in a responsive grid: 3 columns on desktop, 2 on tablet, 1 on mobile.
> Each card shows the icon, badge, name, description, category chip, difficulty, rating with a
> star, and an "Add to Stack" button (not wired up yet). Match docs/ui/full-page-design.png.
> Explain useEffect and the loading state in Bangla as you go.

**Commit**

```bash
git add -A
git commit -m "feat: load technologies from JSON and render responsive card grid"
git push
```

---

## Step 4 — Your Stack panel

**Prompt**

> Now build the "Your Stack" sidebar panel that sits beside the card grid. When nothing is
> selected it shows the empty state from docs/ui/your-stack-empty.png. When technologies are
> selected it shows the count ("2 Technology Selected") and one item per row with icon, name,
> category and an X remove button, plus a "Remove All" button — match
> docs/ui/your-stack-with-items.png. Keep the selected technologies in state in the parent
> component and pass them down as props. Explain in Bangla how the state lives in the parent
> and flows down to the children.

**Commit**

```bash
git add -A
git commit -m "feat: add Your Stack sidebar panel with empty and filled states"
git push
```

---

## Step 5 — Add / remove logic + toasts

**Prompt**

> Now wire up the stack functionality. Clicking "Add to Stack" adds that technology to the
> stack. The same technology can never be added twice — a second attempt shows a warning.
> Once a technology is added, its card button becomes disabled and reads "Added to Stack".
> The X button removes only that one item, and "Remove All" clears everything.
> Use react-toastify for the alerts on add, duplicate attempt, remove, and remove all.
> Explain in Bangla how the child sends the selected technology back up to the parent.

**Commit**

```bash
git add -A
git commit -m "feat: add stack add, duplicate guard, remove and remove-all with toasts"
git push
```

---

## Step 6 — Footer

**Prompt**

> Now build the Footer, matching docs/ui/full-page-design.png. It needs a brand block (logo,
> name, short description, and GitHub / Twitter / LinkedIn links), three link groups
> (Product, Company, Legal), and a bottom bar with the copyright text plus Privacy and Terms
> links. Use real, meaningful text — no placeholder text anywhere.

**Commit**

```bash
git add -A
git commit -m "feat: add footer with brand block and link groups"
git push
```

---

## Step 7 — Responsive check and polish

**Prompt**

> Now check the whole site at mobile (375px), tablet (768px) and desktop (1440px) widths and
> fix any responsive problems — overflow, cramped spacing, text that is too large, grids that
> do not collapse. Compare against docs/ui/full-page-design.png. Also make sure the page title
> and favicon are right, and that there is no leftover placeholder text anywhere.

**Commit**

```bash
git add -A
git commit -m "style: polish responsive layout across mobile, tablet and desktop"
git push
```

---

## Step 8 — README answers (write these yourself)

The 7 React questions at the bottom of README.md still say `_To be written._`.
Answer them in your own words — short and simple. If a question is unclear, ask Claude to
explain the concept in Bangla, then write the answer yourself.

**Commit**

```bash
git add -A
git commit -m "docs: answer React concept questions in README"
git push
```

---

## Step 9 — Deploy

**Prompt**

> Help me deploy this site to Netlify. Tell me exactly what to click and what settings to use
> for a Vite React project.

Then put the live URL into the "Live Site" section of README.md.

**Commit**

```bash
git add -A
git commit -m "docs: add live site link to README"
git push
```

---

## Submission

- GitHub repository: https://github.com/kawsar-codes/dev-stack-builder
- Live site: (add after deploying)
