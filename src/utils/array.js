import { identity, round } from './helper';

export function group(array, key = (d) => d) {
    const keyGroups = new Map();
    for (const item of array) {
        const k = key(item);
        const g = keyGroups.get(k);
        if (g) {
            g.push(item);
        } else {
            keyGroups.set(k, [item]);
        }
    }
    return keyGroups;
}

export function bisect(array, x, lo = 0, hi = array.length, accessor = identity) {
    let i = lo;
    let j = hi;
    while (i < j) {
        const mid = (i + j) >>> 1;
        if (accessor(array[mid]) < x) {
            i = mid + 1;
        } else {
            j = mid;
        }
    }
    return i;
}

export function lastOf(array) {
    return array[array.length - 1];
}

export function firstOf(array) {
    return array[0];
}

export function indexOf(array) {
    return array.map((_, i) => i);
}

export function min(array, accessor) {
    return Math.min(...array.map(accessor));
}

export function max(array, accessor) {
    return Math.max(...array.map(accessor));
}

export function mean(array, accessor = identity) {
    return array
        .map(accessor)
        .reduce((sum, v) => sum + v) / array.length;
}

export function median(array, accessor = identity) {
    const sortedValues = [...array].map(accessor).sort();
    const i = (sortedValues.length - 1) / 2;
    const a = sortedValues[Math.floor(i)];
    const b = sortedValues[Math.ceil(i)];
    return (a + b) / 2;
}

// eslint-disable-next-line no-unused-vars
export function count(array, accessor = identity) {
    return array.length;
}

export function sum(array, accessor = identity) {
    return array.map(accessor).reduce((sum, v) => sum + v);
}