import { Author } from "@/types/Author";

export const Authors: Author[] = [
  {
    name: "Mayank Pareek",
    id: "mayank-pareek",
    image: "/images/team/mayank-pareek.jpg",
    designation: "Founder & CEO",
    external_link: "#",
  }
];

export const getAllAuthorsLinks = () =>
  Authors.map((author) => ({
    name: author.name,
    link: "/team/" + author.id,
  }));
