import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
//import { GET_ALL_POSTS } from '../../graphql-client/queries';
//import { Post } from '../../../../../yoga-server/generated/prisma-client/index';
//import { CustomButton } from '../_common/CustomButton/CustomButton';
//import Textfield from '../_common/Textfield/Textfield';
import './AddPost.scss';
import { ADD_POST } from '../../graphql-client/mutations';
import { CreateDraftInput } from '../../types/schemaTypes';
import { Routes } from '../../../src/utils/routes';

export const AddPost = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  //const [authorId, setAuthorId] = useState('');
  const [postMutation] = useMutation(ADD_POST, {
    onCompleted: () => console.log('post completed!'),
  });

  const addMutation = (): void => {
    const URL = `${window.location.origin}${Routes.POST.route}`;
    window.open(URL, '_self');
  };

  return (
    <div>
      <form>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
        </label>

        <label>
          Content:
          <input type="text" name="content" value={content} onChange={e => setContent(e.target.value)} />
        </label>
        <button
          type="submit"
          onClick={(e): void => {
            e.preventDefault();
            if (title !== '' && content !== '') {
              const input: CreateDraftInput = {
                title: title,
                content: content,
              };
              postMutation({ variables: { input: input } });
              addMutation();
            } else {
              console.log('Post not run');
            }
          }}
        >
          Add Post
        </button>
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
