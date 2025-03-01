(() => {
    document.addEventListener("DOMContentLoaded", () => {
        document.addEventListener("click", (event) => {
            const target = event.target;
            if (target.matches('a[href^="#"]')) {
                event.preventDefault();
                const id = target.getAttribute("href");
                const elem = document.querySelector(id);
                if (elem) {
                    window.scrollTo({
                        top: elem.offsetTop,
                        behavior: "smooth",
                    });
                }
            }
        });

        const modal = document.getElementById("image-modal");
        const modalImg = document.getElementById("modal-img");
        const closeBtn = modal.querySelector(".close");

        document.querySelectorAll(".artwork-images img").forEach((img) => {
            img.addEventListener("click", () => {
                modalImg.src = img.src;
                modal.classList.add("show");
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("show");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.remove("show");
            }
        });
    });
})();
