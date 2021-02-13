import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
function NavBar() {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='md:flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-2xl md:text-4xl font-bold cursive tracking-widest'
          >
            Aidana
          </NavLink>
          <NavLink
            to='/project'
            activeClassName='text-red-100 bg-red-700'
            className='block md:inline-flex items-center py-3 px-3 my-2 md:my-6 rounder text-red-200 hover:text-green-800'
          >
            Projects
          </NavLink>

          <NavLink
            to='/post'
            activeClassName='text-red-100 bg-red-700'
            className='block md:inline-flex items-center py-3 px-3 my-2 md:my-6  rounder text-red-200 hover:text-green-800'
          >
            Blog Posts
          </NavLink>

          <NavLink
            to='/about'
            activeClassName='text-red-100 bg-red-700'
            className='block md:inline-flex items-center py-3 px-3 my-2 md:my-6 rounder text-red-200 hover:text-green-800'
          >
            About Me
          </NavLink>
        </nav>
        <div className='block md:inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://www.linkedin.com/in/aidana-khank-887444121/'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://github.com/AidanaKhankeldieva?tab=repositories'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          {/* <button
            type='button'
            className='text-gray-100 hover:text-white focus:outline-none'
          >
            <svg viewBox='0 0 100 80' width='40' height='40'>
              <rect width='100' height='20'></rect>
              <rect y='30' width='100' height='20'></rect>
              <rect y='60' width='100' height='20'></rect>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
