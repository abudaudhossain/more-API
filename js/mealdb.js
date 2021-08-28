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
            <div onclick ='getDetails("${meal.idMeal}")'  class="card h-100 pointer">
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

const getDetails = (mealId) =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url).then(response => response.json()).then(data => displayDetails(data.meals[0]));
    // console.log(url);
}

const displayDetails = (meal) =>{
    const detailsFeild = document.getElementById('details');
    detailsFeild.textContent = '';
    detailsFeild.innerHTML = `
    <div class="card mx-auto" style="width: 60%;">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            <a href="${meal.strSource}" class="btn btn-primary" target="_blank">Go Details</a>
            <a href="${meal.strYoutube}" class="btn btn-primary" target="_blank">Go Video</a>
        </div>
    </div>
    `;
    // console.log(meal);
}