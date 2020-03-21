import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_POST } from '../../graphql-client/mutations';
import { User } from '../../../../../yoga-server/generated/prisma-client';
import './BlogPost.scss';
import { Routes } from '../../../src/utils/routes';
//import DeletePost from '../DeletePost/DeletePost'; [TODO]

interface BlogPost {
  id: number | string;
  title: string | undefined;
  content: string | undefined;
  author: User | undefined;
}

const BlogPost = ({ id, title, content, author }: BlogPost): JSX.Element => {
  const renderEdit = (): void => {
    const URL = `${window.location.origin}${Routes.EDIT.route}`;
    window.open(URL + '/' + id, '_self');
  };
  return (
    <div className="BlogPost-Container">
      <div className="BlogPost-Title">{title}</div>
      <div className="BlogPost-Body">
        <div className="BlogPost-Content">{content}</div>
        <div className="BlogPost-Author">Written by: {author ? author.name : ''}</div>
        <div className="BlogPost-EditButton">
          <button
            type="submit"
            onClick={(e): void => {
              e.preventDefault();
              renderEdit();
            }}
          >
            Edit Post
          </button>
        </div>
        {/* <div className="BlogPost-DeleteButton">
          <DeletePost />
        </div> */}
      </div>
    </div>
  );
};

export default BlogPost;
