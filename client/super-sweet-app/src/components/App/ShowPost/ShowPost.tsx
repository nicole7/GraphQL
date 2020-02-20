import React from "react";
import ListPost from "../../ListPost/ListPost";

const ShowPost = (): JSX.Element => {
  return (
    <div className="ShowPost-Container">
      <ListPost />
      {/* TODO: Edit and Delete will go here */}
    </div>
  );
};

export default ShowPost;
