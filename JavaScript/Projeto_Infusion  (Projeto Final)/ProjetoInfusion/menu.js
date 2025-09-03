function Menu(config) {
    this.nav = (typeof config.container === "string") ? document.querySelector(config.container) : config.container;
    this.btn = (typeof config.toogleBtn === "string") ? document.querySelector(config.toogleBtn) : config.toogleBtn;
    this.maxWidth = config.WidthEnabled || 1024;

    var _opened = false;
    var _this = this;

    this.btn.removeAttribute('style'); // Garante que o botão esteja visível se necessário

    if (window.innerWidth > this.maxWidth) {
        showMenuDesktop();
    } else {
        closeMenu();
    }

    if (this.maxWidth) {
        window.addEventListener('resize', function () {
            if (window.innerWidth > _this.maxWidth) {
                showMenuDesktop();
            } else {
                closeMenu();
            }
        });
    }

    this.btn.addEventListener('click', function () {
        if (!_opened) {
            openMenu();
        } else {
            closeMenu();
        }
    });

    function openMenu() {
        const top = _this.nav.getBoundingClientRect().top + 'px';
        const style = {
            maxHeight: 'calc(100vh - ' + top + ')',
            overflow: 'hidden'
        };
        applyStyleToNav(style);
        _opened = true;
    }

    function closeMenu() {
        const style = {
            maxHeight: '0px',
            overflow: 'hidden'
        };
        applyStyleToNav(style);
        _opened = false;
    }

    function showMenuDesktop() {
        _this.nav.removeAttribute('style');
        _opened = false;
    }

    function applyStyleToNav(style) {
        Object.keys(style).forEach(function (prop) {
            _this.nav.style[prop] = style[prop];
        });
    }
}
