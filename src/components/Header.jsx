import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebook, FaGooglePlus, FaVimeoV, FaPinterest,
} from 'react-icons/fa';
import { selectUser } from '../redux/usersession/usersessionsSlice';
import Logout from './Logout';
import boatLogo from '../assets/images/boat-logo.png';

const Header = () => {
  const user = useSelector(selectUser);
  const links = [
    { path: '/boats', text: 'Boats' },
    ...(user ? [
      { path: '/reserve', text: 'Reserve' },
      { path: '/my-reservations', text: 'My Reservations' },
      { path: '/add-boat', text: 'Add Boat' },
      { path: '/delete-boat', text: 'Delete Boat' },
    ] : []),
    ...(user ? [] : [{ path: '/login', text: 'Login' }, { path: '/signup', text: 'Sign up' }]),
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile */}
      <article className="lg:hidden">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="lg:hidden"
            aria-label="Open"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>

          <img src={boatLogo} alt="Boat Logo" className="w-24 md:w-32" />
        </div>

        <nav
          className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-200 ease-in-out p-4 flex flex-col justify-between ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="lg:hidden"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <img src={boatLogo} alt="Boat Logo" className="w-24 md:w-32" />
          </div>

          <ul className="flex flex-col text-xl font-bold items-center mb-[150px] uppercase">
            {links.map(({ path, text }) => (
              <li key={text} className="w-full">
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center py-4"
                >
                  {text}
                </NavLink>
              </li>
            ))}
            {user && (
              <li className="text-center py-3">
                Hi
                {' '}
                {user.name}
                {' | '}
                <Logout setIsOpen={setIsOpen} />
              </li>
            )}
          </ul>

          <div className="pb-6">
            <div className="flex justify-center space-x-8 py-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://plus.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Plus"
              >
                <FaGooglePlus />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vimeo"
              >
                <FaVimeoV />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
              >
                <FaPinterest />
              </a>
            </div>
            <p className="text-xs text-center">&copy; 2023 Boats</p>
          </div>
        </nav>
      </article>

      {/* Desktop */}
      <article className="hidden lg:flex flex-col justify-between h-full pb-6 border-r-slate-900">
        <img src={boatLogo} alt="boat-logo-full" />

        <nav className="mb-[200px] uppercase">
          <ul className="hidden lg:flex flex-col text-xl m-0 font-bold">
            {links.map(({ path, text }) => (
              <li key={text}>
                <NavLink to={path} className="block text-center py-3">
                  {text}
                </NavLink>
              </li>
            ))}
            {user && (
              <li className="text-center py-6">
                Hi
                {' '}
                {user.name}
                !
                {' | '}
                <Logout />
              </li>
            )}
          </ul>
        </nav>

        <div>
          <div className="flex justify-center space-x-4 py-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://plus.google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Plus"
            >
              <FaGooglePlus />
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vimeo"
            >
              <FaVimeoV />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterest />
            </a>
          </div>
          <p className="text-xs text-center">&copy; 2023-2024 Boats</p>
        </div>
      </article>
    </>
  );
};

export default Header;
