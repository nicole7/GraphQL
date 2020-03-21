import React from "react";
import ListPost from "../../ListPost/ListPost";
import AddPost from "../../AddPost";
import EditPost from "../../EditPost/EditPost";

const ShowPost = (): JSX.Element => {
  return (
    <div className="ShowPost-Container">
      <AddPost />
      <ListPost />
    </div>
  );
};

export default ShowPost;
