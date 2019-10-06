import Home from "../views/Home";
import Contact from "../views/Contact";
import AboutUs from "../views/AboutUs";

var indexRoutes = [
  { path: "{process.env.PUBLIC_URL + '/home'}", name: "Feature", component: Home },
  { path: "{process.env.PUBLIC_URL + '/contact'}", name: "Contact", component: Contact },
  { path: "{process.env.PUBLIC_URL + '/about-us'}", name: "About Us", component: AboutUs },
  {
    redirect: true,
    path: "/",
    pathTo: "{process.env.PUBLIC_URL + '/home'}",
    name: "Home"
  }
];

export default indexRoutes;
