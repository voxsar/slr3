// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
	hamburger.addEventListener('click', () => {
		navMenu.classList.toggle('active');
		hamburger.classList.toggle('active');
	});

	// Close menu when clicking on a link
	document.querySelectorAll('.nav-menu a').forEach(link => {
		link.addEventListener('click', () => {
			navMenu.classList.remove('active');
			hamburger.classList.remove('active');
		});
	});
}

// Hero Slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
let currentSlide = 0;
let slideInterval;

// Create dots
if (dotsContainer) {
	slides.forEach((_, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		if (index === 0) dot.classList.add('active');
		dot.addEventListener('click', () => goToSlide(index));
		dotsContainer.appendChild(dot);
	});
}

const dots = document.querySelectorAll('.dot');

function showSlide(n) {
	slides.forEach(slide => slide.classList.remove('active'));
	dots.forEach(dot => dot.classList.remove('active'));

	currentSlide = (n + slides.length) % slides.length;

	if (slides[currentSlide]) {
		slides[currentSlide].classList.add('active');
	}
	if (dots[currentSlide]) {
		dots[currentSlide].classList.add('active');
	}
}

function nextSlide() {
	showSlide(currentSlide + 1);
}

function prevSlide() {
	showSlide(currentSlide - 1);
}

function goToSlide(n) {
	showSlide(n);
	resetInterval();
}

function resetInterval() {
	clearInterval(slideInterval);
	slideInterval = setInterval(nextSlide, 5000);
}

// Auto-advance slides
if (slides.length > 0) {
	slideInterval = setInterval(nextSlide, 5000);
}

// Slider buttons
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

if (prevBtn) {
	prevBtn.addEventListener('click', () => {
		prevSlide();
		resetInterval();
	});
}

if (nextBtn) {
	nextBtn.addEventListener('click', () => {
		nextSlide();
		resetInterval();
	});
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		const href = this.getAttribute('href');
		if (href !== '#' && href !== '') {
			e.preventDefault();
			const target = document.querySelector(href);
			if (target) {
				target.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		}
	});
});

// Form submission (placeholder)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
	contactForm.addEventListener('submit', (e) => {
		e.preventDefault();
		alert('Thank you for your message! We will get back to you soon.');
		contactForm.reset();
	});
}

// Scroll animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.opacity = '1';
			entry.target.style.transform = 'translateY(0)';
		}
	});
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .team-member, .instagram-post').forEach(el => {
	el.style.opacity = '0';
	el.style.transform = 'translateY(20px)';
	el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
	observer.observe(el);
});

// Active navigation based on scroll position
window.addEventListener('scroll', () => {
	const sections = document.querySelectorAll('section[id]');
	const navLinks = document.querySelectorAll('.nav-menu a');

	let current = '';
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (window.pageYOffset >= (sectionTop - 200)) {
			current = section.getAttribute('id');
		}
	});

	navLinks.forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('href') === `#${current}`) {
			link.classList.add('active');
		}
	});
});
