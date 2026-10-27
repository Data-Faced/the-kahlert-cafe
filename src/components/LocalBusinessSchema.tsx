export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["CafeOrCoffeeShop", "LocalBusiness"],
    name: "The Kahlert Café",
    description:
      "Inclusive farm-to-able community café in Sparks, Maryland providing meaningful employment and culinary training for adults with intellectual and developmental disabilities. Fresh, locally sourced food and specialty coffee.",
    url: "https://thekahlertcafe.com",
    image: "https://thekahlertcafe.com/tkc-web-preview.png",
    telephone: "+14107853274",
    address: {
      "@type": "PostalAddress",
      streetAddress: "53 Loveton Circle, Suite 112",
      addressLocality: "Sparks",
      addressRegion: "MD",
      postalCode: "21152",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.538,
      longitude: -76.635,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    servesCuisine: ["American", "Farm-to-Table", "Coffee"],
    priceRange: "$$",
    sameAs: ["https://www.facebook.com/profile.php?id=61588407959697"],
    parentOrganization: {
      "@type": "Organization",
      name: "Richcroft",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
