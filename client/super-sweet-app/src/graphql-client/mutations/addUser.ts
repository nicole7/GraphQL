import gql from "graphql-tag";

export default gql`
  mutation AddUser($input: AddUserInput) {
    addUser(input: $input) {
      createdUserId
    }
  }
`;
