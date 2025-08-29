import { Metadata } from "next";
import { Sora } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Kaizen",
    default: "Kaizen - Premier Marketing Solutions",
  },
  description:
    "Kaizen delivers innovative marketing solutions including customer acquisition, client servicing, and B2B/B2C marketing. Partner with us for strategic marketing campaigns that drive growth and engagement.",
  metadataBase: new URL("https://kaizenorg.in"),
  keywords: [
    "marketing agency",
    "customer acquisition",
    "client servicing",
    "B2B marketing",
    "B2C marketing",
    "mall events",
    "road trips",
    "digital marketing",
    "marketing strategy",
    "brand management"
  ],
  openGraph: {
    type: "website",
    url: "https://kaizenorg.in",
    title: "Kaizen Organization - Premier Marketing Solutions",
    description: "Transform your brand with our comprehensive marketing solutions. Specializing in customer acquisition, client servicing, and strategic marketing campaigns.",
    siteName: "Kaizen",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kaizen - Premier Marketing Solutions"
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaizen Organization - Premier Marketing Solutions",
    description: "Transform your brand with our comprehensive marketing solutions. Specializing in customer acquisition, client servicing, and strategic marketing campaigns.",
    images: ["/images/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-white dark:bg-black ${sora.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}


