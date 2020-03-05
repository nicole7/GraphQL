import gql from "graphql-tag";

export default gql`
  mutation createUser($input: CreateUserInput) {
    createUser(input: $input) {
      id
      name
      posts {
        id
        title
        content
        published
      }
    }
  }
`;
