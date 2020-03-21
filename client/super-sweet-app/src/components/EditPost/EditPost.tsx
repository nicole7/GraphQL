import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import './EditPost.scss';
import { GET_POST } from '../../graphql-client/queries';
//import { UpdatePostInput } from '../../types/schemaTypes';
import { Routes } from '../../../src/utils/routes';
import Textfield from '../_common/Textfield/Textfield';
import { CustomButton } from '../_common/CustomButton/CustomButton';

export const EditPost = ({ match }: any): JSX.Element => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id: match.params.id,
    },
  });
  //   const [editMutation] = useMutation(ADD_POST,
  //     onCompleted: () => console.log('post completed!'),
  //   });

  const postMutation = (): void => {
    const URL = `${window.location.origin}${Routes.POST.route}`;
    window.open(URL, '_self');
  };

  const handleInputChange = (): void => {};

  const addEditedPost = (): void => {};

  if (data && data.post) {
    console.log(JSON.stringify(data));
    return (
      <div>
        {/* <div>
           <Textfield
            label="Title"
            name="title"
            onBlur={(event: any) => {
              handleInputChange(event);
            }}
          />
          <Textfield
            label="Content"
            name="content"
            onBlur={(event: any) => {
              handleInputChange(event);
            }}
          />
          <div className="AddPost-Button">
            <CustomButton
              title="Save"
              onClick={() => {
                addEditedPost();
              }}
            ></CustomButton>
          </div>
        </div> */}
        <form>
          <label>
            Title:
            <input type="text" name="title" value={data.post.title} onChange={e => setTitle(e.target.value)} />
          </label>

          <label>
            Content:
            <input type="text" name="content" value={data.post.content} onChange={e => setContent(e.target.value)} />
          </label>
        </form>
      </div>
    );
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }
  return <div>No results returned</div>;
};

export default EditPost;
