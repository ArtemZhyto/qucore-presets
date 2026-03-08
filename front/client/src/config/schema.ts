// Modules
import { siteConfig } from "./metadata"

/**
 * Immutable JSON-LD template for QuCore Dynamic.
 * Change only: name, description and url (metadataBase).
 */
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "QuCore Dynamic",
  description: siteConfig.description,
  url: siteConfig.metadataBase.toString(),
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.metadataBase.origin}/icon-512.png`,
    width: 512,
    height: 512,
  },
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows, macOS, Android, iOS",
  author: {
    "@type": "Person",
    name: siteConfig.twitter.creator,
  },
  inLanguage: "en-US",
  address: {
    "@type": "PostalAddress",
    addressCountry: "UA",
  },
}
