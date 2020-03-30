/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createDraft
// ====================================================

export interface createDraft_createDraft_author {
  __typename: "User";
  id: string;
  name: string;
}

export interface createDraft_createDraft {
  __typename: "Post";
  id: string;
  title: string;
  content: string | null;
  published: boolean | null;
  author: createDraft_createDraft_author | null;
}

export interface createDraft {
  createDraft: createDraft_createDraft | null;
}

export interface createDraftVariables {
  input?: CreateDraftInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editPost
// ====================================================

export interface editPost_createDraft_author_posts {
  __typename: "Post";
  id: string;
  title: string;
  content: string | null;
}

export interface editPost_createDraft_author {
  __typename: "User";
  id: string;
  name: string;
  posts: editPost_createDraft_author_posts[] | null;
}

export interface editPost_createDraft {
  __typename: "Post";
  author: editPost_createDraft_author | null;
}

export interface editPost {
  createDraft: editPost_createDraft | null;
}

export interface editPostVariables {
  input?: UpdatePostInput | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signup
// ====================================================

export interface signup_signup {
  __typename: "User";
  name: string;
}

export interface signup {
  signup: signup_signup | null;
}

export interface signupVariables {
  input: string;
}

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

// ====================================================
// GraphQL query operation: post
// ====================================================

export interface post_post {
  __typename: "Post";
  title: string;
  content: string | null;
}

export interface post {
  post: post_post | null;
}

export interface postVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateDraftInput {
  authorId?: string | null;
  title: string;
  content: string;
}

export interface UpdatePostInput {
  id: string;
  title: string;
  content: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
