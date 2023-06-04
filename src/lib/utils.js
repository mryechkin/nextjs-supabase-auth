export const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const addLeadingZeros = (integer) => {
  const str = String(integer);
  const paddedStr = str.padStart(6, '0');
  return paddedStr;
}
