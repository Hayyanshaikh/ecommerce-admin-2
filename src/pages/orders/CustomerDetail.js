import React, { useState } from "react";
import PageHeading from "../../components/common/PageHeading.js";
import * as Icons from "react-icons/tb";
import Badge from "../../components/common/Badge.js";
import Table from "../../components/common/Table";
import { CustomerOrderData, AddressBookData } from "../../api/api.js";
import Thumbnail from "../../components/common/Thumbnail.js";
import Button from "../../components/common/Button.js";
import Input from "../../components/common/Input.js";
import Modal from "../../components/common/Modal.js";
const CustomerDetail = () => {
  // breadcrumb data
  const breadcrumb = [
    { label: "orders", url: "/orders/all" },
    { label: "Customers", url: "/orders/customers" },
    { label: "Customers detail", url: "/orders/customer/detail" },
  ];
  // accoutn detail
  const account = {
    "Account ID": "ID-45453423",
    "Billing Email": "info@keenthemes.com",
    "Delivery Address": "101 Collin Street, Melbourne 3000 VIC Australia",
    Language: "English",
    "Latest Transaction": "#14534",
  };

  //  order data
  const [orderData, setOrderData] = useState({
    customerName: "Hayyan Shaikh",
    customerGeneralEmail: "max@kt.com",
    customerBillingEmail: "info@hayyanshaikh.com",
    customerPhone: "+6141 234 567",
    customerPassword: "hayyanshaikh",
    OTPNumber: "",
    OTPCode: "",
  });

  // input change function
  const handleInputChange = (field, value) => {
    setOrderData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  // Authentication modal
  const [authentication, setAuthentication] = useState(false);

  const handleAuthentication = () => {
    setAuthentication(!authentication);
  };

  return (
    <section className="customer_detail">
      <PageHeading text="customer detail" breadcrumb={breadcrumb} />
      <div className="add_product_main customer_detail_main">
        <div className="add_pro_sidebar bg_color">
          <div className="add_pro_sidebar_item">
            <div className="customer_profile">
              <figure className="customer_profile_img">
                <img src={require("../../images/users/user_3.webp")} alt="" />
              </figure>
              <div className="customer_profile_content">
                <h4 className="sub_heading">Hayyan Shaikh</h4>
                <div className="sidebar_label">hayyanshaikh@gmail.com</div>
                <Badge label="premium" className="light-primary" />
              </div>
            </div>
          </div>
          <div className="add_pro_sidebar_item">
            <h4 className="sub_heading">Details</h4>
            <div className="customer_detail_content">
              {Object.entries(account).map(([key, value]) => (
                <div className="customer_detail_content_item" key={key}>
                  <h4 className="sub_2_heading">{key}</h4>
                  <div className="sidebar_label">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="add_pro_main bg_color">
          <div className="add_pro_item">
            <div className="select_attribute">
              <div className="select_attribute_item valid_field reward_points">
                <h2 className="sub_heading">Reward Points</h2>
                <div className="reward_point">
                  <Icons.TbAward />
                  <h4 className="sub_2_heading">4,571</h4>
                  <label className="sidebar_label">Points earned</label>
                </div>
                <small>Earn reward points with every purchase.</small>
              </div>
              <div className="select_attribute_item valid_field reward_points premium">
                <Icons.TbSparkles />
                <div className="reward_point">
                  <h4 className="sub_2_heading">Premium Member</h4>
                </div>
                <small>Tier Milestone Reached.</small>
              </div>
            </div>
          </div>
          <div className="customer_main_item add_pro_item">
            <h2 className="sub_heading">Profile</h2>
            <div className="valid_flex customer_profile_edit">
              <div className="valid_field customer_profile_thumbnail">
                <Thumbnail
                  thumbnail={require("../../images/users/user_3.webp")}
                />
              </div>
              <div className="customer_profile_fields">
                <div className="valid_flex">
                  <div className="valid_field">
                    <Input
                      type="text"
                      placeholder="Enter the name"
                      value={orderData.customerName}
                      onChange={(value) =>
                        handleInputChange("customerName", value)
                      }
                    />
                    <small>Enter the customer name</small>
                  </div>
                  <div className="valid_field">
                    <Input
                      type="text"
                      placeholder="Enter the billing email"
                      value={orderData.customerBillingEmail}
                      onChange={(value) =>
                        handleInputChange("customerBillingEmail", value)
                      }
                    />
                    <small>Enter the billing email</small>
                  </div>
                </div>
                <div className="valid_field">
                  <Input
                    type="text"
                    placeholder="Enter the customer general email"
                    value={orderData.customerGeneralEmail}
                    onChange={(value) =>
                      handleInputChange("customerGeneralEmail", value)
                    }
                  />
                  <small>Enter the customer general email</small>
                </div>
              </div>
            </div>
          </div>
          <div className="customer_main_item add_pro_item">
            <h2 className="sub_heading">Transaction History</h2>
            <div className="table_main add_pro_item">
              <Table
                header={CustomerOrderData.header}
                body={CustomerOrderData.body}
              />
            </div>
          </div>
          <div className="customer_main_item add_pro_item">
            <div className="valid_flex">
              <h2 className="sub_heading">Address book</h2>
              <Button label="add" icon={<Icons.TbPlus />} className="sm" />
            </div>
            <div className="address_books">
              {AddressBookData.map((addressEntry, index) => (
                <div className="address_book" key={index}>
                  <h3 className="address_book_title">
                    <span>{addressEntry.type}</span>
                  </h3>
                  <ul className="address_book_list">
                    {addressEntry.address.map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                  </ul>
                  <div className="address_book_footer">
                    {addressEntry.icons.map((icon, index) => (
                      <React.Fragment key={index}>{icon}</React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="customer_main_item add_pro_item">
            <h2 className="sub_heading">Security Details</h2>
            <div className="valid_flex customer_profile_edit">
              <div className="valid_field">
                <Input
                  type="tell"
                  placeholder="Enter the Phone"
                  value={orderData.customerPhone}
                  onChange={(value) =>
                    handleInputChange("customerPhone", value)
                  }
                />
                <small>Enter the customer Phone</small>
              </div>
              <div className="valid_field">
                <Input
                  type="password"
                  placeholder="Enter the password"
                  value={orderData.customerPassword}
                  onChange={(value) =>
                    handleInputChange("customerPassword", value)
                  }
                />
                <small>Enter the password</small>
              </div>
            </div>
          </div>
          <div className="customer_main_item add_pro_item">
            <div className="valid_flex">
              <h2 className="sub_heading">Two Step Authentication</h2>
              <Button
                icon={<Icons.TbFingerprint />}
                label="Add Authentication Step"
                className="sm"
                onClick={handleAuthentication}
              />
              <Modal bool={authentication} onClose={handleAuthentication}>
              	{{
							    head: <h3 className="sub_heading">Enable One Time Password</h3>,
							    body:(
							    	<>
				              <div className="valid_field">
				                <Input
				                  type="tell"
				                  placeholder="Enter the Phone number"
				                  value={orderData.OTPNumber}
				                  onChange={(value) =>
				                    handleInputChange("OTPNumber", value)
				                  }
				                />
				                <small>Enter the customer Phone number</small>
				              </div>
				              <div className="valid_field">
				                <Input
				                  type="email"
				                  placeholder="Enter the Email"
				                  value={orderData.OTPCode}
				                  onChange={(value) =>
				                    handleInputChange("OTPCode", value)
				                  }
				                />
				                <small>Enter the Email</small>
				              </div>
				              <div className="valid_field">
				                <Input
				                  type="email"
				                  placeholder="Enter the Email"
				                  value={orderData.OTPCode}
				                  onChange={(value) =>
				                    handleInputChange("OTPCode", value)
				                  }
				                />
				                <small>Enter the Email</small>
				              </div>
							    	</>
							    ),
							    footer: (
							    	<>
								    	<Button
				                label="save & changes"
				                className="sm"
				              />
								    	<Button
				                label="close modal"
				                className="sm"
				                onClick={handleAuthentication}
				              />
							    	</>
							    ),
							  }}
              </Modal>
            </div>
            <div className="valid_flex customer_profile_edit">
              <div className="valid_field">
                <Input
                  type="tell"
                  placeholder="Enter the Phone"
                  value={orderData.customerPhone}
                  onChange={(value) =>
                    handleInputChange("customerPhone", value)
                  }
                />
                <small>Enter the customer Phone</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerDetail;
