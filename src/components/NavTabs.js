import React from 'react';
import "../styles/style.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-light bg-light">
      <ul class="nav justify-content-end nav-underline">
        <li class="nav-item">
          <a class="nav-item nav-link active"
            href="#AboutMe"
            onClick={() => handlePageChange('About Me')}

            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link active"
            href="#Resume"
            onClick={() => handlePageChange('Resume')}

            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link active"
            href="#Portfolio"
            onClick={() => handlePageChange('Portfolio')}

            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-item nav-link active"
            href="#contact"

            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav >
  );
}

export default NavTabs;