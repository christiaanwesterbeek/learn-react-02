export const partial = (fn, ...args) => fn.bind(null, ...args)

const _pipe = (f, g) => (...args) => g(f(...args))

export const pipe = (...fns) => fns.reduce(_pipe)

/* Worked out for me to understand it better
const _pipe = function(accumulator, currentValue) {
  return function(...args) {
    return currentValue(accumulator(...args))
  }
}

export const pipe = function(...fns) {
  return fns.reduce(_pipe)
}
*/
