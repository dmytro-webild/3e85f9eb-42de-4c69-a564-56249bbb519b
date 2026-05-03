"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Esencia",
          id: "hero",
        },
        {
          name: "Diferencial",
          id: "about",
        },
        {
          name: "Proceso",
          id: "features",
        },
        {
          name: "Experiencia",
          id: "faq",
        },
        {
          name: "Contacto",
          id: "contact",
        },
      ]}
      brandName="La Solana"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="DESTILERÍA LA SOLANA"
      description="Donde el tiempo, la tradición y la excelencia se convierten en esencia líquida."
      buttons={[
        {
          text: "Descubrir nuestra esencia",
          href: "#about",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/inside-craft-beer-factory_23-2150573916.jpg",
          imageAlt: "Barricas en bodega premium",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-making-kombucha_23-2149704031.jpg",
          imageAlt: "Proceso artesanal",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/inside-craft-beer-factory_23-2150573917.jpg",
          imageAlt: "Detalle de destilación",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/layered-glasses-with-shampagne_8353-9952.jpg",
          imageAlt: "Bodega exclusiva",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-holds-alcohol-drink-garnished-with-lemon-skin-martini-glass_140725-667.jpg",
          imageAlt: "Ambiente tradicional",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/silky-smooth-golden-fabric-waves-creating-luxurious-texture_91128-4474.jpg",
          imageAlt: "Esencia liquida",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Una destilería diferente a todo lo que conoces",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/top-view-sustainably-produced-alcoholic-beverage_23-2150162970.jpg",
          alt: "Diferencial",
        },
      ]}
      buttons={[
        {
          text: "Saber más",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Selección de ingredientes",
          description: "Materias primas de máxima calidad.",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-natural-grungy-texture-background_23-2149110394.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-vector/linear-eco-icons_1257-306.jpg",
          buttonText: "Ver más",
        },
        {
          title: "Destilación lenta",
          description: "Respetando los tiempos naturales.",
          imageSrc: "http://img.b2bpic.net/free-photo/winery-factory_1398-4744.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-vector/icons-with-beakers_1308-82599.jpg",
          buttonText: "Ver más",
        },
        {
          title: "Precisión artesanal",
          description: "Cada detalle importa en nuestro proceso.",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-with-champagne-reflecting-window_23-2148339539.jpg",
          titleImageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zaiaqp",
          buttonText: "Ver más",
        },
      ]}
      title="El arte de destilar"
      description="No somos producción en masa. Creamos experiencias únicas."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Cliente Refinado",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-clanging-glasses-wine-with-woman_23-2148024467.jpg",
        },
        {
          id: "2",
          name: "Experto Catador",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-virtual-date_23-2149307267.jpg",
        },
        {
          id: "3",
          name: "Amante Gourmet",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-city-walking-business-asian_1303-2364.jpg",
        },
        {
          id: "4",
          name: "Viajero Experiencia",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-wine-cellar_23-2149428763.jpg",
        },
        {
          id: "5",
          name: "Entusiasta Artesano",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-stylish-bearded-dark-skinned-male-with-tattoo-his-hand-standing-counter-brewery_613910-19276.jpg",
        },
      ]}
      cardTitle="Quienes nos conocen, lo saben"
      cardTag="Reseñas"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "¿Cómo reservar?",
          content: "Contacta con nosotros mediante el formulario.",
        },
        {
          id: "2",
          title: "¿Dónde se ubican?",
          content: "Peratallada, Girona.",
        },
        {
          id: "3",
          title: "¿Hacen envíos?",
          content: "Próximamente tendremos nuestra tienda online.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/neoclassical-style-interior-design-with-decor-furnishings_23-2151199414.jpg"
      title="Más que una bebida, una experiencia"
      description="Visitar Destilería La Solana es adentrarse en un mundo único."
      buttons={[
        {
          text: "Vivir la experiencia",
          href: "#contact",
        },
      ]}
      faqsAnimation="blur-reveal"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "100%",
          description: "Calidad artesanal",
        },
        {
          id: "2",
          value: "0",
          description: "Producción masiva",
        },
        {
          id: "3",
          value: "∞",
          description: "Pasión por el detalle",
        },
      ]}
      title="Nuestra esencia"
      description="El compromiso con la excelencia artesanal."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contacto"
      title="Descubre lo que pocos conocen"
      description="No todos los destilados son iguales. Y no todos están hechos para cualquiera."
      buttons={[
        {
          text: "Acceder ahora",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Ubicación",
              href: "#",
            },
            {
              label: "Visitas",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Twitter",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacidad",
              href: "#",
            },
            {
              label: "Contacto",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="DESTILERÍA LA SOLANA"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
