import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import Button from "../../components/common/Button.js";
import { Link } from "react-router-dom";
import Input from "../../components/common/Input.js";
import PageHeading from "../../components/common/PageHeading.js";
import SelectOption from "../../components/common/SelectOption.js";
import MultiSelect from "../../components/common/MultiSelect.js";
import Table from "../../components/common/Table";
import { AllProducts,countries,AllCustomerData } from "../../api/api.js";
import Rating from "../../components/common/Rating.js";
import Pagination from "../../components/common/Pagination.js";
const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Handle search input change
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e);
  };
  // breadcrumb data
  const breadcrumb = [
    { label: "orders", url: "/orders/all" },
    { label: "Customers", url: "/customers" },
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
        <PageHeading text="Customers" className="" breadcrumb={breadcrumb} />
        <div className="product_filter_head">
          <Input
            className=""
            type="text"
            icon={<Icons.TbSearch color="#bcbdbd" />}
            placeholder="Search product..."
            onChange={handleChange}
            value={value}
          />
          <MultiSelect options={countries} placeholder="Countries filter" />
        </div>
        <div className="table_main">
          <Table header={AllCustomerData.header} body={AllCustomerData.body} />
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

export default Customers;
