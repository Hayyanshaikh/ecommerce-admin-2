import React, { useState } from "react";
import * as Icons from "react-icons/tb";
import Button from "../../components/common/Button.js";
import Input from "../../components/common/Input.js";
import PageHeading from "../../components/common/PageHeading.js";
import Textarea from '../../components/common/Textarea.js'
import Table from "../../components/common/Table";
import { TermsData } from "../../api/api.js";
const Terms = () => {
  // breadcrumb data
  const breadcrumb = [
    { label: "Products", url: "/products/all" },
    { label: "Attribute", url: "/products/attribute" },
    { label: "Terms", url: "/products/terms" },
  ];
  return (
    <>
      <section>
        <PageHeading text="Product color" className="" breadcrumb={breadcrumb} />
        <div className="attribute">
          <div className="attribute_sidebar bg_color">
            <div className="attribute_sidebar_item">
              <h2 className="sub_heading">add new color</h2>
              <div className="attribute_sidebar_wrapper">
                <div className="valid_field">
                  <Input type="text" placeholder="Color name" />
                  <small>Set the name of attribute</small>
                </div>
                <div className="valid_field">
                  <Input type="text" placeholder="Color slug" />
                  <small>Set the slug of attribute</small>
                </div>
                <div className="valid_field">
                	<Textarea placeholder="Enter color description" />
                  <small>
                    Enable this if you want this attribute to have product
                    archives in your store.
                  </small>
                </div>
                <Button
                	label="add color"
                />
              </div>
            </div>
          </div>
          <div className="attribute_main bg_color">
            <div className="table_main">
              <Table className="bordered" header={TermsData.header} body={TermsData.body} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
