import React from 'react'

import user1 from '../img/people/user1.png';
import user2 from '../img/people/user2.png';
import user3 from '../img/people/user3.png';
import user4 from '../img/people/user4.png';
import user5 from '../img/people/user5.png';
import user6 from '../img/people/user6.png';

import user3_full from '../img/people/user3_full.png';

import { RevenueBox } from './RevenueBox';
import { UserTable } from './UserTable';

export const Dashboard = () => {
  const revenue = [
    {
      type: 'main',
      title: 'TOTAL REVENUE',
      value: '1,200.00'
    },
    {
      type: '',
      title: 'Number 1',
      value: '100',
      revenue: '1,200.00'
    },
    {
      type: '',
      title: 'Number 2',
      value: '120',
      revenue: '1,200.00'
    },
    {
      type: '',
      title: 'Number 3',
      value: '10',
      revenue: '1,200.00'
    },
  ]
  const user_data = [
    {
      img: user1,
      img_full: user1,
      first_name: 'Merrisa',
      last_name: 'Lewis',
      mobile: '+1234567124',
      email: 'm@lewi.com',
      add: 'add1',
      credit_card_type: 'Type1',
      credit_card: '**** **** 7981',
      total_sales: '130.00',
      last_order: '12/02/2022',
      notes:"Doesn't like it too spicy"
    },
    {
      img: user2,
      img_full: user2,
      first_name: 'Fredy',
      last_name: 'Henry',
      mobile: '+1234567124',
      email: 'm@lewi.com',
      add: 'add2',
      credit_card_type: 'Type2',
      credit_card: '**** **** 7981',
      total_sales: '100.20',
      last_order: '11/02/2022',
      notes:"Doesn't like it too spicy"
    },
    {
      img: user3,
      img_full: user3_full,
      first_name: 'Victor',
      last_name: 'Bent',
      mobile: '+1234567124',
      email: 'm@lewi.com',
      add: 'add3',
      credit_card_type: 'Type3',
      credit_card: '**** **** 7981',
      total_sales: '230.50',
      last_order: '02/02/2022',
      notes:"Doesn't like it too spicy"
    },
    {
      img: user4,
      img_full: user4,
      first_name: 'Cria',
      last_name: 'Zeneva',
      mobile: '+1234567124',
      email: 'm@lewi.com',
      add: 'add4',
      credit_card_type: 'Type4',
      credit_card: '**** **** 7981',
      total_sales: '130.00',
      last_order: '12/02/2022',
      notes:"Doesn't like it too spicy"
    },
    {
      img: user5,
      img_full: user5,
      first_name: 'Moris',
      last_name: 'Thomson',
      mobile: '+1234567124',
      email: 'm@lewi.com',
      add: 'add5',
      credit_card_type: 'Type5',
      credit_card: '**** **** 7981',
      total_sales: '130.00',
      last_order: '12/02/2022',
      notes:"Doesn't like it too spicy"
    },
    {
      img: user6,
      img_full: user6,
      first_name: 'Liana',
      last_name: 'Rivata',
      mobile: '+1234567124',
      email: 'm@lewi.com',
      add: 'add6',
      credit_card_type: 'Type6',
      credit_card: '**** **** 7981',
      total_sales: '130.00',
      last_order: '12/02/2022',
      notes:"Doesn't like it too spicy"
    }
  ]
  return (
    <>
      <div className='dashboard'>
        <RevenueBox to_show={revenue} />
        <UserTable to_show_user_data={user_data} />
      </div>
    </>
  )
}
