const fib = n => {

    let cache = {
        0: 0,
        1: 1
    }
    

    for (i = 2; i < n; i ++) {
        cache[i] = cache[i - 1] + cache[i - 2]
        console.log(cache[i])
    }
    
    return cache
}

console.log(fib(30)) 