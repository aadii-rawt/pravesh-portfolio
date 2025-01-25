import React, { useState } from 'react';
import '../output.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="dark:bg-black bg-white text-black dark:text-white flex w-full overflow-hidden p-4 md:pt-10 pb-1">
            <nav className="w-full" role="navigation">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="mr-4 md:mr-8">
                        <a href="/" className="text-2xl font-signika font-bold">
                            psc<span style={{ color: "chocolate" }}>photography</span>
                        </a>
                    </div>
                    <div className="ml-auto md:hidden flex items-center">
                        <button
                            className="tap-highlight-transparent text-black dark:text-white w-5 h-5 relative focus:outline-none"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <div className="space-y-1">
                                <span className="block w-6 h-0.5 bg-current"></span>
                                <span className="block w-6 h-0.5 bg-current"></span>
                                <span className="block w-6 h-0.5 bg-current"></span>
                            </div>
                        </button>
                    </div>
                    <div className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                        <ul className="flex flex-col md:flex-row md:space-x-5 mt-5 md:mt-0">
                            <li className="group">
                                <a href="/" className="font-signika text-2xl tap-highlight-transparent">
                                    PORTFOLIO
                                </a>
                            </li>
                            <li className="group">
                                <Link to='/about' className="font-signika text-2xl tap-highlight-transparent">
                                    ABOUT ME
                                </Link>
                            </li>
                            <li className="group">
                                <Link to='/contact' className="font-signika text-2xl tap-highlight-transparent">
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
