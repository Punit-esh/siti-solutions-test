import React from 'react'
import icon_male_user from '../img/icon-male-user.png';
import icon_timeline1 from '../img/icon-timeline1.png';
import icon_timeline2 from '../img/icon-timeline2.png';

export const Aside = () => {
  return (
    <>
    <div className='aside'>
      <div className='aside_tabs'>
      <img src={icon_male_user}/>
      <img src={icon_male_user}/>
      <img src={icon_male_user}/>
      <img src={icon_timeline1}/>
      <img src={icon_timeline2}/>
      </div>

    </div>
    </>
  )
}
