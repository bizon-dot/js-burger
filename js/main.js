let btn_GenerateBurger = document.getElementById("btn-generate-burger");
btn_GenerateBurger.addEventListener('click',
    function () {
        let user_burger = burgerComposition();
        //console.log(user_burger);
        calculatePriceBurger(user_burger)
    })

/*  
    =======================================================================================================
        1.                              Restituisce un oggetto contente le proprietà
                                                che compongono il panino
    =======================================================================================================
    
*/

function burgerComposition() {
    var user_burger = {
        burgerName: document.getElementById("input-burger-name").value,
        chesse: document.getElementById("chesse").checked,
        mustard: document.getElementById("mustard").checked,
        tomato: document.getElementById("tomato").checked,
        lettuce: document.getElementById("lettuce").checked,
        ketchup: document.getElementById("ketchup").checked,
        coupon: document.getElementById("coupon").value

    }

    return user_burger;
}

/*  
    =======================================================================================================
        2.                              Restituisce il prezzo del panino
    =======================================================================================================
    
*/

function calculatePriceBurger(user_burger) {
    var priceAddonBurger = {
        chesse: 40,
        mustard: 10,
        tomato: 20,
        lettuce: 20,
        ketchup: 10,
    }

    var priceBaseBurger = 320;

    // Ritorna gli ingredienti selezionati
    var keys = Object.keys(user_burger);
    var ingredients = keys.filter(function (key) {
        return user_burger[key]
    });
    if (ingredients[0] == "burgerName") {
        ingredients.shift();
    }
    console.log(ingredients);
    let price = 0;
    ingredients.forEach( function(ingredient){
        let index = ingredient.toString();
        price  += priceAddonBurger[ingredient];
        return price;
        
        
    });
    price = (price + priceBaseBurger) / 100;
    return price;

}