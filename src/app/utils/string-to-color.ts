export function stringToColor(str): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {

    // tslint:disable-next-line:no-bitwise
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = '#';
  for (let i = 0; i < 3; i++) {

    // tslint:disable-next-line:no-bitwise
    const value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}
