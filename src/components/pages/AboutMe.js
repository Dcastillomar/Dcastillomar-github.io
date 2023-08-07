import React from 'react';

const styles = {
  heading: {
    background: 'cadetblue',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '30px 20px',
  },
  content: {
    padding: 20,
  },
};

export default function About() {
  return (
    <div style={styles.heading}>
      <h4>About Me</h4>
      <p>
        Results-driven business management and leadership graduate with a Master's degree, now transitioning into the field of web development. Currently enrolled in the UT Bootcamp for Full Stack Web Development, honing expertise in front-end and back-end technologies. Combining a strong business acumen with emerging web development skills, I bring a unique blend of strategic thinking and technical aptitude. Adaptable and collaborative, I thrive in fast-paced environments and embrace challenges. Committed to staying at the forefront of industry trends, I aim to leverage my knowledge and skills to create innovative digital solutions that deliver exceptional user experiences.

        Besides dreaming of becoming a web developer, I enjoy collecting trading cards like Pokemon, Yugioh and Weiss Schwarz cards. I also have a welding certification and I enjoy welding small projects.

        I love spending time with my wife and my animals (4 cats and 2 dogs). I'm a weeb and love watching anime. I spend a lot of time practicing code and working on side projects. I genuinely like to learn so you will often find me looking how to repair household items or something like how to install window tint on a car.
      </p>
      <img src="IMG_6632 (1).jpg" alt="Diana Castillo"></img>
    </div>
  );
}