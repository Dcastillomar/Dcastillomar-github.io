import React from 'react';
const styles = {
  heading: {
    background: 'cadetblue',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};
export default function Resume() {
  return (
    <div style={styles.heading}>
      <h4>Resume</h4>
      <a class="resume" href="https://drive.google.com/file/d/1rYEioJlWrllOJtzPn03Gua6fnWoQ_4_b/view?usp=sharing">Click Here to view my Resume</a>
       <br></br>
       Skills
        <br></br>
        Front-end: HTML5, CSS3, JavaScript, React, Bootstrap
        <br></br>
        Back-end: Node.js, Express, mySQL, NoSQL, MongoDB
        <br></br>
        Version control: Git, GitHub
        <br></br>br
        UI/UX design principles and tools, Responsive and mobile-first web design, Agile development methodologies, Strong leadership and team management abilities
    </div >
          );
}