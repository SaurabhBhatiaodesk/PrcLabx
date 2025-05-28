"use client";
import React, { useEffect, useRef } from "react";

interface BlogContentProps {
  content: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll("*");
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement; // ✅ Cast to HTMLElement
        const computedColor = getComputedStyle(htmlEl).color;
        if (computedColor === "rgb(0, 0, 0)") {
          htmlEl.style.color = "white";
        }
      });
    }
  }, [content]);

  return (
    <div
      ref={contentRef}
      className="mt-2 text-white custom-content-styling"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;
