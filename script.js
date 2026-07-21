/* ===========================
   INIT
=========================== */

document.addEventListener("DOMContentLoaded", () => {

    // AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 80
    });

    initProgressBar();
    initHeader();
    initMobileMenu();
    initBackToTop();
    initTyping();
});

/* ===========================
   SCROLL PROGRESS
=========================== */

function initProgressBar() {

    const progress = document.querySelector(".progress-bar");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const height =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percent = (scrollTop / height) * 100;

        progress.style.width = percent + "%";
    });

}

/* ===========================
   HEADER EFFECT
=========================== */

function initHeader() {

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "rgba(9,9,15,.95)";
            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

        } else {

            header.style.background = "rgba(9,9,15,.75)";
            header.style.boxShadow = "none";

        }

    });

}

/* ===========================
   MOBILE MENU
=========================== */

function initMobileMenu() {

    const button = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {

        nav.classList.toggle("show-menu");

    });

}

/* ===========================
   BACK TO TOP
=========================== */

function initBackToTop() {

    const btn = document.createElement("button");

    btn.innerHTML = "↑";

    btn.className = "back-top";

    document.body.appendChild(btn);

    btn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            btn.classList.add("show");

        } else {

            btn.classList.remove("show");

        }

    });

}

/* ===========================
   TYPING EFFECT
=========================== */

function initTyping() {

    const title = document.querySelector(".hero-left h2");

    if (!title) return;

    const words = [
        "System Administrator",
        "Network Administrator",
        "IT Infrastructure Specialist"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const current = words[wordIndex];

        if (!deleting) {

            title.textContent = current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;

            }

        } else {

            title.textContent = current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length)
                    wordIndex = 0;

            }

        }

        setTimeout(type, deleting ? 50 : 100);

    }

    type();

}
