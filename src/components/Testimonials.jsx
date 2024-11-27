import React from "react";
import "../styles/styles.css";
import img1 from "../assets/img/kuwa.jpg";
import img2 from "../assets/img/sam.jpg";
import img3 from "../assets/img/dudu.jpg";

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials">
        <h2>What Our Clients Say</h2>
        <p class="section-description">
          Hear from our satisfied customers who have transformed their spaces
          with our furniture services.
        </p>
        <div class="testimonial-container">
          <div class="testimonial-card">
            <div class="testimonial-image">
              <img src={img1} alt="Client 1" />
            </div>
            <div class="testimonial-content">
              <p class="quote">
                "The furniture design service completely transformed my living
                room! I couldn't be happier with the results."
              </p>
              <h4 class="client-name">Sarah Johnson</h4>
              <span class="client-role">Homeowner</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-image">
              <img src={img2} alt="Client 2" />
            </div>
            <div class="testimonial-content">
              <p class="quote">
                "Custom furniture that fits my style perfectly! The team was
                professional and attentive to my needs."
              </p>
              <h4 class="client-name">Michael Smith</h4>
              <span class="client-role">Interior Designer</span>
            </div>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-image">
              <img src={img3} alt="Client 3" />
            </div>
            <div class="testimonial-content">
              <p class="quote">
                "I love my new sofa! The upholstery service was top-notch, and
                the quality is outstanding."
              </p>
              <h4 class="client-name">Emily Davis</h4>
              <span class="client-role">Business Owner</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
