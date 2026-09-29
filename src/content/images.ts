import heroBridal from "@/assets/hero-bridal-makeup-artist-brampton.png";
import portrait from "@/assets/natasha-mann-makeup-artist-portrait.jpeg";
import bridalMakeup from "@/assets/Bridal-Makeup.png";
import bridalHair from "@/assets/bridal-hairstyling-brampton.jpg";
import partyMakeup from "@/assets/party-makeup-brampton.jpg";
import partyHair from "@/assets/party-hairstyling-brampton.jpg";
import softGlam from "@/assets/Soft-Glam-Makeup.png";
import bridalExperience from "@/assets/bridal-beauty-experience-brampton.jpg";
import occasion from "@/assets/special-occasion-makeup-brampton.jpg";
import detail from "@/assets/makeup-artistry-detail-brampton.jpg";
import bridalPortrait from "@/assets/bridal-makeup-artist-brampton-portrait.jpg";
import FullGlamMakeup from "@/assets/Full-Glam-Makeup.png";
import photoshootmakeup from "@/assets/photoshoot-makeup.png";
import PreBridalMakeup from "@/assets/Pre-Bridal-Makeup.png";
import traditionalmakeup from "@/assets/traditional-makeup.png";

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
  FullGlamMakeup,
  photoshootmakeup,
  PreBridalMakeup,
  traditionalmakeup,
} as const;

export type ImageKey = keyof typeof images;
