import React, { useEffect } from "react";
import SEO_image from "../assets/img/seo_image.png";

const SITE_NAME = "AstronautMarkusDev Portfolio";
const AUTHOR = "Markus Reyes";
const DEFAULT_LOCALE = "es_ES";
const TWITTER_HANDLE = "@astronautmarkus";

type SeoHelmetProps = {
  title: string;
  description?: string;
  keywords?: string;
};

const SeoHelmet: React.FC<SeoHelmetProps> = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, value: string, content: string) => {
      let tag = document.querySelector(`meta[${attr}="${value}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (description) setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description || "");
    setMeta("property", "og:image", SEO_image);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", DEFAULT_LOCALE);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description || "");
    setMeta("name", "twitter:image", SEO_image);
    setMeta("name", "twitter:site", TWITTER_HANDLE);

    setMeta("name", "author", AUTHOR);

  }, [title, description, keywords]);

  return null;
};

export default SeoHelmet;