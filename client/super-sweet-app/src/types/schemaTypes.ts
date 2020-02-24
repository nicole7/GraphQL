/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: posts
// ====================================================

export interface posts_posts_author {
  __typename: "User";
  id: string;
  name: string;
}

export interface posts_posts {
  __typename: "Post";
  id: string;
  title: string;
  content: string | null;
  published: boolean | null;
  author: posts_posts_author | null;
}

export interface posts {
  posts: posts_posts[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: users
// ====================================================

export interface users_users {
  __typename: "User";
  id: string;
  name: string;
}

export interface users {
  users: users_users[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
