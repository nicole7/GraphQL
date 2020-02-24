import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { posts_posts as Post } from "../../types/schemaTypes";
import { GET_ALL_POSTS } from "../../graphql-client/queries";
import BlogPost from "../BlogPost/BlogPost";

export const ListPost = (): JSX.Element => {
  const { data, loading, error } = useQuery(GET_ALL_POSTS);

  console.log(JSON.stringify(data));
  console.log("********");

  if (data) {
    // const showList =
    data.posts &&
      data.posts.map((element: Post) => {
        console.log(element.title);
        return (
          <div>
            <BlogPost
              key={element.id}
              id={element.id}
              title={element.title}
              content={element.content || ""}
              author={element.author || undefined}
            />
          </div>
        );
      });

    // return (
    //   <div className="ListPost-Container">
    //     <BlogPost>{showList}</BlogPost>
    //   </div>
    // );
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
