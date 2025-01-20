// This code was written by Andreas Mohr. 
// Last change 20.01.2025.

import { allAudioFiles } from './audioFileManager.js';
import { combineMultipleWavFiles } from './waveFileCombiner.js'

document.addEventListener('DOMContentLoaded', function () {
    /*-------------------------------------------------------------------------------------------
                Variables
    --------------------------------------------------------------------------------------------*/

    const allLetters = allAudioFiles;
    let audioFiles = [];
    let currentAudioIndex = 0;
    let audioElement = new Audio();
    const playPauseButton = document.getElementById("playPauseButton");
    const backButton = document.getElementById("backButton");
    const currentLetter = document.getElementById("currentLetter");
    const content = document.getElementById("content");
    const commitButton = document.getElementById("commitButton");
    const downloadButton = document.getElementById("downloadButton");
    let text = document.getElementById("text");

    let inputText = "";
    let isPlaying = false;

    /*-------------------------------------------------------------------------------------------
                    
    --------------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------
                    Functions
    --------------------------------------------------------------------------------------------*/

    function updateLetter(letter, morseCode) {
        if (letter === ' ') {
            currentLetter.textContent = '\'_\'';
        }
        else {
            currentLetter.textContent = letter + " " + morseCode;
        }

    };

    // creates the array of audio files vom the user text
    function fillAudioFileList(inputText) {
        audioFiles = [];
        for (let i = 0; i < inputText.length; i++) {
            for (let j = 0; j < allLetters.length; j++) {
                let allLettersChar = allLetters[j][0];
                let inputTextChar = inputText[i].toUpperCase();
                if (allLettersChar === inputTextChar) {
                    audioFiles.push(allLetters[j]);
                    break;
                }
            }
        }
    };

    function playCurrentAudio() {
        if (currentAudioIndex < audioFiles.length) {
            updateLetter(audioFiles[currentAudioIndex][0], audioFiles[currentAudioIndex][2]);
            audioElement.src = audioFiles[currentAudioIndex][1];
            audioElement.play();
            isPlaying = true;
        }
    };
    /*-------------------------------------------------------------------------------------------
                    
    --------------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------
                    Eventlistener
    --------------------------------------------------------------------------------------------*/

    audioElement.addEventListener("ended", function () {
        currentAudioIndex++;
        if (currentAudioIndex < audioFiles.length) {
            playCurrentAudio();
        } else {
            isPlaying = false;
        }
    });


    commitButton.addEventListener("click", function () {

        currentAudioIndex = 0;
        inputText = content.value;
        fillAudioFileList(inputText);
        updateLetter(" ", " ");
    });


    playPauseButton.addEventListener("click", function () {
        if (!isPlaying) {
            if (currentAudioIndex >= audioFiles.length) {
                currentAudioIndex = 0;
            }
            playCurrentAudio();
        } else {
            audioElement.pause();
            isPlaying = false;
        }
    });


    backButton.addEventListener("click", function () {
        audioElement.pause();
        currentAudioIndex = 0;
        isPlaying = false;
        updateLetter("", "");
    });

    downloadButton.addEventListener("click", () => {


        let urls = [];
        for (const audioIndex of audioFiles) {
            urls.push(audioIndex[1]);
        }
        combineMultipleWavFiles(urls);

    });


    const burgerMenu = document.querySelector(".burger-menu");
    const mobileNav = document.querySelector(".mobile-nav");

    burgerMenu.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
    });

});