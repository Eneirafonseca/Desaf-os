const currencyArray = ["dolar", "euro", "bitcoin", "uf"]

const clpInput = document.getElementById("clpAmount")
const selectedCurrency = document.getElementById("selectCurrency")
const convertedCurrency = document.getElementById("currencyConvert")
const convertedTotal = document.getElementById("totalConverted")
const chartContainer = document.getElementById("chartContainer")


function createChart(dataObjt) {
    chartContainer.innerHTML = '<canvas id="chart"></canvas>'
    canvas = document.getElementById("chart")

    const data = {
        type: "line",
        data: {
            labels: dataObjt.dates,
            datasets: [
                {
                    label: 'Valor: ',
                    data: dataObjt.data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        }
    }
    new Chart(canvas, data)
}

async function convertCurrency() {
    try {

        currency = selectedCurrency.value
        result = await fetch(`https://mindicador.cl/api/${currency}`)
        resultJson = await result.json()
        clpCurreny = resultJson.serie[0].valor
        convertCLP = +clpInput.value

        convertedTotal.innerText = (convertCLP / clpCurreny).toFixed(1)

        const dateData = {}

        dateData.data = resultJson.serie.slice(0, 10).map(val => val.valor).reverse()
        dateData.dates = resultJson.serie.slice(0, 10).map(val => dayjs(val.fecha).format(`DD-MM-YYYY`)).reverse()

        createChart(dateData)

    } catch (error) {

    }
}

selectHTML = selectCurrency.innerHTML

currencyArray.forEach(val => selectHTML += `
<option value=${val}>${val}</option>
`)

selectCurrency.innerHTML = selectHTML




convertedCurrency.addEventListener("click", convertCurrency)

