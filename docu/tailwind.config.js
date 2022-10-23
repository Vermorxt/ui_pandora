const { join } = require('path')

module.exports = {
  // mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx)',
    './src/components/**/*.{js,ts,jsx,tsx)',
    './src/layout/*.{js,ts,jsx,tsx)',
    './src/layout/**/*.{js,ts,jsx,tsx)',
    './src/components-docu/content/**/*.{js,ts,jsx,tsx)',
    './src/components-docu/controller/**/*.{js,ts,jsx,tsx)',
    './src/components/Breadcrumbs/index.tsx',
    './src/components/ContentLoading/index.tsx',
    './src/components/DarkLightChanger/index.tsx',
    './src/components/LanguageSelector/index.tsx',
    './src/components/ThemChanger/index.tsx',
    './src/layout/Container/index.tsx',
    './src/layout/Content/index.tsx',
    './src/layout/Footer/index.tsx',
    './src/layout/Header/index.tsx',
    './src/layout/LayoutProvider/index.tsx',
    './src/layout/Sidebar/index.tsx',
  ],
  // safelist: [{ pattern: /.*/ }],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
    styled: true,
    themes: true,
    // base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}