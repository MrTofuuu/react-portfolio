import React, { useState } from 'react';
import NavTabs from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        switch (currentPage){
            case 'Home':
                return <Home />;
            case 'About':
                return <About />;
            case 'Projects':
                return <Projects />;
            default:
                console.log('default switch case has been triggered');
        }
        
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
