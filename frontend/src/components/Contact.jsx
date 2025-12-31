import React from 'react';

export default function Contact() {
    return(
        <section className="contact container">
            <div className="contact-wrapper">
                {/* Left side contact information */}
                <div className="contact-info">
                    <div className = "info-grid">
                        <div className = "info-card">
                            <span className="icon"><ion-icon name="location-outline"></ion-icon></span>
                            <h3>Address</h3>
                            <p>Kuching, Sarawak, Malaysia</p>
                        </div>
                        <div className = "info-card">
                            <span className="icon"><ion-icon name="call-outline"></ion-icon></span>
                            <h3>Phone</h3>
                            <p>+60-888-1234</p>
                        </div>
                        <div className = "info-card">
                            <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
                            <h3>Email</h3>
                            <p>theindiekch@gmail.com</p>
                        </div>
                    </div>
                    <div className = "contact-map">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255246.49842514435!2d110.16125826716674!3d1.6185173758272908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fb0784258cbf11%3A0xd37257591ab17e72!2sKuching%2C%20Sarawak%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1767205319747!5m2!1sen!2sus" 
                            width="100%" height="100%" style={{border:0}} allowfullscreen="" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
                {/* Right side contact form */}
                <div className="contact-form">
                    <h2>Get in Touch</h2>
                    <form className="form-grid">
                        <div className="input-group">
                            <label>Name:</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="input-group">
                            <label>Email:</label>
                            <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="input-group">
                            <label>Subject:</label>
                            <input type="text" placeholder="Subject" />
                        </div>
                        <div className="input-group">
                            <label>Message:</label>
                            <textarea placeholder="Enter your message here"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
