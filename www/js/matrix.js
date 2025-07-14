const canvas = document.getElementById('matrix')
const ctx = canvas.getContext('2d')

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}
window.addEventListener('resize', resizeCanvas)
resizeCanvas()

const chars = "" +
    "甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥木火土金水" +
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
    "０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ" +
    " ▲△▶▷▼▽◀◁█★☆←↑→↓↖↗↘↙☹☺☻♠♡♢♣♤♥♦♧"
const fontSize = 24
const columns = Math.floor(canvas.width / fontSize)
const drops = []

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100
}

function render() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#3aff33'
    ctx.font = `${fontSize}px ark-pixel-12-monospaced-zh_cn, monospace`

    for (let i = 0; i < drops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
        }
        drops[i] += 1
    }
}
setInterval(render, 20)
