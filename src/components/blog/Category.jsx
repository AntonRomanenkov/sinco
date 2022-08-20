import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const CategoryContent = [
    {
      text: 'Machine Learning',
      num: '(03)',
      routerPath: '/blog-details',
      className: 'category' 
    },
    {
      text: 'Big Data Services',
      num: '(05)',
      routerPath: '/blog-details' ,
      className: ''
    },
    {
      text: 'Chatboot',
      num: '(08)',
      routerPath: '/blog-details',
      className: ''
    },
    {
      text: 'User Analysis',
      num: '(10)',
      routerPath: '/blog-details',
      className: ''
    },
    {
      text: 'Artificial',
      num: '(02)',
      routerPath: '/blog-details',
      className: '' 
    },
    {
      text: 'Intelligence',
      num: '(11)',
      routerPath: '/blog-details',
      className: '' 
    },
]

const Category = () => {
    return (
        <Fragment>
            <ul className="style-none">
               {CategoryContent.map((val, i)=>(
                    <li key={i} className={`${val.className}`}>
                    <Link to={val.routerPath}>{val.text} <span>{val.num}</span></Link>
                </li>
               ))}
            </ul>
        </Fragment>
    )
}

export default Category