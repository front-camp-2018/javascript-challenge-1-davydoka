/* eslint-disable-next-line */
export const sortByWeight = arr => {

  const weight = item => {
    return [...item].reduce((accum, currVal) => accum + parseInt(currVal), 0);
  };

  return arr.sort((a, b) => {
    return (weight(a) <= weight(b)) ? -1 : 1;
  });

};
