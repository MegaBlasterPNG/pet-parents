export const objHasProps = (val, validProps) => {
  const keys = Object.keys(val);

  return (
    keys.length === validProps.length &&
    keys.every((key) => validProps.includes(key))
  );
};
