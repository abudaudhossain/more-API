const getBestu = () =>{
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(user => displayBestu(user.results[0]));
}
getBestu();
const displayBestu = (bestu) =>{
    const bustuContainer = document.getElementById('friend');
    // console.log(bustuContainer);
    bustuContainer.textContent= "";
    const div = document.createElement('div');
    div.classList.add('friend-feild')
    div.innerHTML = `
    <img width=200 height=200 src="${bestu.picture.large}" alt="">
    <div>
        <h3>Name: ${bestu.name.title}  ${bestu.name.first}  ${bestu.name.last}</h3>
        <h4>Email:  ${bestu.email}</h4>
        <h4>Phone:  ${bestu.phone}</h4>
        <address>Address: ${bestu.location.city},${bestu.location.country}</address>
        <p>age: ${bestu.registered.age}</p>
        <p>age: ${bestu.gender}</p>
    </div>
    `;
    bustuContainer.appendChild(div);
}