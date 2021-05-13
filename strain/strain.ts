type predicate<T> = (e: T) => boolean

const strain = <T>(list: T[],
                   decider: predicate<T>,
                   keeping: boolean): T[] => {
  const keeps: T[] = []
  const discards: T[] = []

  for (const element of list) {
    if (decider(element)) { keeps.push(element) }
    else { discards.push(element) }
  }
  return (keeping) ? keeps : discards
}

export const keep =
    <T>(list: T[], decider: predicate<T>): T[] =>
          strain(list, decider, true)

export const discard =
    <T>(list: T[], decider: predicate<T>): T[] =>
          strain(list, decider, false)
