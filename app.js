const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3].filter(Boolean);

videoList.forEach(function (video) {
    video.addEventListener("mouseover", function () {
        video.play();
        if (hoverSign) {
            hoverSign.classList.add("active");
        }
    });
    video.addEventListener("mouseout", function () {
        video.pause();
        if (hoverSign) {
            hoverSign.classList.remove("active");
        }
    });
});

// Sidebar elements //
if (menu && sideBar) {
    menu.addEventListener("click", function () {
        sideBar.classList.remove("close-sidebar");
        sideBar.classList.add("open-sidebar");
    });
}

if (closeIcon && sideBar) {
    closeIcon.addEventListener("click", function () {
        sideBar.classList.remove("open-sidebar");
        sideBar.classList.add("close-sidebar");
    });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = (document.getElementById("fullName")?.value || "").trim();
        const email = (document.getElementById("emailAddress")?.value || "").trim();
        const message = (document.getElementById("message")?.value || "").trim();

        const subject = encodeURIComponent("Portfolio Contact Request");
        const body = encodeURIComponent(
            "Name: " + name + "\n" +
            "Email: " + email + "\n\n" +
            "Message:\n" + message
        );

        window.location.href = "mailto:mubashar.channa@gmail.com?subject=" + subject + "&body=" + body;
    });
}
