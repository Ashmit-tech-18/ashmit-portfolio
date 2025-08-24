import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ImageSlider from './ImageSlider';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/blogs');
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };
        fetchBlogs();
    }, []);

    return (
        <div className="card-blogs">
            <section id="blogs" className="section">
                <h2 className="section-title">Blogs & Talks</h2>
                <div className="blogs-grid">
                    {blogs.map((blog) => {
                        const imageFolderPath = blog.image.replace('client/public/assets', '/assets');

                        return (
                            <div key={blog._id} className="blog-card">
                                <ImageSlider imageFolder={imageFolderPath} />
                                
                                <div className="blog-content">
                                    <h3>{blog.title}</h3>
                                    <p>{blog.shortIntro}</p>
                                    <Link to={`/blogs/${blog._id}`} className="explore-btn">
                                        Explore →
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Blogs;
