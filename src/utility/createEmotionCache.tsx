import createCache from '@emotion/cache';

// the css cache for faster page loading
// prepend true is for apply css stye first when page load. It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

const createEmotionCache = () => {
  return createCache({ key: 'css', prepend: true });
};

export default createEmotionCache;
