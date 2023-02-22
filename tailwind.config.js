const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'retroBackGround': "url('/component_img/componentBackGround/retroBackGround.jpg')",
        'gbaBackGround': "url('/component_img/componentBackGround/gbaBg.png')",
        'metroidFusionBackGround': "url('/component_img/gamePageBackGround/metroidFusion.jpg')"
      },
      // custom cursor because i like it
      cursor: {
        // default: 'url(/images/cursor.png), default',
        // pointer: 'url(/images/cursor.png), pointer',
        metroidFusion: 'url(/component_img/gameArticleImg/metroidFusion/cursor.png), metroidFusion'
      },
    },
  },
  plugins: [],
}