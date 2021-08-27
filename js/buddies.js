const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=25')
        .then(response => response.json())
        .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    const buddiesContainer = document.getElementById('buddies');
    const buddies = data.results;
    for (const buddi of buddies){
       const p = document.createElement('p');
       p.innerText = `
       Name : ${buddi.name.title} ${buddi.name.first} ${buddi.name.last} 
       Email: ${buddi.email}
       `;
       buddiesContainer.appendChild(p);

    }

}