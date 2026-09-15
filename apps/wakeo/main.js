/**
 * Wakeo Web Portal - Interactive Functions
 * Tabs, Lightbox Gallery, FAQ Accordion, Mobile Menu & Modals
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Navbar Background on Scroll
    const navbar = document.querySelector('.navbar');
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
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const hamburgerDropdown = document.getElementById('hamburgerDropdown');

    if (menuToggleBtn && hamburgerDropdown) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = hamburgerDropdown.style.display === 'block';
            hamburgerDropdown.style.display = isOpen ? 'none' : 'block';
            menuToggleBtn.setAttribute('aria-expanded', !isOpen);
        });

        // Close on link click
        hamburgerDropdown.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerDropdown.style.display = 'none';
                menuToggleBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!hamburgerDropdown.contains(e.target) && e.target !== menuToggleBtn) {
                hamburgerDropdown.style.display = 'none';
                menuToggleBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // 3. Interactive Showcase Tabs
    const tabButtons = document.querySelectorAll('.showcase-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            button.classList.add('active');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // 4. FAQ Accordion with Accessibility
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
                    }
                });

                item.classList.toggle('active', !isActive);
                question.setAttribute('aria-expanded', !isActive);
            });
        }
    });

    // 5. Screenshot Gallery Lightbox
    const galleryCards = document.querySelectorAll('.gallery-card');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    let currentGalleryIndex = 0;
    const galleryItems = [];

    galleryCards.forEach((card, index) => {
        const img = card.querySelector('img');
        const title = card.querySelector('h4')?.textContent || '';
        const desc = card.querySelector('p')?.textContent || '';
        if (img) {
            galleryItems.push({
                src: img.src,
                alt: img.alt,
                caption: `${title} — ${desc}`
            });

            card.addEventListener('click', () => {
                currentGalleryIndex = index;
                openLightbox(currentGalleryIndex);
            });
        }
    });

    function openLightbox(index) {
        if (!lightboxModal || !lightboxImg || !galleryItems[index]) return;
        const item = galleryItems[index];
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
        if (lightboxCaption) {
            lightboxCaption.textContent = item.caption;
        }
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightboxModal || !lightboxModal.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
            openLightbox(currentGalleryIndex);
        } else if (e.key === 'ArrowLeft') {
            currentGalleryIndex = (currentGalleryIndex - 1 + galleryItems.length) % galleryItems.length;
            openLightbox(currentGalleryIndex);
        }
    });

    // 6. Download / Get App Modal
    const downloadTriggers = document.querySelectorAll('.trigger-download-modal');
    const downloadModal = document.getElementById('downloadModal');
    const downloadClose = document.getElementById('downloadModalClose');

    downloadTriggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (downloadModal) {
                downloadModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    const closeDownloadModal = () => {
        if (downloadModal) {
            downloadModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (downloadClose) {
        downloadClose.addEventListener('click', closeDownloadModal);
    }

    if (downloadModal) {
        downloadModal.addEventListener('click', (e) => {
            if (e.target === downloadModal) {
                closeDownloadModal();
            }
        });
    }

    // 7. Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
