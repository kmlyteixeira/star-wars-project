/*class NavbarMenu {
    constructor() {
        constructor(menu, navList, navLink); {
            this.menu = document.querySelector(menu);
            this.navList = document.querySelector(navList);
            this.navLink = document.querySelectorAll(navLink);
            this.activeClass = "active";

            this.handleClick = this.handleClick.bind(this);
        }
    }

    handleClick () {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.menu.addEventListener("click", this.handleClick());
    }

    init() {
        if (this.menu) {
            this.addClickEvent();
        }

        return this;
    }
}

const navbarMenu = new NavbarMenu(
    ".menu",
    ".nav-list",
    ".nav-list li"
);
navbarMenu.init();*/