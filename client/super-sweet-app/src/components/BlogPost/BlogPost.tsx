import React from "react";
import ListPost from "../ListPost/ListPost";
import { User } from "../../../../../yoga-server/generated/prisma-client";

interface BlogPost {
  id: number | string;
  title: string | undefined;
  content: string | undefined;
  author: User | undefined;
}

const BlogPost = ({ id, title, content, author }: BlogPost): JSX.Element => {
  return (
    <div>
      <li>{title}</li>
      <li>{content}</li>
      <li>{author ? author.name : ""}</li>
    </div>
  );
};

export default BlogPost;
