const paramFromData = data => {
  const pathname = window.location.pathname;
  const keys = Object.keys(data);
  var paramStr = "";
  keys.map((key, index) => {
    if (data[key]) {
      if (index === 0) paramStr = paramStr.concat(`?${key}=${data[key]}`);
      else paramStr = paramStr.concat(`&${key}=${data[key]}`);
    }
    return null;
  });
  return pathname + paramStr;
};

export default paramFromData;
