import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Header({sites}) {
  return (
    <Breadcrumb>
    {sites.map(({title})=>(
      <Breadcrumb.Item key= {title}>
     {title}
      </Breadcrumb.Item>
    ))}
    </Breadcrumb>
  )
}
