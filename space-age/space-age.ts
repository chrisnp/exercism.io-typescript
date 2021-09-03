const ORBITAL_PERIOD = {
    earth   : 1,
    mercury : 0.2408467,
    venus   : 0.61519726,
    mars    : 1.8808158,
    jupiter : 11.862615,
    saturn  : 29.447498,
    uranus  : 84.016846,
    neptune : 164.79132
}

type Planet = keyof typeof ORBITAL_PERIOD

export const age = (planet: Planet, seconds: number) => {
    const yearsOnEarth: number = seconds / 31557600
    return parseFloat((yearsOnEarth  / ORBITAL_PERIOD[planet])
                      .toFixed(2))
}
