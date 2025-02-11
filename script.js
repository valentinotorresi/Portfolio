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


        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });


        let cvAbierta = false;       
        document.getElementById('btnDownloadCv').addEventListener('click', function() {
            if (!cvAbierta) {
                cvVentana = window.open('img/Valentino-Torresi-CV.pdf', '_blank');
            } 
        });

            const form = document.getElementById('form');
            const result = document.getElementById('result');
            
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const formData = new FormData(form);
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);
                result.innerHTML = "Please wait..."
            
                fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: json
                    })
                    .then(async (response) => {
                        let json = await response.json();
                        if (response.status == 200) {
                            result.innerHTML = "Form submitted successfully";
                        } else {
                            console.log(response);
                            result.innerHTML = json.message;
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        result.innerHTML = "Something went wrong!";
                    })
                    .then(function() {
                        form.reset();
                        setTimeout(() => {
                            result.style.display = "none";
                        }, 3000);
                    });
                    document.getElementById('contact-form').addEventListener('submit', function(e) {
                        e.preventDefault();
                        console.log('Form submitted!');
                        console.log('Name:', this.name.value);
                        console.log('Email:', this.email.value);
                        console.log('Message:', this.message.value);
                        // Reset the form
                        this.reset();
                        alert('Thank you for your message. I\'ll get back to you soon!');
                    });
            });