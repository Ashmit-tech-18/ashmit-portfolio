import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BlogDetailPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/blogs/${id}`);
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };
        fetchBlog();
    }, [id]);

    if (!blog) {
        return <div className="blog-loading">Loading...</div>;
    }

    // Render headings and paragraphs with spacing
    const renderContent = (content) => {
        return content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="blog-subheading">{paragraph.substring(3)}</h2>;
            }
            return <p key={index} className="blog-paragraph">{paragraph}</p>;
        });
    };

    return (
        <div className="blog-detail">
            <div className="blog-detail-container">
                <h1 className="blog-title">{blog.title}</h1>
                <div className="blog-detail-content">
                    {renderContent(blog.fullContent)}
                </div>
                <button 
                    className="back-btn" 
                    onClick={() => navigate("/")}
                >
                    ← Back to Home
                </button>
            </div>
        </div>
    );
};

export default BlogDetailPage;
