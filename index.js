    // buttons
const betx10 = document.querySelector("#betx10") 
const betx50 = document.querySelector("#betx50")
const betx100 = document.querySelector("#betx100")
const addFunds = document.querySelector("#funds")
    // displays
const balance = document.querySelector(".balance")
const displayStatus = document.querySelector(".status")
    // images for reels
let imageOne = document.querySelector("#image-one") // could these be const?
let imageTwo = document.querySelector("#image-two")
let imageThree = document.querySelector("#image-three")
    //starting funds/balance
let funds = 0
    //array of images
const images = [
    "/slot-machine-project/slotPic/turtle-shell.png",
    "/slot-machine-project/slotPic/turtle-shell.png",
    "/slot-machine-project/slotPic/turtle-shell.png",
    "/slot-machine-project/slotPic/coin.png",
    "/slot-machine-project/slotPic/coin.png",
    "/slot-machine-project/slotPic/coin.png",
    "/slot-machine-project/slotPic/mushroom.png",
    "/slot-machine-project/slotPic/mushroom.png",
    "/slot-machine-project/slotPic/mario.png",
    "/slot-machine-project/slotPic/mario.png",
    "/slot-machine-project/slotPic/star.png"
]
    //add funds button 
addFunds.addEventListener("click", () => {
    funds += 500
    showBalance()
})
    //bet button events
betx10.addEventListener("click", () =>{ // would like to see a refactor for this callBack being repeated 3 times to instead take in a param of event to set the wager amount based on teh button attributes 
     wager(10)// indentation is off in here by an extra space
     buttonDelay() // ^
})
betx50.addEventListener("click", () => {
    wager(50)
    buttonDelay()
})
betx100.addEventListener("click", () => {
    wager(100)
    buttonDelay()
})
    //disable and reenable buttons after a delay
const buttonDelay = () => {
    betx10.disabled = true
    setTimeout( () => {betx10.disabled = false}, 900 )
    betx50.disabled = true
    setTimeout( () => {betx50.disabled = false}, 900 )
    betx100.disabled = true
    setTimeout( () => {betx100.disabled = false}, 900 )
}
    //wager and spin if there are funds
const wager = (bet) => {
    if ((funds - bet) < 0 ){
        displayStatus.innerHTML = `You Dont Have Enough Funds`
    } else {
        funds -= bet
            //reset status to emtpy
        displayStatus.innerHTML = ""
        slotReels()       
        showBalance()
        setTimeout(() => {matchCheck(bet)},700)
    }
}
    //spin the reels
const slotReels = () => {
        //hide the images in the reels
    imageOne.style.visibility = "hidden"
    imageTwo.style.visibility = "hidden"
    imageThree.style.visibility = "hidden"
        //after a delay 
    setTimeout(() => { // i wonder if setInterval would have been more in line with what you wanted
            //change visibilty
        imageOne.style.visibility = "visible"
            //remove reset and add css class to allow re-animation 
            //from Chris Coyler https://css-tricks.com/restart-css-animation/ 
        imageOne.classList.remove("scale-in-ver-bottom")
        void imageOne.offsetWidth; // inconsistent use of ;, interesting choice to use void here, is it necessary ? do we need to evaluate the kvp before setting it to undefined ? 
        imageOne.classList.add("scale-in-ver-bottom")
            //random image
        imageOne.src = images[Math.floor(Math.random() * images.length)]
    },100)
    setTimeout(() => {// repeated code can be refactored into functions with parameters to handle to variability / increase use cases
        imageTwo.style.visibility = "visible"
        imageTwo.classList.remove("scale-in-ver-bottom")
        void imageOne.offsetWidth;
        imageTwo.classList.add("scale-in-ver-bottom")
        imageTwo.src = images[Math.floor(Math.random() * images.length)]
    },200)
    setTimeout(() => {
        imageThree.style.visibility = "visible"
        imageThree.classList.remove("scale-in-ver-bottom")
        void imageOne.offsetWidth;
        imageThree.classList.add("scale-in-ver-bottom")
        imageThree.src = images[Math.floor(Math.random() * images.length)]
    },300)
}
    //return values vary based on what images matched
const matchCheck = (bet) => {
    if (imageOne.src.includes("turtle") && imageTwo.src.includes("turtle") && imageThree.src.includes("turtle")){// def refactor this, interesting use of includes instead of  a === b && a === c ( therefore a == c via chain rule)
        funds = funds + (bet * 2)
        displayStatus.innerHTML = `You Won ${bet*2}`
    } else if (imageOne.src.includes("coin") && imageTwo.src.includes("coin") && imageThree.src.includes("coin")){
        funds = funds + (bet * 2)
        displayStatus.innerHTML = `You Won ${bet*2}`
    } else if (imageOne.src.includes("mushroom") && imageTwo.src.includes("mushroom") && imageThree.src.includes("mushroom")){
        funds = funds + (bet * 5)
        displayStatus.innerHTML = `You Won ${bet*5}`
    } else if (imageOne.src.includes("mario") && imageTwo.src.includes("mario") && imageThree.src.includes("mario")){
        funds = funds + (bet * 10)
        displayStatus.innerHTML = `You Won ${bet*10}`
    } else if (imageOne.src.includes("star") && imageTwo.src.includes("star") && imageThree.src.includes("star")){
        funds = funds + (bet * 20)
        displayStatus.innerHTML = `You Won ${bet*20}`
    } else {
        displayStatus.innerHTML = `You Lost ${bet}`
    }
        //update funds
    showBalance()
}
    //show balance
const showBalance = () => {
    balance.innerHTML = `Balance: ${funds}`
}