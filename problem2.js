n = 5;

function pasclPyramid(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];

    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }

    console.log(" ".repeat(n - i - 1) + arr[i].join(" "));
  }
}

pasclPyramid(5)