document.addEventListener('DOMContentLoaded', () => {
    const homeSection = document.getElementById('home');
    const artworkSection = document.getElementById('artwork');
    const footer = document.querySelector('.footer');
    const artworkBtn = document.querySelector('.artwork-btn');
    const homeBtn = document.querySelector('.home-btn');

    const smoothTransition = (showSection, hideSection) => {
        hideSection.style.opacity = 0;
        setTimeout(() => {
            hideSection.style.display = "none";
            showSection.style.display = "block";
            setTimeout(() => {
                showSection.style.opacity = 1;
            }, 10);
        }, 300);
    };

    if (artworkBtn) {
        artworkBtn.addEventListener("click", (e) => {
            e.preventDefault();
            smoothTransition(artworkSection, homeSection);
            footer.style.display = 'none';
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", (e) => {
            e.preventDefault();
            smoothTransition(homeSection, artworkSection);
            footer.style.display = 'block';
        });
    }
});