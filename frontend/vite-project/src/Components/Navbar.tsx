import React from 'react'



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
        <div key={index}>{page.name}</div>
      ))}
    </nav>
  )
}

export default Navbar;

