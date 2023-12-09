// Media query event handler

if (window.matchMedia) {
    var mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener('change', updateColorScheme);

    updateColorScheme(mediaQuery);
}

function updateColorScheme(mediaQuery) {
    var colorScheme = "light";
    if (window.localStorage && window.localStorage.getItem("theme")) {
        colorScheme = window.localStorage.getItem("theme");
    } else if (mediaQuery.matches) {
        colorScheme = "dark";
    }

    var html = document.querySelector("html")
    html.setAttribute("dark-theme", colorScheme);
}
