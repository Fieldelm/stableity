import React from 'react';
import { Link } from 'react-router-dom';




type Page = {
  name: string,
  route: string
}

type NavbarProps = {
  pages : Page []
}



const Navbar = (props: NavbarProps) => {
  return (
    <nav>
      {props.pages.map((page:Page, index:number) =>(
        <Link key={index} to = {page.route}>{page.name}</Link>
      ))}
    </nav>
  )
}

export default Navbar;

