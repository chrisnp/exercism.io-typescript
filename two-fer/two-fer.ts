export default class TwoFer {

  static twoFer( name?: string ) {
    return `One for ${name || 'you'}, one for me.`;
  }
}
