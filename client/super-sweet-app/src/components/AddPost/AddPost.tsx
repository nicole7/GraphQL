import React, { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS, GET_ALL_USERS } from "../../graphql-client/queries";
import useAddPostForm from "../AddPost/useAddPostForm";
import { Post } from "../../../../../yoga-server/generated/prisma-client/index";

interface PostProps {
  id: number | string;
  title: string;
  content: string;
  published: boolean;
}

const addPost = (): JSX.Element => {
  const [post, setPost] = useState();
  const [show, setShow] = useState(false);
  const [getPostById, { data: postData, loading: postLoading }] = useLazyQuery(
    GET_ALL_POSTS
  );
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    resetFormState
  } = useAddPostForm();
  const { data: postsData } = useQuery(GET_ALL_POSTS);

  useEffect(() => {
    if (postData && postData.getAllPosts) {
      if (postData && postData.getAllPosts) {
        let userPosts: PostProps[] = [];
        postData.getAllPosts.forEach((element: Post) => {
          if (element.id !== null) {
            userPosts.push({
              id: element.id,
              title: element.title,
              content: element.content,
              published: element.published
            });
          }
        });
        setPost(userPosts);
      }
    }
  }, [postData, postLoading]);

  return (
    <React.Fragment>
      <form>
        <label>
          Title:
          <input type="text" name="name" />
          Content:
          <input type="text" name="name" />
        </label>
      </form>
    </React.Fragment>
  );
};

export default addPost;
