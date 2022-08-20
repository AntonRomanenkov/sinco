import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const BlogStandardContent = [
    {
        img: 'blog_img_20',
        tag1: 'UI/UX Design',
        tag2: '- 10 minute read',
        title: 'How Ai Technology Work?',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
        orci massa ante pharetra tellus interdum..`,
        text: '[Read More]',
    },
    {
        img: 'blog_img_21',
        tag1: 'Mobile App',
        tag2: '- 10 minute read',
        title: 'Boost your Business on Mobile App.',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
        orci massa ante pharetra tellus interdum..`,
        text: '[Read More]',
    },
    {
        img: 'blog_img_22',
        tag1: 'UI/UX Design',
        tag2: '- 10 minute read',
        title: 'Artificial Intelligence going to dominate.',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
        orci massa ante pharetra tellus interdum..`,
        text: '[Read More]',
    },
    {
        img: 'blog_img_23',
        tag1: 'Mobile App',
        tag2: '- 10 minute read',
        title: 'Boost your Business on Mobile app.',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
        orci massa ante pharetra tellus interdum..`,
        text: '[Read More]',
    },
    {
        img: 'blog_img_24',
        tag1: 'Machine',
        tag2: '- 10 minute read',
        title: 'Invalid Data Markup did cause Action.',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
        orci massa ante pharetra tellus interdum..`,
        text: '[Read More]',
    },
]

const BlogStandardOne = () => {
    return (
        <Fragment>
            {BlogStandardContent.map((val, i) => (
                <article key={i} className="blog-meta-three tran3s mt-45">
                    <figure className="post-img m0">
                        <Link to="/blog-details" className="w-100 d-block"><img src={`images/blog/${val.img}.jpg`} alt="" className="w-100 tran4s"/></Link>
                    </figure>
                    <div className="post-data">
                        <div className="post-tag">
                            <Link to="/blog-details">{val.tag1}</Link>
                            {val.tag2}</div>
                        <Link to="/blog-details" className="blog-title">
                            <h4>{val.title}</h4>
                        </Link>
                        <p>L{val.desc}
                            <Link to="/blog-details" className="read-more">{val.text}</Link>
                        </p>
                    </div>
                    {/* /.post-data */}
                </article>
            ))}
        </Fragment>
    )
}

export default BlogStandardOne