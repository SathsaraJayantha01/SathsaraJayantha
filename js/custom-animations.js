// Add this new file for enhanced animations

document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect on scroll for hero section
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrollY * -0.05}px)`;
        }
    });
    
    // Enhanced skill badges animation
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
        badge.classList.add('fadeInUp');
    });
    
    // Portfolio filter buttons enhancement
    const filterButtons = document.querySelectorAll('#portfolio-flters li');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Footer year update
    document.getElementById('currentYear').innerText = new Date().getFullYear();
    
    // Newsletter subscription form
    const newsletterForm = document.querySelector('.newsletter-form form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }
            
            // Replace this with actual subscription logic
            emailInput.value = '';
            alert('Thank you for subscribing to my newsletter!');
        });
    }
    
    // Initialize Isotope for portfolio filtering
    const portfolioContainer = document.querySelector('.portfolio-container');
    
    if (portfolioContainer) {
        const portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows',
        });
        
        // Add click handler for portfolio filters
        const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
        
        portfolioFilters.forEach(filter => {
            filter.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all filters
                portfolioFilters.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Add active class to current filter
                this.classList.add('active');
                
                // Apply filter
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                
                // Animate items after filtering
                setTimeout(() => {
                    const visibleItems = document.querySelectorAll('.portfolio-item:not(.filteredOut)');
                    visibleItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animated', 'fadeInUp');
                        }, index * 100);
                    });
                }, 300);
            });
        });
    }
    
    // Add hover effect for portfolio items
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.portfolio-overlay').style.opacity = '1';
            this.querySelector('.portfolio-overlay').style.visibility = 'visible';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('touched')) {
                this.querySelector('.portfolio-overlay').style.opacity = '0';
                this.querySelector('.portfolio-overlay').style.visibility = 'hidden';
            }
        });
    });
    
    // Fix for counters if CounterUp plugin isn't working
    // No need for additional code since we've switched to static numbers
    // But you can add any custom animations for these elements here
    
    // For example, you could add a simple fade-in effect:
    const statItems = document.querySelectorAll('.stat-item h1');
    statItems.forEach(item => {
        item.style.opacity = '0';
        setTimeout(() => {
            item.style.transition = 'opacity 1s ease';
            item.style.opacity = '1';
        }, 500);
    });
    
    // About section floating icons animation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    
    if (floatingIcons.length > 0) {
        floatingIcons.forEach((icon, index) => {
            // Set different animation delay for each icon
            icon.style.animationName = 'floating';
            icon.style.animationDuration = '3s';
            icon.style.animationTimingFunction = 'ease-in-out';
            icon.style.animationIterationCount = 'infinite';
            icon.style.animationDelay = `${index * 0.5}s`;
        });
    }
    
    // Modern Portfolio Filtering
    // Portfolio filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterTabs.length) {
        filterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                filterTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to current tab
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Filter items with smooth animation
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        // Show item with animation
                        item.classList.remove('hidden');
                        setTimeout(() => {
                            item.style.transform = 'scale(1)';
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        // Hide item with animation
                        item.style.transform = 'scale(0.8)';
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.classList.add('hidden');
                        }, 400);
                    }
                });
            });
        });
    }
    
    // Add hover effect animations
    portfolioItems.forEach(item => {
        const card = item.querySelector('.portfolio-card-modern');
        const img = item.querySelector('.portfolio-img-container img');
        const info = item.querySelector('.portfolio-info');
        
        item.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
            card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Initialize with animation
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });
    
    // CV download function
    function downloadPDF(url) {
    // Create a new anchor element
      const a = document.createElement('a');
      a.href = url;
      a.download = url.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    
    // Add event listener for the Download CV button
    const downloadBtn = document.querySelector('.btn-primary[href$="CV.pdf"]');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            const pdfUrl = this.getAttribute('href');
            if (!this.download) {
                e.preventDefault();
                downloadPDF(pdfUrl);
            }
        });
    }
});

