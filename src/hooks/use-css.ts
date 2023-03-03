export const useCSS = () => {
  const mergeClasses = (...classes: string[]) => {
    return classes.join(' ');
  };

  return { mergeClasses };
};
