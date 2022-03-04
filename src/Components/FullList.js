import React, { useEffect, useState } from 'react'
import search_icon from '../img/icon-search.png';
import sum_icon from '../img/icon-sum.png';
import edit_icon from '../img/dots-menu/icon-edit.png';
import del_icon from '../img/icon-delete.png';
import back_arrow from '../img/icons-collapse_arrow.png';

export const FullList = ({ current_showing_user_index, setCurrent_showing_user_index, to_show_user_data, setShow_full }) => {
  const [current_showing_user, setCurrent_showing_user] = useState({})

  useEffect(() => {
    let user_list_blocks = document.getElementsByClassName('user_list_blocks');
    [...user_list_blocks].map(el => el.className = 'user_list_blocks');
    document.getElementById('user_list_blocks' + current_showing_user_index).className = 'user_list_blocks active'
    setCurrent_showing_user(to_show_user_data[current_showing_user_index])
  }, [current_showing_user_index])

  const switchusertablenav = (title)=>{
    const usertable_nav_tabs = document.getElementsByClassName('usertable_nav_tabs');
    [...usertable_nav_tabs].map(el=>el.className = 'usertable_nav_tabs');
    document.getElementById(title).className = 'usertable_nav_tabs active';

    const usertable_nav_main_body = document.getElementsByClassName('usertable_nav_main_body');
    [...usertable_nav_main_body].map(el=>el.style = '');
    document.getElementById(title+'_body').style.display = 'unset';
  }
  return (
    <>
      <div className=' fulllist'>
        <div className=' left_div'>
          <div className='navbar_search fulllist_search'>
            <img src={search_icon} />
            <input type='text' placeholder='Try "Merrisa Lewis"' />
          </div>
          <div className='fulllist_userlist'>
            {
              to_show_user_data.map((el, i) =>
                <div onClick={() => setCurrent_showing_user_index(i)} key={i} className='user_list_blocks' id={'user_list_blocks' + i}>
                  <img src={el.img} />
                  <div className='user_list_txt'>
                    <div className='txt1'>{el.first_name} {el.last_name}</div>
                    <div className='txt2'>{el.mobile}</div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className='usertable'>
          <div className='usertable_nav'>
            <div className='usertable_nav_tabs' onClick={(e)=>switchusertablenav(e.target.id)} id='view'>VIEW</div>
            <div className='usertable_nav_tabs active' onClick={(e)=>switchusertablenav(e.target.id)} id='edit'>EDIT</div>
            <div className='usertable_nav_tabs' onClick={(e)=>switchusertablenav(e.target.id)} id='orderhistory'>ORDER HISTORY</div>
            <div className='usertable_nav_tabs' onClick={(e)=>switchusertablenav(e.target.id)} id='analytics'>ANALYTICS</div>
          </div>
          <div className='usertable_nav_body'>
            <div className='usertable_nav_main_body' id='view_body'>view</div>
            <div className='usertable_nav_main_body' id='orderhistory_body'>orderhistory</div>
            <div className='usertable_nav_main_body' id='analytics_body'>analytics</div>
            <div className='usertable_nav_main_body' id='edit_body' style={{display:'unset'}}>
              <div className='usertable_nav_body1'>
                <div className='w-33 d-flex d-center'><img src={current_showing_user.img_full} /></div>
                <div className='w-66  d-flex-column'>
                  <div className='d-flex w-100'>
                    <div className='w-100 p-10-inline'>
                      <div className='usertable_body_label'>First Name</div>
                      <div className='input'>

                        <input type='text' placeholder={current_showing_user.first_name} />
                      </div>
                    </div>
                    <div className='w-100 p-10-inline'>
                      <div className='usertable_body_label'>Last Name</div>
                      <div className='input'>
                        <input type='text' placeholder={current_showing_user.last_name} />
                      </div>
                    </div>
                  </div>
                  <div className='d-flex w-100'>
                    <div className='w-100 p-10-inline'>
                      <div className='usertable_body_label'>Mobile</div>
                      <div className='input'>
                        <input type='text' placeholder={current_showing_user.mobile} />
                      </div>
                    </div>
                    <div className='w-100 p-10-inline'>
                      <div className='usertable_body_label'>Email address</div>
                      <div className='input'>
                        <input type='text' placeholder={current_showing_user.email} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='usertable_nav_body2'>
                <div className='w-100 p-10-inline'>
                  <div className='usertable_body_label d-flex justify-between'>Address <img className='sum_icon' src={sum_icon} /></div>
                  <div className='input'>
                    <textarea type='text' placeholder={current_showing_user.add} />
                  </div>
                  <div className='usertable_body_label_bottom d-flex d-center'>
                    <input type='checkbox' />
                    <div className='set_default me-auto'>set as default</div>
                    <div className='icons'>
                      <img src={edit_icon} />
                      <img src={del_icon} />
                    </div>
                  </div>
                </div>
                <div className='w-100 p-10-inline'>
                  <div className='usertable_body_label d-flex justify-between'>Credit Card <img className='sum_icon' src={sum_icon} /></div>
                  <div className='input creditcard'>
                    <input type='text' className='cardtype' placeholder={current_showing_user.credit_card_type} />
                    <input type='text' className='creditno' placeholder={current_showing_user.credit_card} />
                  </div>
                  <div className='usertable_body_label_bottom d-flex d-center'>
                    <input type='checkbox' />
                    <div className='set_default me-auto'>set as default</div>
                    <div className='icons'>
                      <img src={del_icon} />
                    </div>
                  </div>
                </div>
                <div className='w-100 p-10-inline'>
                  <div className='usertable_body_label'>Notes</div>
                  <div className='input'>
                    <textarea type='text' placeholder={current_showing_user.notes} />
                  </div>
                </div>
              </div>
              <div className='usertable_bottom_nav'>
                <div className='go_back d-flex d-center' onClick={() => setShow_full(false)}><img src={back_arrow} />Back to customer list</div>
                <button>Create Order</button>
                <button>Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
