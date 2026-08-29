/* ==========================================================================
   BrickTrack Web Portal - Core JavaScript Logic
   Brand: BrickTrack by HastRadar (https://hastradar.com)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
            if (!isVisible) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.background = '#090d14';
                navLinks.style.padding = '1.5rem';
                navLinks.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
            }
        });
    }

    // 2. Download Modal & QR Code Trigger
    const downloadBtns = document.querySelectorAll('.trigger-download-modal');
    const downloadModal = document.getElementById('downloadModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');

    if (downloadModal) {
        downloadBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                downloadModal.classList.add('active');
            });
        });

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => {
                downloadModal.classList.remove('active');
            });
        }

        downloadModal.addEventListener('click', (e) => {
            if (e.target === downloadModal) {
                downloadModal.classList.remove('active');
            }
        });
    }

    // 3. Showcase Interactive Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabTarget = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetEl = document.getElementById(`tab-${tabTarget}`);
            if (targetEl) {
                targetEl.classList.add('active');
            }
        });
    });

    // 4. Pricing Toggle (Monthly vs Annual vs Lifetime)
    const toggleOptions = document.querySelectorAll('.toggle-option');
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const annualPrices = document.querySelectorAll('.price-annual');

    toggleOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            toggleOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');

            const planType = opt.getAttribute('data-plan');

            if (planType === 'annual') {
                monthlyPrices.forEach(el => el.style.display = 'none');
                annualPrices.forEach(el => el.style.display = 'inline-block');
            } else {
                monthlyPrices.forEach(el => el.style.display = 'inline-block');
                annualPrices.forEach(el => el.style.display = 'none');
            }
        });
    });

    // 5. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 6. Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (formFeedback) {
                formFeedback.style.display = 'block';
                formFeedback.innerHTML = '✅ Thank you! Your message has been sent to HastRadar support. We will get back to you shortly.';
                contactForm.reset();
            }
        });
    }

});
