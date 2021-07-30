let btn_GenerateBurger = document.getElementById("btn-generate-burger");
btn_GenerateBurger.addEventListener('click',
    function () {
        let user_burger = burgerComposition();
        
        console.log(user_burger);
        let priceBurger = calculatePriceBurger(user_burger);
        let priceBanner = bannerPrice(priceBurger);

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

    // Tengo solamente le proprietà true in modo da evitare controlli successivi
    for (let ingredient in user_burger) {
       if (user_burger[ingredient] == false) {
           delete user_burger[ingredient];
       }
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


    /*
        CONTROLLO QUALI INGREDIENTI SONO STATI SELEZIONATI 
                            DEPRECATA 

    // Ritorna gli ingredienti selezionati
    // var keys = Object.keys(user_burger);
    // var ingredients = keys.filter(function (key) {
    //     return user_burger[key]
    // });

    // Controllo che non sia presente anche la proprietà "burgerName"
     // for( var i = 0; i < ingredients.length; i++){ 
    //     if ( ingredients[i] === "burgerName") { 
    //         ingredients.splice(i, 1); 
    //     }
    
    // }
    */
   
    let price = 0;

    /*      
                FUNZIONE CALCOLA PREZZO 
                    DEPRECATA 

    // user_burger.forEach( function(ingredient){
    //     let index = ingredient.toString();
    //     price  += priceAddonBurger[ingredient];
    //     return price;
        
        
    // });
    */
    for (let ingredient in user_burger) {
        if (ingredient != "burgerName") {
            price += priceAddonBurger[ingredient];
        }
        
    }
    price = (price + priceBaseBurger) / 100;
    return price;

}

/*  
    =======================================================================================================
        3.                              Creazione banner contenente il prezzo 
    =======================================================================================================
    
*/

function bannerPrice(price){
    
    let templateBox = document.getElementById("box-price");
    templateBox.innerHTML += `Price: ${price}`;
    return true;
}