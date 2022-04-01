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

    function Role() {
        var img = document.createElement('img');
        img.style.width = '64px';
        img.style.height = '64px';
        img.style.position = 'fixed';
        img.style.bottom = '0';
        img.style.left = '-64px';
        document.body.appendChild(img);

        var x = -32;
        var waitting = true;

        this.reset = function () {
            img.src = sprites[getRandomNum(0, sprites.length - 1)];
            x = -32;
        };

        this.update = function (dt) {
            if (waitting) {
                if (getRandomNum(0, 60 * 4) === 0) {
                    waitting = false;
                }
            } else {
                x += 4;
                if (x > window.innerWidth + 32) {
                    waitting = true;
                    this.reset();
                }
            }
            img.style.left = (x - 32) + 'px';
        };
    }

    var role = new Role();
    role.reset();

    function update(dt) {
        role.update(dt);
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
