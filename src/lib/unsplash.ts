export function unsplashRandom(query: string, seed: string | number) {
  return `https://source.unsplash.com/random/1600x900/?${encodeURIComponent(query)}&sig=${seed}`;
}