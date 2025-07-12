AOS.init({
  duration: 1000,
  once: true
});

const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  if (cursorDot) {
    cursorDot.style.left = (e.clientX - 4) + 'px';
    cursorDot.style.top = (e.clientY - 4) + 'px';
  }
  
  if (cursorOutline) {
    cursorOutline.style.left = (e.clientX - 15) + 'px';
    cursorOutline.style.top = (e.clientY - 15) + 'px';
  }
});

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (cursorDot) cursorDot.style.transform = 'scale(2)';
    if (cursorOutline) cursorOutline.style.transform = 'scale(1.5)';
  });
  
  el.addEventListener('mouseleave', () => {
    if (cursorDot) cursorDot.style.transform = 'scale(1)';
    if (cursorOutline) cursorOutline.style.transform = 'scale(1)';
  });
});

function openResume() {
  document.getElementById("resumeModal").style.display = "block";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("resumeModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    header.style.background = 'rgba(10, 10, 10, 0.9)';
  }
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeResume();
  }
});

const resumeBtn = document.querySelector('.resume-btn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', function() {
    setTimeout(() => {
      const closeBtn = document.querySelector('.close');
      if (closeBtn) closeBtn.focus();
    }, 100);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  document.body.offsetHeight;
  
  const loadingSequence = document.querySelector('.loading-sequence');
  const terminalContent = document.querySelector('.terminal-content');
  
  if (loadingSequence && terminalContent) {
    setTimeout(() => {
      loadingSequence.style.display = 'none';
      terminalContent.style.display = 'block';
    }, 2000);
  }
  
  const projects = document.querySelectorAll('.project');
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.2}s`;
  });
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.project, .tech-item').forEach(el => {
    observer.observe(el);
  });
});

const nameHighlight = document.querySelector('.name-highlight');
if (nameHighlight) {
  nameHighlight.addEventListener('mouseenter', () => {
    nameHighlight.style.animation = 'glitch 0.3s ease-in-out';
  });
  
  nameHighlight.addEventListener('animationend', () => {
    nameHighlight.style.animation = '';
  });
}

const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
  @keyframes glitch {
    0% { transform: translateX(0); }
    20% { transform: translateX(-2px); }
    40% { transform: translateX(2px); }
    60% { transform: translateX(-1px); }
    80% { transform: translateX(1px); }
    100% { transform: translateX(0); }
  }
  
  .animate-in {
    animation: slideInUp 0.6s ease-out forwards;
  }
  
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(glitchStyle);

if (window.innerWidth <= 768) {
  document.body.style.cursor = 'auto';
  if (cursorDot) cursorDot.style.display = 'none';
  if (cursorOutline) cursorOutline.style.display = 'none';
}

const backToTopLink = document.querySelector('.footer-link[href="#hero"]');
if (backToTopLink) {
  backToTopLink.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}