const canvas = document.getElementById('matrix')
const ctx = canvas.getContext('2d')

const chars = "" +
    "甲乙丙丁戊己庚辛壬癸子丑寅卯辰巳午未申酉戌亥木火土金水" +
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン" +
    "ㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣㅤㅥㅦㅧㅨㅩㅪㅫㅬㅭㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆㆇㆈㆉㆊㆋㆌ" +
    "０１２３４５６７８９ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ" +
    "▲△▶▷▼▽◀◁█★☆←↑→↓↖↗↘↙☹☺☻♠♡♢♣♤♥♦♧"
const fontSize = 24
const yOffset = 20

const positions = []

function random_init_y() {
    return Math.floor(Math.random() * -100) - 1
}

function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const columns = Math.ceil(canvas.width / fontSize)
    while (positions.length > columns) {
        positions.pop()
    }
    while (positions.length < columns) {
        positions.push(random_init_y())
    }
}

function render() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#3aff33'
    ctx.font = `${fontSize}px ark-pixel-12-monospaced-zh_cn, monospace`

    for (let x = 0; x < positions.length; x++) {
        let y = positions[x]

        if (y >= 0) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length))
            ctx.fillText(text, x * fontSize, y * fontSize + yOffset)
        }

        y += 1
        if (y * fontSize >= canvas.height) {
            y = random_init_y()
        }

        positions[x] = y
    }
}

window.addEventListener('resize', resize)
resize()
setInterval(render, 36)
