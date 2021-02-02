export default class Raindrops {

    public convert (num: number): string {
        let drops: string = "";
        if ( num % 3 === 0) {
            drops += "Pling";
        }
        if ( num % 5 === 0) {
            drops += "Plang";
        }
        if ( num % 7 === 0) {
            drops += "Plong";
        }
        return drops = drops.length > 0 ?
                       drops :
                       `${num}`;
    }
}