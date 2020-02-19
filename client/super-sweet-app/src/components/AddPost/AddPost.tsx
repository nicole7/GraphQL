import React, { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "../../graphql-client/queries";
import useAddPostForm from "./useAddPostForm";
import { Post } from "../../../../../yoga-server/generated/prisma-client/index";
import { CustomButton } from "../_common/CustomButton/CustomButton";
import Textfield from "../_common/Textfield/Textfield";

interface PostProps {
  id: number | string;
  title: string | undefined;
  content: string | undefined;
  published: boolean | undefined;
}

export const AddPost = (): JSX.Element => {
  const [post, setPost] = useState();
  const [show, setShow] = useState(false);
  const [getPostById, { data: postData, loading: postLoading }] = useLazyQuery(
    GET_ALL_POSTS
  );
  const { handleSubmit, handleInputChange } = useAddPostForm();
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

  const addNewPost = (): void => {
    handleSubmit();
  };

  return (
    <div>
      <Textfield 
          label="Title"
          name="title"
          onChange={(event: any) => {
            handleInputChange(event);
        }}
      />
      <Textfield 
          label="Content"
          name="content"
          onChange={(event: any) => {
            handleInputChange(event);
        }}
      />
      <form>
        <label>
          Title:
          <input type="text" name="name" />
          Content:
          <input type="textArea" name="name" />
        </label>
      </form>
      <CustomButton
        title="Save"
        onClick={() => {
          addNewPost();
        }}
      ></CustomButton>
    </div>
  );
};

export default AddPost;
