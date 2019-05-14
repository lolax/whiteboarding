const fib = n => {

    let cache = {
        0: 0,
        1: 1
    }
    
    for (i = 2; i <= n; i ++) {
        cache[i] = cache[i - 1] + cache[i - 2]
    }
    
    return cache[n]
}

console.log(fib(30)) 