document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const revealSection = () => {
      const triggerBottom = window.innerHeight * 0.85;
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
  
        if (sectionTop < triggerBottom) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
        }
      });
    };
  
    sections.forEach(section => {
      section.style.opacity = 0;
      section.style.transform = "translateY(30px)";
      section.style.transition = "all 0.6s ease-out";
    });
  
    window.addEventListener("scroll", revealSection);
    revealSection(); // Trigger pertama kali
  });
  