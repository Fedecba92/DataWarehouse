// import { orderByName } from "./helpers/operators";

//variables
let dataOrder;
const dashboardContainer = document.querySelector('.table__container');
const alphaOrderByName = document.querySelector('#alpha-order-by-name');
const alphaOrderByCountry = document.querySelector('#alpha-order-by-country');
const alphaOrderByCompany= document.querySelector('#alpha-order-by-company');
const alphaOrderByPosition= document.querySelector('#alpha-order-by-position');
const alphaOrderByInterest = document.querySelector('#alpha-order-by-interest');
const mainCheckbox = document.querySelector('#main-checkbox');

const urlContacts = 'https://run.mocky.io/v3/305adb06-56ea-4b09-abf5-ef5b4028d9c8';



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

            if( typeof property !== 'object'){
                if (a[property].toLowerCase() > b[property].toLowerCase()) {
                    return 1;
                }
                if (a[property].toLowerCase() < b[property].toLowerCase()) {
                    return -1;
                }
            }else{
                if (a[property[0]][property[1]].toLowerCase() > b[property[0]][property[1]].toLowerCase()) {
                    return 1;
                }
                if (a[property[0]][property[1]].toLowerCase() < b[property[0]][property[1]].toLowerCase()) {
                    return -1;
                }
            }    
            // a must be equal to b
            return 0;
          });
    } else{
        return arrayContacts.sort(function (a, b) {

            if( typeof property !== 'object'){
                if (a[property].toLowerCase() < b[property].toLowerCase()) {
                    return 1;
                }
                if (a[property].toLowerCase() > b[property].toLowerCase()) {
                    return -1;
                }
            }else{
                if (a[property[0]][property[1]].toLowerCase() < b[property[0]][property[1]].toLowerCase()) {
                    return 1;
                }
                if (a[property[0]][property[1]].toLowerCase() > b[property[0]][property[1]].toLowerCase()) {
                    return -1;
                }
            }    
            // a must be equal to b
            return 0;
          });
    }
} 

const orderByInterest = (arrayContacts, property, direction) => {
    if(direction){ return arrayContacts.sort((a,b) => b[property] - a[property]);}
    else{
        return arrayContacts.sort((a,b) => a[property] - b[property]);
    }
}

const printRows = (data) =>{
    
    console.log('onPrintRows', data);
    data.forEach( el => {
        
        const preferredChannel = Object.keys(el.preferredChannel);

        const newRow = document.createElement("article");
        newRow.classList.add("table__body--row");

        newRow.innerHTML = `
    
            <div class="table__item"><input class="dash-checkbox" type="checkbox"></div>
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


const checkAll = (state) => {
    const allCheckbox = document.querySelectorAll('.dash-checkbox');
    const arrayCheckbox = [ ...allCheckbox ];
    
    if(state){
        arrayCheckbox.forEach((element)=>{
            console.log(element);
            element.setAttribute('checked','true');
            console.log(element.getAttribute('checked'));
        })
    } else{
        arrayCheckbox.forEach((element)=>{
           
            element.removeAttribute('checked');

        })
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

alphaOrderByCountry.addEventListener('click', (e)=>{
    if(!alphaOrderByCountry.classList.contains('arrows-icon--active')){
        console.log('tiene la clase active');
        alphaOrderByCountry.classList.add('arrows-icon--active');
        cleanDashboard();
        printRows(orderBy(dataOrder, ['country','name'], true));
    }else{
        alphaOrderByCountry.classList.remove('arrows-icon--active');
        cleanDashboard();
        printRows(orderBy(dataOrder, ['country','name'], false));
    }

})


alphaOrderByCompany.addEventListener('click', (e)=>{
    if(!alphaOrderByCompany.classList.contains('arrows-icon--active')){
        console.log('tiene la clase active');
        alphaOrderByCompany.classList.add('arrows-icon--active');
        cleanDashboard();
        printRows(orderBy(dataOrder, 'company', true));
    }else{
        alphaOrderByCompany.classList.remove('arrows-icon--active');
        cleanDashboard();
        printRows(orderBy(dataOrder, 'company', false));
    }

});

alphaOrderByPosition.addEventListener('click', (e)=>{
    if(!alphaOrderByPosition.classList.contains('arrows-icon--active')){
        console.log('tiene la clase active');
        alphaOrderByPosition.classList.add('arrows-icon--active');
        cleanDashboard();
        printRows(orderBy(dataOrder, 'position', true));
    }else{
        alphaOrderByPosition.classList.remove('arrows-icon--active');
        cleanDashboard();
        printRows(orderBy(dataOrder, 'position', false));
    }
});

alphaOrderByInterest.addEventListener('click', (e)=>{
    console.log(dataOrder);
    if(!alphaOrderByInterest.classList.contains('arrows-icon--active')){
        console.log('tiene la clase active');
        alphaOrderByInterest.classList.add('arrows-icon--active');
        cleanDashboard();
        printRows(orderByInterest(dataOrder, 'interest', true));
    }else{
        alphaOrderByInterest.classList.remove('arrows-icon--active');
        cleanDashboard();
        printRows( orderByInterest(dataOrder, 'interest', false));
    }
});

mainCheckbox.addEventListener('click', (e) => {
    
    console.log(e.target.checked);
    if(e.target.checked){
        checkAll(true)
    }
    else{
        checkAll(false)
    }
})


document.addEventListener('DOMContentLoaded' , () => {
    
    //ejecuciones inmediatas
    getContacts(urlContacts);

});








