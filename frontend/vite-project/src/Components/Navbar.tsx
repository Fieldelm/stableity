import React from 'react';
import { NavLink } from 'react-router-dom';




type Page = {
  name: string,
  route: string
}

type NavbarProps = {
  pages: Page[]
}



const Navbar = (props: NavbarProps) => {
  return (
    <nav className='navbar'>
      <ul className='navbar__list'>
              {props.pages.map((page: Page, index: number) => (
            <li className='navbar__list__item'>
            <NavLink key={index} to={page.route}>{page.name}</NavLink>
            </li>
          ))}
       
      </ul>

    </nav>
  )
}

export default Navbar;

