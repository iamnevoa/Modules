import { diffDates } from "./datecalc.js";
import { formatError, diffToHtml } from "./common.js";


const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (!firstDate || !secondDate) {
        dateCalcResult.innerHTML = formatError('Для расчета промежутка необходимо заполнить оба поля.')
    }
    else {
        if (firstDate > secondDate) {
            [secondDate, firstDate] = [firstDate, secondDate];
        }
        const result = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(result);
    }
}