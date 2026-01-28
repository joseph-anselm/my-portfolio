import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanity";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) =>
  source ? builder.image(source).auto("format").fit("max") : null;
