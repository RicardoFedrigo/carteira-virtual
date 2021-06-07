function dig(n1: string, n2: string, n3: string, n4?: string): string {
  let nums = n1.split("").concat(n2.split(""), n3.split(""));

  if (n4 !== undefined) {
    nums[9] = n4;
  }

  let x = 0;
  for (let i = n4 !== undefined ? 11 : 10, j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }
  const y = x % 11;
  const val = y < 2 ? 0 : 11 - y;
  return String(val);
}

function randomCpf() {
  const num1 = Math.random().toString();
  const num2 = Math.random().toString();
  const num3 = Math.random().toString();

  const dig1 = dig(num1, num2, num3);
  const dig2 = dig(num1, num2, num3, dig1.toString());
  return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}


export default randomCpf;
