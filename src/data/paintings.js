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
 
export const paintings = [
  {
    id: "sunset-treeline",
    src: "/aboutme/sunset.jpg",
    alt: "Sunset painting with a silhouetted treeline",
    mood: "dusk",
    vars: {
      dark: "#3a1f33",
      darkSoft: "#7a4a68",
      accent: "#d9548f",
      accentStrong: "#ff7bb3",
      light: "#fdf1f6",
      lightDeep: "#f6dbe8",
      lightHover: "#ffe4f0",
      shadow: "rgba(217, 84, 143, 0.25)",
    },
  },
 
  // TODO: replace src + vars below with your actual paintings.
  // These are placeholders so the system runs end-to-end right now.
  {
    id: "placeholder-dawn",
    src: "/aboutme/sunset.jpg",
    alt: "TODO: describe this painting",
    mood: "dawn",
    vars: {
      dark: "#33241f",
      darkSoft: "#7a5a4a",
      accent: "#e08a4c",
      accentStrong: "#ffab6b",
      light: "#fdf5f0",
      lightDeep: "#f6e6da",
      lightHover: "#fff0e4",
      shadow: "rgba(224, 138, 76, 0.25)",
    },
  },
  {
    id: "placeholder-day",
    src: "/aboutme/sunset.jpg",
    alt: "TODO: describe this painting",
    mood: "day",
    vars: {
      dark: "#1f2b33",
      darkSoft: "#4a637a",
      accent: "#4c9be0",
      accentStrong: "#6bc0ff",
      light: "#f0f8fd",
      lightDeep: "#daeef6",
      lightHover: "#e4f4ff",
      shadow: "rgba(76, 155, 224, 0.25)",
    },
  },
  {
    id: "placeholder-night",
    src: "/aboutme/sunset.jpg",
    alt: "TODO: describe this painting",
    mood: "night",
    vars: {
      dark: "#1a1a2e",
      darkSoft: "#4a4a6b",
      accent: "#6c5ce7",
      accentStrong: "#9b8cff",
      light: "#f2f1fb",
      lightDeep: "#e0deef",
      lightHover: "#e9e7f8",
      shadow: "rgba(108, 92, 231, 0.25)",
    },
  },
];