import React from 'react'
import plus from '../img/plus.png';
import search_icon from '../img/icon-search.png';

export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className='navbar_title'>Customers</div>
      <div className='navbar_search'>
        <img src={search_icon}/>
        <input type='text' placeholder='Try "Merrisa Lewis"'/>
      </div>
      <div className='navbar_addCustomer'>
        <img src={plus}/>
        Add Customer
        </div>
    </div>
    </>
  )
}
