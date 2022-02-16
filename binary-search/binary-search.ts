export function find<T>(haystack: T[], needle: T): number | never {
    let lo = 0,
        hi = haystack.length - 1

    while (lo <= hi) {
        const mid = (hi + lo) >> 1
        if (haystack[mid] === needle) return mid
        haystack[mid] > needle 
        ? hi = mid - 1 
        : lo = mid + 1
    }

    throw ('Value not in array')
}
