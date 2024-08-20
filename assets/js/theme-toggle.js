document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.getElementById('themeSwitcher');
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
        document.documentElement.setAttribute('color-scheme', storedTheme);
    } 
    // else {
    //     document.documentElement.setAttribute('color-scheme', prefersDarkScheme ? 'dark' : 'light');
    // }

    themeSwitcher.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('color-scheme');
        if (theme === 'light') {
            theme = 'dark';
        } else {
            theme = 'light';
        }
        document.documentElement.setAttribute('color-scheme', theme);
        localStorage.setItem('theme', theme);
    });
});
