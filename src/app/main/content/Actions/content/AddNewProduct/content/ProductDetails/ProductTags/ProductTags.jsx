import React, { memo, useState } from "react";
import TagInputComponent from "app/shared-components/TagInputComponent";

function ProductTags() {
  const [tags, setTags] = useState([]);

  return (
    <TagInputComponent
      value={tags}
      callback={setTags}
      id='tag-input'
      label='Enter tags'
    />
  );
}

export default memo(ProductTags);
