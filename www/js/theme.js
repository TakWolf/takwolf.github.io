
function applyTheme(theme) {
    let bodyClassName
    let matrixDisplay
    if (theme === 'dark') {
        bodyClassName = 'theme-dark'
        matrixDisplay = 'block'
        window.resetMatrix()
    } else {
        bodyClassName = 'theme-light'
        matrixDisplay = 'none'
    }
    document.body.className = bodyClassName
    document.getElementById('matrix').style.display = matrixDisplay
}

applyTheme(localStorage.getItem('config:theme'))

window.onThemeChange = theme => {
    localStorage.setItem('config:theme', theme)
    applyTheme(theme)
}
