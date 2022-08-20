import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const BlogItemTwo = [
    {
        blogImg: 'blog_img_04',
        meta: '3 Apr, 2021',
        title: `A Discount Cartridge dsu is Better Ever.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
        className: '',
        fadeUp: 'fade-up',
        dataDelay: ''
    }, {
        blogImg: 'blog_img_05',
        meta: '23 Apr, 2021',
        title: `Truck Side Advertising Isn It Time for action.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
        className: '',
        fadeUp: 'fade-up',
        dataDelay: '100'
    }, {
        blogImg: 'blog_img_06',
        meta: '3 Apr, 2021',
        title: `A discount cartridge dsu is better ever.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
        className: '',
        fadeUp: 'fade-up',
        dataDelay: '200'
    }, {
        blogImg: 'blog_img_05',
        meta: '3 Apr, 2021',
        title: `Truck Side Advertising Isn It Time for action.`,
        text: 'Continue Reading',
        icon: 'fas fa-chevron-right',
        className: 'd-lg-none',
        fadeUp: 'fade-up',
        dataDelay: ''
    }
]

const BlogTwo = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {BlogItemTwo.map((val, i) => (
                    <div key={i} className={`col-lg-4 col-sm-6 d-flex ${val.className}`} data-aos={val.fadeUp} data-aos-delay={val.dataDelay}>
                        <article className="blog-meta-two mt-30">
                            <figure className="post-img m0">
                                <Link to="/blog-details" className="w-100 d-block"><img src={`images/blog/${val.blogImg}.jpg`} alt="" className="w-100 tran4s"/></Link>
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
            </div>
        </Fragment>
    )
}

export default BlogTwo