import React from 'react';

const Header = props => {
  return (
        <header className="fixed flex justify-between items-center px-4 md:px-12 bg-gray-200 h-24 w-full">
            <a href="#">
                <div className="h-8">Abeeshook</div>
            </a>
            <nav>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8 text-white" fill="none"
                         viewBox="0 0 24 24"
                         stroke="#FFF">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                <ul className="fixed left-0 right-0 min-h-screen space-y-4 p-4 transform translate-x-full bg-blue-500">
                        <li>
                            <a href="#" className="text-white">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                    </ul>
            </nav>
        </header>
  );
};

export default Header;
