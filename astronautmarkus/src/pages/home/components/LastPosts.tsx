import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const BLOG_URL = import.meta.env.VITE_BLOG_URL;

type Post = {
  title: string;
  description: string;
  publishDate: string;
  url: string;
  banner_image: string;
  tags: string[];
  type?: string;
};

const LastPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post(`${BLOG_URL}/data/posts`)
      .then((res) => setPosts(res.data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-[200px]">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="w-12 h-12 border-4 border-rose-400 border-t-transparent rounded-full animate-spin mb-4"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <span className="text-rose-700 font-semibold text-lg">Loading posts...</span>
          </motion.div>
        </div>
      </section>
    );

  if (!posts.length)
    return (
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center min-h-[200px]">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <svg
              className="w-16 h-16 mb-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12c0 3.59-2.91 6.5-6.5 6.5S6.5 15.59 6.5 12 9.41 5.5 13 5.5s6.5 2.91 6.5 6.5zm-6.5 0v.01"
              />
            </svg>
            <span className="text-gray-500 font-semibold text-lg">No posts found.</span>
            <span className="text-gray-400 mt-2 text-sm text-center max-w-xs">
              Please check back later or explore other sections of the site.
            </span>
          </motion.div>
        </div>
      </section>
    );

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-rose-700 mb-4">Latest Posts</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out my most recent blog posts and insights.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.url || post.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <img
                src={post.banner_image}
                alt={post.title}
                className="h-48 w-full object-cover pointer-events-none"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 truncate">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.description}
                </p>
                {post.type !== "wip" && (
                  <>
                    <div className="text-xs text-gray-400 mb-2">
                      {new Date(post.publishDate).toLocaleDateString()}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-rose-100 text-rose-800 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Link
                        to={post.url}
                        className="text-rose-600 font-semibold hover:text-rose-800 transition flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read on my blog website
                        <ChevronRight size={16} />
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LastPosts;
