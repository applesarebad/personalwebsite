/// <reference types="astro/client" />

import type { paintings } from "./data/paintings.js";

type Painting = (typeof paintings)[number];

declare global {
  interface Window {
    __activePainting?: Painting;

    __cycleTheme?: () => Painting;
  }

  interface WindowEventMap {
    "theme-applied": CustomEvent<Painting>;
  }
}

export {};
