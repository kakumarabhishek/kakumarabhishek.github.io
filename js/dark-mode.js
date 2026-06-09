(() => {
    // --- Constants ---
    const THEME_KEY = 'themePreference';
    const DARK_THEME = 'dark';
    const LIGHT_THEME = 'light';
    const DARK_ICON_SRC = 'data/icons/dark-mode-icon.svg'; // Moon
    const LIGHT_ICON_SRC = 'data/icons/light-mode-icon.svg'; // Sun

    // --- DOM Elements ---
    const toggleButton = document.getElementById('dark-mode-toggle');
    const toggleIcon = document.getElementById('dark-mode-icon');
    // Target <html> tag for the data-theme attribute for higher specificity
    const htmlElement = document.documentElement;

    // --- Helper Functions ---
    const applyTheme = (theme) => {
        if (theme === DARK_THEME) {
            htmlElement.setAttribute('data-theme', DARK_THEME);
            if (toggleIcon) {
                toggleIcon.src = LIGHT_ICON_SRC;
                toggleIcon.alt = "Light mode";
            }
        } else {
            htmlElement.removeAttribute('data-theme');
            if (toggleIcon) {
                toggleIcon.src = DARK_ICON_SRC;
                toggleIcon.alt = "Dark mode";
            }
        }
    };

    const saveThemePreference = (theme) => {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (e) {
            console.error("Could not save theme preference to localStorage:", e);
        }
    };

    const getThemePreference = () => {
        // 1. Check localStorage
        try {
            const savedTheme = localStorage.getItem(THEME_KEY);
            if (savedTheme === DARK_THEME || savedTheme === LIGHT_THEME) {
                return savedTheme;
            }
        } catch (e) {
            console.error("Could not read theme preference from localStorage:", e);
        }

        // 2. Check OS preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return DARK_THEME;
        }

        // 3. Default to light
        return LIGHT_THEME;
    };

    // --- Event Listener ---
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            // Check theme based on attribute on <html> tag
            const currentTheme = htmlElement.hasAttribute('data-theme') ? DARK_THEME : LIGHT_THEME;
            const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
            applyTheme(newTheme);
            saveThemePreference(newTheme);
        });
    } else {
        console.error("Dark mode toggle button not found.");
    }

    // --- Initial Load ---
    // Apply theme immediately to avoid flash of unstyled content (FOUC)
    const initialTheme = getThemePreference();
    applyTheme(initialTheme);

})(); // IIFE to avoid polluting global scope