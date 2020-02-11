import gql from "graphql-tag";

export default gql`
  mutation AddPost($input: AddPostInput) {
    addPost(input: $input) {
      createdPostId
    }
  }
`;
