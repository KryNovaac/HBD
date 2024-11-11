document.addEventListener("DOMContentLoaded", () => {
    const moon = document.getElementById("moon");
    const phases = ["new-moon", "crescent-moon", "half-moon", "gibbous-moon", "full-moon"];
    let currentPhase = 0;

    // Toggle moon phase on click
    const changeMoonPhase = () => {
        moon.classList.replace(phases[currentPhase], phases[(currentPhase + 1) % phases.length]);
        currentPhase = (currentPhase + 1) % phases.length;
    };
    moon.addEventListener("click", changeMoonPhase);

    // Function to create a star element with randomized position and animation
    const createStar = (className) => {
        const star = document.createElement("div");
        star.classList.add(className);
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + (className === "moving-star" ? 5 : 2)}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        return star;
    };

    // Function to generate multiple stars
    const generateStars = (numStars, containerSelector, starClass) => {
        const container = document.querySelector(containerSelector);
        if (container) {
            for (let i = 0; i < numStars; i++) {
                container.appendChild(createStar(starClass));
            }
        }
    };

    // Generate static and moving stars
    generateStars(100, ".stars", "star");
    generateStars(20, ".moving-stars", "moving-star");
});
