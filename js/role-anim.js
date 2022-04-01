/**
 * 角色动画
 */
(function () {
    function getRandomNum(min, max) {
        var range = max - min;
        var rand = Math.random();
        return(min + Math.round(rand * range));
    }

    var sprites = [
        'img/role-mario.gif',
        'img/role-link.gif',
        'img/role-kirby.gif',
    ];

    function Role(sprite) {
        var img = document.createElement('img');
        img.src = sprite;
        img.style.width = '64px';
        img.style.height = '64px';
        img.style.position = 'fixed';
        img.style.bottom = '0';
        img.style.left = '-64px';
        document.body.appendChild(img);

        var x = -32;
        var speed = 0;
        var waiting = true;

        this.reset = function () {
            x = -32;
            speed = getRandomNum(2, 8);
        };

        this.update = function (dt) {
            if (waiting) {
                if (getRandomNum(0, 60 * 3) === 0) {
                    waiting = false;
                }
            } else {
                x += speed;
                if (x > window.innerWidth + 32) {
                    waiting = true;
                    this.reset();
                }
            }
            img.style.left = (x - 32) + 'px';
        };
    }

    var roles = [];
    for (var i = 0; i < sprites.length; i++) {
        var role = new Role(sprites[i]);
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
