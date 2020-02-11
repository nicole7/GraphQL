import React, { useEffect, useState } from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { GET_ALL_USERS } from "../../graphql-client/queries";
import useAddPostForm from "../AddPost/useAddPostForm";
import { User } from "../../../../../yoga-server/generated/prisma-client/index";

interface UserProps {
  id: number | string;
  name: string;
}

const addUser = (): JSX.Element => {
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const [getUserById, { data: userData, loading: userLoading }] = useLazyQuery(
    GET_ALL_USERS
  );
  const {
    inputs,
    handleInputChange,
    handleSubmit,
    resetFormState
  } = useAddPostForm();
  const { data: usersData } = useQuery(GET_ALL_USERS);

  useEffect(() => {
    if (userData && userData.getAllUsers) {
      if (userData && userData.getAllUsers) {
        let userList: UserProps[] = [];
        userData.getAllPosts.forEach((element: User) => {
          if (element.id !== null) {
            userList.push({
              id: element.id,
              name: element.name
            });
          }
        });
        setUser(userList);
      }
    }
  }, [userData, userLoading]);

  return (
    <React.Fragment>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};

export default addUser;
