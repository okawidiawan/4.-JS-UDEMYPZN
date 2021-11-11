export function palindrome(value) {
    let result = '';
    for (let i = value.length; i > 0; i--) {
        value = value.toString();
        result += value[i - 1];
    }
    return console.info(result.toUpperCase() === value.toUpperCase());
}