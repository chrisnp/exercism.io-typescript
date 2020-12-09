type predicate<T> = (e: T) => boolean

const strain = <T>(list: T[],
                   filtr: predicate<T>,
                   keeping: boolean): T[] => {
  const keeps: T[] = []
  const discards: T[] = []

  for (const element of list) {
    if (filtr(element)) { keeps.push(element) }
    else { discards.push(element) }
  }
  return (keeping) ? keeps : discards
}

export const keep =
    <T>(list: T[], filtr: predicate<T>): T[] =>
          strain(list, filtr, true)

export const discard =
    <T>(list: T[], filtr: predicate<T>): T[] =>
          strain(list, filtr, false)
