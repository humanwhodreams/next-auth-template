/*
  A collection of local static fonts.
  Fonts include.
    - Inter
    - Jetbrains Mono
*/

import localFont from "next/font/local";

/**
 * Locally imported inter font.
 *
 * @see directory public/fonts/inter
 */
export const _inter = localFont({
  src: [
    {
      path: "../public/fonts/inter/inter-light.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-thin.ttf",
      weight: "300",
      style: "normal",
    },
    { path: "../public/fonts/inter/inter.ttf", weight: "400", style: "normal" },
    {
      path: "../public/fonts/inter/inter-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-extrabold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/inter/inter-black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Locally imported jetbrains mono font.
 *
 * @see directory public/fonts/jetbrains-mono
 */
export const _jetbrains = localFont({
  src: [
    {
      path: "../public/fonts/jetbrains-mono/jetbrains-mono.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/jetbrains-mono/jetbrains-mono-medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains",
  display: "swap",
});
