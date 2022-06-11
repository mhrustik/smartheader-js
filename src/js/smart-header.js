export default class SmartHeader {
    #mob;
    #breakpoint;
    #burger;
    #close;
    #preset;

    constructor(data = "") {
        this.#preset = data.preset
        this.#mob = document.querySelector(data.mobClass) || document.querySelector(".--mob")
        this.#breakpoint = data.breakpoint || 1200
        this.#burger = document.querySelector(data.burgerClass) || document.querySelector(".--burger-link")
        this.#close = document.querySelector(data.closeClass) || document.querySelector(".--close-mob")
        if (this.#mob && this.#preset) {
            this.#init();
        }
    }

    #init() {
        if (this.#preset === "full_window_filling") {
            this.#fullWindowFilling();
            this.#dropdownsInit();
        }
    }

    #fullWindowFilling() {
        this.#mob.classList.add("--hide")
        this.#close.addEventListener("click", (e) => {
            e.preventDefault()
            this.#mob.classList.add("--hide")
        })
        this.#burger.addEventListener("click", (e) => {
            e.preventDefault()
            this.#mob.classList.toggle("--hide")
        })
    }

    #dropdownsInit() {
        let drops = this.#mob.querySelectorAll(".--dropdown-ul")
        let dropdown_ul = ''
        let eLink = ''

        if (drops.length > 0) {
            drops.forEach((el, index) => {
                el.classList.add("--hide-drops")
            })

            this.#mob.addEventListener("click", (e) => {

                if (e.target.dataset.dropdown) {
                    e.preventDefault();
                    eLink = e.target;
                    let main_navs = e.target.closest(".--main-navs") || e.target.closest(".--add-navs")
                    dropdown_ul = e.target.closest("li").nextElementSibling;
                    dropdown_ul.style = `top: ${main_navs.offsetHeight}px`;
                    drops.forEach((el, index) => {
                        if (dropdown_ul !== el) {
                            el.classList.add("--hide-drops")
                        }
                    })

                    if (dropdown_ul.parentNode.closest(".--dropdown-ul")) {
                        let parentDropdown = dropdown_ul.parentNode.closest(".--dropdown-ul");
                        if (parentDropdown.classList.contains("--hide-drops")) {
                            parentDropdown.classList.remove("--hide-drops")
                            dropdown_ul.style = `top: 0px`;
                        }
                    }

                    dropdown_ul.classList.remove("--hide-drops")
                }
            })

            window.addEventListener("resize", () => {
                if (document.documentElement.clientWidth <= this.#breakpoint) {
                    drops.forEach((el, index) => {
                        el.classList.add("--hide-drops")
                    })
                }
            })

            document.addEventListener("click", (e) => {
                drops.forEach((el, index) => {
                    if (e.target.className !== "--dropdown-ul" && e.target !== eLink) {
                        el.classList.add("--hide-drops")
                    }

                })

            })
        }
    }


}