// One entry per painting. `mood` buckets are: "dawn" | "day" | "dusk" | "night".
// Pick each palette by eye from the painting itself:
//   plum        - a deep, near-black tone from the painting's darkest area (body text)
//   plumSoft    - a lighter version of plum (secondary text, dates, meta info)
//   accent      - a saturated, vivid tone from the painting's most striking color (links, hovers)
//   accentStrong- accent, pushed a little brighter (hover states on dark backgrounds)
//   blush       - a very pale, barely-tinted version of the painting's dominant hue (page bg)
//   blushDeep   - blush, stepped slightly darker (cards, header/footer bands)
//   blushHover  - blush, stepped slightly lighter (card hover state)
//   shadow      - accent as an rgba() with low opacity (card shadows)
 
export const paintings = [
  {
    id: "sunset-treeline",
    src: "/aboutme/sunset.jpg",
    alt: "Sunset painting with a silhouetted treeline",
    mood: "dusk",
    vars: {
      plum: "#3a1f33",
      plumSoft: "#7a4a68",
      accent: "#d9548f",
      accentStrong: "#ff7bb3",
      blush: "#fdf1f6",
      blushDeep: "#f6dbe8",
      blushHover: "#ffe4f0",
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
      plum: "#33241f",
      plumSoft: "#7a5a4a",
      accent: "#e08a4c",
      accentStrong: "#ffab6b",
      blush: "#fdf5f0",
      blushDeep: "#f6e6da",
      blushHover: "#fff0e4",
      shadow: "rgba(224, 138, 76, 0.25)",
    },
  },
  {
    id: "placeholder-day",
    src: "/aboutme/sunset.jpg",
    alt: "TODO: describe this painting",
    mood: "day",
    vars: {
      plum: "#1f2b33",
      plumSoft: "#4a637a",
      accent: "#4c9be0",
      accentStrong: "#6bc0ff",
      blush: "#f0f8fd",
      blushDeep: "#daeef6",
      blushHover: "#e4f4ff",
      shadow: "rgba(76, 155, 224, 0.25)",
    },
  },
  {
    id: "placeholder-night",
    src: "/aboutme/sunset.jpg",
    alt: "TODO: describe this painting",
    mood: "night",
    vars: {
      plum: "#1a1a2e",
      plumSoft: "#4a4a6b",
      accent: "#6c5ce7",
      accentStrong: "#9b8cff",
      blush: "#f2f1fb",
      blushDeep: "#e0deef",
      blushHover: "#e9e7f8",
      shadow: "rgba(108, 92, 231, 0.25)",
    },
  },
];