/**
 * 角色动画
 */
(function () {
    function getRandomNum(min, max) {
        var range = max - min;
        var rand = Math.random();
        return(min + Math.round(rand * range));
    }

    var configs = [{
        src: 'img/role-mario.gif',
        width: 16,
        height: 16,
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
        src: 'img/role-ryu-hayabusa.gif',
        width: 22,
        height: 31,
    }, {
        src: 'img/role-castlevania.gif',
        width: 16,
        height: 31,
    }, {
        src: 'img/role-mega-man.gif',
        width: 25,
        height: 24,
    }, {
        src: 'img/role-rush-n-attack.gif',
        width: 17,
        height: 32,
    }, {
        src: 'img/role-karateka.gif',
        width: 27,
        height: 45,
    }, {
        src: 'img/role-kung-fu.gif',
        width: 22,
        height: 32,
    }];

    var scale = 4;

    function Role(config) {
        var img = document.createElement('img');
        img.src = config.src;
        img.style.width = config.width * scale + 'px';
        img.style.height = config.height * scale + 'px';
        img.style.position = 'fixed';
        img.style.bottom = '0';
        img.style.left = -config.width * scale + 'px';
        document.body.appendChild(img);

        var x = -config.width * scale;
        var speed = 0;
        var waiting = true;

        this.reset = function () {
            x = -config.width * scale;
            speed = getRandomNum(2, 8);
        };

        this.update = function (dt) {
            if (waiting) {
                if (getRandomNum(0, 60 * 5) === 0) {
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

    var roles = [];
    for (var i = 0; i < configs.length; i++) {
        var role = new Role(configs[i]);
        role.reset();
        roles.push(role);
    }

    function update(dt) {
        for (var i = 0; i < roles.length; i++) {
            roles[i].update(dt);
        }
    }

    var fps = 60;
    var lastTime = new Date().getTime();
    window.setInterval(function () {
        var nowTime = new Date().getTime();
        var deltaTime = nowTime - lastTime;
        if (deltaTime - 1000 / fps >= 0) {
            lastTime = nowTime;
            update(deltaTime / 1000);
        }
    }, 1);
})();
