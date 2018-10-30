/* eslint-disable-next-line */
export const doubleNum = num => {
  const str = num.toString();
  const strReverse = str.split('').reverse().join('');
  return (str.length !== 1 && str === strReverse) ? num : (num * 2);
};
