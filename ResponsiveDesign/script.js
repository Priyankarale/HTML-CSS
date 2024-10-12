function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    // Inner loop for the numbers in each row
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    console.log(row);
  }
}
pattern(4);
