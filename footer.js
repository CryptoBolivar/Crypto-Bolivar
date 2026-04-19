// footer.js - Footer legal + espacio para anuncio + banner de cookies
(function() {
    const footerHTML = `
        <footer>
            <div class="ad-container ad-footer">
                <div class="ad-label">Publicidad</div>
                <div style="min-height: 90px; background: #2A2D35; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #888; margin-bottom: 20px;">
                    [Espacio para banner 468x60 - Adsterra]
                </div>
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
        const existingFooter = document.querySelector('footer');
        if (existingFooter) {
            existingFooter.outerHTML = footerHTML;
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    });

    // Banner de cookies (consentimiento)
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