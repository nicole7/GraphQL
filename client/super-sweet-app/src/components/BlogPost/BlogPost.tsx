import React from "react";
import { User } from "../../../../../yoga-server/generated/prisma-client";
import "./BlogPost.scss";

interface BlogPost {
  id: number | string;
  title: string | undefined;
  content: string | undefined;
  author: User | undefined;
}

const BlogPost = ({ id, title, content, author }: BlogPost): JSX.Element => {
  return (
    <div className="BlogPost-Container">
      <div className="BlogPost-Title">{title}</div>
      <div className="BlogPost-Body">
        <div className="BlogPost-Content">{content}</div>
        <div className="BlogPost-Author">
          Written by: {author ? author.name : ""}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
