function changeRegion() {
    selectedBase = (event.target.value);
    doFetch();
    render();
}

function render(){
    const output = document.querySelector("#chart-location")
    // const eurHeight = "95%"
    output.innerHTML = ''
    
    // const currencies = [["GBP", 95], ["EUR", 85.5], ["USD", 75], ["CAD", 56], ["AUD", 50]]

    let selectedCountry = [
        "GBP",
        "EUR",
        "USD",
        "AUD",
        "CAD",
    ]
    console.log("apiData:",apiData)
    for (currency of apiData) {
        // output.innerHTML += `<div class="BarGraph-bar" style="height: ${currency[1]}%" onClick="
        // alert('1 EUR = 0.8753  ${currency[0]}')
    // ">${currency[0]} &pound;</div>`
        if (selectedCountry.includes(currency[0])) {
            // let chart = document.querySelector("#chart-location");
            // let height = 70;
            // let bar = document.createElement("div");
            // bar.classList.add("BarGraph-bar");
            // bar.style.height = height + "%";
            // output.appendChild(bar);
            output.innerHTML += `<div class="BarGraph-bar" style= "height: ${250*currency[1]}px">${currency[0]} ${Math.round(10*currency[1])/10}%</div>`
        }



    }
}



let apiData = [];

function doFetch() {
    let element = document.querySelector('#search');
    let searchTerm = element.value;
    fetch("https://api.exchangeratesapi.io/latest?base=" + searchTerm)
        .then(response => response.json())
            // "{a: 1, b: 2}" => {a: 1, b: 2}
        .then(data => {
            console.log(data);
            apiData = Object.entries(data.rates);
            render();
        });
}

doFetch();

//let apiData = [];

// function render() {
    //let output = document.querySelector('#output');
    //output.innerHTML = '';

    //for (let gif of apiData) {
        //let image = document.createElement('img');
       // image.setAttribute('src', gif.images.preview_gif.url);
        //output.appendChild(image);

        // An example of adding a click event:
       // image.onclick = () => alert(`Titled: ${gif.title}`);
    //}
//}

