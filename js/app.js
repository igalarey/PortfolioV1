let circuloInterior = document.querySelector(".circulo-interior");
let circuloExterior = document.querySelector(".circulo-exterior");

document.addEventListener("mousemove", moverCursor);

function moverCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    circuloInterior.style.left = `${x}px`;
    circuloInterior.style.top = `${y}px`;
    circuloExterior.style.left = `${x}px`;
    circuloExterior.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));

console.log(links);

links.forEach((link) => {
    link.addEventListener("mouseover", () => {
        circuloInterior.classList.add("crecer");
    });
    link.addEventListener("mouseleave", () => {
        circuloInterior.classList.remove("crecer");
    });
});

const blob = document.getElementById("blob");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let targetX = mouseX;
let targetY = mouseY;

window.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
});

function updateBlobPosition() {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    const easeFactor = 0.05;
    const dx = targetX - mouseX;
    const dy = targetY - mouseY;

    mouseX += dx * easeFactor;
    mouseY += dy * easeFactor;

    blob.style.left = `${mouseX + scrollX}px`;
    blob.style.top = `${mouseY + scrollY}px`;

    requestAnimationFrame(updateBlobPosition);
}

updateBlobPosition();
