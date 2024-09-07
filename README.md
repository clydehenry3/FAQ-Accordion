# Frontend Mentor - FAQ Accordion Solution

This is a solution to the [FAQ Accordion Card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XyTwzRynl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the FAQ card depending on their device's screen size.
- Toggle between hiding and showing the answer to each FAQ.
- See hover states for all interactive elements on the page.

### Screenshot

![FAQ Accordion Card Screenshot](/FAQ%20Screenshot.png)

### Links

- Live Site URL: [Live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript for interactivity
- Mobile-first workflow

### What I learned

While working on this project, I improved my understanding of JavaScript event handling and DOM manipulation. The ability to expand and collapse FAQ items smoothly was a key feature, and I utilized CSS transitions for this purpose.

```js
const toggleFaq = (faq) => {
  faq.classList.toggle("active");
};
```

I also focused on using Flexbox to ensure the layout remained responsive across devices.

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

### Continued development

For future projects, I want to refine my knowledge of accessibility features, especially in interactive components like accordions. I plan to explore more advanced JavaScript concepts and use ARIA attributes for improved accessibility.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - This is a comprehensive resource that helped me better understand JavaScript and CSS Flexbox.
- [W3Schools](https://www.w3schools.com/) - I often referred to their documentation for CSS and HTML tips.
