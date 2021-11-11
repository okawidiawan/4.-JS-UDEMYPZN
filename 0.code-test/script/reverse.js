export function balikKata(value) {
    let result = '';
    for (let i = value.length; i > 0; i--) {
        result += value[i - 1];
    }
    return console.info(result.toUpperCase());
}