const toggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');

// Open
toggle.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Close
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {

  const words = [
    "Search Engine Optimization",
    "Social Media Marketing",
    "Email Marketing",
    "Content Marketing",
    "Web & App Development"
  ];

  let i = 0;
  let j = 0;
  let isDeleting = false;

  const element = document.getElementById("changing-text");

  function type() {
    let currentWord = words[i];

    if (!isDeleting) {
      element.textContent = currentWord.substring(0, j + 1);
      j++;

      // when full word typed
      if (j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1500); // pause after full word
        return;
      }

    } else {
      element.textContent = currentWord.substring(0, j - 1);
      j--;

      // when fully deleted
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }
    }

    setTimeout(type, isDeleting ? 40 : 80);
  }

  type();

});


window.addEventListener("scroll", function () {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.classList.add("nav-shadow");
  } else {
    nav.classList.remove("nav-shadow");
  }
});



function playVideo() {
  const video = document.getElementById("myVideo");

  if (video.paused) {
    video.play();
    document.querySelector(".play-btn").style.display = "none";
  } else {
    video.pause();
    document.querySelector(".play-btn").style.display = "flex";
  }
}

const boxes = document.querySelectorAll('.core-box');

window.addEventListener('scroll', () => {
  boxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      box.classList.add('show');
    }
  });
});

// const track = document.getElementById("track");

// let speed = 0.5; // slow smooth speed

// function infiniteScroll() {

//   track.scrollLeft += speed;

//   // 🔥 RESET WITHOUT JUMP
//   if (track.scrollLeft >= track.scrollWidth / 2) {
//     track.scrollLeft = 0;
//   }

//   requestAnimationFrame(infiniteScroll);
// }

// infiniteScroll();

const wrapper = document.getElementById("wrapper");

let speed = 0.5;
let isPaused = false;

// AUTO SCROLL
function autoScroll() {
  if (!isPaused) {
    wrapper.scrollLeft += speed;

    // infinite loop
    if (wrapper.scrollLeft >= wrapper.scrollWidth / 2) {
      wrapper.scrollLeft = 0;
    }
  }

  requestAnimationFrame(autoScroll);
}

autoScroll();

// ARROW CONTROL
function move(direction) {

  isPaused = true; // stop auto scroll

  const moveAmount = 200;

  wrapper.scrollBy({
    left: direction * moveAmount,
    behavior: "smooth"
  });

  // resume auto scroll after 1 sec
  setTimeout(() => {
    isPaused = false;
  }, 1000);
}
