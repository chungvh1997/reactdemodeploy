import Home from "../views/Home";
import Contact from "../views/Contact";
import AboutUs from "../views/AboutUs";

var indexRoutes = [
  { path: "/home", name: "Feature", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/about-us", name: "About Us", component: AboutUs },
  {
    redirect: true,
    path: "/",
    pathTo: "/home",
    name: "Feature"
  }
];

export default indexRoutes;