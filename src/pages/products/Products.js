import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import Button from "../../components/common/Button.js";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input.js";
import PageHeading from "../../components/common/PageHeading.js";
import SelectOption from "../../components/common/SelectOption.js";
import Table from "../../components/common/Table";
import { AllProducts } from "../../api/api.js";
import Rating from "../../components/common/Rating.js";
import Pagination from "../../components/common/Pagination.js";
const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Handle search input change
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e);
  };
  //  select option data
  const productStatus = [
    { value: "published", label: "published" },
    { value: "scheduled", label: "scheduled" },
    { value: "inactive", label: "inactive" },
  ];
  // breadcrumb data
  const breadcrumb = [
    { label: "Products", url: "/products" },
  ];

  // filterOptions
  const filterOptions = [
    { value: 10, label: 10 },
    { value: 20, label: 20 },
    { value: 30, label: 30 },
    { value: 40, label: 40 },
  ];
  // change pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <section className="all_products bg_color">
        <PageHeading text="all products" className="" breadcrumb={breadcrumb} />
        <div className="product_filter_head">
          <Input
            className=""
            type="text"
            icon={<Icons.TbSearch color="#bcbdbd" />}
            placeholder="Search product..."
            onChange={handleChange}
            value={value}
          />
          <SelectOption options={productStatus} placeholder="status" />
          <Link to="/products/new" className="button add_product_btn">
            <span>add product</span>
          </Link>
        </div>
        <div className="table_main">
          <Table header={AllProducts.header} body={AllProducts.body} />
        </div>
        <div className="product_filter_footer">
          <SelectOption
            options={filterOptions}
            placeholder="10"
            className="top_options"
          />
          <Pagination
            totalPages={5}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </>
  );
};

export default Products;
