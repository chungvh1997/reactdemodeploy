import Home from "../views/Home";
import Contact from "../views/Contact";
import AboutUs from "../views/AboutUs";
import Detail from "../views/Detail/Detail";

var indexRoutes = [
  { path: "/", name: "Feature", component: Home ,exact:true },
  { path: "/detail/:id", name: "Feature", component: Detail ,exact:true },
  { path: "/contact", name: "Contact", component: Contact ,exact:true},
  { path:"/about-us", name: "About Us", component: AboutUs,exact :true  },
  {
    redirect: true,
    exact:true,
    path: "/",
    pathTo:  "",
    name: "Home"
  }
];

export default indexRoutes;
