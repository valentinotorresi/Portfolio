let cvAbierta = false;
        let cvVentana;
        
        document.getElementById('btnDownloadCv').addEventListener('click', function() {
            if (!cvAbierta) {
                cvVentana = window.open('img/Valentino Torresi CV.pdf', '_blank');
                cvAbierta = true;
            } else {
                cvVentana.focus();
            }
        });