# Acdyon Frontend Challenge — DECISIONS.md

## 1. Why React + Vite + Tailwind CSS

React was the right choice because the core feature of this project — the CSV-to-dashboard transformation — requires local UI state. The upload flow has four distinct stages (idle, dragging, processing, done), each with different UI. Managing that with plain JavaScript would mean manual DOM manipulation, which is harder to reason about and maintain.

Vite was chosen over Create React App because its dev server is significantly faster. There is no meaningful downside for a project of this size.

Tailwind CSS was specified in the assignment. It suits this kind of project well because the design is systematic — a consistent set of spacing values, colors, and typography scales — and Tailwind enforces that consistency at the class level.

Framer Motion was used for exactly two animations: the CSV card sliding out and the dashboard sliding in. That is the only animation with genuine UX purpose. Everything else is a CSS transition.

## 2. Why this landing page concept

The assignment said "have fun with it." The most interesting thing a data analytics product can do on its own landing page is demonstrate itself. So the homepage does not describe the product — it runs it.

The interactive demo section is the product. A visitor uploads (or clicks), watches a four-step processing timeline, sees a live dashboard appear, and then reads AI-generated insights explaining what the data means. The copy is honest throughout: no fake testimonials, no inflated user counts, no pricing designed to create urgency.

## 3. Trade-offs made because of the time limit

The data is hardcoded. A real Acdyon would parse the actual CSV the user drops, run column-type inference, pick the right chart type, and compute real statistics. That would require a backend or a browser-side CSV parser. For this challenge, the demo simulates the experience with static data.

The bar chart is custom-built with CSS and React, not a charting library like Recharts or Chart.js. This was a deliberate decision — it is simpler to explain line by line, which matters when reviewers read the code with you.

## 4. What I would improve with one more week

- Parse the real CSV file using the `papaparse` library and render charts from the actual uploaded data
- Add a second chart type (line chart for time-series, pie chart for categorical columns)
- Add keyboard navigation to the drop zone (currently only mouse and touch)
- Run Lighthouse on the production build and address any remaining performance issues

## 5. Where AI helped

AI helped with the initial scaffold, component structure decisions, and debugging the drag-and-drop behaviour (the `dragCounter` pattern to prevent glow flickering when the cursor moves over child elements). The gradient text approach using inline `style` with `WebkitBackgroundClip` came from debugging why Tailwind's arbitrary value syntax was not rendering correctly in production.

## 6. What I personally verified or modified

- Tested the drag-and-drop on a real file dragged from Windows Explorer — the original `relatedTarget` approach did not work; replaced with the counter pattern
- Confirmed the bar chart bars were invisible in production (CSS height percentage issue with `items-end`) and fixed it by restructuring the flex container
- Read every component from top to bottom and could explain each line before submission
- Verified the build produces zero errors and zero warnings
