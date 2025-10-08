//api https://superheroapi.com/api/a7e92e8e8490ff2c7133b3b3a9efdb79

document.querySelector('button').addEventListener('click', () => {
    getAdvice()
    happyPicture()
})
// // //i wanted a random picture to show up with the advice, this code was from the slot machine project
 function getRandomImages() { 
     let randomNum = Math.floor(Math.random() * 5) + 1;
     let imagePath = '';

     if (randomNum === 1){
         imagePath = 'img/angelNumber1.png'
     } else if (randomNum === 2){
        imagePath = 'img/angelNumber2.png'
    } else if (randomNum === 3){
        imagePath = 'img/angelNumber3.png'
    }else {
        imagePath = 'img/angelNumber4.png'
    }
    return imagePath;
}

function happyPicture() {
    let pictureFrame = getRandomImages();

    const imgElement = document.getElementById('pictureFrame').src = pictureFrame

    imgElement.classList.add('show-border')
}

function getAdvice(){
    const input = document.querySelector('#enterNumber').value
    console.log(input)

    const results = document.querySelector('#results')

    results.innnerText = ''//clears so new inout can be shown whether the input was invalid or not, isn't working though

    const url = `https://api.adviceslip.com/advice/${input}`

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if (data.message) { //some numbers dont work and i can't find the full list of numbers
            console.log(`Your number wasn't so lucky after all.. Try Another!`)
            results.innerText = `Your number wasn't so lucky after all.. Refresh the page and try another!`
            return
        }

        document.querySelector('h4').innerText = data.slip.advice
        
    })
    .catch(err => {
            console.log(`error ${err}`)
        })

}
