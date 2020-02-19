import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "../../graphql-client/mutations";
//import { Routes } from "../../utils";
import { ApolloError } from "apollo-client";

interface PostProps {
  id: string | number;
  title: string | undefined;
  content: string | undefined;
  published: boolean | undefined;
}

const useAddPostForm = (): any => {
  const [inputs, setInputs] = useState({
    title: "",
    content: ""
  });

  const [addPost] = useMutation(ADD_POST, {
    onError: (e: ApolloError) => console.log("Error", e)
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    if (event) {
      event.preventDefault();
    }
  };

  return {
    handleSubmit,
    handleInputChange
  };
};

export default useAddPostForm;
