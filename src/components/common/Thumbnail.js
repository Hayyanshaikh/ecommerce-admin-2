import React from "react";
import * as Icons from "react-icons/tb";
const Thumbnail = ({ className, thumbnail,required }) => {
  return (
    <>
      <div className={`thumbnail valid_field ${className ? className : ""}`}>
        <input type="file" name="" id="thumbnail" />
        <label htmlFor="thumbnail">
          <figure>
            {thumbnail ? (
              <img src={thumbnail} alt="Product Thumbnail" />
            ) : (
              <Icons.TbPhoto />
            )}
            <Icons.TbPencil className="thumbnail_edit"/>
          </figure>
        </label>
        {
          required ? <small>{required}</small> : ''
        }
        
      </div>
    </>
  );
};

export default Thumbnail;
