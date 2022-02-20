export const search = (str = "", data = []) => {
  let filtered = [];
  if (str !== "" && data.length > 0) {
    filtered = data.filter((row) => {
      return Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(str.toLowerCase());
    });
  } else {
    filtered = data;
  }

  return filtered;
};

export const formatConfig = (arr) => {
  const obt = {};

  if (arr.length > 0) {
    arr.forEach((el) => {
      obt[el.key] = el.value;
    });
  }

  return obt;
};
