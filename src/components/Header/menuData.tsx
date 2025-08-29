import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 4,
    title: "Our Team",
    path: "/team",
    newTab: false,
  },
  {
    id: 5,
    title: "Career Map",
    path: "/career-map",
    newTab: false,
  },
  {
    id: 6,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 42,
        title: "Career Map",
        path: "/career-map",
        newTab: false,
      },
      {
        id: 44,
        title: "Testimonial",
        path: "/testimonial",
        newTab: false,
      }
    ],
  },
  {
    id: 7,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
