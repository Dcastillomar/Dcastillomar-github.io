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

export default function Contact() {
  return (
    <div style={styles.heading}>
      <h4>Contact</h4>
      <form class="row g-3">
        <div class="col-md-6">
          <label for="inputName" class="form-label">Name</label>
          <input type="email" class="form-control" id="inputName" placeholder="John Doe"></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail" class="form-label">Email</label>
          <input type="password" class="form-control" id="inputEmail" placeholder="username@email.com"></input>
        </div>
        <div class="col-12">
          <label for="inputText" class="form-label">Message</label>
          <input type="text" class="form-control" id="inputText" placeholder="Message"></input>
        </div>
      </form>
    </div>
  );
}
