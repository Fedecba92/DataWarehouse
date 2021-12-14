// import { orderByName } from "./helpers/operators";

//variables
let dataOrder;
const dashboardContainer = document.querySelector('.table__container');
const alphaOrderByName = document.querySelector('#alpha-order-by-name');
const alphaOrderByCountry = document.querySelector('#alpha-order-by-country');
const alphaOrderByCompany= document.querySelector('#alpha-order-by-company');
const alphaOrderByPosition= document.querySelector('#alpha-order-by-position');
const alphaOrderByInterest = document.querySelector('#alpha-order-by-interest');
const urlContacts = 'https://run.mocky.io/v3/9e5bcbd0-2741-4351-8546-a7adadad3a12';

console.log(dashboardContainer)

//funciones
const getContacts = (url) =>{
    fetch(url)
        .then( resp => resp.json() )
        .then( contacts => {
            printRows(contacts);
            dataOrder = contacts;
        });
}

const orderBy = (arrayContacts, property, direction) => {

    if(direction){
        return arrayContacts.sort(function (a, b) {

            if (a[property].toLowerCase() > b[property].toLowerCase()) {
              return 1;
            }
            if (a[property].toLowerCase() < b[property].toLowerCase()) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
    } else{
        return arrayContacts.sort(function (a, b) {

            if (a[property].toLowerCase() < b[property].toLowerCase()) {
              return 1;
            }
            if (a[property].toLowerCase() > b[property].toLowerCase()) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
    }
} 

const printRows = (data) =>{


   

    data.forEach( el => {
        
        const preferredChannel = Object.keys(el.preferredChannel);

        const newRow = document.createElement("article");
        newRow.classList.add("table__body--row");

        newRow.innerHTML = `
    
            <div class="table__item"><input type="checkbox" ></div>
            <div class="table__item"><img src=${el.avatar} alt="Avatar" class="avatar">${ el.name }</div>
            <div class="table__item">${ el.country.name }</div>
            <div class="table__item">${ el.company }</div>
            <div class="table__item">${ el.position }</div>
            <div class="table__item">
                <div class="item__chip">${preferredChannel[0]}</div>
            </div>
            <div class="table__item">
                <span class="item__percent">${el.interest}%</span>
                <div class="meter">
                    <div class="meter__fill"></div>        
                </div>
            </div>
            <div class="table__item"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#5e5e5e"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg></div>

        `;

        dashboardContainer.appendChild(newRow);

    });


}

const cleanDashboard = () => {

    while (dashboardContainer.children.length > 1){
        dashboardContainer.removeChild(dashboardContainer.lastChild);
      }
}

//eventos
alphaOrderByName.addEventListener('click', (e)=>{
    if(!alphaOrderByName.classList.contains('arrows-icon--active')){
        console.log('tiene la clase active');
        alphaOrderByName.classList.add('arrows-icon--active');
        cleanDashboard();
        printRows(orderBy(dataOrder, 'name', true));
    }else{
        alphaOrderByName.classList.remove('arrows-icon--active');
        cleanDashboard();
        printRows(orderBy(dataOrder, 'name', false));
    }

});




//ejecuciones inmediatas
getContacts(urlContacts);