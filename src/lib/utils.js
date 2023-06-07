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
