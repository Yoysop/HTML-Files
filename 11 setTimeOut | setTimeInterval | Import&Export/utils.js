// Export during declaration
export let weekdays = ["Mon", "Tue","Wed","Thu","Fri"];
export const DATE_OF_BIRTH_YEAR = 1989;
export function sayhi(message){
    alert(message);
}
//Export after declaration
function doadd (number1,number2){
    alert(number1 + number2);
}
export {doadd};
export default function domul(number1,number2){
    alert(number1 * number2);
}
