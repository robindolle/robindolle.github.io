// Media query event handler

if (matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addListener(colorSchemeChange);
    colorSchemeChange(mediaQuery);
}

function colorSchemeChange(mediaQuery) {
    if (window.localStorage && window.localStorage.getItem("theme")) {
        return;
    }

    var isDark = false;
    if (mediaQuery.matches) {
        var isDark = true;
    }

    document.body.classList.toggle("dark-theme", isDark);
    isDark ? metaThemeColor.setAttribute("content", "#252627") : metaThemeColor.setAttribute("content", "#fafafa");
}
