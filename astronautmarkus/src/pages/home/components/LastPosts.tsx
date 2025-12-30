import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight } from "lucide-react";

import { useI18n } from "../../../context/i18n";

const API_URL = import.meta.env.VITE_API_URL;

type Post = {
  id: number;
  title: string;
  description: string;
  image_url: string;
  slug: string;
  tags: string[];
  url: string;
  views_count: number;
};

const LastPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/posts/`)
      .then((res) => setPosts(res.data))
      .catch(() => setPosts([]))
      .finally(() => setLoading(false));
  }, []);

  const { t } = useI18n();

  if (loading)
    return (
      <section className="py-16 bg-gradient-to-b from-[#18122B] via-[#1E1B3A] to-[#18122B]">
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
            <span className="text-rose-700 font-semibold text-lg">{t("home.loading_posts")}</span>
          </motion.div>
        </div>
      </section>
    );

  if (!posts.length) return null;

  return (
    <section className="py-16 bg-gradient-to-b from-[#18122B] via-[#1E1B3A] to-[#18122B]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-4xl font-bold text-[#a084ee] mb-2">{t("home.latest_posts")}</h2>
          <p className="text-lg text-[#eaddff] max-w-2xl mx-auto">
            {t("home.latest_posts_description")}
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
              key={post.id}
              className="rounded-xl border-2 border-[#a084ee] bg-gradient-to-br from-[#251a3a]/70 to-[#1e1b3a]/80 shadow-lg p-7
                hover:shadow-purple-700/40 transition-shadow duration-300 hover:scale-105 transition-transform flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center border-2 border-[#a084ee] mb-6 rounded-lg overflow-hidden">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#a084ee] mb-2 truncate">
                  {post.title}
                </h3>
                <p className="text-[#eaddff] mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[#a084ee] font-semibold text-xs border-2 border-[#a084ee] rounded-full"
                    >
                      {t("home.post_tag_prefix")}{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 justify-center flex">
                  <Link
                    to={post.url}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-purple-700 text-white rounded-full font-semibold shadow-lg hover:bg-purple-800 transition hover:scale-105 transform duration-300 mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("home.read_more")}
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href={API_URL}
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-700 text-white rounded-full font-semibold shadow-lg hover:bg-purple-800 transition hover:scale-105 transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen size={20} />
            {t("home.visit_blog")}
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default LastPosts;
