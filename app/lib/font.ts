const isSupportedQueryLocalFontsApi = () => {
  return typeof window === 'object' && 'queryLocalFonts' in window;
};

export { isSupportedQueryLocalFontsApi };
