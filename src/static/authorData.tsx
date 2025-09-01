import { Author } from "@/types/Author";

export const Authors: Author[] = [
  {
    name: "Mayank Pareek",
    id: "mayank-pareek",
    image: "/images/team/mayank-pareek-new.jpg",
    designation: "Founder & CEO",
    external_link: "#",
    about: "With over a decade of experience in marketing and business development, Mayank has been instrumental in shaping Kaizen into a leading marketing agency. His visionary leadership and deep understanding of digital transformation have helped numerous brands achieve remarkable growth and establish strong market presence.",
    email: "info@gokaizen.in",
    phone: "+91 7378906483",
    expertise: ["Digital Marketing", "Brand Strategy", "Business Development", "Team Leadership", "Market Research"]
  },
  {
    name: "Ms. Preeti Sunagar",
    id: "preeti-sunagar",
    image: "/images/team/preeti-sunagar.jpg",
    designation: "Business Partner",
    external_link: "",
    about: "Ms. Preeti Sunagar brings extensive expertise in business partnerships and strategic alliances. Her deep understanding of market dynamics and client relationships has been crucial in expanding Kaizen's reach and establishing long-term partnerships with key stakeholders.",
   
  },
  {
    name: "Mr. Vedant Borkar",
    id: "vedant-borkar",
    image: "/images/team/vedant-borkar.jpg",
    designation: "Assistant Owner",
    external_link: "#"
  },
  {
    name: "Ms. Radhika Mittal",
    id: "radhika-mittal",
    image: "/images/team/radhika-mittal-new.jpg",
    designation: "Assistant Owner",
    external_link: "#"
  },
  {
    name: "Mr. Vidyesh Ambhore",
    id: "vidyesh-ambhore",
    image: "/images/team/vidyesh-ambhore.jpg",
    designation: "Assistant Owner",
    external_link: "#"
  },
  {
    name: "Ms. Arya Kulkarni",
    id: "arya-kulkarni",
    image: "/images/team/arya-kulkarni.jpg",
    designation: "HR",
    external_link: "#"
  },
  {
    name: "Ms. Vaishnavi Khandetod",
    id: "vaishnavi-khandetod",
    image: "/images/team/vaishnavi-khandetod.jpg",
    designation: "Team Leader",
    external_link: "#"
  },
  {
    name: "Mr. Balu",
    id: "balu",
    image: "/images/team/balu.jpg",
    designation: "Team Leader",
    external_link: "#"
  },
  {
    name: "Mr. Rayhaan Shaikh",
    id: "rayhaan-shaikh",
    image: "/images/team/rayhaan-shaikh.jpg",
    designation: "Team Leader",
    external_link: "#"
  }
];

export const getAllAuthorsLinks = () =>
  Authors.map((author) => ({
    name: author.name,
    link: "/team/" + author.id,
  }));
