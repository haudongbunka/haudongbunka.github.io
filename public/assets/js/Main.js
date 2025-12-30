// assets/js/main.js
import { ContentLoader } from '../js/content-loader.js';

const loader = new ContentLoader();

// ---------------------------------------------------------
// The Auto-Pilot Logic
// ---------------------------------------------------------

// 1. Find every single element that has a "data-source" attribute
const dynamicElements = document.querySelectorAll('[data-source]');

// 2. Loop through them and tell the loader to get to work
dynamicElements.forEach(element => {
    const fileName = element.getAttribute('data-source');
    loader.inject(fileName, element);
});