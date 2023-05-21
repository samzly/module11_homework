export function getMonth(n) {
    let result;
    if (n === 1) {
        result = 'январь'
    } else if (n === 2) {
        result = 'февраль'
    } else if (n === 3) {
        result = 'март'
    } else if (n === 4) {
        result = 'апрель'
    } else if (n === 5) {
        result = 'май'
    } else if (n === 6) {
        result = 'июнь'
    } else if (n === 7) {
        result = 'июль'
    } else if (n === 8) {
        result = 'август'
    } else if (n === 9) {
        result = 'сентябрь'
    } else if (n === 10) {
        result = 'октябрь'
    } else if (n === 11) {
        result = 'ноябрь'
    } else if (n === 12) {
        result = 'декабрь'
    } else if ((n < 1) || (n > 12) || (typeof n != "number") || (result === undefined)) {
        result = 'введены некорректные данные'
    }
    return result
}