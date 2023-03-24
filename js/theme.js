/**
 * 动态主题
 */
(function () {
    function updateTheme() {
        if (window.location.hash !== '') {
            var themeString = window.location.hash.substring(1);
            if (themeString === 'theme-light' || themeString === 'theme-dark') {
                document.body.className = themeString;
            }
        }
    }

    window.addEventListener('hashchange', updateTheme, false);
    updateTheme();
})();
