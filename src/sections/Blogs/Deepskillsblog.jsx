import React, { useState } from "react";
import "./Deepskillsblog.css";
import img from '../../assets/Blog-images/awards.c2ac1af8ab93f8e1.svg'

const categories = ["All", "Tech", "Career", "Design", "Education", "General"];

const posts = [
  {
    id: 1,
    category: "Education",
    title: "How to Build a Portfolio That Gets Attention",
    desc: "A practical guide to building a student portfolio that shows skill, process, and confidence.",
    date: "May 6, 2026",
    readTime: "1 min read",
    image: img,
  },
  {
    id: 2,
    category: "Career",
    title: "How to Prepare for Your First Freelance Client",
    desc: "Before taking your first client, prepare your process, communication, scope, pricing, and delivery checklist.",
    date: "May 6, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 3,
    category: "Education",
    title: "Why Project Based Learning Works Better",
    desc: "Project based learning helps students understand real workflows, solve practical problems, and build confidence faster.",
    date: "May 5, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 4,
    category: "Design",
    title: "UI UX Principles Developers Should Learn",
    desc: "Good interfaces are not only beautiful. They are clear, usable, consistent, and easy to understand.",
    date: "May 4, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 5,
    category: "Tech",
    title: "Laravel Skills Every Backend Developer Should Know",
    desc: "A focused guide to the Laravel concepts students should master for real-world backend development.",
    date: "May 3, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 6,
    category: "Career",
    title: "Top Tech Career Paths for Beginners",
    desc: "Explore beginner-friendly tech career paths, the skills they require, and how to choose the right direction.",
    date: "May 2, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 7,
    category: "Tech",
    title: "WordPress Skills That Help Freelancers Earn",
    desc: "A beginner-friendly guide to WordPress skills that are useful for client work, small business websites, and freelancing.",
    date: "Apr 28, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 8,
    category: "Career",
    title: "How to Choose Between React and Laravel",
    desc: "React and Laravel solve different problems. This guide helps beginners understand which path fits their goals.",
    date: "Apr 26, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 9,
    category: "Design",
    title: "Design Mistakes Beginners Should Avoid",
    desc: "Simple design mistakes can make good work feel unprofessional. Learn what to avoid when creating websites and...",
    date: "Apr 24, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 10,
    category: "General",
    title: "What Makes a Course Job Ready",
    desc: "A job-ready course should teach fundamentals, practical tools, project delivery, communication, and portfolio...",
    date: "Apr 22, 2026",
    readTime: "2 min read",
    image: null,
  },
  {
    id: 11,
    category: "Education",
    title: "How Students Can Practice Coding Every Day",
    desc: "A simple daily coding practice routine for beginners who want to improve steadily without feeling overwhelmed.",
    date: "Apr 20, 2026",
    readTime: "2 min read",
    image: null,
  },
];

const PAGE_SIZE = 3;

export default function DeepSkillsBlog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  // "All" shows every card, no pagination limit
  const isAll = activeCategory === "All";

  const totalPages = isAll ? 1 : 2;
  const pageSize = isAll
    ? filteredPosts.length
    : Math.max(1, Math.ceil(filteredPosts.length / 2));

  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * pageSize;
  const visiblePosts = isAll
    ? filteredPosts
    : filteredPosts.slice(startIndex, startIndex + pageSize);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    setPage(1);
  };

  const goPrev = () => setPage((p) => Math.max(1, p - 1));
  const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="dsblog-wrapper">
      <h2 className="dsblog-heading">DeepSkills Blog</h2>
      <p className="dsblog-subtext">
        Tips, guides and insights on tech skills, career growth and learning.
      </p>

      <div className="dsblog-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`dsblog-tab ${activeCategory === cat ? "dsblog-tab-active" : ""}`}
            onClick={() => handleCategoryClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="dsblog-grid">
        {visiblePosts.map((post) => (
          <div className="dsblog-card" key={post.id}>
            <div className="dsblog-image">
              {post.image ? (
                <img src={post.image} alt={post.title} />
              ) : (
                <div className="dsblog-image-placeholder">
                  <span>{post.category.toUpperCase()}</span>
                </div>
              )}
            </div>

            <div className="dsblog-content">
              <div className="dsblog-category">{post.category.toUpperCase()}</div>
              <h3 className="dsblog-title">{post.title}</h3>
              <p className="dsblog-desc">{post.desc}</p>

              <div className="dsblog-meta">
                <span className="dsblog-avatar">D</span>
                <span className="dsblog-author">DeepSkills Team</span>
                <span className="dsblog-dot">•</span>
                <span className="dsblog-date">{post.date}</span>
                <span className="dsblog-dot">•</span>
                <span className="dsblog-readtime">{post.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dsblog-pagination">
        <button
          className="dsblog-page-btn"
          onClick={goPrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          className={`dsblog-page-num ${currentPage === 1 ? "dsblog-page-num-active" : ""}`}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button
          className={`dsblog-page-num ${currentPage === 2 ? "dsblog-page-num-active" : ""}`}
          onClick={() => setPage(2)}
          disabled={isAll}
        >
          2
        </button>

        <button
          className="dsblog-page-btn"
          onClick={goNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}