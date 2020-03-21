import gql from 'graphql-tag';

export default gql`
  mutation signup($input: String!) {
    signup(input: $input) {
      name
    }
  }
`;
