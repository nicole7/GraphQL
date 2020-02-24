import gql from "graphql-tag";

export default gql`
  mutation createDraft($authorId: ID!, $title: String!, $content: String!) {
    createDraft(authorId: $authorId, title: $title, content: $content) {
      Post
    }
  }
`;
