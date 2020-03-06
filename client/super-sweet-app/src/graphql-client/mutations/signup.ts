import gql from 'graphql-tag';

export default gql`
  mutation signup {
    signup(name: $name) {
      id
      name
    }
  }
`;
