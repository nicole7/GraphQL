import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { posts_posts as Post } from "../../types/schemaTypes";
import { GET_ALL_POSTS } from "../../graphql-client/queries";
import BlogPost from "../BlogPost/BlogPost";

export const ListPost = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);
  if (data) {
    const showList =
      data.posts &&
      data.posts.map((element: Post) => {
        return (
          <BlogPost
            key={element.id}
            id={element.id}
            title={element.title}
            content={element.content || ""}
            author={element.author || undefined}
          />
        );
      });

    return <div className="ListPost-Container">{showList}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return <div>No results returned</div>;
};

export default ListPost;
