/* ==========================================================================
   Kall AI: Phone Assistant - Interactive Client Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // 2. Mobile Nav Toggle
    const navToggle = document.getElementById('navToggle');
    const mobileDrawer = document.getElementById('mobileNavDrawer');
    if (navToggle && mobileDrawer) {
        navToggle.addEventListener('click', () => {
            const isActive = mobileDrawer.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            const icon = navToggle.querySelector('i');
            if (icon) {
                if (isActive) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close on link click
        mobileDrawer.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
                if (navToggle) {
                    navToggle.setAttribute('aria-expanded', 'false');
                    const icon = navToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // 3. FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                
                // Optional: close other accordions
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherBtn = otherItem.querySelector('.faq-question');
                        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                        const otherContent = otherItem.querySelector('.faq-answer');
                        if (otherContent) otherContent.style.maxHeight = null;
                    }
                });

                if (isOpen) {
                    item.classList.remove('active');
                    questionBtn.setAttribute('aria-expanded', 'false');
                    const content = item.querySelector('.faq-answer');
                    if (content) content.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    questionBtn.setAttribute('aria-expanded', 'true');
                    const content = item.querySelector('.faq-answer');
                    if (content) content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        }
    });

    // 4. Carrier Tabs Switcher
    const carrierTabs = document.querySelectorAll('[data-carrier-tab]');
    const carrierPanels = document.querySelectorAll('[data-carrier-panel]');
    carrierTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-carrier-tab');
            carrierTabs.forEach(t => {
                t.classList.remove('active', 'border-indigo-500', 'bg-indigo-500/20', 'text-white');
                t.classList.add('border-slate-800', 'text-slate-400');
            });
            tab.classList.add('active', 'border-indigo-500', 'bg-indigo-500/20', 'text-white');
            tab.classList.remove('border-slate-800', 'text-slate-400');

            carrierPanels.forEach(panel => {
                if (panel.getAttribute('data-carrier-panel') === target) {
                    panel.classList.remove('hidden');
                } else {
                    panel.classList.add('hidden');
                }
            });
        });
    });

    // 5. Deletion Request Form Handler
    const deleteForm = document.getElementById('deletionRequestForm');
    if (deleteForm) {
        deleteForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = deleteForm.querySelector('button[type="submit"]');
            const feedback = document.getElementById('deletionFeedback');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Request...';
            }
            setTimeout(() => {
                if (feedback) {
                    feedback.classList.remove('hidden');
                    feedback.scrollIntoView({ behavior: 'smooth' });
                }
                deleteForm.reset();
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-check-circle"></i> Request Submitted';
                }
            }, 1200);
        });
    }

    // 6. Contact Form Handler
    const contactForm = document.getElementById('kallContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const feedback = document.getElementById('contactFeedback');
            if (btn) {
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
            }
            setTimeout(() => {
                if (feedback) {
                    feedback.classList.remove('hidden');
                    feedback.scrollIntoView({ behavior: 'smooth' });
                }
                contactForm.reset();
                if (btn) {
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Message Sent!';
                }
            }, 1000);
        });
    }
});
