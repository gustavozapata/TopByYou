import React from "react";

export default function RecentItem(props) {
  const { item } = props;
  return (
    <button
      className={`button label ${props.isSelected && "recent-selected"}`}
      onClick={props.selectRecent}
    >
      {item}
    </button>
  );
}
