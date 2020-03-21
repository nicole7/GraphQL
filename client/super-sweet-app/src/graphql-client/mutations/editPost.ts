import gql from 'graphql-tag';

export default gql`
  mutation editPost($input: UpdatePostInput) {
    createDraft(input: $input) {
      author {
        id
        name
        posts {
            id
            title
            content
        }
      }
    }
  }
`;
