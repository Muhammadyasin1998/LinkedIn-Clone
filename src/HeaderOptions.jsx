import React from 'react'
import "./HeaderOption.css";

function HeaderOptions({title,Icon,avatar}) {
  return (
    <div className='headerOptions'>
     {Icon && <Icon className='headerOptions_icon'/>}
        {avatar && <img src={avatar} alt="" className='headerOptions_icon'/>}
        <h3 className='headerOptions_title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions
