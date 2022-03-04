import React from 'react'

export const RevenueBox = ({ to_show }) => {
  return (
    <div className='revenuebox'>
      {
        to_show.map((el,i) =>
          <div key={i} className={'revenuebox_main' + ((el.type === 'main') ? ' revenue_black' : '')}>
            <div className='title'>{el.title}</div>
            <div className='sub_title'>{(el.type === 'main') ? '$' : '#'}<span>{el.value}</span></div>
            {
              (el.type != 'main') &&
              <div>
                <div className='revenue_divider'></div>
                <div className='revenue'>
                  <span>EST.REVENUE</span>
                  <span>${el.revenue}</span>
                </div>
              </div>
            }

          </div>
        )
      }
    </div>
  )
}
