
/* =====================================================
   OPENING
====================================================== */

window.addEventListener("load", () => {

    const opening = document.getElementById("opening");

    if (!opening) return;


    /* -----------------------------------------------
       最初の状態
       メインは完全に霧の奥
    ------------------------------------------------ */

    document.body.classList.add("hero-ready");


    /* -----------------------------------------------
       ① OP文字をしっかり見せる
    ------------------------------------------------ */

    setTimeout(() => {

        /*
         * 氷の霧を発生
         */
        document.body.classList.add("ice-mist");


        /* -------------------------------------------
           ② 霧が濃くなるまで待つ
        -------------------------------------------- */

        setTimeout(() => {

            /*
             * 霧の中から
             * メインをゆっくり出す
             */
            document.body.classList.add("hero-show");


        }, 1200);


        /* -------------------------------------------
           ③ メインが見え始めたあと
           OPをゆっくり消す
        -------------------------------------------- */

        setTimeout(() => {

            opening.classList.add("opening-hide");


        }, 1700);


        /* -------------------------------------------
           ④ OP完全終了
        -------------------------------------------- */

        setTimeout(() => {

            opening.style.display = "none";

            document.body.classList.remove(
                "opening-active"
            );

            document.body.classList.remove(
                "hero-ready"
            );

        }, 4300);


    }, 2200);

});


/* =====================================================
   SMOOTH SCROLL
====================================================== */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =====================================================
   SNOW
====================================================== */

const snowContainer = document.getElementById("snow-container");

if (snowContainer) {

    for (let i = 0; i < 35; i++) {

        const snow = document.createElement("span");

        snow.classList.add("snow");

        snow.style.left = Math.random() * 100 + "%";

        snow.style.animationDelay =
            Math.random() * 8 + "s";

        snow.style.animationDuration =
            6 + Math.random() * 8 + "s";

        snow.style.opacity =
            0.3 + Math.random() * 0.7;

        snow.style.transform =
            `scale(${0.5 + Math.random() * 0.8})`;

        snowContainer.appendChild(snow);

    }

}


/* =====================================================
   SCHEDULE ACCORDION
====================================================== */

const scheduleCards = document.querySelectorAll(
    ".schedule-card"
);

scheduleCards.forEach((card) => {

    card.addEventListener("click", () => {

        scheduleCards.forEach((otherCard) => {

            if (otherCard !== card) {

                otherCard.removeAttribute("open");

            }

        });

    });

});
