// ---------------------------- fading animation ----------------------------

const fadingElements = document.querySelectorAll(".fade");

const fadeObserver = new IntersectionObserver(
  (entries, fadeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        entry.target.style.opacity = 0;
        return;
      }
      let element = entry.target;
      element.classList.add("fade-in");
    });
  },
  { threshold: 0.6 }
);

fadingElements.forEach((elem) => {
  fadeObserver.observe(elem);
  elem.addEventListener("animationend", () => {
    elem.classList.remove("fade-in");
    elem.style.opacity = 1;
  });
});

const menuIcon = document.getElementById("menu-icon");
const asideElem = document.querySelector(".aside");
const navLinks = document.querySelectorAll("ul.nav a");
let activeLink = document.querySelector("ul.nav .active");
let isOpen = Boolean(menuIcon.dataset.isOpen);
function menuTrigger() {
  console.log("test");
  if (isOpen === true) {
    asideElem.style.left = "-270px";
    isOpen = false;
  } else {
    asideElem.style.left = 0;
    isOpen = true;
  }
}

const gliders = document.querySelectorAll(".glider");
window.addEventListener("load", function () {
  gliders.forEach((glider) => {
    new Glider(glider, {
      slidesToShow: 5,
      slidesToScroll: 5,
      draggable: true,
      // dots: ".dots",
      rewind: true,
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
    });
  });
});

// ---------------------------- Typing animation ----------------------------
var typed = new Typed(".typing", {
  // Waits 1000ms after typing "First"
  strings: ["Full Stack Developer.", "Free Lancer."],
  backSpeed: 30,
  typeSpeed: 40,
  loop: true,
  backDelay: 1500,
  showCursor: false,
});

navLinks.forEach((linkElem) => {
  linkElem.addEventListener("click", (event) => {
    activeLink.classList.remove("active");
    activeLink = event.target;
    activeLink.classList.add("active");
  });
});
// ---------------------------- Canvas ----------------------------
var canvas = /** @type {HTMLCanvasElement} */ (
  document.getElementById("canvas1")
);
const ctx = canvas.getContext("2d");
const particles = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
});

const mouseCoords = { x: undefined, y: undefined };
canvas.addEventListener("mousemove", (event) => {
  mouseCoords.x = event.x;
  mouseCoords.y = event.y;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width + 1;
    this.y = Math.random() * canvas.height + 1;
    this.speedX = Math.random() * 3 - 1;
    this.speedY = Math.random() * 3 - 1;
    this.size = Math.random() * 16 + 1;
  }
  update() {
    if (this.x < 0 || this.x > window.innerWidth)
      this.x = Math.random() * canvas.width + 1;
    else if (this.y < 0 || this.y > window.innerHeight)
      this.y = Math.random() * canvas.height + 1;
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.beginPath();
    ctx.fillStyle = "#8177F4";
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function init() {
  for (let particleIndex = 0; particleIndex < 35; particleIndex++) {
    particles.push(new Particle());
  }
}
init();

function moveParticles() {
  for (let index = 0; index < particles.length; index++) {
    particles[index].update();
    particles[index].draw();
    if (particles[index].size < 0.3) {
      particles.splice(index, 1);
      index--;
    }
  }
  if (particles.length == 0) init();
}

function animate() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "transparent";
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveParticles();
  requestAnimationFrame(animate);
}
animate();
// ------------------------- Send Mail-------------------------

// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "mohamedfathi9696@gmail.com",
//     Password: "mayoship9696",
//     To: "mohamedfathi4345@gmail.com",
//     From: document.getElementById("email").value,
//     Subject: document.getElementById("subject").value,
//     Body: document.getElementById("message").value,
//   }).then((message) => alert("Your Email Was Send..."));
// }

// ------------------------- Change font color -------------------------
const rootNode = document.querySelector(":root");
function changeFontColor() {
  rootNode.style.setProperty("--text-dark", "#fff");
}
