// CondiScan AI Interactive Portal JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 2. Navbar Scroll Glass Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                if (!document.body.classList.contains('policy-page')) {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }

    // 3. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const answer = otherItem.querySelector('.faq-answer');
                    if (answer) answer.style.maxHeight = null;
                });

                if (!isOpen) {
                    item.classList.add('active');
                    const answer = item.querySelector('.faq-answer');
                    if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

    // 4. Screenshots Showcase Tabs (if present)
    const showcaseTabs = document.querySelectorAll('.showcase-tab');
    const showcaseImg = document.getElementById('showcaseImg');
    const showcaseTitle = document.getElementById('showcaseTitle');
    const showcaseDesc = document.getElementById('showcaseDesc');

    if (showcaseTabs.length > 0 && showcaseImg) {
        showcaseTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                showcaseTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const imgSrc = tab.getAttribute('data-img');
                const title = tab.getAttribute('data-title');
                const desc = tab.getAttribute('data-desc');

                if (imgSrc) {
                    showcaseImg.style.opacity = '0';
                    setTimeout(() => {
                        showcaseImg.src = imgSrc;
                        showcaseImg.style.opacity = '1';
                    }, 200);
                }
                if (title && showcaseTitle) showcaseTitle.textContent = title;
                if (desc && showcaseDesc) showcaseDesc.textContent = desc;
            });
        });
    }
});
