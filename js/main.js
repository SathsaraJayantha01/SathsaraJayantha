(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    // Add this to your main.js file or create a new script
    $(document).on('click', '.portfolio-detail-btn', function(e) {
        e.preventDefault();
        const projectId = $(this).data('project-id');
        
        // Show the corresponding modal
        $('#project-modal-' + projectId).modal('show');
    });
    
})(jQuery);

// Navbar shrink effect on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
    } else {
        navbar.classList.remove('navbar-shrink');
    }
});

// Active link handling
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section, div[id]');
    const navLinks = document.querySelectorAll('.navbar .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// About section animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate counter numbers
    const counterNumbers = document.querySelectorAll('.counter-number');
    
    if (counterNumbers) {
        counterNumbers.forEach(counter => {
            // Already has static number displayed, no need for animation
        });
    }
    
    // Make sure floating icons appear with proper staggered delay
    const floatingIcons = document.querySelectorAll('.floating-icon');
    if (floatingIcons) {
        floatingIcons.forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.5}s`;
        });
    }
});

// Back to Top Button
$(document).ready(function() {
    // Show or hide the Back to Top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    
    // Scroll to top when button is clicked
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
        return false;
    });
    
    // Initially show the button
    $('.back-to-top').show();
});

// Initialize modern testimonial carousel
$(document).ready(function() {
    $('.testimonial-carousel').owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            768: {
                items: 2,
                margin: 20
            },
            992: {
                items: 3,
                margin: 30
            }
        }
    });
});

// Initialize testimonial carousel
$(document).ready(function() {
    $('.testimonial-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 24,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
});

// Modern Back to Top Button
$(document).ready(function() {
    // Show/hide back to top button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.btn-back-to-top').addClass('active');
        } else {
            $('.btn-back-to-top').removeClass('active');
        }
    });
    
    // Smooth scroll to top
    $('.btn-back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500, 'easeInOutExpo');
    });
});

// Completely rewritten Back to Top button functionality
$(document).ready(function() {
    // Show/hide back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.btn-back-to-top').fadeIn();
        } else {
            $('.btn-back-to-top').fadeOut();
        }
    });
    
    // Smooth scroll to top
    $('.btn-back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    });
});

// Futuristic Navbar Effects
document.addEventListener('DOMContentLoaded', function() {
    // Change navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.futuristic-navbar');
        
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link handler with smooth transitions
    const navLinks = document.querySelectorAll('.futuristic-navbar .nav-link');
    
    // Initially set the active link
    setActiveNavLink();
    
    // Update on scroll
    window.addEventListener('scroll', function() {
        setActiveNavLink();
    });
    
    // Function to set the active link based on scroll position
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section, div[id]');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(current)) {
                link.classList.add('active');
            }
        });
    }
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash !== "") {
                e.preventDefault();
                
                const hash = this.hash;
                const targetElement = document.querySelector(hash);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // Update URL without refreshing page
                    history.pushState(null, null, hash);
                }
            }
        });
    });
});

