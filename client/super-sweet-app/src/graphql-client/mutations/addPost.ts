import gql from "graphql-tag";

export default gql`
  mutation createDraft($input: CreateDraftInput) {
    createDraft(input: $input) {
        id
        title
        content
        published
        author {
          id
          name
        }
      }
  }
`;
