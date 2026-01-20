function Footer() {
    return(
        <section className="footer-wrapper">
            <div className="footer-content">
                <p>&copy; 2025 The Indie Bites Kch - created by Silvia. All rights reserved.</p>
            </div>
            <div className="footer-content">
                <p>Follow us:</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/theindiekch/" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                    <a href="https://www.instagram.com/theindiebiteskch/" target="_blank" rel="noopener noreferrer">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Footer;