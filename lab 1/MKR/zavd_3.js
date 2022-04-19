let regions = [
    "AK", "AB", "AC", "AE", "AH", 
    "AM", "AO", "AP", "AT", "AI", 
    "AA", "BA", "BB", "BC", "BE", 
    "BH", "BI", "BK", "BM", "BO", 
    "AX", "BT", "BX", "CA", "CB", 
    "CE", "CH"
]
document.getElementById("check").onclick = () =>
{
    let number = document.getElementById("num").value
    let region = parseInt(document.getElementById("region").value)

    regionLetters = regions[region-1]
    if (number.slice(0,2) == region && 0<parseInt(number.slice(2,6))<9999)
    {
        document.getElementById("result").value = "Номер правильний"
    }
    else
    {
        document.getElementById("result").value = "Номер неправильний"
    }

}
 