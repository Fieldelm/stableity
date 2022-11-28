import React from 'react'


type NavbarProps = {
  titles: string[]
}

const Navbar = (props: NavbarProps) => {
  return (
    <nav>
      {props.titles.map((value:string, index:number) =>(
        <div key={index}>{value}</div>
      ))}
    </nav>
  )
}

export default Navbar;