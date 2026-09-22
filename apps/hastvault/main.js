/**
 * HastVault Web Portal - Interactive Engine
 * Privacy Blur Simulator, Category Switcher, FAQ Accordion, Navbar & Mobile Nav
 * Brand: HastVault by HastRadar Consultancy Services
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar on Scroll
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        if (window.scrollY > 30) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileDropdown = document.getElementById('mobileDropdown');

    if (mobileMenuBtn && mobileDropdown) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = mobileDropdown.style.display === 'block';
            mobileDropdown.style.display = isOpen ? 'none' : 'block';
            mobileMenuBtn.setAttribute('aria-expanded', !isOpen);
            mobileMenuBtn.querySelector('i')?.classList.toggle('fa-bars', isOpen);
            mobileMenuBtn.querySelector('i')?.classList.toggle('fa-xmark', !isOpen);
        });

        // Close when clicking dropdown links
        mobileDropdown.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileDropdown.style.display = 'none';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.querySelector('i')?.classList.add('fa-bars');
                mobileMenuBtn.querySelector('i')?.classList.remove('fa-xmark');
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileDropdown.contains(e.target) && e.target !== mobileMenuBtn) {
                mobileDropdown.style.display = 'none';
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.querySelector('i')?.classList.add('fa-bars');
                mobileMenuBtn.querySelector('i')?.classList.remove('fa-xmark');
            }
        });
    }

    // 3. Interactive Net Worth Privacy Blur Simulator
    const privacyToggle = document.getElementById('privacyToggle');
    const showcaseImg = document.getElementById('showcaseImg');
    const privacyStatusText = document.getElementById('privacyStatusText');

    if (privacyToggle && showcaseImg) {
        privacyToggle.addEventListener('change', () => {
            if (privacyToggle.checked) {
                showcaseImg.classList.add('blurred-preview');
                if (privacyStatusText) {
                    privacyStatusText.textContent = 'Privacy Shield Active (Values Blurred)';
                    privacyStatusText.style.color = 'var(--primary-gold)';
                }
            } else {
                showcaseImg.classList.remove('blurred-preview');
                if (privacyStatusText) {
                    privacyStatusText.textContent = 'Privacy Shield Off (Values Visible)';
                    privacyStatusText.style.color = '#94a3b8';
                }
            }
        });
    }

    // 4. Asset Category Tabs
    const catTabButtons = document.querySelectorAll('.cat-tab-btn');
    const catPanels = document.querySelectorAll('.cat-content-panel');

    if (catTabButtons.length > 0 && catPanels.length > 0) {
        catTabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetCat = btn.getAttribute('data-category');

                catTabButtons.forEach(b => b.classList.remove('active'));
                catPanels.forEach(p => p.classList.remove('active'));

                btn.classList.add('active');
                const targetPanel = document.getElementById(`cat-${targetCat}`);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                }
            });
        });
    }

    // 5. FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const currentBody = currentItem?.querySelector('.accordion-body');
            const isActive = currentItem?.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                    const body = item.querySelector('.accordion-body');
                    if (body) body.style.maxHeight = null;
                }
            });

            // Toggle current item
            if (currentItem && currentBody) {
                if (isActive) {
                    currentItem.classList.remove('active');
                    currentBody.style.maxHeight = null;
                } else {
                    currentItem.classList.add('active');
                    currentBody.style.maxHeight = currentBody.scrollHeight + 'px';
                }
            }
        });
    });

    // 6. Smooth Scrolling for Internal Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    const navHeight = navbar ? navbar.offsetHeight : 80;
                    const elPosition = targetEl.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elPosition - navHeight - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
