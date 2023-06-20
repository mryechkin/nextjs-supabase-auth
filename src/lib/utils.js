export const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const fetcher = (url) => fetch(url).then((res) => res.json());

export const addLeadingZeros = (integer) => {
  const str = String(integer);
  const paddedStr = str.padStart(6, '0');
  return paddedStr;
};

export const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const from = page ? page * limit : 0;
  const to = page ? from + size - 1 : size - 1;

  return { from, to };
};

export const getSearchPageBounds = (pageNumber) => {
  let lowerBound = 0;
  let upperBound = 15;
  if (pageNumber > 1) {
    lowerBound = lowerBound + (pageNumber - 1) * 16;
    upperBound = upperBound + (pageNumber - 1) * 16;
  }

  return { lowerBound, upperBound };
};

export const formatTimestamp = (timestamp) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const [datePart, timePart] = timestamp.split(' ');
  const [year, month, day] = datePart.split(':');

  const formattedDate = `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;

  return formattedDate;
};
