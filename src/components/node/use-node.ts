export const useNode = (size: number) => {
  const truncateLabel = (label: string) => {
    return label.length * 5 > size ? label.substring(0, 4).concat('.....') : label;
  };

  return { truncateLabel };
};
