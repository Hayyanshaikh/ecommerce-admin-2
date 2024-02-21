import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import { CategoriesData } from "../../api/api.js";
import Table from "../../components/common/Table";
import Input from "../../components/common/Input.js";
import Button from "../../components/common/Button.js";
import Textarea from '../../components/common/Textarea.js'
import Thumbnail from '../../components/common/Thumbnail.js'
import PageHeading from "../../components/common/PageHeading.js";
import SelectOption from "../../components/common/SelectOption.js";
const AddCategory = () => {
  // breadcrumb data
  const breadcrumb = [
    { label: "Products", url: "/products/all" },
    { label: "Attribute", url: "/attribute" },
  ];

  //  selet option attribute type
  const categories = [
    {
      label: "Fashion",
      value: "Fashion",
    },
    {
      label: "Electronics",
      value: "Electronics",
    },
    {
      label: "Home & Garden",
      value: "Home & Garden",
    },
    {
      label: "Sports & Outdoors",
      value: "Sports & Outdoors",
    },
    {
      label: "Books & Media",
      value: "Books & Media",
    },
    {
      label: "Toys & Games",
      value: "Toys & Games",
    },
    {
      label: "Pet Supplies",
      value: "Pet Supplies",
    },
    {
      label: "Food & Beverage",
      value: "Food & Beverage",
    },
    {
      label: "Health & Beauty",
      value: "Health & Beauty",
    },
  ];

  console.log(categories);


console.log(categories);


  const [categoryData, setCategoryData] = useState({
    categoryName: "",
    categorySlug: "",
  });
  const handleInputChange = (field, value) => {
    setCategoryData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  return (
    <>
      <section>
        <PageHeading text="attribute" className="" breadcrumb={breadcrumb} />
        <div className="attribute">
          <div className="attribute_sidebar bg_color">
            <div className="attribute_sidebar_item">
              <h2 className="sub_heading">add new category</h2>
              <div className="attribute_sidebar_wrapper">
                <div className="valid_field">
                  <Thumbnail/>
                  <small>Set the thumbnail of category</small>
                </div>
                <div className="valid_field">
                  <Input
                    type="text"
                    placeholder="Category name"
                    onChange={(value) =>
                      handleInputChange("categoryName", value)
                    }
                    value={categoryData.categoryName}
                  />
                  <small>Set the name of category</small>
                </div>
                <div className="valid_field">
                  <Input
                    type="text"
                    placeholder="Category slug"
                    onChange={(value) =>
                      handleInputChange("categorySlug", value)
                    }
                    value={categoryData.categorySlug}
                  />
                  <small>Set the slug of category slug</small>
                </div>
                <div className="valid_field">
                  <SelectOption
                    options={categories}
                    placeholder="Select type"
                  />
                  <small>Set the Parent category</small>
                </div>
                <div className="valid_field">
                  <Textarea
                    placeholder="Description"
                  />
                  <small>Set the Parent category</small>
                </div>
                <Button label="add category" />
              </div>
            </div>
          </div>
          <div className="attribute_main bg_color">
            <div className="table_main">
              <Table className="bordered" header={CategoriesData.header} body={CategoriesData.body} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddCategory;
