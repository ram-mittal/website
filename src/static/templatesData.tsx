import { ComingSoonTemplateProps, TemplateProps } from "@/types/Marketplace";

export const templateData: TemplateProps[] = [
  {
    id: "1",
    title: "Moderno Template",
    slug: "moderno-template",
    description: "A modern and sleek template for your startup",
    imageUrls: {
      illustrations: [
        {
          src: "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/templates/moderno/aahrbitx-template-1.webp",
          alt: "Moderno Template",
        },
        {
          src: "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/templates/moderno/moderno_template_phone_illustration.png",
          alt: "Moderno Template Phone",
        },
      ],
      metaImage: {
        src: "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/templates/moderno/meta_image.png",
        alt: "Moderno Template Meta Image",
      },
      fullpage:
        "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/templates/moderno/full_page.png",
    },
    link: "https://aahrbitx-template-1.netlify.app",
    price: "4200 ₹",
    tags: ["Next.js", "ViewTransitions", "Seo Optimized", "Tailwind CSS"],
    rating: 4.8,
    seobility:
      "https://freetools.seobility.net/widget/widget.png?url=aahrbitx-template-1.netlify.app",
    colorSchema: [
      { name: "background", value: "#ffffff" },
      { name: "foreground", value: "#171717" },
      { name: "primary", value: "#d6ed17" },
      { name: "secondary", value: "#606060" },
    ],
    keyAspects: [
      "A Ready to Go Template",
      "Easy to Customize",
      "SEO Optimized website",
      "Made with Modern and Latest Technologies",
    ],
    priceBreakdown: {
      selfService: [
        { item: "Template Price", price: 4400 },
        { item: "Hosting (Your Choice)", price: "Variable" },
        { item: "Setup Support", price: "DIY" },
        { item: "Dedicated Customisation", price: "DIY" },
      ],
      ourService: [
        { item: "Template Price", price: 4400, offer: 4000 },
        { item: "Custom Setup & Hosting", price: 2500, offer: 2000 },
        { item: "SEO Configuration", price: 2000, offer: 1500 },
        { item: "Maintenance & Support (Monthly)", price: 1000 },
      ],
    },
    info: [],
    actions: {},
    full_description:
      "The Kaizen Marketing website template is a modern, responsive solution designed for marketing agencies and businesses aiming to establish a strong online presence. It features a clean layout with smooth animations, intuitive navigation, and strategically placed call-to-action elements. Built with contemporary web technologies, this template ensures fast loading times and seamless performance across devices. Its versatile design makes it suitable for various industries, with a focus on marketing services. With customizable sections for services, portfolios, testimonials, and contact forms, the Kaizen Marketing template provides a solid foundation for agencies to showcase their offerings and engage with their audience effectively",
    comingSoon: false,
  },
];

export const commingSoonTemplates: ComingSoonTemplateProps[] = [
  {
    id: "2",
    title: "Higgy Template",
    description: "Coming Soon...",
    imageUrls: {
      illustrations: [
        {
          src: "",
          alt: "",
        },
      ],
      metaImage: {
        src: "",
        alt: "",
      },
      fullpage:
        "https://mfudfrexjmgxidwugcyw.supabase.co/storage/v1/object/public/templates/higgy/higgy_full_page.png",
    },
    comingSoon: true,
  },
];
