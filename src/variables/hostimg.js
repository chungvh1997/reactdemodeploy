var HOST_IMG = "";
if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "[::1]" ||
  window.location.hostname.match(
    /^192(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
) {
  // HOST_IMG = "http://localhost:5000/";
} else {
  HOST_IMG =
    window.location.protocol + "//" + window.location.hostname + "/uploads/";
}

export default HOST_IMG;
