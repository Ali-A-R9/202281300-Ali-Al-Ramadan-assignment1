# Technical Documentation (Assignment 1)

## Overview

This project is a responsive personal portfolio website built using HTML, CSS, and JavaScript. It serves as the foundation for a larger portfolio that will be expanded in future assignments.

---

## Folder Structure

- `index.html` – Main page layout and content sections
- `css/styles.css` – Styling, responsive layout, theme variables
- `js/script.js` – Interactivity (theme toggle, greeting message, form feedback)
- `assets/images/` – Profile image and icons
- `docs/` – AI usage report and technical documentation

---

## Features Implemented

### Required Sections

- **About Me**  
  Includes a short introduction and profile image.

- **Projects**  
  Two project cards containing title, description, and GitHub links.

- **Contact**  
  Form with Name, Email, and Message fields (no backend connection).

---

## Responsive Design

- CSS Grid is used for layout structure.
- Flexbox is used for header alignment and navigation.
- A media query adjusts layout for screens smaller than 768px.
- About section stacks vertically on mobile devices.

---

## JavaScript Interactivity

- Theme toggle (Light/Dark mode)
- Theme preference stored using `localStorage`
- Greeting message displayed dynamically
- Contact form demo submission message (no backend)

---

## Accessibility Considerations

- Semantic HTML elements (`header`, `main`, `section`, `footer`)
- Proper `<label>` elements for all form inputs
- `aria-live="polite"` for form submission feedback
- Skip-to-content link for keyboard navigation
- Visible focus styles on form inputs

---

## Testing

- Tested using browser resizing
- Tested with DevTools device toolbar
- Verified theme persistence across page reload
- Checked navigation links and form behavior

---

## Known Limitations (Assignment 1 Scope)

- No backend functionality (form does not send emails)
- Projects link externally to GitHub repositories
- Advanced animations and APIs will be added in future assignments
