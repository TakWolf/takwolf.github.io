
function randomNum(min, max) {
    return Math.random() * (max - min) + min
}

const scale = 2

const configs = [
    {
        src: 'img/role-mario-small.gif',
        width: 16,
        height: 16,
    },
    {
        src: 'img/role-mario-big.gif',
        width: 16,
        height: 32,
    },
    {
        src: 'img/role-luigi-small.gif',
        width: 16,
        height: 16,
    },
    {
        src: 'img/role-luigi-big.gif',
        width: 16,
        height: 32,
    },
    {
        src: 'img/role-fire-mario-small.gif',
        width: 16,
        height: 16,
    },
    {
        src: 'img/role-fire-mario-big.gif',
        width: 16,
        height: 32,
    },
    {
        src: 'img/role-link.gif',
        width: 16,
        height: 16,
    },
    {
        src: 'img/role-metroid.gif',
        width: 20,
        height: 32,
    },
    {
        src: 'img/role-kirby.gif',
        width: 16,
        height: 16,
    },
    {
        src: 'img/role-excitebike.gif',
        width: 20,
        height: 21,
    },
    {
        src: 'img/role-contra-1.gif',
        width: 20,
        height: 35,
    },
    {
        src: 'img/role-contra-2.gif',
        width: 20,
        height: 35,
    },
    {
        src: 'img/role-ryu-hayabusa.gif',
        width: 22,
        height: 31,
    },
    {
        src: 'img/role-kage.gif',
        width: 25,
        height: 32,
    },
    {
        src: 'img/role-castlevania.gif',
        width: 16,
        height: 31,
    },
    {
        src: 'img/role-mega-man.gif',
        width: 25,
        height: 24,
    },
    {
        src: 'img/role-kyatto-ninja.gif',
        width: 23,
        height: 31,
    },
    {
        src: 'img/role-rush-n-attack.gif',
        width: 17,
        height: 32,
    },
    {
        src: 'img/role-nekketsu.gif',
        width: 22,
        height: 32,
    },
    {
        src: 'img/role-birdman-1.gif',
        width: 18,
        height: 32,
    },
    {
        src: 'img/role-birdman-2.gif',
        width: 18,
        height: 32,
    },
    {
        src: 'img/role-birdman-3.gif',
        width: 18,
        height: 32,
    },
    {
        src: 'img/role-birdman-4.gif',
        width: 18,
        height: 32,
    },
    {
        src: 'img/role-birdman-5.gif',
        width: 18,
        height: 32,
    },
    {
        src: 'img/role-jackie-chan-s-action-kung-fu.gif',
        width: 25,
        height: 48,
    },
    {
        src: 'img/role-karateka.gif',
        width: 27,
        height: 45,
    },
    {
        src: 'img/role-kung-fu.gif',
        width: 22,
        height: 32,
    },
]

class Role {
    constructor(config) {
        this.image = new Image(config.width * scale, config.height * scale)
        this.image.src = config.src
        this.image.style.position = 'fixed'
        document.body.appendChild(this.image)

        this.waiting = true
        this.reset()
        this.draw()
    }

    reset() {
        this.x = -this.image.width
        this.speed = randomNum(80, 160)
    }

    update(dt) {
        if (this.waiting) {
            if (randomNum(0, 60 * configs.length) <= 1) {
                this.waiting = false
            }
        } else {
            this.x += this.speed * dt
            if (this.x > window.innerWidth + this.image.width) {
                this.waiting = true
                this.reset()
            }
        }
    }

    draw() {
        this.image.style.left = (this.x - this.image.width / 2) + 'px'
        this.image.style.bottom = '0'
    }
}

const roles = []
for (const config of configs) {
    const role = new Role(config)
    role.reset()
    roles.push(role)
}

const fps = 60
let lastTime = new Date().getTime()
window.setInterval(() => {
    const nowTime = new Date().getTime()
    const deltaTime = nowTime - lastTime
    if (deltaTime - 1000 / fps >= 0) {
        lastTime = nowTime
        for (const role of roles) {
            role.update(deltaTime / 1000)
            role.draw()
        }
    }
}, 1)
