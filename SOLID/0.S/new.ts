import {MusicPlayer} from "./MusicPlayer";
import {Engine} from "./Engine";

let musicPlayer = new MusicPlayer(0,50);
let engine = new Engine();

let musicToggleElement = document.querySelector('#music-toggle') as HTMLButtonElement;
let musicSliderElement = document.querySelector('#music-slider') as HTMLInputElement;
let engineToggleElement = document.querySelector('#engine-toggle') as HTMLButtonElement;
// let addFuelForm = document.querySelector('#add-fuel-form');
// let addFuelInput = document.querySelector('#add-fuel-input');
// let fuelLevelElement = document.querySelector('#fuel-level');
// let milesElement = document.querySelector('#miles-value');
let audioElement = document.querySelector('#car-music') as HTMLAudioElement;
// let car = new Car(100);

musicToggleElement.addEventListener('click', function () {
    if (musicPlayer.musicLevel === 0) {
        musicPlayer.turnMusicOn();
        musicSliderElement.value = musicPlayer.musicLevel.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    musicPlayer.turnMusicOff();
});

musicSliderElement.addEventListener('input', function (event) {
    let target = (event.target) as HTMLFormElement;
    musicPlayer.musicLevel = target.value;
    audioElement.volume = musicPlayer.musicLevel / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = musicPlayer.musicLevel ? 'Turn music off' : 'Turn music on';
});

engineToggleElement.addEventListener('click', function () {
    if (engine.status) {
        engine.turnEngineOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    engine.turnEngineOn();
});

setInterval(function () {

    if (musicPlayer.musicLevel === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);

