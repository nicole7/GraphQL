import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "../../graphql/client/mutations";
import { Routes } from "../../utils";
import { ApolloError } from "apollo-client";

const useAddPostForm = (): any => {
  const handleSubmit = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    if (event) {
      event.preventDefault();
    }
  };
};

export default useAddPostForm;
