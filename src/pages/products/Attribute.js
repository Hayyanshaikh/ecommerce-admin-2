import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import Button from "../../components/common/Button.js";
import Input from "../../components/common/Input.js";
import CheckBox from "../../components/common/CheckBox.js";
import PageHeading from "../../components/common/PageHeading.js";
import SelectOption from "../../components/common/SelectOption.js";
import Table from "../../components/common/Table";
import { AttributeData } from "../../api/api.js";
const Attribute = () => {
  // breadcrumb data
  const breadcrumb = [
    { label: "Products", url: "/products/all" },
    { label: "Attribute", url: "/attribute" },
  ];

  // Enable Archives
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (newCheckedState) => {
    setIsChecked(newCheckedState);
  };

  //  selet option attribute type
  const attrType = [
    { value: "color", label: "color" },
    { value: "size", label: "size" },
    { value: "button", label: "button" },
    { value: "image", label: "image" },
  ];
  return (
    <>
      <section>
        <PageHeading text="attribute" className="" breadcrumb={breadcrumb} />
        <div className="attribute">
          <div className="attribute_sidebar bg_color">
            <div className="attribute_sidebar_item">
              <h2 className="sub_heading">add new attribute</h2>
              <div className="attribute_sidebar_wrapper">
                <div className="valid_field">
                  <Input type="text" placeholder="Attribute name" />
                  <small>Set the name of attribute</small>
                </div>
                <div className="valid_field">
                  <Input type="text" placeholder="Attribute slug" />
                  <small>Set the slug of attribute</small>
                </div>
                <div className="valid_field">
                  <CheckBox
                    label="Enable Archives?"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <small>
                    Enable this if you want this attribute to have product
                    archives in your store.
                  </small>
                </div>
                <div className="valid_field">
                  <SelectOption
                    options={attrType}
                    placeholder="Select type"
                    className="top_options"
                  />
                </div>
                <Button
                	label="add attribute"
                />
              </div>
            </div>
          </div>
          <div className="attribute_main bg_color">
            <div className="table_main">
              <Table className="bordered" header={AttributeData.header} body={AttributeData.body} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Attribute;
