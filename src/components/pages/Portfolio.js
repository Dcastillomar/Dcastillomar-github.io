import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h4>Portfolio</h4>
      <section class="resume-section" id="projects">
            <div class="resume-section-content">
                <a class="social-icon" href="https://github.com/Dcastillomar">Visit my github for more projects<i
                        class="fab fa-github"></i></a>
                <br></br>
                <a class="d-none d-md-block" href="https://project14blog-82f331f77726.herokuapp.com/"><img
                        class="img-fluid img-profile mx-auto mb-2" src="Tech Blog2.png" alt="..." /></a>
                <a class="d-none d-md-block" href="https://dcastillomar.github.io/weatherFinder/"><img
                        class="img-fluid img-profile mx-auto mb-2" src="Screenshot 2023-07-17 152351.png"
                        alt="..." /></a>
                <a class="d-none d-md-block" href="https://dcastillomar.github.io/password-generator/"><img
                        class="img-fluid img-profile mx-auto mb-2" src="password-generator.png"
                        alt="..." /></a>

            </div>
        </section>
    </div>
  );
}