// Import React and useState hook from the 'react' library
import React, { useState } from "react";

// Import icons from the 'react-icons/tb' package
import * as Icons from "react-icons/tb";

// Import the Link component from 'react-router-dom' library
import { Link } from "react-router-dom";

// Import custom components
import Input from "../../components/common/Input.js";
import Alert from "../../components/common/Alert.js";
import Button from "../../components/common/Button.js";
import CheckBox from "../../components/common/CheckBox.js";
import Textarea from "../../components/common/Textarea.js";
import Thumbnail from "../../components/common/Thumbnail.js";
import TextEditor from "../../components/common/TextEditor.js";
import MultiSelect from "../../components/common/MultiSelect.js";
import PageHeading from "../../components/common/PageHeading.js";
import SelectOption from "../../components/common/SelectOption.js";

// Define the AddProduct component
const AddProduct = () => {
  // save Changes state
  const [save, setSave] = useState(false);
  const [time, setTime] = useState(false);
  const [attrTerms, setAttrTerms] = useState(["1"]);

  // allow out of stock product purchase
  const [isChecked, setIsChecked] = useState(true);

  // breadcrumb data
  const breadcrumb = [
    { label: "Products", url: "/products/all" },
    { label: "Add Products", url: "/products/new" },
  ];

  // select option data for publish
  const publish = [
    { value: "draft", label: "draft" },
    { value: "published", label: "published" },
    { value: "scheduled", label: "scheduled" },
  ];

  // select option data for visibility
  const visibility = [
    { value: "hidden", label: "hidden" },
    { value: "published", label: "published" },
  ];

  // select option data for stock status
  const stockStatus = [
    { value: "draft", label: "draft" },
    { value: "published", label: "published" },
    { value: "scheduled", label: "scheduled" },
  ];

  // multi select option data
  const multiSelect = [
    { value: "red", label: "red" },
    { value: "yellow", label: "yellow" },
    { value: "green", label: "green" },
    { value: "brown", label: "brown" },
    { value: "blue", label: "blue" },
  ];

  // select option data for categories
  const categories = [
    { value: "appliances", label: "appliances" },
    { value: "automotiveAccessories", label: "automotive accessories" },
    { value: "electronics", label: "electronics" },
    { value: "fashion", label: "fashion" },
    { value: "furniture", label: "furniture" },
    { value: "grocery", label: "grocery" },
    { value: "kids", label: "kids" },
    { value: "watches", label: "watches" },
  ];

  // select option data for attribute type
  const attrSelect = [
    { value: "color", label: "color" },
    { value: "size", label: "size" },
    { value: "material", label: "material" },
  ];

  // function to add attribute term
  const attrAdd = () => {
    setAttrTerms([...attrTerms, "asd"]);
  };

  // function to handle save button click
  const saveHandle = () => {
    setSave(true);
    setTimeout(() => {
      setSave(false);
    }, 5000);
    const currentTime = new Date();
    const setCurrentTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(setCurrentTime);
  };

  // function to handle checkbox change
  const handleCheckboxChange = (newCheckedState) => {
    setIsChecked(newCheckedState);
  };

  // Render the AddProduct component
  return (
    <>
      <section className="add_product">
        {/* Render the PageHeading component */}
        <PageHeading text="add product" className="" breadcrumb={breadcrumb} />
        <div className="add_product_main">
          <div className="add_pro_sidebar bg_color">
            <div className="add_pro_sidebar_item">
              <h2 className="sub_heading">Thumbnail</h2>
              {/* Render the Thumbnail component */}
              <Thumbnail
                required="Set the category thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted"
                thumbnail=""
              />
            </div>
            <div className="add_pro_sidebar_item">
              <h2 className="sub_heading">Publish</h2>
              <div className="add_pro_sidebar_wrapper">
                {/* Render the SelectOption component for publish */}
                <SelectOption options={publish} placeholder="status" />
                {/* Render the SelectOption component for visibility */}
                <SelectOption options={visibility} placeholder="Visibility" />
              </div>
            </div>
            <div className="add_pro_sidebar_item">
              <h2 className="sub_heading">Product Categories</h2>
              <div className="add_pro_sidebar_wrapper">
                {/* Render the SelectOption component for categories */}
                <SelectOption
                  options={categories}
                  placeholder="Select product category"
                />
                {/* Render the Link component */}
                <Link to="/products/categories/add" className="button">
                  <span>add Category</span>
                  <Icons.TbPlus />
                </Link>
              </div>
            </div>
            <div className="add_pro_sidebar_item">
              <h2 className="sub_heading">meta info</h2>
              <div className="add_pro_sidebar_wrapper">
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="text" placeholder="Meta Keywords" />
                  <small>Set the product Meta Keywords.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="text" placeholder="Meta title" />
                  <small>Set the product Meta title.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Textarea component */}
                  <Textarea placeholder="Enter meta description" />
                  <small>Set the product Meta Description.</small>
                </div>
              </div>
            </div>
          </div>
          <div className="add_pro_main bg_color">
            <div className="add_pro_item">
              <h2 className="sub_heading">general</h2>
              <div className="valid_field">
                {/* Render the Input component */}
                <Input type="text" placeholder="Enter the product name..." />
                <small>
                  A product name is required and recommended to be unique.
                </small>
              </div>
              <div className="valid_field">
                {/* Render the TextEditor component */}
                <TextEditor placeholder="Type your text here..." />
                <small>
                  Set a description to the product for better visibility.
                </small>
              </div>
            </div>
            <div className="add_pro_item">
              <h2 className="sub_heading">media</h2>
              <div className="valid_field">
                <label htmlFor="file" className="file_upload_content">
                  <Icons.TbFolderFilled />
                  <h4>
                    Drag your documents, photos, or videos here to start
                    uploading.
                  </h4>
                  <span>OR</span>
                  {/* Render the Button component */}
                  <Button label="browse file" className="sm" />
                </label>
                <input type="file" id="file" className="file_upload" />
                <small>Set the product media gallery.</small>
              </div>
            </div>
            <div className="add_pro_item">
              <h2 className="sub_heading">Pricing</h2>
              <div className="valid_flex">
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="text" placeholder="Manufacturer Name" />
                  <small>Set the product Manufacturer Name.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="text" placeholder="Manufacturer Brand" />
                  <small>Set the product Manufacturer Brand.</small>
                </div>
              </div>
              <div className="valid_flex">
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="number" placeholder="Stocks" />
                  <small>Set the product Stocks.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="number" placeholder="Price" />
                  <small>Set the product Price.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="number" placeholder="Discount" />
                  <small>Set the product Discount.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="number" placeholder="Orders" />
                  <small>Set the product Orders.</small>
                </div>
              </div>
            </div>
            <div className="add_pro_item">
              <h2 className="sub_heading">Inventory</h2>
              <div className="valid_field">
                {/* Render the Input component */}
                <Input type="text" placeholder="SKU Number" />
                <small>Enter the product SKU.</small>
              </div>
              <div className="valid_flex">
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="number" placeholder="On Shelf" />
                  <small>Enter the product quantity on shelf.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input type="number" placeholder="In Warehouse" />
                  <small>Enter the product quantity in warehouse.</small>
                </div>
              </div>
              {/* Render the CheckBox component */}
              <CheckBox
                label="Allow customers to purchase products that are out of stock."
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="add_pro_item">
              <div className="valid_flex">
                <h2 className="sub_heading">Attributes</h2>
                <div className="attr_add_flex center">
                  {/* Render the SelectOption component for attribute */}
                  <SelectOption options={attrSelect} placeholder="Attribute" />
                  {/* Render the Button component */}
                  <Button
                    label="add"
                    className="sm"
                    onClick={attrAdd}
                    icon={<Icons.TbPlus />}
                  />
                </div>
              </div>
              <div className="select_attribute">
                {/* Map through attrTerms array and render the attribute items */}
                {attrTerms.map((term, index) => {
                  return (
                    <div className="select_attribute_item" key={index}>
                      <h4 className="attr_name">Color</h4>
                      <div className="attr_add_flex">
                        <div className="valid_field">
                          {/* Render the MultiSelect component */}
                          <MultiSelect
                            options={multiSelect}
                            placeholder="Select color"
                          />
                        </div>
                        <Button
                          label="select all"
                          className="sm select_attr_btn"
                        />
                      </div>
                      <div className="attr_add_flex">
                        {/* Render the CheckBox component */}
                        <CheckBox
                          label="Visible on the product page"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        {/* Render the CheckBox component */}
                        <CheckBox
                          label="Used for variations"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="add_pro_item">
              <h2 className="sub_heading">variations</h2>
              <div className="variations">
                <div className="variation_item">
                  <div className="variation_head">
                    <div className="valid_field">
                      {/* Render the SelectOption component for attribute */}
                      <SelectOption
                        className="sm white"
                        options={attrSelect}
                        placeholder="Stock Status"
                      />
                    </div>
                    <div className="variation_action">
                      <Icons.TbTrash className="delete_variation" />
                      <Icons.TbChevronDown />
                    </div>
                  </div>
                  <div className="variation">
                    <div className="variation_flex">
                      <Thumbnail thumbnail="" className="variation_thumbnail" />
                      <div className="valid_flex">
                        <div className="valid_flex">
                          <div className="valid_field">
                            {/* Render the Input component */}
                            <Input type="text" placeholder="SKU Number" />
                            <small>Enter the product SKU.</small>
                          </div>
                          <div className="valid_field">
                            {/* Render the SelectOption component for attribute */}
                            <SelectOption
                              options={stockStatus}
                              placeholder="Stock Status"
                            />
                            <small>Enter The Stock status</small>
                          </div>
                        </div>
                        <div className="valid_flex">
                          <div className="valid_field">
                            {/* Render the Input component */}
                            <Input type="text" placeholder="Regular price" />
                            <small>Enter the Regular price.</small>
                          </div>
                          <div className="valid_field">
                            {/* Render the Input component */}
                            <Input type="text" placeholder="Sale price" />
                            <small>Enter the Sale price.</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="valid_flex">

                      <div className="valid_field">
                        {/* Render the Input component */}
                        <Input type="text" placeholder="Weight (kg)" />
                        <small>Enter the Weight (kg).</small>
                      </div>
                      <div className="valid_field">
                        {/* Render the Input component */}
                        <Input type="text" placeholder="Length" />
                        <small>Dimensions (LxWxH) (cm)</small>
                      </div>
                      <div className="valid_field">
                        {/* Render the Input component */}
                        <Input type="text" placeholder="Width" />
                        <small>Dimensions (LxWxH) (cm)</small>
                      </div>
                      <div className="valid_field">
                        {/* Render the Input component */}
                        <Input type="text" placeholder="Height" />
                        <small>Dimensions (LxWxH) (cm)</small>
                      </div>
                    </div>

                    <div className="valid_flex">
                      <div className="valid_field">
                        {/* Render the Input component */}

                        <SelectOption
                          options={attrSelect}
                          placeholder="Shipping class"
                        />
                        <small>Enter the Shipping class.</small>
                      </div>
                    </div>
                    <div className="valid_field">
                      {/* Render the Textarea component */}
                      <Textarea placeholder="Enter meta description" />
                      <small>Enter the Regular price.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="action_flex">
              {/* Render the Button component */}
              <Button label="discard" className="cencle sm" />
              {/* Render the Button component */}
              <Button
                label="save changes"
                className="sm"
                onClick={saveHandle}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Render the Alert component */}
      <Alert
        title="product added"
        description="Your product has been added"
        time={time}
        className={`success ${save ? "active" : ""}`}
      />
    </>
  );
};

export default AddProduct;
