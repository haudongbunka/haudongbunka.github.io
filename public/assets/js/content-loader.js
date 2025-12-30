// assets/js/classes/ContentLoader.js
export class ContentLoader {
    constructor(basePath = './assets/text/') {
        this.basePath = basePath;
    }

    async inject(fileName, target) {
        // 1. Determine if 'target' is a text selector string or an actual HTML element
        const element = (typeof target === 'string') 
            ? document.querySelector(target) 
            : target;

        if (!element) {
            console.warn(`ContentLoader: Target element not found for ${fileName}`);
            return;
        }

        try {
            const response = await fetch(this.basePath + fileName);
            if (!response.ok) throw new Error(`File not found`);
            
            const text = await response.text();
            element.innerText = text; // Or innerHTML if you need formatting
            
            // Optional: Remove the attribute so it looks clean in DevTools
            element.removeAttribute('data-source'); 
            
        } catch (error) {
            console.error(error);
            element.innerText = "[Content failed to load]";
        }
    }
}