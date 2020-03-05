import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_ALL_POSTS } from "../../graphql-client/queries";
import { Post } from "../../../../../yoga-server/generated/prisma-client/index";
import { CustomButton } from "../_common/CustomButton/CustomButton";
import Textfield from "../_common/Textfield/Textfield";
import "./AddPost.scss";
import { ADD_POST, ADD_USER } from "../../graphql-client/mutations";
import { CreateDraftInput } from "../../types/schemaTypes";

interface PostProps {
  id: number | string;
  title: string | undefined;
  content: string | undefined;
  published: boolean | undefined;
  authorId: string;
}

export const AddPost = (): JSX.Element => {
  const [post, setPost] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [authorId, setAuthorId] = useState();
  const [show, setShow] = useState(false);
  const [addPost] = useMutation(ADD_POST);
  let input: CreateDraftInput;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost({ variables: { type: input } });
          input = {
            authorId: authorId,
            title: title,
            content: content
          };
        }}
      >
        <label>
          Author:
          <input type="text" value={title} />
        </label>
        <label>
          Title:
          <input type="text" value={title} />
        </label>
        <label>
          Content:
          <input type="text" value={title} />
        </label>
        {/* <input
          ref={node => {
            input = node;
          }}
        /> */}
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
