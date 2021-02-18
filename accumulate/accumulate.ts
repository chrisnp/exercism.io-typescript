function accumulate<T, U>(list:T[], op:(x:T) => U): U[] {
    const acc: U[] = []
    list.forEach((x) => acc.push(op(x)))
    return acc
}

export default accumulate;