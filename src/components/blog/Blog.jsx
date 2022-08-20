import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const BlogContent = [
    {
        img: 'blog_img_01',
        tag1: 'Data Science',
        tag2: '- 15 minute read',
        title: `Make more daily productive working flow like pro.`,
        display: '',
        dataDelay: ''
    }, 
    {
        img: 'blog_img_02',
        tag1: 'Data Science',
        tag2: '- 10 minute read',
        title: `Internet of the things and why it’s becoming important in the century.`,
        display: '',
        dataDelay: '100'
    }, 
    {
        img: 'blog_img_03',
        tag1: 'Data Science',
        tag2: '- 15 minute read',
        title: `The power product and the quotient rules.`,
        display: '',
        dataDelay: '200'
    }, 
    {
        img: 'blog_img_01',
        tag1: 'Data Science',
        tag2: '- 8 minute read',
        title: `The power product and the quotient rules.`,
        display: 'd-lg-none',
        dataDelay: ''
    }
]

const Blog = () => {
    return ( 
        <Fragment> 
            <div className="row gx-xxl-5">
                {BlogContent.map((item, i) => (
                    <div
                        key={i}
                        className={`col-lg-4 col-sm-6 d-flex ${item.display}`}
                        data-aos="fade-up"
                        data-aos-delay={item.dataDelay}>
                        <article className="blog-meta-one color-two tran3s mt-30">
                            <figure className="post-img m0">
                                <Link to="/blog-details" className="w-100 d-block"><img
                                    src={`images/blog/${item.img}.jpg`}
                                    alt=""
                                    className="w-100 tran4s"/></Link>
                            </figure>
                            <div className="post-data">
                                <div className="post-tag">
                                    <Link to="/blog-details">{item.tag1}</Link> {item.tag2}
                                </div>
                                <Link to="/blog-details" className="blog-title">
                                    <h5>{item.title}</h5>
                                </Link>
                            </div>
                            {/* /.post-data */}
                        </article>
                    </div>
                ))}
            </div> 
        </Fragment>
  )
}

export default Blog