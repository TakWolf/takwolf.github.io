/**
 * 角色动画
 */
(function () {
    function getRandomNum(min, max) {
        let range = max - min;
        let rand = Math.random();
        return(min + Math.round(rand * range));
    }

    let configs = [{
        src: 'img/role-mario-small.gif',
        width: 16,
        height: 16,
    }, {
        src: 'img/role-mario-big.gif',
        width: 16,
        height: 32,
    }, {
        src: 'img/role-luigi-small.gif',
        width: 16,
        height: 16,
    }, {
        src: 'img/role-luigi-big.gif',
        width: 16,
        height: 32,
    }, {
        src: 'img/role-fire-mario-small.gif',
        width: 16,
        height: 16,
    }, {
        src: 'img/role-fire-mario-big.gif',
        width: 16,
        height: 32,
    }, {
        src: 'img/role-link.gif',
        width: 16,
        height: 16,
    }, {
        src: 'img/role-metroid.gif',
        width: 20,
        height: 32,
    }, {
        src: 'img/role-kirby.gif',
        width: 16,
        height: 16,
    }, {
        src: 'img/role-excitebike.gif',
        width: 20,
        height: 21,
    }, {
        src: 'img/role-contra-1.gif',
        width: 20,
        height: 35,
    }, {
        src: 'img/role-contra-2.gif',
        width: 20,
        height: 35,
    }, {
        src: 'img/role-ryu-hayabusa.gif',
        width: 22,
        height: 31,
    }, {
        src: 'img/role-kage.gif',
        width: 25,
        height: 32,
    }, {
        src: 'img/role-castlevania.gif',
        width: 16,
        height: 31,
    }, {
        src: 'img/role-mega-man.gif',
        width: 25,
        height: 24,
    }, {
        src: 'img/role-kyatto-ninja.gif',
        width: 23,
        height: 31,
    }, {
        src: 'img/role-rush-n-attack.gif',
        width: 17,
        height: 32,
    }, {
        src: 'img/role-nekketsu.gif',
        width: 22,
        height: 32,
    }, {
        src: 'img/role-birdman-1.gif',
        width: 18,
        height: 32,
    }, {
        src: 'img/role-birdman-2.gif',
        width: 18,
        height: 32,
    }, {
        src: 'img/role-birdman-3.gif',
        width: 18,
        height: 32,
    }, {
        src: 'img/role-birdman-4.gif',
        width: 18,
        height: 32,
    }, {
        src: 'img/role-birdman-5.gif',
        width: 18,
        height: 32,
    }, {
        src: 'img/role-jackie-chan-s-action-kung-fu.gif',
        width: 25,
        height: 48,
    }, {
        src: 'img/role-karateka.gif',
        width: 27,
        height: 45,
    }, {
        src: 'img/role-kung-fu.gif',
        width: 22,
        height: 32,
    }];

    let scale = 2;

    function Role(config) {
        let img = document.createElement('img');
        img.src = config.src;
        img.style.width = config.width * scale + 'px';
        img.style.height = config.height * scale + 'px';
        img.style.position = 'fixed';
        img.style.bottom = '0';
        img.style.left = -config.width * scale + 'px';
        document.body.appendChild(img);

        let x = -config.width * scale;
        let speed = 0;
        let waiting = true;

        this.reset = function () {
            x = -config.width * scale;
            speed = getRandomNum(1, 5);
        };

        this.update = function (_dt) {
            if (waiting) {
                if (getRandomNum(0, 60 * configs.length) === 0) {
                    waiting = false;
                }
            } else {
                x += speed;
                if (x > window.innerWidth + config.width * scale) {
                    waiting = true;
                    this.reset();
                }
            }
            img.style.left = (x - config.width * scale / 2) + 'px';
        };
    }

    let roles = [];
    for (let i = 0; i < configs.length; i++) {
        let role = new Role(configs[i]);
        role.reset();
        roles.push(role);
    }

    function update(dt) {
        for (let i = 0; i < roles.length; i++) {
            roles[i].update(dt);
        }
    }

    let fps = 60;
    let lastTime = new Date().getTime();
    window.setInterval(function () {
        let nowTime = new Date().getTime();
        let deltaTime = nowTime - lastTime;
        if (deltaTime - 1000 / fps >= 0) {
            lastTime = nowTime;
            update(deltaTime / 1000);
        }
    }, 1);
})();
