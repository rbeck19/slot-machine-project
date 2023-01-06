# Mario Slot Machine 

## Wireframe:

![Slot Machine Wireframe](/slot-machine-project/slotPic/wireframe.png)

## User Story:

### MVP:
- As a user, I want to see three images.
    ```
    reel1 = imageArray[]
    reel2 = imageArray[]
    reel3 = imageArray[]
    ```
- As a user, I want to press a button to change the images.
    ```
    reelButton.addEventListener("click" (event)=>{
        reel1 = imageArray[random]
        reel2 = imageArray[random]
        reel3 = imageArray[random]
    })
    ```
- As a user, I want to see how many credits I have.
    ```
    creditTotal = credits
    ```
- As a user, I want to win if the three images match.
    ```
    match() = 
        if(reel1 == reel2 && reel2 == reel3){
            win
        } else {lose}
    ```
- As a user, I want to have my credits increase when I win.
    ```
    creditTotal += winCredit
    ```
- As a user, I want to have my credits decrease when I use them.
    ```
    creditTotal -= loseCredit
    ```
- As a user, I want to be able to wager more.
    ```
    button-single-bet.addEventListener ("click" (event)=>{ bet = 1}
    button-5-bet.addEventListener ("click" (event)=>{bet = 5}
    button-10-bet.addEventListener ("click" (event)=>{bet = 10}
    ```
- As a user, I want to be notifed that I won or lost.
    ```
    status() = 
        if (match == "win"){
            return "You Win"
        }   else { 
            return "You Lose"
        }
    ```

### Version 2:
- As a user, I want some images to have a higher win chance then others.
- As a user, I want to have image combos to have different value returns.
- As a user, I want to be able to add more credits.


### Version 3:
- As a user, I want to be have an account.
- As a user, I want to be able to sign in and out of account.
- As a user, I want to have my account keep track of my total credits.

