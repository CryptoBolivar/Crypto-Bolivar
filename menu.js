// menu.js - Menú lateral con bloque superior fijo (Inicio) y bloque inferior fijo
(function() {
    const menuHTML = `
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header-fixed">
                <a href="index.html" class="home-link">🏠 Inicio</a>
            </div>
            <div class="sidebar-scrollable">
                <nav>
                    <div class="nav-category">
                        <div class="category-title">📚 Guías prácticas</div>
                        <div class="category-links">
                            <a href="manual-usdt.html">Manual USDT</a>
                            <a href="p2p-binance.html">Guía P2P Binance</a>
                            <a href="retiros-p2p-banco.html">Retirar USDT a tu banco</a>
                            <a href="compras-internacionales-cripto.html">Compras internacionales</a>
                            <a href="mejores-wallets-venezuela.html">Mejores wallets Venezuela</a>
                            <a href="telegram-wallet-guia.html">Wallet de Telegram</a>
                            <a href="toncoin-guia.html">Guía de Toncoin</a>
                            <a href="binance-pay.html">Binance Pay</a>
                        </div>
                    </div>
                    <div class="nav-category">
                        <div class="category-title">🔒 Seguridad</div>
                        <div class="category-links">
                            <a href="seguridad.html">Seguridad básica</a>
                            <a href="seguridad-binance-telegram.html">Seguridad Binance y Telegram</a>
                            <a href="estafas-p2p-telegram.html">Estafas P2P y Telegram</a>
                        </div>
                    </div>
                    <div class="nav-category">
                        <div class="category-title">📖 Educación</div>
                        <div class="category-links">
                            <a href="glosario.html">Glosario cripto</a>
                            <a href="historia-btc-ton-usdt.html">Historia BTC, TON, USDT</a>
                            <a href="datos-curiosos-cripto.html">Datos curiosos</a>
                            <a href="impuestos-cripto-venezuela.html">Impuestos cripto</a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="sidebar-footer">
                <a href="contacto.html" class="contact-link">📬 Contacto</a>
                <div class="social-links">
                    <a href="https://t.me/CryptoBolivar" target="_blank" class="social-icon" aria-label="Telegram">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12 6.5C14.21 6.5 16 8.29 16 10.5C16 12.71 14.21 14.5 12 14.5C9.79 14.5 8 12.71 8 10.5C8 8.29 9.79 6.5 12 6.5ZM12 16.5C9.5 16.5 6.5 17.5 6.5 18.5V19.5H17.5V18.5C17.5 17.5 14.5 16.5 12 16.5Z" fill="#FFFFFF"/></svg>
                    </a>
                    <a href="https://whatsapp.com/channel/0029VbCb16dBfxo21nu1wD3B" target="_blank" class="social-icon" aria-label="WhatsApp">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.032 2.016C6.08 2.016 1.248 6.816 1.248 12.768C1.248 14.784 1.92 16.656 3.072 18.144L1.344 22.944L6.24 21.216C7.68 22.176 9.312 22.752 11.04 22.752C16.992 22.752 21.888 17.952 21.888 12C21.888 6.048 16.992 2.016 12.032 2.016ZM12.032 20.832C10.368 20.832 8.832 20.256 7.584 19.296L7.104 18.912L4.224 19.776L5.088 16.992L4.704 16.512C3.648 15.168 3.072 13.536 3.072 11.808C3.072 7.008 6.912 3.168 12.032 3.168C17.088 3.168 20.928 7.008 20.928 12.096C20.928 17.184 17.088 20.832 12.032 20.832ZM17.28 14.976C16.992 14.784 15.936 14.304 15.648 14.208C15.36 14.112 15.168 14.112 14.976 14.4C14.784 14.688 14.304 15.168 14.112 15.36C13.92 15.552 13.728 15.552 13.44 15.36C12.672 14.976 11.424 14.208 10.464 13.248C9.696 12.48 9.12 11.52 8.928 10.944C8.832 10.656 9.024 10.464 9.216 10.272C9.408 10.08 9.6 9.792 9.792 9.6C9.984 9.408 10.08 9.216 10.176 9.024C10.272 8.832 10.176 8.64 10.08 8.448C9.984 8.256 9.408 7.104 9.216 6.816C9.024 6.528 8.832 6.624 8.64 6.624H8.064C7.872 6.624 7.584 6.72 7.296 7.008C7.008 7.296 6.24 8.064 6.24 9.6C6.24 11.136 7.296 12.768 7.488 13.056C7.68 13.344 9.12 15.552 11.232 16.704C13.344 17.856 13.344 17.664 14.016 17.568C14.688 17.472 15.648 16.992 16.032 16.416C16.416 15.84 16.416 15.168 16.224 14.976H17.28Z" fill="#FFFFFF"/></svg>
                    </a>
                </div>
            </div>
        </aside>
        <div id="sidebarOverlay" class="sidebar-overlay"></div>
    `;

    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('.main-header');
        if (header) {
            header.insertAdjacentHTML('afterend', menuHTML);
        } else {
            document.body.insertAdjacentHTML('afterbegin', menuHTML);
        }

        const categories = document.querySelectorAll('.nav-category');
        categories.forEach(cat => {
            const title = cat.querySelector('.category-title');
            const links = cat.querySelector('.category-links');
            if (title && links) {
                links.style.display = 'none';
                cat.classList.remove('open');
                title.addEventListener('click', () => {
                    const isOpen = links.style.display !== 'none';
                    links.style.display = isOpen ? 'none' : 'block';
                    cat.classList.toggle('open', !isOpen);
                });
            }
        });

        const btn = document.getElementById('hamburgerBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        if (btn && sidebar && overlay) {
            function openMenu() {
                sidebar.style.right = '0px';
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            function closeMenu() {
                sidebar.style.right = '-280px';
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            btn.addEventListener('click', openMenu);
            overlay.addEventListener('click', closeMenu);
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && sidebar.style.right === '0px') closeMenu();
            });
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && sidebar.style.right === '0px') closeMenu();
            });
        }
    });
})();