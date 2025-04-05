console.log("Loaded");

let txtPostaCode = document.getElementById("txt-postal-code");
let txtCity = document.getElementById("txt-city");
let btnCity = document.getElementById("btn-city");


let handleCityClick = function (){
    let postalCode = txtPostaCode.value;

    fetch("http://localhost:8080/get-city/" + postalCode)
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            txtCity.innerText = data.city;
        })
}

btnCity.addEventListener("click",handleCityClick);