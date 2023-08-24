import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const PlayButton = () => {
  return (
    <FontAwesomeIcon
        icon={faPlayCircle}
        className="absolute top-1/2 transform -translate-y-1/2 left-[34%] w-12 h-12 p-2 rounded-full bg-primary group-hover:flex group-focus:flex hidden"
      />
  );
};

export default PlayButton;
