// ===========================================
// CLIENT DATA CONFIGURATION
// ===========================================
// Edit this file to customize for a new client.
// All UI components pull from this single source.
// ===========================================

export const clientData = {
  // Brand Identity
  brand: {
    name: "Eleanor",
    nameAccent: "Rose", // Styled differently (italic)
    tagline: "Fine Art Wedding Photography",
    heroHeadline: "Capturing Unforgettable",
    heroHeadlineAccent: "Moments",
    heroSubtext: "Timeless elegance, authentic emotion, and the artistry of your love story preserved forever.",
    philosophyQuote: "Your story, beautifully told.",
  },

  // Contact Information
  contact: {
    email: "hello@eleanorrose.com",
    phone: "+1 (212) 555-1234",
    phoneRaw: "+12125551234", // For tel: link
  },

  // Social Media Links
  social: {
    instagram: "https://instagram.com",
    pinterest: "https://pinterest.com",
  },

  // About Section
  about: {
    paragraphs: [
      "With over a decade of experience capturing love stories across the world's most breathtaking destinations, I believe that every wedding is a unique masterpiece waiting to be immortalized.",
      "My approach blends documentary authenticity with fine art aesthetics—creating images that feel both timeless and deeply personal. Your wedding day deserves nothing less than extraordinary.",
    ],
  },

  // Images - Simple string array for easy swapping
  images: {
    hero: "/images/hero-wedding.jpg",
    photographerPortrait: "/images/photographer-portrait.jpg",
    portfolio: [
      "/images/portfolio-1.jpg",
      "/images/portfolio-2.jpg",
      "/images/portfolio-3.jpg",
      "/images/portfolio-4.jpg",
      "/images/portfolio-5.jpg",
      "/images/portfolio-6.jpg",
      "/images/portfolio-7.jpg",
      "/images/portfolio-8.jpg",
    ],
  },

  // Portfolio Items - titles and locations for each image
  portfolioItems: [
    { title: "The Promise", location: "Napa Valley" },
    { title: "Garden Romance", location: "Tuscany" },
    { title: "Grand Affair", location: "The Plaza, NYC" },
    { title: "Radiant Bride", location: "Paris" },
    { title: "First Dance", location: "Lake Como" },
    { title: "Florals", location: "Provence" },
    { title: "The Vows", location: "Amalfi Coast" },
    { title: "Details", location: "Martha's Vineyard" },
  ],

  // Testimonials
  testimonials: [
    {
      quote: "Eleanor captured our day with such grace and artistry. Every photograph feels like a page from a beautiful storybook. We couldn't be more grateful.",
      couple: "Sarah & James",
      location: "Lake Como, Italy",
    },
    {
      quote: "The way she captured the light, the emotion, the tiny details we didn't even notice—it's absolutely magical. These photos are our most treasured possessions.",
      couple: "Victoria & Alexander",
      location: "The Plaza, New York",
    },
    {
      quote: "Working with Eleanor was a dream. She made us feel so comfortable, and the results exceeded every expectation. Pure artistry.",
      couple: "Charlotte & William",
      location: "Château de Chantilly, France",
    },
  ],

  // Services
  services: [
    {
      title: "Full Day Coverage",
      description: "Complete documentation from preparation to the last dance, ensuring no moment goes uncaptured.",
    },
    {
      title: "Engagement Sessions",
      description: "An intimate portrait session to celebrate your journey and create stunning save-the-date imagery.",
    },
    {
      title: "Destination Weddings",
      description: "Specialized in capturing love stories at the world's most breathtaking locations.",
    },
    {
      title: "Albums & Fine Prints",
      description: "Heirloom-quality albums and museum-grade prints to treasure for generations.",
    },
  ],

  // CTA Section
  cta: {
    headline: "Let's Create Something Beautiful",
    subtext: "Your wedding day is a once-in-a-lifetime celebration. Let's ensure every precious moment is captured with the artistry and care it deserves.",
    buttonText: "Inquire About Your Date",
  },
};

export type ClientData = typeof clientData;
