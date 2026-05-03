import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Playfair_Display } from "next/font/google";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Destilería La Solana | Esencia Líquida Artesanal',
  description: 'Descubre Destilería La Solana. Tradición, exclusividad y artesanía en cada gota. Vivir una experiencia única de destilación premium.',
  openGraph: {
    "title": "Destilería La Solana",
    "description": "Donde el tiempo, la tradición y la excelencia se convierten en esencia líquida.",
    "siteName": "Destilería La Solana",
    "type": "website"
  },
};

const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const lato = Lato({ variable: "--font-lato", subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${playfair.variable} ${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
