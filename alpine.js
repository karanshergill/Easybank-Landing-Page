import Alpine from "alpinejs";
import { navItems } from "./data.js";

document.addEventListener('alpine:init', () => {
    // console.log('Alpine is initialized');

    Alpine.data('alpineData', () => ({
        navItems,
        isMobileMenuOpen: false
    }));
});

Alpine.start();