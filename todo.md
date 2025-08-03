configure router with following links: home, cards, payments, credit, setting on side navigation. Side nav will be fixed on left and contet of active route shoulb be rendered on right and can be verically scrolled if needed but there shouldn't be page level scroll. create an empty component for cards nav only and by default selected other route should be disabled

Task: Configure routing and layout for a web application with a fixed side navigation.

Requirements:

Routes:

Set up the following routes: home, cards, payments, credit, and settings.

Only the cards route should be enabled and selectable by default. All other routes should be disabled (non-clickable).

Layout:

Implement a fixed side navigation on the left side of the screen.

The right side should display the content of the active route.

The route content area should be vertically scrollable if needed.

Ensure no page-level (body) scrolling occurs; only the route content should scroll.

Component Setup:

Create an empty CardsComponent for the cards route.

Use basic styles only — no need for polished UI.

Task: Refactor the React project for better structure and code clarity.

Refactoring Requirements:

Component Naming:

Rename the SideNavigation component to Navigation.

Configuration:

Move the navItems array to a separate config file (e.g., navConfig.ts).

Project Structure:

Place each component in its own dedicated folder.

Use the component’s original file name (e.g., Cards.tsx, Navigation.tsx) instead of using index.tsx.

Code Style:

Avoid using React.FC — use standard function component syntax instead:

display logos as well with names in nav which are placed in assets folder

Create a CreditCards component that displays a credit card carousel as shown in the attached image. Below the carousel, add dot indicators. Clicking on a dot should display the corresponding card in the carousel.
