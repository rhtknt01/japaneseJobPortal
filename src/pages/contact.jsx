const Contact = ()=>{
    return(
        <div class="contact_container">
            <div className="contact_container_details">
    <h2 className="aboutus_header">Get in Touch</h2>
    <p className="title">If you have any questions, feedback, or inquiries, feel free to reach out to us using the contact information provided below.</p>
            </div>
    
    <div class="contact-info">
      <h3 className="aboutus_header">Our Office</h3>
      <p className="title"><strong>Japanese Work Opportunities</strong></p>
      <p className="title">5-17 Nishishinmachi, Tokushima City, Tokushima Prefecture, Japan</p>
      <p className="title">Phone: +123 456 7890</p>
      <p className="title">Email: info@japanese-work-opportunities.com</p>
      <p className="title">Website: <a href="https://www.japanese-work-opportunities.com">www.japanese-work-opportunities.com</a></p>
    </div>

    <div className="map">
      <iframe title="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.163386064119!2d134.5644379518373!3d34.065776625084896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35559960a5e5e07b%3A0x31f7e861607c4007!2sNishishinmachi%2C%20Tokushima%20City%2C%20Tokushima%20790-0003%2C%20Japan!5e0!3m2!1sen!2sus!4v1617048591683!5m2!1sen!2sus" allowFullScreen="" loading="lazy"></iframe>
    </div>
  </div>
    );
};
export default Contact;