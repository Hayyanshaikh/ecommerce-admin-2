// Import React and useState hook from the 'react' library
import React, { useState } from "react";

// Import icons from the 'react-icons/tb' package
import * as Icons from "react-icons/tb";

// Import the Link component from 'react-router-dom' library
import { Link } from "react-router-dom";

// Import custom components
import {ProductReview} from '../../api/api.js'
import Table from '../../components/common/Table.js';
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
const EditProduct = () => {
  // save Changes state
  const [save, setSave] = useState(false);
  const [time, setTime] = useState(false);
  const [attrTerms, setAttrTerms] = useState(["1"]);

  const [productData, setProductData] = useState({
    productName: "Half Sleeve T-Shirts (Blue)",
    description: "Half Sleeve T-Shirts (Blue) are versatile and stylish garments that provide comfort and a casual look. They are perfect for everyday wear and can be dressed up or down depending on the occasion. The blue color adds a cool and refreshing touch to the overall appearance. These T-shirts typically feature a round neckline and sleeves that extend halfway down the upper arm, hence the name 'half sleeve.' They are made from soft and breathable materials such as cotton or cotton blends, ensuring a comfortable fit and excellent breathability even in warmer weather. The design of these T-shirts is often minimalistic, with a solid blue color that allows for easy coordination with different bottoms and accessories. They can be paired with jeans, shorts, or trousers for a casual and relaxed outfit. The simplicity of the design also makes them suitable for layering under jackets or sweaters during cooler seasons. Overall, half sleeve T-shirts in blue are a wardrobe staple that offers both style and comfort. Whether you're heading out for a casual ourwith friends running errands or simply relaxing at home these T shirts provide a versatile and fashionable option for your everyday attire.",
    metaKeywords: "Half Sleeve T-Shirts, Blue T-Shirts, Casual T-Shirts, Men's Fashion, Wardrobe Essentials.",
    metaTitle: "Stylish Half Sleeve T-Shirt in Blue | [Brand Name]",
    metaDescription: "Discover the perfect blend of style and comfort with our stylish half sleeve t-shirt in blue. Made from soft and breathable fabric, this casual t-shirt is a wardrobe essential for every man. Shop now and elevate your everyday look with [Brand Name].",
    manufacturerName: "Hp",
    manufacturerBrand: "Hp brand",
    stocks: 30,
    price: 25,
    discount: 40,
    orders: 2,
    skuNumber: 23561,
    variationSKUId: 20506,
    onShelf: 5,
    inWarehouse: 2,
    weight: 250,
    length: 230,
    width: 500,
    height: 200,
    regularPrice: 200,
    salePrice: 150,
    variationDescription: "hayyan",
  });
  const handleInputChange = (field, value) => {
    setProductData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

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
                thumbnail="https://pangaia.com/cdn/shop/products/Organic-Cotton-T-Shirt-Cobalt-Blue-1.png?v=1662474774"
              />
            </div>
            <div className="add_pro_sidebar_item">
              <h2 className="sub_heading">Publish</h2>
              <div className="add_pro_sidebar_wrapper">
                {/* Render the SelectOption component for publish */}
                <SelectOption
                  options={publish}
                  placeholder="status"
                  selectedValue="published"
                />
                {/* Render the SelectOption component for visibility */}
                <SelectOption
                  options={visibility}
                  placeholder="Visibility"
                  selectedValue="published"
                />
              </div>
            </div>
            <div className="add_pro_sidebar_item">
              <h2 className="sub_heading">Product Categories</h2>
              <div className="add_pro_sidebar_wrapper">
                {/* Render the SelectOption component for categories */}
                <SelectOption
                  options={categories}
                  placeholder="Select product category"
                  selectedValue="fashion"
                />
                {/* Render the Link component */}
                <Link to="/categories/add" className="button">
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
                  <Input
                    value={productData.metaKeywords}
                    onChange={(value) =>
                      handleInputChange("metaKeywords", value)
                    }
                    type="text"
                    placeholder="Meta Keywords"
                  />
                  <small>Set the product Meta Keywords.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input
                    value={productData.productName}
                    onChange={(value) =>
                      handleInputChange("productName", value)
                    }
                    type="text"
                    placeholder="Meta title"
                  />
                  <small>Set the product Meta title.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Textarea component */}
                  <Textarea
                    placeholder="Enter meta description"
                    value={productData.metaDescription}
                    onChange={(value) =>
                      handleInputChange("metaDescription", value)
                    }
                  />
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
                <Input
                  type="text"
                  placeholder="Enter the product name..."
                  value={productData.productName}
                  onChange={(value) => handleInputChange("productName", value)}
                />
                <small>
                  A product name is required and recommended to be unique.
                </small>
              </div>
              <div className="valid_field">
                {/* Render the TextEditor component */}
                <TextEditor
                  placeholder="Type your text here..."
                  value={productData.description}
                  onChange={(value) => handleInputChange("description", value)}
                />
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
                  <Input
                    value={productData.manufacturerName}
                    onChange={(value) =>
                      handleInputChange("manufacturerName", value)
                    }
                    type="text"
                    placeholder="Manufacturer Name"
                  />
                  <small>Set the product Manufacturer Name.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input
                    value={productData.manufacturerBrand}
                    onChange={(value) =>
                      handleInputChange("manufacturerBrand", value)
                    }
                    type="text"
                    placeholder="Manufacturer Brand"
                  />
                  <small>Set the product Manufacturer Brand.</small>
                </div>
              </div>
              <div className="valid_flex">
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input
                    value={productData.stocks}
                    onChange={(value) => handleInputChange("stocks", value)}
                    type="number"
                    placeholder="Stocks"
                  />
                  <small>Set the product Stocks.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input
                    value={productData.price}
                    onChange={(value) => handleInputChange("price", value)}
                    type="number"
                    placeholder="Price"
                  />
                  <small>Set the product Price.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input
                    value={productData.discount}
                    onChange={(value) => handleInputChange("discount", value)}
                    type="number"
                    placeholder="Discount"
                  />
                  <small>Set the product Discount.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input
                    value={productData.orders}
                    onChange={(value) => handleInputChange("orders", value)}
                    type="number"
                    placeholder="Orders"
                  />
                  <small>Set the product Orders.</small>
                </div>
              </div>
            </div>
            <div className="add_pro_item">
              <h2 className="sub_heading">Inventory</h2>
              <div className="valid_field">
                {/* Render the Input component */}
                <Input
                  value={productData.skuNumber}
                  onChange={(value) => handleInputChange("skuNumber", value)}
                  type="text"
                  placeholder="SKU Number"
                />
                <small>Enter the product SKU.</small>
              </div>
              <div className="valid_flex">
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input
                    value={productData.onShelf}
                    onChange={(value) => handleInputChange("onShelf", value)}
                    type="number"
                    placeholder="On Shelf"
                  />
                  <small>Enter the product quantity on shelf.</small>
                </div>
                <div className="valid_field">
                  {/* Render the Input component */}
                  <Input
                    value={productData.inWarehouse}
                    onChange={(value) =>
                      handleInputChange("inWarehouse", value)
                    }
                    type="number"
                    placeholder="In Warehouse"
                  />
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
                      <Thumbnail
                        thumbnail="https://i.pinimg.com/originals/fc/32/58/fc3258b666e68f9ba7595f87b5c035ef.png"
                        className="variation_thumbnail"
                      />
                      <div className="valid_flex">
                        <div className="valid_flex">
                          <div className="valid_field">
                            {/* Render the Input component */}
                            <Input
                              value={productData.variationSKUId}
                              onChange={(value) =>
                                handleInputChange("variationSKUId", value)
                              }
                              type="text"
                              placeholder="SKU Number"
                            />
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
                            <Input
                              value={productData.regularPrice}
                              onChange={(value) =>
                                handleInputChange("regularPrice", value)
                              }
                              type="text"
                              placeholder="Regular price"
                            />
                            <small>Enter the Regular price.</small>
                          </div>
                          <div className="valid_field">
                            {/* Render the Input component */}
                            <Input
                              value={productData.salePrice}
                              onChange={(value) =>
                                handleInputChange("salePrice", value)
                              }
                              type="text"
                              placeholder="Sale price"
                            />
                            <small>Enter the Sale price.</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="valid_flex">
                      <div className="valid_field">
                        {/* Render the Input component */}
                        <Input
                          value={productData.weight}
                          onChange={(value) =>
                            handleInputChange("weight", value)
                          }
                          type="text"
                          placeholder="Weight (kg)"
                        />
                        <small>Enter the Weight (kg).</small>
                      </div>
                      <div className="valid_field">
                        {/* Render the Input component */}
                        <Input
                          value={productData.length}
                          onChange={(value) =>
                            handleInputChange("length", value)
                          }
                          type="text"
                          placeholder="Length"
                        />
                        <small>Dimensions (LxWxH) (cm)</small>
                      </div>
                      <div className="valid_field">
                        {/* Render the Input component */}
                        <Input
                          value={productData.width}
                          onChange={(value) =>
                            handleInputChange("width", value)
                          }
                          type="text"
                          placeholder="Width"
                        />
                        <small>Dimensions (LxWxH) (cm)</small>
                      </div>
                      <div className="valid_field">
                        {/* Render the Input component */}
                        <Input
                          value={productData.height}
                          onChange={(value) =>
                            handleInputChange("height", value)
                          }
                          type="text"
                          placeholder="Height"
                        />
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
                      <Textarea
                        placeholder="Enter meta description"
                        value={productData.variationDescription}
                        onChange={(value) =>
                          handleInputChange("variationDescription", value)
                        }
                      />
                      <small>Enter the Regular price.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="add_pro_item table_main">
              <h2 className="sub_heading">Customer Reviews</h2>
              <Table header={ProductReview.header} body={ProductReview.body}/>
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

export default EditProduct;
