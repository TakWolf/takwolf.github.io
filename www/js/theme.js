
function applyTheme(theme) {
    let className
    if (theme === 'dark') {
        className = 'theme-dark'
    } else {
        className = 'theme-light'
    }
    document.body.className = className
}

applyTheme(localStorage.getItem('config:theme'))

window.onThemeChange = theme => {
    localStorage.setItem('config:theme', theme)
    applyTheme(theme)
}
