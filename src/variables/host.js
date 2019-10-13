var HOST = "";
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^192(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
) {
  HOST = "https://private-2063bf-chungvu.apiary-mock.com";
} else {
  HOST = "https://private-2063bf-chungvu.apiary-mock.com";
  // window.location.protocol + "//" + window.location.hostname + "/cms/api";
}

export default HOST;
