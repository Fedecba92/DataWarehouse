// import { orderByName } from "./helpers/operators";

//variables
const dashboardContainer = document.querySelector('.table__container');
const urlContacts = '../assets/data/contactos.json';

console.log(dashboardContainer);

//funciones
const getContacts = (url) =>{
    fetch(url)
        .then( resp => resp.json() )
        .then( contacts => printRows(contacts) );
}

const printRows = (data) =>{

    // const dataOrder = orderByName(data);
    const dataOrder = data.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

    dataOrder.forEach( el => {
        
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

//eventos



//ejecuciones inmediatas
getContacts(urlContacts);