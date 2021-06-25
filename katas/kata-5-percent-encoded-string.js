const urlEncode = function(text) {
  let url = [];
  for (i = 0; i <= text.length - 1; i++) {
    url.push(text[i])
    for (j = 0; j <= url.length - 1; j++) {
      if (url[j] === " ") {
        url.splice(i, 1, "%20")  
      }
    }
  }
  return url.join('');
}

console.log(urlEncode("matt parisien"));