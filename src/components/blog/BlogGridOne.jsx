import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const BlogGridContent = [
    {
        img: 'blog_img_01',
        tag1: 'Data Science',
        tag2: '- 15 minute read',
        title: `Make more daily productive working flow like pro.`,
        fade: 'fade-up',
        dataDelay: '',
    }, 
    {
        img: 'blog_img_02',
        tag1: 'UI/UX Design',
        tag2: '- 10 minute read',
        title: `Internet of the things and why it’s becoming important in the century.`,
        fade: 'fade-up',
        dataDelay: '100',
    }, 
    {
        img: 'blog_img_01',
        tag1: 'Marketing',
        tag2: '- 8 minute read',
        title: `The power product and the quotient rules.`,
        fade: 'fade-up',
        dataDelay: '200',
    }, 
    {
        img: 'blog_img_08',
        tag1: 'Data Science',
        tag2: '- 15 minute read',
        title: `Make more daily productive working flow like pro.`,
        fade: 'fade-up',
        dataDelay: '',
    },
    {
        img: 'blog_img_09',
        tag1: 'UI/UX Design',
        tag2: '- 10 minute read',
        title: `Internet of the things and why it’s becoming important in the century.`,
        fade: 'fade-up',
        dataDelay: '100',
    }, 
    {
        img: 'blog_img_10',
        tag1: 'Marketing',
        tag2: '- 8 minute read',
        title: `The power product and the quotient rules.`,
        fade: 'fade-up',
        dataDelay: '200',
    }, 
    {
        img: 'blog_img_11',
        tag1: 'Data Science',
        tag2: '- 15 minute read',
        title: `Make more daily productive working flow like pro.`,
        fade: 'fade-up',
        dataDelay: '',
    },
    {
        img: 'blog_img_12',
        tag1: 'UI/UX Design',
        tag2: '- 10 minute read',
        title: `Internet of the things and why it’s becoming important in the century.`,
        fade: 'fade-up',
        dataDelay: '100',
    }, 
    {
        img: 'blog_img_13',
        tag1: 'Marketing',
        tag2: '- 8 minute read',
        title: `The power product and the quotient rules.`,
        fade: 'fade-up',
        dataDelay: '200',
    }, 
]

const BlogGridOne = () => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                {BlogGridContent.map((val, i)=>(
                    <div
                    key={i}
                    className="col-lg-4 col-sm-6 d-flex"
                    data-aos={val.fade}
                    data-aos-delay={val.dataDelay}>
                    <article className="blog-meta-one color-two tran3s mt-45">
                        <figure className="post-img m0">
                            <Link to="/blog-details" className="w-100 d-block"><img src={`images/blog/${val.img}.jpg`} alt="" className="w-100 tran4s"/></Link>
                        </figure>
                        <div className="post-data">
                            <div className="post-tag">
                                <Link to="/blog-details">{val.tag1}</Link> {val.tag2}</div>
                            <Link to="/blog-details" className="blog-title">
                                <h5>{val.title}</h5>
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

export default BlogGridOne