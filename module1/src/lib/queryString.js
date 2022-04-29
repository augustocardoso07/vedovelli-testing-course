export function queryString(obj) {
  const entries = Object.entries(obj).map(([key, value]) => {
    if (typeof value === "object" && !Array.isArray(value)) {
      throw new Error("Parse of type object not supportad");
    }
    return `${key}=${value}`;
  });
  return entries.join("&");
}

export function parseString(query) {
  return Object.fromEntries(
    query.split("&").map((item) => {
      let [key, value] = item.split("=");
      if (value.indexOf(",") > -1) {
        value = value.split(",");
      }
      return [key, value];
    })
  );
}
