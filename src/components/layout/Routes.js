// Analytics
import Analytics from "../../pages/analytics/Analytics";
// Categories
import Categories from "../../pages/categories/Categories";
import AddCategory from "../../pages/categories/AddCategory";
import EditCategory from "../../pages/categories/EditCategory";
// Admin
import Overview from "../../pages/dashboard/Overview";
// Discount
import Discount from "../../pages/discounts/Discounts";
// Inventory
import Inventory from "../../pages/inventory/Inventory";
// Login
import Login from "../../pages/login/Login";
// Orders
import Orders from "../../pages/orders/Orders";
import AddOrder from "../../pages/orders/AddOrder";
import EditOrder from "../../pages/orders/EditOrder";
import Customers from '../../pages/orders/Customers.js'
import CustomerDetail from '../../pages/orders/CustomerDetail.js'
// PaymentMethods
import PaymentMethods from "../../pages/payment_methods/PaymentMethods";
// Products
import Products from "../../pages/products/Products";
import AddProduct from "../../pages/products/AddProduct";
import EditProduct from "../../pages/products/EditProduct";
import Attribute from "../../pages/products/Attribute.js";
import Terms from "../../pages/products/Terms.js";
// Report
import CustomerReport from "../../pages/report/CustomerReport";
import ProductReport from "../../pages/report/ProductReport";
import SalesReport from "../../pages/report/SalesReport";
//  settings
import General from "../../pages/settings/General";
import Security from "../../pages/settings/Security";

const routes = [
  // admin
  {
    path: "/admin",
    component: <Overview />,
  },
  {
    path: "/admin/overview",
    component: <Overview />,
  },
  // analytics
  {
    path: "/analytics",
    component: <Analytics />,
  },
  //  orders
  {
    path: "/orders/all",
    component: <Orders />,
  },
  {
    path: "/orders/all",
    component: <Orders />,
  },
  {
    path: "/orders/add",
    component: <AddOrder />,
  },
  {
    path: "/orders/edit",
    component: <EditOrder />,
  },
  {
    path: "/orders/customers",
    component: <Customers />,
  },
  {
    path: "/orders/customers/detail",
    component: <CustomerDetail />,
  },
  //  Products
  {
    path: "/products",
    component: <Products />,
  },
  {
    path: "/products/all",
    component: <Products />,
  },
  {
    path: "/products/new",
    component: <AddProduct />,
  },
  {
    path: "/products/edit",
    component: <EditProduct />,
  },
  {
    path: "/products/attribute",
    component: <Attribute />,
  },
  {
    path: "/products/terms",
    component: <Terms />,
  },
  {
    path: "/products/categories/add",
    component: <AddCategory />,
  },
  {
    path: "/categories/edit",
    component: <EditCategory />,
  },
  // inventory
  {
    path: "/inventory",
    component: <Inventory />,
  },
  // PaymentMethods
  {
    path: "/payment-methods",
    component: <PaymentMethods />,
  },
  // Discount
  {
    path: "/discounts",
    component: <Discount />,
  },
  // Report
  {
    path: "/reports",
    component: <SalesReport />,
  },
  {
    path: "/reports/sales",
    component: <SalesReport />,
  },
  {
    path: "/reports/customers",
    component: <CustomerReport />,
  },
  {
    path: "/reports/products",
    component: <ProductReport />,
  },
  //  settings
  {
    path: "/settings",
    component: <General />,
  },
  {
    path: "/settings/general",
    component: <General />,
  },
  {
    path: "/settings/security",
    component: <Security />,
  },
  //  login
  {
    path: "/logout",
    component: <Login />,
  },
];

export default routes;
