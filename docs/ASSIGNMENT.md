# A-5 Dev Stack Builder Website — assignment requirements

## Key rules
- No lorem ipsum — use relevant, meaningful text content.
- Colors may be changed, but must stay tasteful and relevant to the project.
- At least 8 git commits with meaningful messages.

## Features & requirements (50 marks)

### Navbar
- Designed according to the UI.
- Left: brand logo + "Dev Stack" name.
- Center: nav links — Home, Technologies, Projects, About, Contact.
- Right: "Sign In" (text button) and "Sign Up" (filled pill button).
- Stays sticky at the top while scrolling.

### Mobile navbar
On small devices the navbar has three parts:
- Left: hamburger menu icon
- Center: brand logo
- Right: Sign In and Sign Up buttons

### Banner / hero
- Heading in two tones: plain text + gradient text
- Description text
- Two buttons — "Explore Technologies" (gradient) and "Learn More" (outlined)
- Banner image

### JSON data
10-15 technologies, each with: id, name, category (Frontend / Backend / Database / Language /
Styling / DevOps / Tools), description, icon (image URL), rating (e.g. 4.8), difficulty
(Beginner-Friendly / Intermediate / Advanced), badge (e.g. Popular, Fast, Essential, Containers).

Load the data from the JSON file — do not hardcode the array inside the component.

### Technology cards
- 3-column layout on desktop, 2 on tablet, 1 on mobile.
- Each card shows: icon, badge, name, description, category chip, difficulty, rating with a star,
  and an "Add to Stack" button.

### Your Stack section (sidebar)
- A "Your Stack" panel beside the technology grid.
- Shows a heading and the selected count — e.g. "2 Technology Selected".
- By default shows an empty message ("Your stack is empty.").

### Add to Stack functionality
- Clicking "Add to Stack" adds that technology to the Your Stack panel.
- Each stack item shows: icon, name, category, and a remove (X) button.
- Stack layout is a single column.
- The same technology cannot be added twice — trying again shows a warning alert.
- Once added, that card's button becomes disabled and reads "Added to Stack".

### Remove functionality
- The X button on a stack item removes only that item.
- A "Remove All" button clears the whole stack at once.

### Footer
- Brand block: logo, name, short description, social links (GitHub, Twitter, LinkedIn).
- Three link groups: Product, Company, Legal.
- Bottom bar: copyright text + Privacy and Terms links.

### Responsive design
Fully responsive across mobile, tablet and desktop.

## Challenges part (10 marks)

### React-Toastify
Use react-toastify for alerts on: add to stack, duplicate add attempt, remove, and remove all.

### Loading state
Show a loading message or spinner while the JSON data is being fetched. Because the JSON is a
local file the spinner may only flash for a few milliseconds — that is fine, the requirement is
that the loading state exists and works.

### Gradient brand theme
Use one shared gradient (orange -> pink -> violet) for the brand name, the hero heading
highlight, and primary buttons. Define the gradient in one place so the whole UI can be
re-themed by changing a single value.

### GitHub repository
A good README containing: project name, a short description, technologies used, and 3 features.
Then answer these React questions at the end of the README, in your own words, short and simple:

1. What is JSX, and why is it used in React?
2. What is the difference between props and state?
3. What does the `useState` hook do, and where did you use it in this project?
4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
5. Why does every item in a `.map()` list need a unique `key` prop?
6. What is conditional rendering? Show one place you used it (example: the empty stack message).
7. How do you pass data from a parent component to a child component, and how does a child send
   something back to the parent?

## Allowed technology
React.js · Tailwind CSS, daisyUI · TypeScript / JavaScript (ES6+) · React-Toastify · JSON · Vite

## What to submit
- GitHub repository link
- Live site link
