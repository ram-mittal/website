import Breadcrumb from "@/components/Common/Breadcrumb";
import ContactDetails from "@/components/Contact/ContactDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Kaizen",
  description: "Get in touch with Kaizen. Find our contact information, office location, and business hours.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Reach out to us for any inquiries or to learn more about our services"
      />
      <ContactDetails />
    </>
  );
};

export default ContactPage;
