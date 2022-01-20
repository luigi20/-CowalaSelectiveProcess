class Fibonacci {
    execute(number: number) {
        let fibo = [0, 1];
        for (let i = 2; i < number; i++) {
            fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo;
    }
}
export { Fibonacci }