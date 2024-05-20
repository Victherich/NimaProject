import React, { useState } from 'react';
import '../CSS/Blogs.css'; // Import CSS file for styling
import blog1 from "../Images/blog11.jpeg"
import blog2 from "../Images/blog22.jpeg"
import blog3 from "../Images/blog33.jpeg"
import blog4 from "../Images/blog44.jpeg"

const Blogs = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: 'Renewable Energy Solutions for Modern Homes and Businesses',
      author: 'Nima Geo Environmental',
      date: 'May 1, 2024',
      imageUrl: `${blog1}`,
      content: 'Integrating renewable energy solutions into homes and businesses is no longer a trend but a necessity for sustainable living. Solar panels, wind turbines, and geothermal systems offer clean, renewable energy that reduces dependence on fossil fuels and lowers utility costs. At Nima Geo, we assist clients in adopting these technologies, providing design and installation services for solar and wind power systems. By harnessing renewable energy, properties can achieve energy independence and significantly reduce their carbon footprint. These solutions not only benefit the environment but also enhance property value and appeal to eco-conscious buyers.',
    },
    {
      id: 2,
      title: 'Transforming Brownfields: Success Stories in Environmental Remediation',
      author: 'Nima geo Environmental',
      date: 'April 15, 2024',
      imageUrl: `${blog2}`,
      content: 'Brownfield sites, often seen as liabilities, can be transformed into valuable assets through effective environmental remediation. At Nima Geo, we specialize in turning these contaminated sites into safe, usable properties. One of our success stories involves the redevelopment of an old industrial site into a thriving commercial complex. Through soil and groundwater cleanup, we removed hazardous substances and restored the land for new uses. These projects not only revitalize communities but also promote sustainable development by repurposing land that would otherwise remain underutilized. Our remediation efforts demonstrate the potential for positive change in the real estate landscape.',
    },
    {
        id: 3,
        title: 'The Future of Sustainable Real Estate: Trends and Innovations',
        author: 'Nima Geo Environmental',
        date: 'April 15, 2024',
        imageUrl: `${blog3}`,
        content: 'The real estate industry is rapidly evolving with a strong focus on sustainability. Innovations in green building practices, eco-friendly materials, and energy-efficient technologies are transforming how properties are designed and built. Solar panels, smart home systems, and sustainable construction materials like bamboo and recycled steel are becoming mainstream. Additionally, urban planning is incorporating more green spaces and public transportation options. These trends not only reduce environmental impact but also increase property value and appeal to eco-conscious buyers. At Nima Geo, we are at the forefront of these changes, integrating the latest sustainable practices into our projects.',
      },
      {
        id: 4,
        title: 'How Environmental Assessments Can Enhance Property Value',
        author: 'Nima Geo Environmental',
        date: 'April 15, 2024',
        imageUrl: `${blog4}`,
        content: 'Environmental assessments play a crucial role in real estate, ensuring that properties are safe, compliant, and sustainable. By identifying potential environmental hazards such as soil contamination, water quality issues, or asbestos, these assessments protect both buyers and sellers from future liabilities. Additionally, properties with a clean bill of environmental health tend to have higher market value and attract more buyers. At Nima Geo, we conduct thorough environmental assessments to help clients make informed decisions, mitigate risks, and enhance the value of their properties through responsible and sustainable practices.',
      },
    
    // Add more blog posts as needed
  ];

  // State to manage expanded state of each blog post
  const [expandedPost, setExpandedPost] = useState(null);

  // Function to toggle expand/collapse of a blog post
  const toggleExpand = (postId) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
    } else {
      setExpandedPost(postId);
    }
  };

  return (
    <div className='BlogsWrap'>
      <h1>Blogs</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-post">
            <img src={post.imageUrl} alt={post.title} />
            <div className="post-info">
              <h2>{post.title}</h2>
              <p><strong>Author:</strong> {post.author}</p>
              <p><strong>Date:</strong> {post.date}</p>
              <p>{expandedPost === post.id ? post.content : `${post.content.slice(0, 150)}...`}</p>
              <button onClick={() => toggleExpand(post.id)}>
                {expandedPost === post.id ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
