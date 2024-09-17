        // Dark mode 
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }    
        }

        toggleSwitch.addEventListener('change', switchTheme, false);

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Download CV btn
        let cvAbierta = false;       
        document.getElementById('btnDownloadCv').addEventListener('click', function() {
            if (!cvAbierta) {
                cvVentana = window.open('img/Valentino Torresi CV.pdf', '_blank');
            } 
        });

        // Form submission handling
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted!');
            console.log('Name:', this.name.value);
            console.log('Email:', this.email.value);
            console.log('Message:', this.message.value);
            // Reset the form
            this.reset();
            alert('Thank you for your message. I\'ll get back to you soon!');
        });