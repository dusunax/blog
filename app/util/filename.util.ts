/** Extract `yymmdd` date string from string */
export const extractDateFromFilename = (string: string) => {
  const regex = /(\d{6})/;
  const match = string.match(regex);
  if (match) {
    const yymmdd = match[1];
    const yyyy = `20${yymmdd.slice(0, 2)}`;
    const mm = yymmdd.slice(2, 4);
    const dd = yymmdd.slice(4, 6);
    return `${yyyy}-${mm}-${dd}`;
  }
  return "";
};

/** Remove `yymmdd` date string from string */
export const removeDateFromFilename = (string: string) => {
  const regex = /_?\d{6}_?/;
  return string.replace(regex, "");
};
