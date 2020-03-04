import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "../../graphql-client/queries";
import useAddPostForm from "./useAddPostForm";
import { Post } from "../../../../../yoga-server/generated/prisma-client/index";
import { CustomButton } from "../_common/CustomButton/CustomButton";
import Textfield from "../_common/Textfield/Textfield";
import "./AddPost.scss";
import { ADD_POST } from "../../graphql-client/mutations";
import '../../prisma';

interface PostProps {
  id: number | string;
  title: string | undefined;
  content: string | undefined;
  published: boolean | undefined;
}

export const AddPost = (): JSX.Element => {
  const [post, setPost] = useState();
  const [show, setShow] = useState(false);
  // const [getPostById, { data: postData, loading: postLoading }] = useLazyQuery(
  //   GET_ALL_POSTS
  // );
  //const { handleSubmit, handleInputChange } = useAddPostForm();
  const [addPost] = useMutation(ADD_POST);
  let input: CreateDraftInput;

  // useEffect(() => {
  //   if (postData && postData.getAllPosts) {
  //     if (postData && postData.getAllPosts) {
  //       let userPosts: PostProps[] = [];
  //       postData.getAllPosts.forEach((element: Post) => {
  //         if (element.id !== null) {
  //           userPosts.push({
  //             id: element.id,
  //             title: element.title,
  //             content: element.content,
  //             published: element.published
  //           });
  //         }
  //       });
  //       setPost(userPosts);
  //     }
  //   }
  // }, [postData, postLoading]);

  // const addNewPost = (): void => {
  //   handleSubmit();
  // };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost({ variables: { type: input } });
          input = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Post</button>
      </form>

      {/* </div> */}
      {/* <div className="AddPost-Container">
        <div className="AddPost-Header">Add a New Post</div>
        <div className="AddPost-InputBody">
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
          <div className="AddPost-Button">
            <CustomButton
              title="Save"
              onClick={() => {
                addNewPost();
              }}
            ></CustomButton>
          </div>
        </div>
        </div> */}
    </div>
  );
};

export default AddPost;
