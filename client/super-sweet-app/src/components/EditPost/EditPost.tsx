import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import './EditPost.scss';
import { GET_POST } from '../../graphql-client/queries';
import { EDIT_POST } from '../../graphql-client/mutations';
import { UpdatePostInput } from '../../types/schemaTypes';
import { Routes } from '../../../src/utils/routes';
import Textfield from '../_common/Textfield/Textfield';
import { CustomButton } from '../_common/CustomButton/CustomButton';
import { CardTitle } from 'react-bootstrap/Card';

export const EditPost = ({ match }: any): JSX.Element => {
  const [updatePostInput, setUpdatePostInput] = useState({ title: '', content: '' });
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id: match.params.id,
    },
  });
  const [editMutation] = useMutation(EDIT_POST, {
    onCompleted: () => console.log('post completed!'),
  });

  const postMutation = (): void => {
    const URL = `${window.location.origin}${Routes.POST.route}`;
    window.open(URL, '_self');
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ): void => {
    event.persist();
    setUpdatePostInput(updatePostInput => ({ ...updatePostInput, [event.target.name]: event.target.value }));
  };

  const updatePost = (): void => {
      console.log(updatePostInput);
    //editMutation({ variables: { input: UpdatePostInput } });
  };

  if (data && data.post) {
    console.log(JSON.stringify(data));
    return (
      <div>
        <div>
          <Textfield label="Title" name="title" value={data.post.title} onChange={handleInputChange} />
          <Textfield label="Content" name="content" value={data.post.content} onChange={handleInputChange} />
          <div className="AddPost-Button">
            <CustomButton
              title="Save"
              onClick={() => {
                updatePost();
              }}
            ></CustomButton>
          </div>
        </div>
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
