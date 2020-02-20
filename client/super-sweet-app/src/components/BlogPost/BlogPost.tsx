import React from "react";
import ListPost from "../ListPost/ListPost";

interface BlogPost {
  id: number | string;
  title: string | undefined;
  content: string | undefined;
  author: string | undefined;
}

const BlogPost = ({ id, title, content, author }: BlogPost): JSX.Element => {
  return (
    <div>
      <li>{title}</li>
      <li>{content}</li>
      {/* <li>{author}</li> */}
    </div>
  );
};

export default BlogPost;
