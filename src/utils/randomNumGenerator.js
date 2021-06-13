// inclusive; if range 0 ~ 10, then includes 10 in ranNum
export const randomNumGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
