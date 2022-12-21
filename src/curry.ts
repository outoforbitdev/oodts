export function curry<T1, T2 extends unknown[]>(f: (arg0: T1, ...rest: T2) => any, a: T1) {
    return (...rest: T2) => f(a, ...rest);
}

export function curryAndBind<T1, T2 extends unknown[]>(f: (arg0: T1, ...rest: T2) => any, t: any, a: T1) {
    return (...rest: T2) => bind(f, t)(a, ...rest);
}

export function bind(f, t) {
    return f.bind(t)
}