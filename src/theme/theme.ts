export const theme = Object.freeze({
  fonts: {
    main: `'Montserrat', sans-serif;`,
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  colors: {
    backdrop: '#42424279',
    red: '#CF0404',
    darkGrey: '#262626',
    mainGrey: '#485064',
    midGrey: '#424242',
    lightGrey: '#9A9A9A',
    light: '#f0f0f0',
    lightArrowBtn: '#1890FF50',
    clearWhite: '#FFFFFF',
    black: '#000000',
    blue: '#1890FF',
    transparent: 'transparent',
    currentColor: 'currentColor',
    asideBgNightColor: '#110E3B',
  },
  shadows: {
    mainShadow: '2px 2px 4px 2px rgba(201,201,201,0.66);',
    secondShadow: '7px 13px 14px rgba(116, 177, 232, 0.24)',
    thirdShadow: '2px 3px 4px rgba(136, 198, 253, 0.4)',
    scrollBtnShadow: ' inset 2px 4px 6px rgba(255, 255, 255, 0.8)',
  },
  media: {
    sm: '(min-width: 380px)',
    m: '(min-width: 480px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1280px)',
    smToM: '(min-width: 360px) and (max-width: 479px)',
    mToMd: '(min-width: 480px) and (max-width: 767px)',
    mdToLg: '(min-width: 768px) and (max-width: 1280px)',
    smToLg: '(min-width: 360px) and (max-width: 1280  px)',
  },
});
