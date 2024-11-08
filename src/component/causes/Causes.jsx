import React from 'react';
import './Causes.css';
function Causes() {

  return (
    <div className="Causes">
      <header className='service'>
        <div className="servicetitle">
          <h1>Our Causes</h1>
          <h4>Promise India</h4>
        </div>
      </header>

      {/* Causes Section */}
      <div className="container2">
        <h1>Causes</h1>
        <h3>What we do for all people</h3>
        <div className="cards">
          <div className="one">
            <img src="images/bdayg.jpg" alt="Celebrate special day" />
            <h2>Celebrate your special day with these kids</h2>
            <h3>Rs 1500 / 50 Persons</h3>
            <p>#Cut 2 cakes with these excited kids</p>
            <p>#Get a free video of them wishing you</p>
            <a href="donate.html">
              <button className="botn"  >Donate Now</button>
            </a>
          </div>

          <div className="two">
            <img src="images/slate.jpg" alt="Donate slate" />
            <h2>Donate a slate for these poor children</h2>
            <h3>Rs 600 /-20 Person</h3>
            <p>#Donate a slate for poor children</p>
            <p>#Get a free video of them wishing you</p>
            <button className="botn">Donate Now</button>
          </div>

          <div className="three">
            <img src="images/edct.jpg" alt="Sponsor education" />
            <h2>Sponsor a kid's monthly education</h2>
            <h3>Rs 699 /-MONTH</h3>
            <p>#Get videos & pictures of them studying from your help for free</p>
            <p>#lets educate child </p>
            <button className="botn">Donate Now</button>
          </div>
        </div>
      </div>

      {/* More Donation Options */}
      <div className="container3">
        <div className="cards">
          <div className="one">
            <img src="images/donateg.jpg" alt="Wish video" />
            <h2>Get a Wish Video for your special day</h2>
            <h3>Rs 2500 / 100 Persons</h3>
            <p>Feed the homeless people and children and get a wish video from them</p>
            <button className="botn" >Donate Now</button>
          </div>

          <div className="two">
            <img src="images/aboutus.jpg" alt="Feed kids" />
            <h2>Feed hungry kids & see them smile</h2>
            <h3>Rs 35 /-Person</h3>
            <p>#Get every single picture of food donated</p>
            <p>#Feed 50 kids & get a wish video from them</p>
            <p>Lorem, ipsum.</p>
            <button className="botn">Donate Now</button>
          </div>

          <div className="three">
            <img src="images/blanket.webp" alt="Donate blanket" />
            <h2>Donate blanket to the homeless people</h2>
            <h3>Rs 199 /-Person</h3>
            <p>#Winter is not cozy for all! For some, it is very scary</p>
            <p>#Doante a blanket</p>
            <button className="botn" >Donate Now</button>
          </div>
        </div>
      </div>
       {/* Footer */}

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
      export default Causes;