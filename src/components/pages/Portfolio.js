import React from 'react';
const styles = {
  heading: {
    background: 'cadetblue',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '50px 20px',
    
  },
  content: {
    padding: 20,
  },
};
export default function Portfolio() {
  return (
    <div style={styles.heading}>
      <h4>Portfolio</h4>
      <section class="resume-section" id="projects">
        <div class="resume-section-content">Tech-Blog
        <br></br>
        <a class="github" href="https://github.com/Dcastillomar/Tech-blog">Github</a>
          <a class="d-none d-md-block" href="https://project14blog-82f331f77726.herokuapp.com/"><img
            class="img-fluid img-profile mx-auto mb-2" src="Tech Blog2.png" alt="..." /></a>
            WeatherFinder
            <br></br>
        <a class="github" href="https://github.com/Dcastillomar/weatherFinder">Github</a>
          <a class="d-none d-md-block" href="https://dcastillomar.github.io/weatherFinder/"><img
            class="img-fluid img-profile mx-auto mb-2" src="Screenshot 2023-07-17 152351.png"
            alt="..." /></a>
            Password-Generator
            <br></br>
        <a class="github" href="https://github.com/Dcastillomar/password-generator">Github</a>
          <a class="d-none d-md-block" href="https://dcastillomar.github.io/password-generator/"><img
            class="img-fluid img-profile mx-auto mb-2" src="password-generator.png"
            alt="..." /></a>
            Resume
            <br></br>
        <a class="github" href="https://github.com/Dcastillomar/resume">Github</a>
          <a class="d-none d-md-block" href="https://dcastillomar.github.io/resume/"><img
            class="img-fluid img-profile mx-auto mb-2" src="resume.png"
            alt="..." /></a>
            Notetaker App
            <br></br>
        <a class="github" href="https://github.com/Dcastillomar/note-taking-app">Github</a>
          <a class="d-none d-md-block" href="https://mighty-lowlands-18862.herokuapp.com/notes"><img
            class="img-fluid img-profile mx-auto mb-2" src="Notetaker App.png"
            alt="..." /></a>
            Calendar Scheduler
            <br></br>
        <a class="github" href="https://github.com/Dcastillomar/calendar-schedule">Github</a>
          <a class="d-none d-md-block" href="https://dcastillomar.github.io/calendar-schedule/"><img
            class="img-fluid img-profile mx-auto mb-2" src="Calendar-app.png"
            alt="..." /></a>



        </div>
      </section>
    </div>
  );
}