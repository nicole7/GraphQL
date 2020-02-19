import gql from "graphql-tag";

export default gql`
  mutation createDraft($input: Post) {
    createDraft(input: $input) {
      createdPostId
    }
  }
`;
