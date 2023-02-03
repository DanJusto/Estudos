export default function({
    btnForest,
    btnRain,
    btnCafeteria,
    btnFireplace
}) {
    const forest = new Audio("./assets/floresta.wav")
    const rain = new Audio("./assets/chuva.wav")
    const cafeteria = new Audio("./assets/cafeteria.wav")
    const fireplace = new Audio("./assets/lareira.wav")

    forest.loop = true
    rain.loop = true
    cafeteria.loop = true
    fireplace.loop = true

    function justOneSoundPlaying(typeofsound) {
        switch(typeofsound) {
            case 'forest':
                btnForest.classList.add('selected')
                btnRain.classList.remove('selected')
                btnCafeteria.classList.remove('selected')
                btnFireplace.classList.remove('selected')
                forest.play()
                rain.pause()
                cafeteria.pause()
                fireplace.pause()
                break
            case 'rain':
                btnRain.classList.add('selected')
                btnForest.classList.remove('selected')
                btnCafeteria.classList.remove('selected')
                btnFireplace.classList.remove('selected')
                rain.play()
                forest.pause()
                cafeteria.pause()
                fireplace.pause()
                break
            case 'cafeteria':
                btnCafeteria.classList.add('selected')
                btnRain.classList.remove('selected')
                btnForest.classList.remove('selected')
                btnFireplace.classList.remove('selected')
                cafeteria.play()
                rain.pause()
                forest.pause()
                fireplace.pause()
                break
            case 'fireplace':
                btnFireplace.classList.add('selected')
                btnRain.classList.remove('selected')
                btnCafeteria.classList.remove('selected')
                btnForest.classList.remove('selected')
                fireplace.play()
                rain.pause()
                cafeteria.pause()
                forest.pause()
                break
        }
    }

    function continueIfSelected() {
        if(btnForest.classList.contains('selected')) {
            forest.play()
        } else if(btnRain.classList.contains('selected')) {
            rain.play()
        } else if(btnCafeteria.classList.contains('selected')) {
            cafeteria.play()
        } else if(btnFireplace.classList.contains('selected')) {
            fireplace.play()
        }
    }

    function unselected(typeofsound) {
        switch(typeofsound) {
            case 'forest':
                btnForest.classList.remove('selected')
                forest.pause()
                break
            case 'rain':
                btnRain.classList.remove('selected')
                rain.pause()
                break
            case 'cafeteria':
                btnCafeteria.classList.remove('selected')
                cafeteria.pause()
                break
            case 'fireplace':
                btnFireplace.classList.remove('selected')
                fireplace.pause()
                break
        }
    }

    function pauseSound() {
        forest.pause()
        rain.pause()
        cafeteria.pause()
        fireplace.pause()
    }

    return {forest, rain, cafeteria, fireplace, pauseSound, unselected, continueIfSelected, justOneSoundPlaying}
}