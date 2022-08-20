import React, {Fragment} from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import { Link } from 'react-router-dom';

const BlogMasonryContent = [
    {
        img: 'blog_img_14',
        meta: '3 Apr, 2021',
        title: `A Discount Cartridge dsu is Better Ever.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
    }, {
        img: 'blog_img_15',
        meta: '23 Apr, 2021',
        title: `Truck Side Advertising Isn It Time for action.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
    }, {
        img: 'blog_img_16',
        meta: '23 Apr, 2021',
        title: `A discount cartridge dsu is better ever.`,
        text: 'Continue Reading',
    }, {
        img: 'blog_img_17',
        meta: '25 Apr, 2021',
        title: `A Discount Cartridge dsu is Better Ever.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
    }
    , {
        img: 'blog_img_18',
        meta: '3 Apr, 2021',
        title: `Truck Side Advertising Isn It Time for action.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
    }
    , {
        img: 'blog_img_19',
        meta: '22 Apr, 2021',
        title: `A Discount Cartridge dsu is Better Ever.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
    }
]

const BlogMasonryOne = () => {
    return (
        <Fragment>
            <div id="isotop-gallery-wrapper" className="grid-2column">
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                350: 1,
                750: 2
            }}>
                <Masonry>
                    {BlogMasonryContent.map((val, i)=>(
                         <div key={i} className="isotop-item d-flex">
                         <article className="blog-meta-two mt-45">
                             <figure className="post-img m0">
                                 <Link to="/blog-details" className="w-100 d-block"><img src={`images/blog/${val.img}.jpg`} alt="" className="w-100 tran4s"/></Link>
                             </figure>
                             <div className="post-data">
                                 <div className="post-tag">
                                     <Link to="/blog-details">{val.meta}</Link>
                                 </div>
                                 <Link to="/blog-details" className="blog-title">
                                     <h5>{val.title}</h5>
                                 </Link>
                                 <Link to="/blog-details" className="read-btn tran3s">{val.text} <i className={val.icon}/></Link>
                             </div>
                             {/* /.post-data */}
                         </article>
                     </div>
                    ))}
                    {/* /.row */}
                </Masonry>
            </ResponsiveMasonry>
            </div>
        </Fragment>
    )
}

export default BlogMasonryOne
