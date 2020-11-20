function JSON_to_URLEncoded(element, key, list) {
  var listValue = list || [];
  if (typeof element == "object") {
    for (var idx in element)
      JSON_to_URLEncoded(
        element[idx],
        key ? key + "[" + idx + "]" : idx,
        listValue
      );
  } else {
    listValue.push(key + "=" + encodeURIComponent(element));
  }
  return listValue.join("&");
}
export default JSON_to_URLEncoded;
