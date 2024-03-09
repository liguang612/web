function handle(str) {
  return str.trim().toLowerCase().split('').map(e => (e >= 'A' && e <= 'Z') || (e >= 'a' && e <= 'z') || (e >= '0' && e <= '9') ? e : '').join('');
}

function palindrome(str) {
  str = handle(str);

  return str == str.split('').reverse().join('');
}

palindrome("eye");