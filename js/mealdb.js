const getSearchfood = () =>{
    const searchFeild = document.getElementById('search-field');
    const searchText = searchFeild.value;
    if(searchText.length < 1){
       console.log("this emty");
    }else{
        searchFeild.value = "";
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url).then(response => response.json()).then(data => displaySearchFood(data.meals));
    }
   
    
}

const displaySearchFood = (meals) => {
    const mealsContainer = document.getElementById('search-meals');
    mealsContainer.innerHTML = "";
    console.log(meals);
    if(meals == null){
       
        mealsContainer.innerHTML = `
        <h1 class="mx-auto w-50">Connot Found items</h1>
        `;
    }else{
        meals.forEach( meal =>{
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
            `;
            mealsContainer.appendChild(div);
            console.log(meal);
        })
    }
    // console.log(meals);
}