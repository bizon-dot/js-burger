let btn_GenerateBurger = document.getElementById("btn-generate-burger");
btn_GenerateBurger.addEventListener('click',
    function () {
        // Creo un oggetto contenete il nome del panino, la sua composizione, l'utilizzo o meno del coupon 
        // e il prezzo
        let user_burger = burgerComposition();
        // Stampo nel DOM il banner con il prezzo 
        console.log(user_burger);
        let banner_price = bannerPrice(user_burger);

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
        eggs: document.getElementById("eggs").checked,
        chesse: document.getElementById("chesse").checked,
        mustard: document.getElementById("mustard").checked,
        tomato: document.getElementById("tomato").checked,
        lettuce: document.getElementById("lettuce").checked,
        ketchup: document.getElementById("ketchup").checked        

    }

    // Tengo solamente le proprietà true in modo da evitare controlli successivi
    for (let ingredient in user_burger) {
        if (user_burger[ingredient] == false) {
            delete user_burger[ingredient];
        }
    }

    // ?! TO FIX
    // CouponCode
    //let couponCode = document.getElementById("coupon").value;

    // Controllo che il codice coupoun sia valido nel caso salvo il flag true
    // if (isPalindrome(couponCode)) {
    //    user_burger["coupon"] = true;
    // }

    // Calcolo e e aggiungo il prezzo del panino all'oggetto tenendo conto dell'
    //  eventuale sconto
    let price = calculatePriceBurger(user_burger);
    
    user_burger["price"] = (price);
    
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
        eggs: 40,
        mustard: 10,
        tomato: 20,
        lettuce: 20,
        ketchup: 10,
        priceBaseBurger: 320,
    }

    // Calcolo il prezzo in base agli ingredienti contenuti in user_burger
    let price = 0;
    //console.log(typeof(priceAddonBurger.tomato))
    for (let ingredient in user_burger) {
        // Escludo tutte le proprietà non numeriche dell'oggetto dalla somma 
        if (!(isNaN(user_burger[ingredient]))) {
             price +=  (priceAddonBurger[ingredient]);
             

        }

    }
    price = (price + parseInt(priceAddonBurger.priceBaseBurger)) / 100;
    
    // ?! TO FIX
    // Nel caso user_burger.coupon === true applico uno sconto del 20&
    // if (user_burger.coupon) {
    //     price = price * 0.8;
    // }
    
    return price;

}

/*  
    =======================================================================================================
        3.                              Creazione banner contenente il prezzo 
    =======================================================================================================
    
*/

function bannerPrice(user_burger) {
 
    let templateBox = document.getElementById("box-price");
    templateBox.innerHTML = `Price: ${user_burger.price}`;
    return true;
}

/*  
    =======================================================================================================
        4.                              Torna true se il discount code è palindromo
    =======================================================================================================
    
*/
// Strip i caratteri alfanumerici e rendo tutto minuscolo
const clean = (str) => str.toString().toLowerCase().replace(/[\W_]/g, '');
function isPalindrome(str) {
    var clearStr = clean(str);
    var reverseStr = clearStr.split('').reverse().join('');
    return clearStr === reverseStr;
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