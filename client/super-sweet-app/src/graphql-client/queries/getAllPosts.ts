import gql from "graphql-tag";

export default gql`
  query posts {
    posts {
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
