// One entry per painting. `mood` buckets are: "dawn" | "day" | "dusk" | "night".
// Pick each palette by eye from the painting itself:
//   dark        - a deep, near-black tone from the painting's darkest area (body text)
//   darkSoft    - a lighter version of dark (secondary text, dates, meta info)
//   accent      - a saturated, vivid tone from the painting's most striking color (links, hovers)
//   accentStrong- accent, pushed a little brighter (hover states on dark backgrounds)
//   light       - a very pale, barely-tinted version of the painting's dominant hue (page bg)
//   lightDeep   - light, stepped slightly darker (cards, header/footer bands)
//   lightHover  - light, stepped slightly lighter (card hover state)
//   shadow      - accent as an rgba() with low opacity (card shadows)

import mountainpainting from "../images/paintings/mountainpainting.jpg";
import night from "../images/paintings/night.jpg";
import sunset from "../images/paintings/sunset.jpg";
import sunsetwaterspainting from "../images/paintings/sunsetwaterspainting.jpg";

export const paintings = [
  {
    id: "sunset",
    image: sunset,
    alt: "Sunset",
    mood: "dawn",
    vars: {
      dark: "#3a1f33",
      darkSoft: "#7a4a68",
      darkAlt: "#ff18ff",
      accent: "#d9548f",
      accentStrong: "#ff7bb3",
      light: "#ffe7ff",
      lightDeep: "#ffcbf2",
      lightHover: "#ffcdf8",
      shadow: "rgba(217, 84, 143, 0.25)",
    },
  },

  // TODO: replace src + vars below with your actual paintings.
  // These are placeholders so the system runs end-to-end right now.
  {
    id: "placeholder-day",
    image: mountainpainting,
    alt: "TODO: describe this painting",
    mood: "day",
    vars: {
      dark: "#1f2b33",
      darkSoft: "#4a637a",
      darkAlt: "#5c2fff",
      accent: "#38a2ff",
      accentStrong: "#50b3ff",
      light: "#d0edff",
      lightDeep: "#b4edff",
      lightHover: "#b9efff",
      shadow: "rgba(76, 155, 224, 0.25)",
    },
  },
  {
    id: "placeholder-dusk",
    image: sunsetwaterspainting,
    alt: "TODO: describe this painting",
    mood: "dusk",
    vars: {
      dark: "#33241f",
      darkSoft: "#7a5a4a",
      darkAlt: "#ff18ff",
      accent: "#e08a4c",
      accentStrong: "#ffab6b",
      light: "#ffd2b6",
      lightDeep: "#ffbc9d",
      lightHover: "#ffd1ac",
      shadow: "rgba(224, 138, 76, 0.25)",
    },
  },

  {
    id: "placeholder-night",
    image: night,
    alt: "TODO: describe this painting",
    mood: "night",
    vars: {
      dark: "#eecccc",
      darkSoft: "#cf6767",
      darkAlt: "#999ae4",
      accent: "#ff6c6c",
      accentStrong: "rgb(255, 47, 47)",
      light: "#1b1927",
      lightDeep: "#141318",
      lightHover: "#393746",
      shadow: "rgba(108, 92, 231, 0.25)",
    },
  },
];