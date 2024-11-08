import React from 'react'
import './Contact.css';
function Contact() {
  return (
    <div>
      <div className='contacthead'>
      <div className="titlecontact">
            <h1>PROMISE-INDIA</h1>
        </div>
        <div className="title2contact">
            <h2>Contact</h2>
        </div>
        </div>
    
    <div className="contact1">
        <div className="onecnct">
        <h1>Our Contact</h1>
        </div>
        <div className="Location">
        <img  height="90px" width="100px"   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc98rEDRxOkdF8nEuuFJrXwnYmZdJPREWlzFuNZBHM_k3t-zBEhBV12Km2jA&s"/>
        
        <h5> Keerthi Nagar colony, Warangal, Telangana 506013</h5>
        </div>
        <div className="Phone">
            <img  height="90px" width="100px"   src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png"/>
            <h5>[+916281358063]  [+919542704244]  [+919014364346]</h5>
            
        </div>
        <div className="email">
            <img  height="90px" width="100px"   src="https://i.pinimg.com/736x/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.jpg"/>
            <h5>promiseindia@gmail.com</h5>
        </div>
            </div>
            <div className="cntct">
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23472.99705582994!2d79.62134849064644!3d17.98082875316752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3344bf08eb3d6b%3A0x789be533185fa4ae!2sKeerthi%20Nagar%20Colony%2C%20Keerthi%20Colony%2C%20Warangal%2C%20Telangana%20506013!5e0!3m2!1sen!2sin!4v1730911106013!5m2!1sen!2sin" width="600" height="450" ></iframe>
                </div>
                <div className="msg">
                    <h2>Send Message</h2>
                    <h5>*The following info is required</h5>
<input className="txt" type="text" placeholder="First Name*"/>
<input className="txt1" type="text" placeholder="Last Name*"/><br/>
<input className="txt2" type="text" placeholder="Email*"/>
<input className="txt3" type="tel" placeholder="Phone*"/><br/>
<textarea className="txt4" placeholder="Message">Message</textarea><br/>
<button>Send Message</button>
                </div>
            </div>
            <footer>
      <div className="footer-container">
  <div className="footer-left">
    <div className="footer-logo">
      <img height="150px" width="150px" src="images/logog.png" alt="Logo" />
    </div>
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>

  <div className="footer-middle">
    <h3>Contact Us</h3>
    <p>
      <i className="fas fa-map-marker-alt"></i> Warangal, Labour Colony, Telangana, 506001
    </p>
    <p>
      <i className="fas fa-phone-alt"></i> +91 6281358063
    </p>
    <p>
      <i className="fas fa-envelope"></i> promiseindia@gmail.com
    </p>
  </div>

  <div className="footer-right">
    <h3>Support</h3>
    <ul>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Refund Policy</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</div>

      {/* Footer Bottom Section */}
      <div className="container9">
        <div className="rights">
          <h4>@2024 Promise-India foundation. All rights reserved</h4>
          <h4 style={{ color: "rgb(248, 11, 71)" }}>Created by Akhil Kalvacherla. Team</h4>
        </div>
        <div className="Policy">
          <h4>Terms & Conditions | Privacy Policy</h4>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Contact;
