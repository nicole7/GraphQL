import gql from "graphql-tag";

export default gql`
  query post($id: String!) {
    post(id: $id) {
      title
      content
    }
  }
`;