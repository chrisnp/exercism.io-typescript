export const score = (x: number, y: number): number => {
  const radius = (x ** 2 + y ** 2) ** 0.5
  let   points = 0
  if (radius <= 10) points += 1
  if (radius <= 5 ) points += 4
  if (radius <= 1 ) points += 5
  return points
}
