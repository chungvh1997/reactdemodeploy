import Home from "../views/Home";
import Contact from "../views/Contact";
import AboutUs from "../views/AboutUs";

var indexRoutes = [
  { path: "/home", name: "Feature", component: Home ,exact:true },
  { path: "/contact", name: "Contact", component: Contact ,exact:true},
  { path:"/about-us", name: "About Us", component: AboutUs,exact :true  },
  {
    redirect: true,
    exact:true,
    path: "/",
    pathTo:  "/home",
    name: "Home"
  }
];

export default indexRoutes;
