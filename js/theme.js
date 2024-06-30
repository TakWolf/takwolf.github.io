
function applyTheme(theme) {
    let className
    if (theme === 'dark') {
        className = 'theme-dark'
    } else {
        className = 'theme-light'
    }
    document.body.className = className
}

function onThemeChange(theme) {
    localStorage.setItem('config:theme', theme)
    applyTheme(theme)
}

(function () {
    let theme = localStorage.getItem('config:theme')
    applyTheme(theme)
})()
