let btn_GenerateBurger = document.getElementById("btn-generate-burger");
btn_GenerateBurger.addEventListener('click',
    function () {
        // Creo un oggetto contenete il nome del panino, la sua composizione, l'utilizzo o meno del coupon 
        // e il prezzo
        let user_burger = burgerComposition();
    
        // Stampo nel DOM il banner con il prezzo 
        

    })

/*  
    =======================================================================================================
        1.                              Restituisce un oggetto contente le proprietà
                                                che compongono il panino
    =======================================================================================================
    
*/

function burgerComposition() {
    // Popolo l'oggetto con i vari input presi dal form 
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
    // Calcolo e e aggiungo il prezzo del panino all'oggetto tenendo conto dell'
    //  eventuale sconto
    let price = calculatePriceBurger(user_burger);
    user_burger["price"] = price;

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
        priceBaseBurger: 320,
    }
    // Calcolo il prezzo in base agli ingredienti contenuti in user_burger
    let price = 0;
    for (let ingredient in user_burger) {
        // Escludo tutte le proprietà non numeriche dalla somma 
        if (!(isNaN(user_burger[ingredient]))) {
            price += priceAddonBurger[ingredient];
        }

    }
    price = (price + priceAddonBurger.priceBaseBurger) / 100;
    // Nel caso il codice scount sia palindromo applico uno sconto del 20%
    // TODO: DA FIXARE
    // if (isPalindrome(user_burger.coupon)) {
    //     price = price * 0.8;
    // }
    console.log(price);
    return price;

}

/*  
    =======================================================================================================
        3.                              Creazione banner contenente il prezzo 
    =======================================================================================================
    
*/

function bannerPrice(price) {

    let templateBox = document.getElementById("box-price");
    templateBox.innerHTML += `Price: ${price}`;
    return true;
}

/*  
    =======================================================================================================
        4.                              Torna true se il discount code è palindromo
    =======================================================================================================
    
*/
function isPalindrome(code){
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
}


/*  
    =======================================================================================================
                                            FUNZIONI DEPRECATE 
    =======================================================================================================
    
*/



/*      
    ==           FUNZIONE CALCOLA PREZZO 
                   DEPRECATA                ==

   // user_burger.forEach( function(ingredient){
   //     let index = ingredient.toString();
   //     price  += priceAddonBurger[ingredient];
   //     return price;
       
       
   // });
   */

/*
    ==    CONTROLLO QUALI INGREDIENTI SONO STATI SELEZIONATI 
                            DEPRECATA           ==

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