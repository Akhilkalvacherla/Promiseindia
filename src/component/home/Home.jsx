import React, { useState } from 'react';
import './Home.css'; // Assuming you have an external CSS file
import GoogleForm from '../googleform/Googleform';
import Volunteer from '../volunteerform/Volunteer';
const Home = () => {
  const [showForm , setShowForm] = useState(false);
  const handleDonateClick = () => {
    setShowForm(true);
    
  };
  
  const [vlntrForm, setVlntrForm] = useState (false);
    const volunteerClick = () => {
      setVlntrForm(true);

    };
    const [donate, setDonate] = useState(false);
    const donateClick = () => {
      setDonate(true);
    }

  return (
    <div>
      {/* Header */}
      <header>
        <div className="title">
          <h1>Building Hope, Fulfilling Dreams</h1>
        </div>
        <div className="button">
          <a href="#" className="btn" onClick={donateClick} >Donate Now</a>
        </div>
      </header>
      {donate && <GoogleForm/>}
      {/* About Section */}
      <div className="container">
        <div className="about">
          <h4>About Us</h4>
          <h1>Help is our Main Goal</h1>
          <p>
            Promise a Care for India is a non-profit organisation established on July 9, 2024,
            with the belief that this nation is bigger than the individual. Our main aim is to
            constantly work for the welfare of underprivileged children who lack access to basic
            amenities. Taking this issue as a major impact, we are working to create hope and a better future.
          </p>
          <p>
            We work hard to ensure education for everyone, which fosters an impactful way of thinking
            for children. Our organization also works for the welfare of society, focusing on the
            environment, animal welfare, creating a healthier India, and supporting aged individuals.
          </p>
          <p>
            It's a big promise from our team and the Promise-India organisation.
            <br />
            REGARDS <br />
            PROMISE A CARE FOR INDIA
          </p>
        </div>

        <div className="photo">
          <h1>We are an Awesome Volunteer Team</h1>
          <p>Foster a positive and inclusive environment</p>
          <p>where volunteers feel valued and appreciated.</p>
          <p>Ensure that new volunteers are warmly</p>
          <p>welcome and integrated into the team.</p><br /><br />
          <a href="aboutus.jpg"><h2>BECOME A VOLUNTEER</h2></a>
        </div>
      </div>

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
            
              <button className="botn" onClick={handleDonateClick}>Donate Now</button>
           
          </div>

          <div className="two">
            <img src="images/slate.jpg" alt="Donate slate" />
            <h2>Donate a slate for these poor children</h2>
            <h3>Rs 600 /-20 Person</h3>
            <p>#Donate a slate for poor children</p>
            <p>#Get a free video of them wishing you</p>
            <button className="botn" onClick={handleDonateClick}>Donate Now</button>
          </div>

          <div className="three">
            <img src="images/edct.jpg" alt="Sponsor education" />
            <h2>Sponsor a kid's monthly education</h2>
            <h3>Rs 699 /-MONTH</h3>
            <p>#Get videos & pictures of them studying from your help for free</p>
            <p>#lets educate child </p>
            <button className="botn" onClick={handleDonateClick}>Donate Now</button>
          </div>
        </div>
      </div>
      {showForm && <GoogleForm />}
      {/* More Donation Options */}
      <div className="container3">
        <div className="cards">
        <div className="one">
            <img src="images/donateg.jpg" alt="Wish video" />
            <h2>Get a Wish Video for your special day</h2>
            <h3>Rs 2500 / 100 Persons</h3>
            <p>Feed the homeless people and children and get a wish video from them</p>
            <button className="botn" onClick={handleDonateClick}>Donate Now</button>
          </div>

          <div className="two">
            <img src="images/aboutus.jpg" alt="Feed kids" />
            <h2>Feed hungry kids & see them smile</h2>
            <h3>Rs 35 /-Person</h3>
            <p>#Get every single picture of food donated</p>
            <p>#Feed 50 kids & get a wish video from them</p>
            <p>Lorem, ipsum.</p>
            <button className="botn" onClick={handleDonateClick}>Donate Now</button>
          </div>

          <div className="three">
            <img src="images/blanket.webp" alt="Donate blanket" />
            <h2>Donate blanket to the homeless people</h2>
            <h3>Rs 199 /-Person</h3>
            <p>#Winter is not cozy for all! For some, it is very scary</p>
            <p>#Doante a blanket</p>
            <button className="botn" onClick={handleDonateClick}>Donate Now</button>
          </div>
        </div>
      </div>
   
      {/* Projects Section */}
      <div className="projects">
        <h4>What we did</h4>
        <h1>Promise India Projects</h1>
      </div>

      <div className="container4">
        <div className="slate1"></div>
        <div className="slate2">
          <h1>Education</h1>
          <h2>Promise India for Help</h2>
          <h4>
            We donated slates to poor children in a slum area <br /> on the occasion of a birthday celebration
            in Warangal Labour Colony, Telangana, <br /> with the help of 6 volunteers in the evening.
          </h4>
          <br />
          <h5>Date: 22/06/24</h5>
        </div>
      </div>

      <div className="container5">
        <div className="ga"></div>
        <div className="ya"></div>
        <div className="thri">
          <h1>Food Donation</h1>
          <h2>Promise India for Help</h2>
          <h4>
            We donated a food parcel of veg rice to about 40 poor, homeless people at Warangal Railway Station
            on the occasion of a marriage at Hanmakonda.
          </h4>
          <h5>Date: 12/03/24</h5>
        </div>
      </div>

      {/* Volunteer Section */}
      <div className="container6">
        <h2 className="vlntr">Volunteer</h2>
        <h3>Volunteers don't get paid, not because they're worthless, but because they're priceless</h3>
        <button onClick={volunteerClick}>Become a Volunteer</button>
      </div>
{vlntrForm && <Volunteer/>}
      {/* Testimonials Section */}
      <div className="container7">
        <div className="testi">
          <h4>Testimonials</h4>
          <h1>What People Say About Us</h1>
        </div>

        <div className="monials">
          <h3>Volunteer Experience:</h3>
          <h5>
            "Volunteering with Promise India has been one of the most meaningful experiences of my life. 
            The organization is dedicated to making real change, and I am proud to contribute both my time 
            and financial support to their mission."
          </h5>
          <h6>---Karthik Badela</h6>

          <h3>General Donor Impact:</h3>
          <h5>
            "I’ve been donating to Promise India for several years now, and I continue to be impressed by the
            tangible impact they make. Every time I receive an update, I see how my contributions are being used
            to support real, meaningful change."
          </h5>
          <h6>---Prashanth Dachepally</h6>
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
export default Home;

