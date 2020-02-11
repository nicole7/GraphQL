import gql from "graphql-tag";

export default gql`
  query GetAllUsers {
    getAllUsers {
      userId
      userName
      userPosts
    }
  }
`;
