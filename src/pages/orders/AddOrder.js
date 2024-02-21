import React, { useState } from 'react';
import { OrderProducts } from "../../api/api.js";
import Notes from '../../components/common/Notes.js';
import Input from "../../components/common/Input.js";
import Table from '../../components/common/Table.js';
import Button from '../../components/common/Button.js';
import Textarea from '../../components/common/Textarea.js';
import CheckBox from "../../components/common/CheckBox.js";
import MultiSelect from "../../components/common/MultiSelect.js";
import PageHeading from '../../components/common/PageHeading.js';
import SelectOption from "../../components/common/SelectOption.js";
import CustomCalendar from '../../components/common/CustomCalendar.js';
const AddOrder = () => {
	// breadcrumb data
  const breadcrumb = [
    { label: "Order", url: "/orders/all" },
    { label: "Add Order", url: "/orders/add" },
  ];
  // select option data for paymentMethod
  const paymentMethod = [
  { value: "cash_on_delivery", label: "Cash on Delivery" },
  { value: "credit_card_visa", label: "Credit Card (Visa)" },
  { value: "credit_card_mastercard", label: "Credit Card (Mastercard)" },
  { value: "paypal", label: "Paypal" },
	];
	  // select option data for shippingMethods
	const shippingMethods = [
	  { value: "standard_shipping", label: "Standard Shipping" },
	  { value: "express_shipping", label: "Express Shipping" },
	  { value: "next_day_shipping", label: "Next Day Shipping" },
	  { value: "free_shipping", label: "Free Shipping" },
	];

	// data change input
	const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  //  order data
  const [orderData, setOrderData] = useState({
    orderName: "",
    orderEmail: "",
    orderPhone: "",
    orderCompany: "",
    orderAddress1: "",
    orderAddress2: "",
    orderCity: "",
    orderPostcode: "",
    orderNote: "",
  });

  // input change function
  const handleInputChange = (field, value) => {
    setOrderData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  // countries data
  const orderCountries = [
	  { value: "india", label: "India" },
	  { value: "pakistan", label: "Pakistan" },
	  { value: "united_states", label: "United States" },
	  { value: "china", label: "China" },
	  { value: "russia", label: "Russia" },
	  { value: "brazil", label: "Brazil" },
	  { value: "japan", label: "Japan" },
	  { value: "germany", label: "Germany" },
	  { value: "france", label: "France" },
	];
	const indiaStates = [
	  { value: "up", label: "Uttar Pradesh" },
	  { value: "mp", label: "Madhya Pradesh" },
	  { value: "delhi", label: "Delhi" },
	  { value: "rajasthan", label: "Rajasthan" },
	  { value: "maharashtra", label: "Maharashtra" },
	  { value: "karnataka", label: "Karnataka" },
	  { value: "andhrapradesh", label: "Andhra Pradesh" },
	  { value: "telangana", label: "Telangana" },
	  { value: "westbengal", label: "West Bengal" },
	];

  // allow out of stock product purchase
  const [isChecked, setIsChecked] = useState(true);
 // function to handle checkbox change
  const handleCheckboxChange = (newCheckedState) => {
    setIsChecked(newCheckedState);
  };
	return (
		<>
			<section className="add_order">
				<PageHeading text="add order" className="" breadcrumb={breadcrumb} />
				<div className="add_order_wrapper">
					<div className="add_order_sidebar bg_color">
						<div className="add_order_side_item">
							<h2 className="sub_heading">order details</h2>
							<div className="add_order_side_wrapper">
								<p className="sidebar_label">order ID</p>
								<h2 className="sub_2_heading">#2389465</h2>
							</div>
						</div>
						<div className="add_order_side_item">
							<div className="valid_field">
								<SelectOption options={paymentMethod} placeholder="Payment Method" />
								<small>Set the date of the order to process.</small>
							</div>
						</div>
						<div className="add_order_side_item">
							<div className="valid_field">
								<SelectOption options={shippingMethods} placeholder="Shipping Method" />
								<small>Set the date of the order to process.</small>
							</div>
						</div>
						<div className="add_order_side_item">
							<div className="valid_field">
								<CustomCalendar onDateChange={handleDateChange} />
								<small>Set the date of the order to process.</small>
							</div>
						</div>
						<div className="add_order_side_item">
							<Notes placeholder="Add note" label="Add note" small="Order notes" />
						</div>
					</div>
					<div className="add_order_main bg_color">
						<div className="add_order_item">
							<h2 className="sub_heading">Select Products</h2>
							<div className="order_selected_product">
								<p className="order_selected_placeholder">Select one or more products from the list below by ticking the checkbox.</p>
							</div>
							<div className="valid_flex">
								<h3 className="sidebar_label">Total Cost: $ <span>0.00</span></h3>
								<Button
									label="add product"
									className="sm"
								/>
							</div>
							<div className="valid_flex">
							<div className="table_main">
								<Table header={OrderProducts.header} showCheck={true} body={OrderProducts.body} className="order_products"/>
							</div> 
							</div>
						</div>
						<div className="add_order_item">
							<h2 className="sub_heading">Delivery Details</h2>
							<h3 className="sub_2_heading">Billing Address</h3>
							<div className="add_order_item_wrap">
								<div className="valid_flex">
									<div className="valid_field">
		                <Input
			                type="text"
			                placeholder="Enter the name"
			                value={orderData.orderName}
			                onChange={(value) => handleInputChange("orderName", value)}
		                />
		                <small>
		                  set the name of customar
		                </small>
		              </div>
									<div className="valid_field">
		                <Input
			                type="email"
			                placeholder="Enter the email"
			                value={orderData.orderEmail}
			                onChange={(value) => handleInputChange("orderEmail", value)}
		                />
		                <small>
		                  set the email of customar
		                </small>
		              </div>
									<div className="valid_field">
		                <Input
			                type="number"
			                placeholder="Enter the phone"
			                value={orderData.orderPhone}
			                onChange={(value) => handleInputChange("orderPhone", value)}
		                />
		                <small>
		                  set the phone of customar
		                </small>
		              </div>
								</div>
								<div className="valid_flex">
									<div className="valid_field">
		                <Input
			                type="text"
			                placeholder="Enter the Company"
			                value={orderData.orderCompany}
			                onChange={(value) => handleInputChange("orderCompany", value)}
		                />
		                <small>
		                  set the Company of customar
		                </small>
		              </div>
								</div>
	              <div className="valid_flex">
									<div className="valid_field">
		                <Input
			                type="text"
			                placeholder="Enter the Address line 1"
			                value={orderData.orderAddress1}
			                onChange={(value) => handleInputChange("orderAddress1", value)}
		                />
		                <small>
		                  set the Address line 1 of customar
		                </small>
		              </div>
									<div className="valid_field">
		                <Input
			                type="number"
			                placeholder="Enter the Address line 2"
			                value={orderData.orderAddress1}
			                onChange={(value) => handleInputChange("orderAddress1", value)}
		                />
		                <small>
		                  set the Address line 2 of customar
		                </small>
		              </div>
	              </div>
	              <div className="valid_flex">
									<div className="valid_field">
		                <Input
			                type="text"
			                placeholder="Enter the City"
			                value={orderData.orderCity}
			                onChange={(value) => handleInputChange("orderCity", value)}
		                />
		                <small>
		                  set the City of customar
		                </small>
		              </div>
									<div className="valid_field">
		                <Input
			                type="number"
			                placeholder="Enter the Postcode / ZIP"
			                value={orderData.orderPostcode}
			                onChange={(value) => handleInputChange("orderPostcode", value)}
		                />
		                <small>
		                  set the Postcode / ZIP of customar
		                </small>
		              </div>
	              </div>
	              <div className="valid_flex">
									<div className="valid_field">
										<MultiSelect
                      options={orderCountries}
                      placeholder="Select Country"
                      isMulti={false}
                      className="top_options"
                    />
										<small>Set the date of the order to process.</small>
									</div>
									<div className="valid_field">
										<MultiSelect
                      options={indiaStates}
                      placeholder="Select State"
                      isMulti={false}
                      className="top_options"
                    />
										<small>Set the date of the order to process.</small>
		              </div>
	              </div>
	              {/* Render the CheckBox component */}
	              <CheckBox
	                label="Shipping address is the same as billing address"
	                checked={isChecked}
	                onChange={handleCheckboxChange}
	              />
							</div>
							{
								!isChecked ? (
									<>
									<h3 className="sub_2_heading">Shipping Address</h3>
									<div className="add_order_item_wrap">
										<div className="valid_flex">
											<div className="valid_field">
				                <Input
					                type="text"
					                placeholder="Enter the name"
					                value={orderData.orderName}
					                onChange={(value) => handleInputChange("orderName", value)}
				                />
				                <small>
				                  set the name of customar
				                </small>
				              </div>
											<div className="valid_field">
				                <Input
					                type="email"
					                placeholder="Enter the email"
					                value={orderData.orderEmail}
					                onChange={(value) => handleInputChange("orderEmail", value)}
				                />
				                <small>
				                  set the email of customar
				                </small>
				              </div>
											<div className="valid_field">
				                <Input
					                type="number"
					                placeholder="Enter the phone"
					                value={orderData.orderPhone}
					                onChange={(value) => handleInputChange("orderPhone", value)}
				                />
				                <small>
				                  set the phone of customar
				                </small>
				              </div>
										</div>
										<div className="valid_flex">
											<div className="valid_field">
				                <Input
					                type="number"
					                placeholder="Enter the Company"
					                value={orderData.orderCompany}
					                onChange={(value) => handleInputChange("orderCompany", value)}
				                />
				                <small>
				                  set the Company of customar
				                </small>
				              </div>
										</div>
			              <div className="valid_flex">
											<div className="valid_field">
				                <Input
					                type="text"
					                placeholder="Enter the Address line 1"
					                value={orderData.orderAddress1}
					                onChange={(value) => handleInputChange("orderAddress1", value)}
				                />
				                <small>
				                  set the Address line 1 of customar
				                </small>
				              </div>
											<div className="valid_field">
				                <Input
					                type="number"
					                placeholder="Enter the Address line 2"
					                value={orderData.orderAddress1}
					                onChange={(value) => handleInputChange("orderAddress1", value)}
				                />
				                <small>
				                  set the Address line 2 of customar
				                </small>
				              </div>
			              </div>
			              <div className="valid_flex">
											<div className="valid_field">
				                <Input
					                type="text"
					                placeholder="Enter the City"
					                value={orderData.orderCity}
					                onChange={(value) => handleInputChange("orderCity", value)}
				                />
				                <small>
				                  set the City of customar
				                </small>
				              </div>
											<div className="valid_field">
				                <Input
					                type="number"
					                placeholder="Enter the Postcode / ZIP"
					                value={orderData.orderPostcode}
					                onChange={(value) => handleInputChange("orderPostcode", value)}
				                />
				                <small>
				                  set the Postcode / ZIP of customar
				                </small>
				              </div>
			              </div>
			              <div className="valid_flex">
											<div className="valid_field">
												<MultiSelect
		                      options={orderCountries}
		                      placeholder="Select Country"
		                      isMulti={false}
		                      className="top_options"
		                    />
												<small>Set the date of the order to process.</small>
											</div>
											<div className="valid_field">
												<MultiSelect
		                      options={indiaStates}
		                      placeholder="Select State"
		                      isMulti={false}
		                      className="top_options"
		                    />
												<small>Set the date of the order to process.</small>
				              </div>
			              </div>
									</div>
									</>
								) : null
							}
						</div>
					</div>
				</div>
			</section>	
		</>
	)
}

export default AddOrder