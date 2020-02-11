import gql from "graphql-tag";

export default gql`
  query GetAllPosts {
    getAllPosts {
      postId
      postTitle
      postContent
      isPublished
      authorName
    }
  }
`;
