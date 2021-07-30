let btn_GenerateBurger = document.getElementById("btn-generate-burger");
btn_GenerateBurger.addEventListener('click',
    function () {
        // let burgerName = document.getElementById("input-burger-name").value;
        // let chesse = document.getElementById("chesse");
        // let eggs = document.getElementById("eggs");
        // let mustard = document.getElementById("mustard");
        // let tomato = document.getElementById("tomato").value;
        // let lettuce = document.getElementById("lettuce");
        // let ketchup = document.getElementById("ketchup");
        // console.log(`Name: ${burgerName}  tomato: ${tomato}`);
        let user_burger = burgerComposition();
        console.log(user_burger);
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
        chesse: document.getElementById("chesse").value,
        mustard: document.getElementById("mustard").value,
        tomato : document.getElementById("tomato").value,
        lettuce : document.getElementById("lettuce").value,
        ketchup : document.getElementById("ketchup").value,
        coupon : document.getElementById("coupon").value

    }

    return user_burger;
}