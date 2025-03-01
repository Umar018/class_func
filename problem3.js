const magic = {
  replace(str, a, b) {
    let index = str.indexOf(a);
    if (index === -1) return str;
    return str.slice(0, index) + b + str.slice(index + a.length);
  },

  length(data) {
    if (typeof data === "string" || Array.isArray(data)) {
      return data.length;
    } else if (typeof data === "number") {
      return String(data).length;
    } else if (typeof data === "object" && data !== null) {
      return Object.keys(data).length;
    }
    return 0;
  },

  toUpperCase(str) {
    let result = "";
    for (let char of str) {
      let code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        result += String.fromCharCode(code - 32);
      } else {
        result += char;
      }
    }
    return result;
  },

  repeat(data, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(data);
    }
    return result.join(" ");
  },

  count(str) {
    const result = {};
    for (let char of str) {
      result[char] = (result[char] || 0) + 1;
    }
    return result;
  },
};
