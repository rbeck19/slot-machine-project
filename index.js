    // buttons
const betx10 = document.querySelector("#betx10")
const betx50 = document.querySelector("#betx50")
const betx100 = document.querySelector("#betx100")
const addFunds = document.querySelector("#funds")
    // displays
const balance = document.querySelector(".credits")
const displayStatus = document.querySelector(".status")
    // images for reels
let imageOne = document.querySelector("#image-one")
let imageTwo = document.querySelector("#image-two")
let imageThree = document.querySelector("#image-three")

let funds = 0
    //array of images
const images = [
    "/slot-machine-project/slotPic/turtle-shell.png",
    "/slot-machine-project/slotPic/coin.png",
    "/slot-machine-project/slotPic/mushroom.png",
    "/slot-machine-project/slotPic/mario.png",
    "/slot-machine-project/slotPic/star.png"
]

    //spin the reels
const slotReels = () => {
        //resets css class to allow for re-animation
        //from Chris Coyler   https://css-tricks.com/restart-css-animation/
      //imageOne animation reset
    imageOne.classList.remove("scale-in-ver-bottom")
    void imageOne.offsetWidth;
    imageOne.classList.add("scale-in-ver-bottom")
      //imageTwo animation reset
    imageTwo.classList.remove("scale-in-ver-bottom")
    void imageOne.offsetWidth;
    imageTwo.classList.add("scale-in-ver-bottom")
      //imageThree animation reset
    imageThree.classList.remove("scale-in-ver-bottom")
    void imageOne.offsetWidth;
    imageThree.classList.add("scale-in-ver-bottom")
    //random image src from array 
    imageOne.src = images[Math.floor(Math.random() * images.length)]
    imageTwo.src = images[Math.floor(Math.random() * images.length)]
    imageThree.src = images[Math.floor(Math.random() * images.length)]
}

    //show balance
const showBalance = () => {
    balance.innerHTML = `Balance: ${funds}`
}

    //wager and spin if there are funds
const wager = (bet) => {
    if ((funds - bet) < 0 ){
        displayStatus.innerHTML = `You Dont Have Enough Funds`
    } else {
        funds -= bet
        slotReels()
        matches(bet)
        showBalance()
    }
}

    //return values varry based on what images matched
const matches = (bet) => {
    if (imageOne.src.includes("turtle") && imageTwo.src.includes("turtle") && imageThree.src.includes("turtle")){
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
}

    //add funds button 
addFunds.addEventListener("click", () => {
    funds += 100
    showBalance()
    console.log(funds)
})

    //bet button events
betx10.addEventListener("click", () =>{
     wager(10)
})
betx50.addEventListener("click", () => {
    wager(50)
})
betx100.addEventListener("click", () => {
    wager(100)
})

