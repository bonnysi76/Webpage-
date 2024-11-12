document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    // Save theme preference
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Load theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Visitor Counter
let visitCount = 0;
const visitCountDisplay = document.getElementById('visit-count');
setInterval(() => {
    visitCount++;
    visitCountDisplay.textContent = visitCount;
}, 1000); // Increment every second

// Skill Animation
document.querySelectorAll('.skill-fill').forEach(skill => {
    const skillLevel = skill.getAttribute('data-skill');
    skill.style.width = skillLevel + '%';
});
