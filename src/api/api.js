import React from "react";
import * as Icons from "react-icons/tb";
import { Link } from "react-router-dom";
import User from '../components/common/User.js';
import Badge from '../components/common/Badge.js';
import Rating from "../components/common/Rating.js";
import ProductProfile from "../components/common/ProductProfile.js";

// navigation
export const menu = [{
    name: "Dashboard",
    url: "/admin",
    subMenu: [{
        name: "Overview",
        url: "/overview",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "Sales Analytics",
        url: "/analytics",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
    ],
    icon: <Icons.TbLayout className="menu_icon" />,
  },
  {
    name: "Orders",
    url: "/orders",
    subMenu: [{
        name: "all Orders",
        url: "/all",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "add Orders",
        url: "/add",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "customers",
        url: "/customers",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
    ],
    icon: <Icons.TbShoppingBag className="menu_icon" />,
  },
  {
    name: "Products",
    url: "/products",
    subMenu: [{
        name: "All Products",
        url: "/all",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "add Product",
        url: "/new",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "Attribute",
        url: "/attribute",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "Add Category",
        url: "/categories/add",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
    ],
    icon: <Icons.TbShoppingCart className="menu_icon" />,
  },
  {
    name: "Inventory",
    url: "/inventory",
    icon: <Icons.TbListCheck className="menu_icon" />,
  },
  {
    name: "Analytics",
    url: "/analytics",
    icon: <Icons.TbChartLine className="menu_icon" />,
  },
  {
    name: "Payment Methods",
    url: "/payment-methods",
    icon: <Icons.TbCreditCard className="menu_icon" />,
  },
  {
    name: "Discounts",
    url: "/discounts",
    icon: <Icons.TbDivide className="menu_icon" />,
  },
  {
    name: "Reports",
    url: "/reports",
    subMenu: [{
        name: "Sales Reports",
        url: "/sales",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "Customer Reports",
        url: "/customers",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "Product Reports",
        url: "/products",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
    ],
    icon: <Icons.TbChartBar className="menu_icon" />,
  },
  {
    name: "Settings",
    url: "/settings",
    subMenu: [{
        name: "General",
        url: "/general",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
      {
        name: "Security",
        url: "/security",
        icon: <Icons.TbCircleDot className="menu_icon" />,
      },
    ],
    icon: <Icons.TbSettings className="menu_icon" />,
  },
  {
    name: "Logout",
    url: "/logout",
    icon: <Icons.TbLogout className="menu_icon" />,
  },
];

// all product data
export const AllProducts = {
  header: ["PRODUCT", "SKU", "QTY", "PRICE", "RATING", "STATUS"],
  body: [{
      product: (
        <ProductProfile
          label="Half Sleeve T-Shirts (Blue)"
          category="Fashion"
          src={require(`../images/products/product_1.png`)}
        />
      ),
      sku: "01405001",
      qty: 20,
      price: "29.99",
      rating: <Rating value={4} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
    {
      product: (
        <ProductProfile
          label="Reusable Ecological Coffee Cup"
          category="Kitchenware"
          src={require(`../images/products/product_2.png`)}
        />
      ),
      sku: "01405002",
      qty: 10,
      price: "12.99",
      rating: <Rating value={3.5} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
    {
      product: (
        <ProductProfile
          label="Wireless Bluetooth Headphones"
          category="Electronics"
          src={require(`../images/products/product_3.png`)}
        />
      ),
      sku: "01405003",
      qty: 15,
      price: "59.99",
      rating: <Rating value={4.5} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
    {
      product: (
        <ProductProfile
          label="Slim Fit Jeans"
          category="Fashion"
          src={require(`../images/products/product_4.png`)}
        />
      ),
      sku: "01405004",
      qty: 30,
      price: "39.99",
      rating: <Rating value={3} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
    {
      product: (
        <ProductProfile
          label="Waterproof Sports Watch"
          category="Watches"
          src={require(`../images/products/product_5.png`)}
        />
      ),
      sku: "01405005",
      qty: 5,
      price: "79.99",
      rating: <Rating value={4} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
    {
      product: (
        <ProductProfile
          label="Smart Home Security Camera"
          category="Electronics"
          src={require(`../images/products/product_6.png`)}
        />
      ),
      sku: "01405006",
      qty: 8,
      price: "89.99",
      rating: <Rating value={4.5} max={5} />,
      status: <Badge label="Inactive" className="light-danger" />,
    },
    {
      product: (
        <ProductProfile
          label="Leather Crossbody Bag"
          category="Fashion"
          src={require(`../images/products/product_7.png`)}
        />
      ),
      sku: "01405007",
      qty: 12,
      price: "49.99",
      rating: <Rating value={4} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
    {
      product: (
        <ProductProfile
          label="Portable Wireless Charger"
          category="Electronics"
          src={require(`../images/products/product_8.png`)}
        />
      ),
      sku: "01405008",
      qty: 25,
      price: "39.99",
      rating: <Rating value={4.5} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
    {
      product: (
        <ProductProfile
          label="Men's Classic Dress Shoes"
          category="Fashion"
          src={require(`../images/products/product_9.png`)}
        />
      ),
      sku: "01405009",
      qty: 15,
      price: "69.99",
      rating: <Rating value={3.5} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
    {
      product: (
        <ProductProfile
          label="Professional DSLR Camera"
          category="Electronics"
          src={require(`../images/products/product_10.png`)}
        />
      ),
      sku: "01405010",
      qty: 3,
      price: "999.99",
      rating: <Rating value={5} max={5} />,
      status: <Badge label="Active" className="light-success" />,
    },
  ],
};

// attribute table
export const AttributeData = {
  header: [
    "Name",
    "Slug",
    "Type",
    "Terms",
    "Actions"
  ],
  body: [{
      name: "Color",
      slug: "color",
      type: "Select",
      terms: "Blue, Green, Red, Yellow",
      actions: <Link to="/products/terms">Configure</Link>
    },
    {
      name: "Size",
      slug: "size",
      type: "Select",
      terms: "Small, Medium, Large, Extra Large",
      actions: <Link to="/products/terms">Configure</Link>
    },
    {
      name: "Material",
      slug: "material",
      type: "Select",
      terms: "Cotton, Polyester, Silk, Wool",
      actions: <Link to="/products/terms">Configure</Link>
    }
  ]
};

// terms table
export const TermsData = {
  header: [
    "Name",
    "Slug",
    "Description",
    "Count"
  ],
  body: [{
      name: "Blue",
      slug: "blue-color",
      description: "-",
      count: 0
    },
    {
      name: "Green",
      slug: "green-color",
      description: "-",
      count: 0
    },
    {
      name: "Red",
      slug: "red-color",
      description: "-",
      count: 0
    },
    {
      name: "Yellow",
      slug: "yellow-color",
      description: "-",
      count: 0
    }
  ]
};

// all review data
export const ProductReview = {
  header: ["RATING", "CUSTOMER", "COMMENT", "DATE"],
  body: [{
      rating: <Rating value={3.5} max={5} />,
      customer: <User name="John Smith" src={require('../images/users/user_1.webp')} />,
      comment: <p className="comment">This product exceeded my expectations! It's incredibly well-made and the functionality is top-notch. Highly recommended!</p>,
      date: "2 days ago",
    },
    {
      rating: <Rating value={4.2} max={5} />,
      customer: <User name="Emily Johnson" src={require('../images/users/user_2.webp')} />,
      comment: <p className="comment">Great product! It has improved my daily routine. The quality is excellent, and it arrived on time.</p>,
      date: "4 days ago",
    },
    {
      rating: <Rating value={4.8} max={5} />,
      customer: <User name="Michael Thompson" src={require('../images/users/user_3.webp')} />,
      comment: <p className="comment">I love this product! It's stylish and functional. The customer service was also very helpful.</p>,
      date: "1 week ago",
    },
    // Add more reviews here...
    {
      rating: <Rating value={3.9} max={5} />,
      customer: <User name="Sarah Wilson" src={require('../images/users/user_4.webp')} />,
      comment: <p className="comment">The product works well, but the packaging could be improved. Overall, I'm satisfied with my purchase.</p>,
      date: "2 weeks ago",
    },
    {
      rating: <Rating value={4.5} max={5} />,
      customer: <User name="David Lee" src={require('../images/users/user_5.webp')} />,
      comment: <p className="comment">I'm impressed with the quality of this product. It's durable and performs exceptionally well.</p>,
      date: "3 weeks ago",
    },
    {
      rating: <Rating value={4.1} max={5} />,
      customer: <User name="Sophia Davis" src={require('../images/users/user_6.webp')} />,
      comment: <p className="comment">I would highly recommend this product. It's exactly what I needed, and the price is reasonable.</p>,
      date: "1 month ago",
    },
    {
      rating: <Rating value={3.7} max={5} />,
      customer: <User name="Daniel Moore" src={require('../images/users/user_7.webp')} />,
      comment: <p className="comment">The product arrived damaged, but the customer support team resolved the issue quickly. The quality is good overall.</p>,
      date: "1 month ago",
    },
    {
      rating: <Rating value={4.3} max={5} />,
      customer: <User name="Olivia Taylor" src={require('../images/users/user_8.webp')} />,
      comment: <p className="comment">I'm very happy with my purchase. The product exceeded my expectations in terms of performance and durability.</p>,
      date: "2 months ago",
    },
    {
      rating: <Rating value={4.6} max={5} />,
      customer: <User name="Ethan Anderson" src={require('../images/users/user_9.webp')} />,
      comment: <p className="comment">This product is amazing! It's worth every penny. I've recommended it to all my friends.</p>,
      date: "2 months ago",
    },
    {
      rating: <Rating value={3.8} max={5} />,
      customer: <User name="Ava Thomas" src={require('../images/users/user_10.webp')} />,
      comment: <p className="comment">The product arrived on time and works as described. It's a decent product for the price.</p>,
      date: "3 months ago",
    },
  ],
};

// categories table
export const CategoriesData = {
  header: [
    "Image",
    "Slug",
    "Description",
    "Count",
  ],
  body: [{
      image: <ProductProfile
          label="fashion"
          src={require(`../images/products/product_1.png`)}
        />,
      slug: "fashion slug",
      description: <p className="comment">Fashion is a form of self-expression with a specific context, such as time, place and purpose. Example of these are clothing, footwear, lifestyle, accessories, makeup, hairstyle, and body posture. The term implies a look defined by the fashion industry as that which is trending.</p>,
      count: 90
    },
    {
      image: <ProductProfile
          label="electronics"
          src={require(`../images/products/product_2.png`)}
        />,
      slug: "electronics slug",
      description: <p className="comment">Electronics are devices that use electricity to operate. They include a wide range of products, such as televisions, computers, smartphones, and appliances.</p>,
      count: 80
    },
    {
      image: <ProductProfile
          label="home & garden"
          src={require(`../images/products/product_3.png`)}
        />,
      slug: "home & garden slug",
      description: <p className="comment">Home & garden products are items that are used to maintain and improve the home and garden. They include a wide range of products, such as furniture, appliances, tools, and plants.</p>,
      count: 70
    },
    {
      image: <ProductProfile
          label="sports & outdoors"
          src={require(`../images/products/product_4.png`)}
        />,
      slug: "sports & outdoors slug",
      description: <p className="comment">Sports & outdoors products are items that are used to participate in sports and outdoor activities. They include a wide range of products, such as clothing, footwear, equipment, and gear.</p>,
      count: 60
    },
    {
      image: <ProductProfile
          label="books & media"
          src={require(`../images/products/product_5.png`)}
        />,
      slug: "books & media slug",
      description: <p className="comment">Books & media products are items that are used to read, watch, and listen to. They include a wide range of products, such as books, magazines, movies, music, and games.</p>,
      count: 50
    },
    {
      image: <ProductProfile
          label="toys & games"
          src={require(`../images/products/product_6.png`)}
        />,
      slug: "toys & games slug",
      description: <p className="comment">Toys & games products are items that are used for entertainment. They include a wide range of products, such as toys, games, puzzles, and sporting goods.</p>,
      count: 40
    },
    {
      image: <ProductProfile
          label="pet supplies"
          src={require(`../images/products/product_7.png`)}
        />,
      slug: "pet supplies slug",
      description: <p className="comment">Pet supplies products are items that are used to care for pets. They include a wide range of products, such as food, toys, and accessories.</p>,
      count: 30
    },
    {
      image: <ProductProfile
          label="food & beverage"
          src={require(`../images/products/product_8.png`)}
        />,
      slug: "food & beverage slug",
      description: <p className="comment">Food & beverage products are items that are used to eat and drink. They include a wide range of products, such as food, drinks, and snacks.</p>,
      count: 20
    },
    {
      image: <ProductProfile
          label="health & beauty"
          src={require(`../images/products/product_9.png`)}
        />,
      slug: "health & beauty slug",
      description: <p className="comment">Health & beauty products are items that are used to maintain and improve health and appearance. They include a wide range of products, such as cosmetics, personal care products, and over-the-counter medications.</p>,
      count: 10
    },
    {
      image: <ProductProfile
          label="other"
          src={require(`../images/products/product_10.png`)}
        />,
      slug: "other slug",
      description: <p className="comment">Other products are items that do not fit into any of the other categories. They include a wide range of products, such as travel goods, office supplies, and gifts.</p>,
      count: 0
    },
  ],
};

// all orders data
export const AllOrderData = {
  header: [
    "Order",
    "Customer",
    "Date",
    "Status",
    "Total",
  ],
  body: [{
      order: "1234567892",
      date: "2023-07-13",
      status: <Badge label="Pending" className="light-warning" />,
      total: 150,
      customer: <User link="/orders/edit" name="Customer 1" src={require('../images/users/user_1.webp')} />,
    },
    {
      order: "1234567893",
      date: "2023-07-14",
      status: <Badge label="Active" className="light-success" />,
      total: 200,
      customer: <User link="/orders/edit" name="Customer 2" src={require('../images/users/user_2.webp')} />,
    },
    {
      order: "1234567894",
      date: "2023-07-15",
      status: <Badge label="Delivered" className="light-success" />,
      total: 250,
      customer: <User link="/orders/edit" name="Customer 3" src={require('../images/users/user_3.webp')} />,
    },
    {
      order: "1234567895",
      date: "2023-07-16",
      status: <Badge label="Pending" className="light-warning" />,
      total: 300,
      customer: <User link="/orders/edit" name="Customer 4" src={require('../images/users/user_4.webp')} />,
    },
    {
      order: "1234567896",
      date: "2023-07-17",
      status: <Badge label="Active" className="light-success" />,
      total: 350,
      customer: <User link="/orders/edit" name="Customer 5" src={require('../images/users/user_5.webp')} />,
    },
    {
      order: "1234567897",
      date: "2023-07-18",
      status: <Badge label="Delivered" className="light-success" />,
      total: 400,
      customer: <User link="/orders/edit" name="Customer 6" src={require('../images/users/user_6.webp')} />,
    },
    {
      order: "1234567898",
      date: "2023-07-19",
      status: <Badge label="Pending" className="light-warning" />,
      total: 450,
      customer: <User link="/orders/edit" name="Customer 7" src={require('../images/users/user_7.webp')} />,
    },
    {
      order: "1234567899",
      date: "2023-07-20",
      status: <Badge label="Active" className="light-success" />,
      total: 500,
      customer: <User link="/orders/edit" name="Customer 8" src={require('../images/users/user_8.webp')} />,
    },
    {
      order: "1234567900",
      date: "2023-07-21",
      status: <Badge label="Delivered" className="light-success" />,
      total: 550,
      customer: <User link="/orders/edit" name="Customer 9" src={require('../images/users/user_9.webp')} />,

    },
    {
      order: "1234567901",
      date: "2023-07-22",
      status: <Badge label="Pending" className="light-warning" />,
      total: 600,
      customer: <User link="/orders/edit" name="Customer 10" src={require('../images/users/user_10.webp')} />,
    },
  ],
};

// all countrie
export const countries = [
  { value: "Afghanistan", label: "Afghanistan" },
  { value: "Albania", label: "Albania" },
  { value: "Algeria", label: "Algeria" },
  { value: "Andorra", label: "Andorra" },
  { value: "Angola", label: "Angola" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Argentina", label: "Argentina" },
  { value: "Armenia", label: "Armenia" },
  { value: "Australia", label: "Australia" },
  { value: "Austria", label: "Austria" },
  { value: "Azerbaijan", label: "Azerbaijan" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Bahrain", label: "Bahrain" },
  { value: "Bangladesh", label: "Bangladesh" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belarus", label: "Belarus" },
  { value: "Belgium", label: "Belgium" },
  { value: "Belize", label: "Belize" },
  { value: "Benin", label: "Benin" },
  { value: "Bhutan", label: "Bhutan" },
  { value: "Bolivia", label: "Bolivia" },
  { value: "Bosnia and Herzegovina", label: "Bosnia and Herzegovina" },
  { value: "Botswana", label: "Botswana" },
  { value: "Brazil", label: "Brazil" },
  { value: "Brunei", label: "Brunei" },
  { value: "Bulgaria", label: "Bulgaria" },
  { value: "Burkina Faso", label: "Burkina Faso" },
  { value: "Burundi", label: "Burundi" },
  { value: "Cabo Verde", label: "Cabo Verde" },
  { value: "Cambodia", label: "Cambodia" },
  { value: "Cameroon", label: "Cameroon" },
  { value: "Canada", label: "Canada" },
  { value: "Central African Republic", label: "Central African Republic" },
  { value: "Chad", label: "Chad" },
  { value: "Chile", label: "Chile" },
  { value: "China", label: "China" },
  { value: "Colombia", label: "Colombia" },
  { value: "Comoros", label: "Comoros" },
  { value: "Congo, Democratic Republic of the", label: "Congo, Democratic Republic of the" },
  { value: "Congo, Republic of the", label: "Congo, Republic of the" },
  { value: "Costa Rica", label: "Costa Rica" },
  { value: "Cote d'Ivoire", label: "Cote d'Ivoire" },
  { value: "Croatia", label: "Croatia" },
  { value: "Cuba", label: "Cuba" },
  { value: "Cyprus", label: "Cyprus" },
  { value: "Czech Republic", label: "Czech Republic" },
  { value: "Denmark", label: "Denmark" },
  { value: "Djibouti", label: "Djibouti" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "East Timor (Timor-Leste)", label: "East Timor (Timor-Leste)" },
  { value: "Ecuador", label: "Ecuador" },
  { value: "Egypt", label: "Egypt" },
  { value: "El Salvador", label: "El Salvador" },
  { value: "Equatorial Guinea", label: "Equatorial Guinea" },
  { value: "Eritrea", label: "Eritrea" },
  { value: "Estonia", label: "Estonia" },
  { value: "Eswatini", label: "Eswatini" },
  { value: "Ethiopia", label: "Ethiopia" },
  { value: "Fiji", label: "Fiji" },
  { value: "Finland", label: "Finland" },
  { value: "France", label: "France" },
  { value: "Gabon", label: "Gabon" },
  { value: "Gambia", label: "Gambia" },
  { value: "Georgia", label: "Georgia" },
  { value: "Germany", label: "Germany" },
  { value: "Ghana", label: "Ghana" },
  { value: "Greece", label: "Greece" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guatemala", label: "Guatemala" },
  { value: "Guinea", label: "Guinea" },
  { value: "Guinea-Bissau", label: "Guinea-Bissau" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Honduras", label: "Honduras" },
  { value: "Hungary", label: "Hungary" },
  { value: "Iceland", label: "Iceland" },
  { value: "India", label: "India" },
  { value: "Indonesia", label: "Indonesia" },
  { value: "Iran", label: "Iran" },
  { value: "Iraq", label: "Iraq" },
  { value: "Ireland", label: "Ireland" },
  { value: "Israel", label: "Israel" },
  { value: "Italy", label: "Italy" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Japan", label: "Japan" },
  { value: "Jordan", label: "Jordan" },
  { value: "Kazakhstan", label: "Kazakhstan" },
  { value: "Kenya", label: "Kenya" },
  { value: "Kiribati", label: "Kiribati" },
  { value: "Korea, North", label: "Korea, North" },
  { value: "Korea, South", label: "Korea, South" },
  { value: "Kosovo", label: "Kosovo" },
  { value: "Kuwait", label: "Kuwait" },
  { value: "Kyrgyzstan", label: "Kyrgyzstan" },
  { value: "Laos", label: "Laos" },
  { value: "Latvia", label: "Latvia" },
  { value: "Lebanon", label: "Lebanon" },
  { value: "Lesotho", label: "Lesotho" },
  { value: "Liberia", label: "Liberia" },
  { value: "Libya", label: "Libya" },
  { value: "Liechtenstein", label: "Liechtenstein" },
  { value: "Lithuania", label: "Lithuania" },
  { value: "Luxembourg", label: "Luxembourg" },
  { value: "Madagascar", label: "Madagascar" },
  { value: "Malawi", label: "Malawi" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Maldives", label: "Maldives" },
  { value: "Mali", label: "Mali" },
  { value: "Malta", label: "Malta" },
  { value: "Marshall Islands", label: "Marshall Islands" },
  { value: "Mauritania", label: "Mauritania" },
  { value: "Mauritius", label: "Mauritius" },
  { value: "Mexico", label: "Mexico" },
  { value: "Micronesia", label: "Micronesia" },
  { value: "Moldova", label: "Moldova" },
  { value: "Monaco", label: "Monaco" },
  { value: "Mongolia", label: "Mongolia" },
  { value: "Montenegro", label: "Montenegro" },
  { value: "Morocco", label: "Morocco" },
  { value: "Mozambique", label: "Mozambique" },
  { value: "Myanmar (Burma)", label: "Myanmar (Burma)" },
  { value: "Namibia", label: "Namibia" },
  { value: "Nauru", label: "Nauru" },
  { value: "Nepal", label: "Nepal" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "New Zealand", label: "New Zealand" },
  { value: "Nicaragua", label: "Nicaragua" },
  { value: "Niger", label: "Niger" },
  { value: "Nigeria", label: "Nigeria" },
  { value: "North Macedonia (formerly Macedonia)", label: "North Macedonia (formerly Macedonia)" },
  { value: "Norway", label: "Norway" },
  { value: "Oman", label: "Oman" },
  { value: "Pakistan", label: "Pakistan" },
  { value: "Palau", label: "Palau" },
  { value: "Panama", label: "Panama" },
  { value: "Papua New Guinea", label: "Papua New Guinea" },
  { value: "Paraguay", label: "Paraguay" },
  { value: "Peru", label: "Peru" },
  { value: "Philippines", label: "Philippines" },
  { value: "Poland", label: "Poland" },
  { value: "Portugal", label: "Portugal" },
  { value: "Qatar", label: "Qatar" },
  { value: "Romania", label: "Romania" },
  { value: "Russia", label: "Russia" },
  { value: "Rwanda", label: "Rwanda" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  { value: "Saint Vincent and the Grenadines", label: "Saint Vincent and the Grenadines" },
  { value: "Samoa", label: "Samoa" },
  { value: "San Marino", label: "San Marino" },
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe" },
  { value: "Saudi Arabia", label: "Saudi Arabia" },
  { value: "Senegal", label: "Senegal" },
  { value: "Serbia", label: "Serbia" },
  { value: "Seychelles", label: "Seychelles" },
  { value: "Sierra Leone", label: "Sierra Leone" },
  { value: "Singapore", label: "Singapore" },
  { value: "Slovakia", label: "Slovakia" },
  { value: "Slovenia", label: "Slovenia" },
  { value: "Solomon Islands", label: "Solomon Islands" },
  { value: "Somalia", label: "Somalia" },
  { value: "South Africa", label: "South Africa" },
  { value: "South Sudan", label: "South Sudan" },
  { value: "Spain", label: "Spain" },
  { value: "Sri Lanka", label: "Sri Lanka" },
  { value: "Sudan", label: "Sudan" },
  { value: "Suriname", label: "Suriname" },
  { value: "Sweden", label: "Sweden" },
  { value: "Switzerland", label: "Switzerland" },
  { value: "Syria", label: "Syria" },
  { value: "Taiwan", label: "Taiwan" },
  { value: "Tajikistan", label: "Tajikistan" },
  { value: "Tanzania", label: "Tanzania" },
  { value: "Thailand", label: "Thailand" },
  { value: "Togo", label: "Togo" },
  { value: "Tonga", label: "Tonga" },
  { value: "Trinidad and Tobago", label: "Trinidad and Tobago" },
  { value: "Tunisia", label: "Tunisia" },
  { value: "Turkey", label: "Turkey" },
  { value: "Turkmenistan", label: "Turkmenistan" },
  { value: "Tuvalu", label: "Tuvalu" },
  { value: "Uganda", label: "Uganda" },
  { value: "Ukraine", label: "Ukraine" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "United States of America", label: "United States of America" },
  { value: "Uruguay", label: "Uruguay" },
  { value: "Uzbekistan", label: "Uzbekistan" },
  { value: "Vanuatu", label: "Vanuatu" },
  { value: "Vatican City (Holy See)", label: "Vatican City (Holy See)" },
  { value: "Venezuela", label: "Venezuela" },
  { value: "Vietnam", label: "Vietnam" },
  { value: "Yemen", label: "Yemen" },
  { value: "Zambia", label: "Zambia" },
  { value: "Zimbabwe", label: "Zimbabwe" },
];

// all customers data
export const AllCustomerData = {
  header: [
    "Name",
    "Username",
    "Last active",
    "Date registered",
    "Orders",
    "Total spend",
    "Country / Region",
    "City",
    "Region",
    "Postal code",
  ],
  body: [
    {
      name: <User link="/orders/customers/detail" name="Customer 1" src={require("../images/users/user_1.webp")} />,
      username: "customer1",
      "last active": "2023-07-13",
      "date registered": "2023-07-12",
      orders: 3,
      "total spend": 400,
      "country / region": "Afghanistan",
      city: "Kabul",
      region: "Asia",
      "postal code": "1001",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 2" src={require("../images/users/user_2.webp")} />,
      username: "customer2",
      "last active": "2023-07-14",
      "date registered": "2023-07-10",
      orders: 5,
      "total spend": 800,
      "country / region": "Albania",
      city: "Tirana",
      region: "Europe",
      "postal code": "1002",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 3" src={require("../images/users/user_3.webp")} />,
      username: "customer3",
      "last active": "2023-07-15",
      "date registered": "2023-07-09",
      orders: 2,
      "total spend": 250,
      "country / region": "Algeria",
      city: "Algiers",
      region: "Africa",
      "postal code": "1003",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 4" src={require("../images/users/user_4.webp")} />,
      username: "customer4",
      "last active": "2023-07-16",
      "date registered": "2023-07-08",
      orders: 4,
      "total spend": 600,
      "country / region": "Andorra",
      city: "Andorra la Vella",
      region: "Europe",
      "postal code": "1004",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 5" src={require("../images/users/user_5.webp")} />,
      username: "customer5",
      "last active": "2023-07-17",
      "date registered": "2023-07-07",
      orders: 1,
      "total spend": 150,
      "country / region": "Angola",
      city: "Luanda",
      region: "Africa",
      "postal code": "1005",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 6" src={require("../images/users/user_6.webp")} />,
      username: "customer6",
      "last active": "2023-07-18",
      "date registered": "2023-07-06",
      orders: 3,
      "total spend": 350,
      "country / region": "Antigua and Barbuda",
      city: "St. John's",
      region: "Caribbean",
      "postal code": "1006",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 7" src={require("../images/users/user_7.webp")} />,
      username: "customer7",
      "last active": "2023-07-19",
      "date registered": "2023-07-05",
      orders: 2,
      "total spend": 300,
      "country / region": "Argentina",
      city: "Buenos Aires",
      region: "South America",
      "postal code": "1007",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 8" src={require("../images/users/user_8.webp")} />,
      username: "customer8",
      "last active": "2023-07-20",
      "date registered": "2023-07-04",
      orders: 5,
      "total spend": 900,
      "country / region": "Armenia",
      city: "Yerevan",
      region: "Asia",
      "postal code": "1008",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 9" src={require("../images/users/user_9.webp")} />,
      username: "customer9",
      "last active": "2023-07-21",
      "date registered": "2023-07-03",
      orders: 1,
      "total spend": 100,
      "country / region": "Australia",
      city: "Canberra",
      region: "Oceania",
      "postal code": "1009",
    },
    {
      name: <User link="/orders/customers/detail" name="Customer 10" src={require("../images/users/user_10.webp")} />,
      username: "customer10",
      "last active": "2023-07-22",
      "date registered": "2023-07-02",
      orders: 3,
      "total spend": 450,
      "country / region": "Austria",
      city: "Vienna",
      region: "Europe",
      "postal code": "1010",
    },
    // Add more customer data here
  ],
};

// all product data
export const OrderProducts = {
  header: ["PRODUCT", "SKU", "QTY", "PRICE"],
  body: [
    {
      product: (
        <ProductProfile
          label="Half Sleeve T-Shirts (Blue)"
          category="Fashion"
          src={require(`../images/products/product_1.png`)}
        />
      ),
      sku: "01405001",
      qty: 20,
      price: "29.99",
    },
    {
      product: (
        <ProductProfile
          label="Reusable Ecological Coffee Cup"
          category="Kitchenware"
          src={require(`../images/products/product_2.png`)}
        />
      ),
      sku: "01405002",
      qty: 10,
      price: "12.99",
    },
    {
      product: (
        <ProductProfile
          label="Wireless Bluetooth Headphones"
          category="Electronics"
          src={require(`../images/products/product_3.png`)}
        />
      ),
      sku: "01405003",
      qty: 15,
      price: "59.99",
    },
    {
      product: (
        <ProductProfile
          label="Slim Fit Jeans"
          category="Fashion"
          src={require(`../images/products/product_4.png`)}
        />
      ),
      sku: "01405004",
      qty: 30,
      price: "39.99",
    },
    {
      product: (
        <ProductProfile
          label="Waterproof Sports Watch"
          category="Watches"
          src={require(`../images/products/product_5.png`)}
        />
      ),
      sku: "01405005",
      qty: 5,
      price: "79.99",
    },
    {
      product: (
        <ProductProfile
          label="Smart Home Security Camera"
          category="Electronics"
          src={require(`../images/products/product_6.png`)}
        />
      ),
      sku: "01405006",
      qty: 8,
      price: "89.99",
    },
    {
      product: (
        <ProductProfile
          label="Leather Crossbody Bag"
          category="Fashion"
          src={require(`../images/products/product_7.png`)}
        />
      ),
      sku: "01405007",
      qty: 12,
      price: "49.99",
    },
    {
      product: (
        <ProductProfile
          label="Portable Wireless Charger"
          category="Electronics"
          src={require(`../images/products/product_8.png`)}
        />
      ),
      sku: "01405008",
      qty: 25,
      price: "39.99",
    },
    {
      product: (
        <ProductProfile
          label="Men's Classic Dress Shoes"
          category="Fashion"
          src={require(`../images/products/product_9.png`)}
        />
      ),
      sku: "01405009",
      qty: 15,
      price: "69.99",
    },
    {
      product: (
        <ProductProfile
          label="Professional DSLR Camera"
          category="Electronics"
          src={require(`../images/products/product_10.png`)}
        />
      ),
      sku: "01405010",
      qty: 3,
      price: "999.99",
    },
  ],
};

// data of customer order data
export const CustomerOrderData = {
  header: [
    "Order",
    "Status",
    "Amount",
    "Rewards",
    "Date",
  ],
  body: [
    {
      order: "#14896",
      status: <Badge label="Pending" className="light-warning" />,
      amount: "$1,200.00",
      rewards: 120,
      date: "14 Dec 2020, 8:43 pm",
    },
    {
      order: "#15075",
      status: <Badge label="Successful" className="light-success" />,
      amount: "$79.00",
      rewards: 7,
      date: "01 Dec 2020, 10:12 am",
    },
    {
      order: "#14750",
      status: <Badge label="Successful" className="light-success" />,
      amount: "$5,500.00",
      rewards: 550,
      date: "12 Nov 2020, 2:01 pm",
    },
    {
      order: "#15976",
      status: <Badge label="Pending" className="light-warning" />,
      amount: "$880.00",
      rewards: 88,
      date: "21 Oct 2020, 5:54 pm",
    },
    {
      order: "#15940",
      status: <Badge label="Successful" className="light-success" />,
      amount: "$7,650.00",
      rewards: 765,
      date: "19 Oct 2020, 7:32 am",
    },
    {
      order: "#15941",
      status: <Badge label="Cancel" className="light-danger" />,
      amount: "$1,000.00",
      rewards: "N/A",
      date: "18 Oct 2020, 11:20 pm",
    },
  ],
};

// data of address book
export const AddressBookData = [
  {
    type: 'Home',
    address: [
      '101 Collin Street',
      'Melbourne, VIC 3000',
      'Australia',
    ],
    icons: [
      <Icons.TbTrash key="home-trash" />,
      <Icons.TbPencil key="home-pencil" />,
      <Icons.TbAdjustmentsAlt key="home-adjustments" />,
    ],
  },
  {
    type: 'Work',
    address: [
      '505 Smith Street',
      'Sydney, NSW 2000',
      'Australia',
    ],
    icons: [
      <Icons.TbTrash key="work-trash" />,
      <Icons.TbPencil key="work-pencil" />,
      <Icons.TbAdjustmentsAlt key="work-adjustments" />,
    ],
  },
  {
    type: 'Family',
    address: [
      '123 Green Avenue',
      'Brisbane, QLD 4000',
      'Australia',
    ],
    icons: [
      <Icons.TbTrash key="family-trash" />,
      <Icons.TbPencil key="family-pencil" />,
      <Icons.TbAdjustmentsAlt key="family-adjustments" />,
    ],
  },
];