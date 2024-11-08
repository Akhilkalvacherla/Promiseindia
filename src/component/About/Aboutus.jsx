import React from 'react'
import './AboutUs.css';
function Aboutus() {
  return (
    
    <div>
        <header className='aboutushead'>
       <div className="abouttitle">
            <h1>PROMISE-INDIA</h1>
        </div>
        <div className="abouttitle2">
            <h2>AboutUs</h2>
        </div>
        </header>
    
    <div className="akhil">
        <div className="ak">
            <video src="images/vedio.mp4"  alt ="autoplay ,loop" ></video>
        </div>
        <div className="hil">
            <h1>Help is our Main Goal</h1>
            <p>Promise a care for india is a non -profit organisation which established on july 9 2024 with a thought of this Nation is bigger than the individual So our main aim is we constantly work for the welfare of the children who are underprivileged and far away for basic amenities like other children so Taking this issue as a biggest impact where we can create.

            </p>
            <p>So we took up this challenging Work Which makes underprivileged children to feel special and create a hope .In our views our main objective of this NGO  is education for everyone which makes a huge and impactful thought in children.where this education creates a children's  to think out of the box.With this our organization continuously work for the society regarding All social difference activities we work for Environment , welfare of animals, creating a healthy india , staying back for the big pillar of our country aged people .</p>
            <p>Apart from this we really work hard for the betterment of society which includes everything.
                it's a big promise from our team and organisation of PROMISE-INDIA  
                REGARDS 
                PROMISE A CARE FOR INDIA</p>
        </div>
    </div>
    
    <div className='youtube'>
      <h1>Projects done by Promise-india</h1>
    <iframe width="900px" height="500px" src="https://www.youtube.com/embed/KOoBeGzAIx4?si=t9F49keWieQAnppT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   <iframe width="900px" height="500px"src="https://youtube.com/embed/UiQVh9kAR2c?si=eLNjM1OOx8YRUEuh" frameborder="0"></iframe>
    </div>
    <div className="bgnd">
        <div>
        <h1 >Consern About Our Mission</h1>
        <img src="images/logog.png" />
    </div>
        <div className="frst">
            <h2>OUR MISSION</h2>
<h3>Concern About Our Mission</h3>
<h4>PROMISE-INDIA  is a non-profit organization with the aim of improving the lives of individuals by providing basic necessities.</h4>
        </div> <br />
        <div className="scnd">
            <h2>OUR VISION</h2>
            <h3>Concern About Our Mission</h3>
            <h4>Our efforts are aimed at combating poverty and social isolation while reigniting hope for a better future. We believe that everyone has the right to equal access to the resources and opportunities needed for a dignified life and full participation in society. Our dream is a world without starvation, hunger, or poverty, and we are dedicated to making that vision a reality.</h4>

        </div>
        <br />
        <div className="thrd">
            <h2>OUR GOAL</h2>
            <h3>Concern About Our Mission</h3>
            <h4>With your participation, we aspire to uplift humanity by enhancing the well-being of all, including humans, animals, and the environment. Together, we can address imbalances in society by empowering underprivileged individuals and guiding them toward a world characterized by equality, dignity, and respect.</h4>
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

export default Aboutus;
