export function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.info("Fizz Buzz");
        } else if (i % 3 === 0) {
            console.info("Fizz");
        } else if (i % 5 === 0) {
            console.info("Buzz");
        } else {
            console.info(i);
        }
    }
}