const holderName = document.getElementById('holder-name');
const cardNumber = document.getElementById('card-number');
const cvv = document.getElementById('cvv');
const year = document.getElementById('year');
const month = document.getElementById('month');

function nameChanged(value){
    holderName.innerText = value;
}



function cardNumberChanged(value){
        while(value.length <= 15){
            value += '0';
        }

    cardNumber.innerHTML = 
    `<span>${value[0]}${value[1]}${value[2]}${value[3]}</span> <span>${value[4]}${value[5]}${value[6]}${value[7]}</span> <span>${value[8]}${value[9]}${value[10]}${value[11]}</span> <span>${value[12]}${value[13]}${value[14]}${value[15]}</span>`
}

function monthChanged(value){
    month.innerText = value;

}

function yearChanged(value){
    year.innerText = value;
}

function cvvChanged(value){
    cvv.innerText = value;
}