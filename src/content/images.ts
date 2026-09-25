import heroBridal from "@/assets/hero-bridal-makeup-artist-brampton.png";
import portrait from "@/assets/natasha-mann-makeup-artist-portrait.jpeg";
import bridalMakeup from "@/assets/bridal-makeup-brampton-soft-glam.jpg";
import bridalHair from "@/assets/bridal-hairstyling-brampton.jpg";
import partyMakeup from "@/assets/party-makeup-brampton.jpg";
import partyHair from "@/assets/party-hairstyling-brampton.jpg";
import softGlam from "@/assets/soft-glam-makeup-brampton.jpg";
import bridalExperience from "@/assets/bridal-beauty-experience-brampton.jpg";
import occasion from "@/assets/special-occasion-makeup-brampton.jpg";
import detail from "@/assets/makeup-artistry-detail-brampton.jpg";
import bridalPortrait from "@/assets/bridal-makeup-artist-brampton-portrait.jpg";

export const images = {
  heroBridal,
  portrait,
  bridalMakeup,
  bridalHair,
  partyMakeup,
  partyHair,
  softGlam,
  bridalExperience,
  occasion,
  detail,
  bridalPortrait,
} as const;

export type ImageKey = keyof typeof images;
