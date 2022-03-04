import React, { useState } from 'react'

import dots from '../img/icon-dots.png';
import icon_delete from '../img/dots-menu/icon-delete.png';
import icon_edit from '../img/dots-menu/icon-edit.png';
import icon_eye from '../img/dots-menu/icon-eye.png';

import { FullList } from './FullList';

export const UserTable = ({ to_show_user_data }) => {
  const [current_showing_user_index,setCurrent_showing_user_index] = useState(0);
  const [show_full,setShow_full] = useState(false);
  const dost_menu_toggler = (id) => {
    const dots_menu = document.getElementsByClassName('dots_menu');
    [...dots_menu].map(el => (el.id!=id)&&el.setAttribute('class','dots_menu'));
    document.getElementById(id).classList.toggle('active');
    
  }
  const SwitchTableTOFUllView = (index)=>{
    // event.preventDefault();
    setCurrent_showing_user_index(index);
    setShow_full(true)
    // event.stopPropagation();
  }

  return (
    <>
      {!show_full?<div className='usertable'>
        <div className='table_heading'>
          {
            'PROFILE,FIRST NAME,LAST NAME,MOBILE,EMAIL ADDRESS,CREDIT CARD,TOTAL SALES,LAST ORDER,MENU'.split(",").map((el, i) => <div key={i} className='table_heading_tabs'>{el}</div>)
          }
        </div>
        <div className='table_body'>
          {
            to_show_user_data.map((el, i) =>
              <div onClick={()=>SwitchTableTOFUllView(i)} key={i} className='table_body_tabs'>
                <div className='w-10'>
                  <img src={el.img} />
                </div>
                <div className='w-10'>
                  {el.first_name}
                </div>
                <div className='w-10'>
                  {el.last_name}
                </div>
                <div className='w-15'>
                  {el.mobile}
                </div>
                <div className='w-10 email'>
                  {el.email}
                </div>
                <div className='w-15'>
                  {el.credit_card}
                </div>
                <div className='w-10'>
                  {el.total_sales}
                </div>
                <div className='w-15'>
                  {el.last_order}
                </div>
                <div className='w-5 dots'>
                  <img src={dots} onClick={(e) => {dost_menu_toggler('dots_menu' + i);e.stopPropagation()}} />
                  <div className='dots_menu' id={'dots_menu' + i}>
                    <div>
                      <div><img src={icon_eye} />View</div>
                      <div onClick={()=>{SwitchTableTOFUllView(i)}} ><img src={icon_edit}/>Edit</div>
                      <div><img src={icon_delete} />Delete</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      :
      <FullList current_showing_user_index={current_showing_user_index} setShow_full={setShow_full} setCurrent_showing_user_index={setCurrent_showing_user_index} to_show_user_data= {to_show_user_data}/> 
    }
      {/* {current_showing_user.first_name  }
      <button onClick={()=>setShow_full(false)}>
      </button> */}
    </>
  )
}
