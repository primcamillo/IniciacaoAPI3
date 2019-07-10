const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'authors');

app.appendChild(container);

fetch('https://randomuser.me/api/?results=10')
.then (function(response){
    return response.json();
})
.then (function(data){
    console.log('SUCESSO')
    console.log(data)
    
    data.results.forEach(colaboradores => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        const img = document.createElement('img');
        img.src = colaboradores.picture.large;
        
        const name = document.createElement('h2');
        name.textContent = `${colaboradores.name.first} ${colaboradores.name.last}`;
        
        const location = document.createElement('h3');
        location.textContent = `${colaboradores.location.street}, ${colaboradores.nat}`;
        
        const email = document.createElement('p');
        email.textContent = colaboradores.email;
        
        const phone = document.createElement('p');
        phone.textContent = colaboradores.phone
        
        container.appendChild(card);
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(email);
        card.appendChild(phone);
    })
})
.catch(function(erro){
    console.log(erro) 
})

//else {
//console.log('erro')

