// footer.js - Footer legal + banner dinámico + cookies
(function() {
    const footerHTML = `
        <footer>
            <div class="ad-container ad-footer">
                <div class="ad-label">Publicidad</div>
                <div id="adsterra-footer"></div>
            </div>
            <p><strong>CryptoBolívar</strong> | Tu guía en el mundo Crypto</p>
            <p style="font-size:0.7rem; margin-top:10px;">
                No somos asesores financieros. Siempre verifica los datos en las plataformas oficiales.
            </p>
            <p style="font-size:0.7rem; margin-top:5px;">
                <a href="aviso-legal.html" style="color:#F3BA2F; text-decoration:none;">Aviso Legal</a> | 
                <a href="privacidad.html" style="color:#F3BA2F; text-decoration:none;">Política de Privacidad</a> |
                <a href="contacto.html" style="color:#F3BA2F; text-decoration:none;">Contacto</a>
            </p>
        </footer>
    `;

    document.addEventListener('DOMContentLoaded', function() {
        // Inyectar footer
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = footerHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }

        // Cargar dinámicamente el script de Adsterra para el footer
        const adContainer = document.getElementById('adsterra-footer');
        if (adContainer) {
            // Script de configuración
            const configScript = document.createElement('script');
            configScript.textContent = `
                atOptions = {
                    'key' : 'a4c8774439db2ef8a9956132c412a1ea',
                    'format' : 'iframe',
                    'height' : 60,
                    'width' : 468,
                    'params' : {}
                };
            `;
            adContainer.appendChild(configScript);

            // Script de invocación
            const invokeScript = document.createElement('script');
            invokeScript.src = 'https://www.highperformanceformat.com/a4c8774439db2ef8a9956132c412a1ea/invoke.js';
            adContainer.appendChild(invokeScript);
        }
    });

    // Banner de cookies (sin cambios)
    if (!localStorage.getItem('cookiesAccepted')) {
        const bannerHTML = `
            <div id="cookie-banner">
                <p>🍪 Usamos cookies para mejorar tu experiencia y mostrar anuncios relevantes. Al seguir navegando, aceptas su uso. Puedes configurarlas en la <a href="privacidad.html">Política de Privacidad</a>.</p>
                <button id="accept-cookies">Aceptar</button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', bannerHTML);
        const acceptBtn = document.getElementById('accept-cookies');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                localStorage.setItem('cookiesAccepted', 'true');
                const banner = document.getElementById('cookie-banner');
                if (banner) banner.style.display = 'none';
            });
        }
    }
})();
