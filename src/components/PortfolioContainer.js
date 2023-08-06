import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/AboutMe';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About Me');
  
    const renderPage = () => {
      if (currentPage === 'About Me') {
        return <About />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    );
  }
  