/*-------------------------------------------------------------------------------------------
                File Managment
--------------------------------------------------------------------------------------------*/
// Letters
const A = ['A', "./A.wav", ". _"];
const B = ['B', "./B.wav", "_ . . ."];
const C = ['C', "./C.wav", "_ . _ ."];
const D = ['D', "./D.wav", "_ . ."];
const E = ['E', "./E.wav", "."];
const F = ['F', "./F.wav", ". . _ ."];
const G = ['G', "./G.wav", "_ _ ."];
const H = ['H', "./H.wav", ". . . ."];
const I = ['I', "./I.wav", ". ."];
const J = ['J', "./J.wav", ". _ _ _"];
const K = ['K', "./K.wav", "_ . _"];
const L = ['L', "./L.wav", ". _ . ."];
const M = ['M', "./M.wav", "_ _"];
const N = ['N', "./N.wav", "_ ."];
const O = ['O', "./O.wav", "_ _ _"];
const P = ['P', "./P.wav", ". _ _ ."];
const Q = ['Q', "./Q.wav", "_ _ . _"];
const R = ['R', "./R.wav", ". _ ."];
const S = ['S', "./S.wav", ". . ."];
const T = ['T', "./T.wav", "_"];
const U = ['U', "./U.wav", ". . _"];
const V = ['V', "./V.wav", ". . . _"];
const W = ['W', "./W.wav", ". _ _"];
const X = ['X', "./X.wav", "_ . . _"];
const Y = ['Y', "./Y.wav", "_ . _ _"];
const Z = ['Z', "./Z.wav", "_ _ . ."];

// Special Letter
const Å = ['Å', "./Å.wav", ". _ _ . _"];
const Ä = ['Ä', "./Ä.wav", ". _ . _"];
const È = ['È', "./È.wav", ". _ . . _"];
const É = ['É', "./É.wav", ". . _ . ."];
const Ö = ['Ö', "./Ö.wav", "_ _ _ ."];
const Ü = ['Ü', "./Ü.wav", ". . _ _"];
const SZ = ['ß', "./SZ.wav", ". . . _ _ . ."];
const Ñ = ['Ñ', "./Ñ.wav", "._.._"];

// Numbers
const numberOne = ['1', "./1.wav", ". _ _ _ _"];
const numberTwo = ['2', "./2.wav", ". . _ _ _"];
const numberThree = ['3', "./3.wav", ". . . _ _"];
const numberFour = ['4', "./4.wav", ". . . . _"];
const numberFive = ['5', "./5.wav", ". . . . ."];
const numberSix = ['6', "./6.wav", "_ . . . ."];
const numberSeven = ['7', "./7.wav", "_ _ . . ."];
const numberEight = ['8', "./8.wav", "_ _ _ . ."];
const numberNine = ['9', "./9.wav", "_ _ _ _ ."];
const numberZero = ['0', "./0.wav", "_ _ _ _ _"];

// Symbols
const space = [' ', "./space.wav", " "];
const point = ['.', "./point.wav", ". _ . _ . _"];
const comma = [',', "./comma.wav", "_ _ . . _ _"];
const colon = [':', "./colon.wav", "_ _ _ . . ."];
const semicolon = [';', "./semicolon.wav", "_ . _ . _ ."];
const questionMark = ['?', "./questionMark.wav", ". . _ _ . ."];
const exclamationMark = ['!', "./exclamationMark.wav", "_ ._ . _ _"];
const hyphen = ['-', "./hyphen.wav", "_ . . . . _"];
const underscore = ['_', "./underscore.wav", ". . _ _ . _"];
const bracketOn = ['(', "./bracketOn.wav", "_ . _ _ ."];
const bracketOff = [')', "./bracketOff.wav", "_ . _ _ . _"];
const quotationMarks = ['\'', "./quotationMarks.wav", ". _ _ _ _ ."];
const equalSign = ['=', "./equalSign.wav", "_ . . . _"];
const plus = ['+', "./plus.wav", ". _ . _ ."];
const diagonal = ['/', "./diagonal.wav", "_ . . _ ."];
const addSymbol = ['@', "./addSymbol.wav", ". _ _ . _ ."];
const doppelQuotationMarks = ['"', "./doppelQuotationMarks.wav", ". _ . . _ ."];
/*-------------------------------------------------------------------------------------------
                
--------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------
                Variables
--------------------------------------------------------------------------------------------*/

toggle = false;
document.addEventListener('DOMContentLoaded', function () {
    const allLetters = [
        A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
        Å, Ä, È, É, Ö, Ü, SZ, Ñ,
        numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberZero,
        space, point, comma, colon, semicolon, questionMark, exclamationMark, hyphen, underscore, bracketOn, bracketOff, quotationMarks,
        equalSign, plus, diagonal, addSymbol, doppelQuotationMarks
    ]
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


    /*-------------------------------------------------------------------------------------------
                    
    --------------------------------------------------------------------------------------------*/
    /*-------------------------------------------------------------------------------------------
                    Wave file combiner
    --------------------------------------------------------------------------------------------*/
    async function combineMultipleWavFiles(urls) {
        // The header size of a WAV file is 44 bytes
        const headerSize = 44;

        // Array to store the audio data
        let audioDataBuffers = [];

        // Total length of all audio data
        let combinedDataSize = 0;

        // Load the first audio file to use its header information
        const firstResponse = await fetch(urls[0]);
        const firstArrayBuffer = await firstResponse.arrayBuffer();

        // Store audio settings from the first file
        const firstDataView = new DataView(firstArrayBuffer);
        const sampleRate = firstDataView.getUint32(24, true);
        const byteRate = firstDataView.getUint32(28, true);
        const blockAlign = firstDataView.getUint16(32, true);
        const bitsPerSample = firstDataView.getUint16(34, true);
        const numChannels = firstDataView.getUint16(22, true);

        // Read and store the audio data
        for (const url of urls) {
            const response = await fetch(url);
            const arrayBuffer = await response.arrayBuffer();
            const audioData = new Uint8Array(arrayBuffer, headerSize);  // Extract the audio data, without header
            audioDataBuffers.push(audioData);
            combinedDataSize += audioData.length;
        }

        // Calculate the total file size, including the header
        const combinedFileSize = 36 + combinedDataSize;
        const combinedData = new Uint8Array(headerSize + combinedDataSize);

        // Write the header for the combined file
        combinedData.set([0x52, 0x49, 0x46, 0x46], 0); // Set "RIFF" in bytes 0-3.
        combinedData[4] = combinedFileSize & 0xFF;
        combinedData[5] = (combinedFileSize >> 8) & 0xFF;
        combinedData[6] = (combinedFileSize >> 16) & 0xFF;
        combinedData[7] = (combinedFileSize >> 24) & 0xFF;
        combinedData.set([0x57, 0x41, 0x56, 0x45], 8); // Set "WAVE" in bytes 8-11.

        // fmt-Chunk (sample rate, bit resolution)
        combinedData.set([0x66, 0x6d, 0x74, 0x20], 12); // "fmt "
        combinedData.set([0x10, 0x00, 0x00, 0x00], 16); // Subchunk1Size (16 for PCM)
        combinedData.set([0x01, 0x00], 20);             // AudioFormat (1 for PCM)
        combinedData[22] = numChannels & 0xFF;          // (Mono oder Stereo)
        combinedData[23] = (numChannels >> 8) & 0xFF;

        // Sample rate in bytes 24-27
        combinedData[24] = sampleRate & 0xFF;
        combinedData[25] = (sampleRate >> 8) & 0xFF;
        combinedData[26] = (sampleRate >> 16) & 0xFF;
        combinedData[27] = (sampleRate >> 24) & 0xFF;

        // Byte rate in bytes 28-31.
        combinedData[28] = byteRate & 0xFF;
        combinedData[29] = (byteRate >> 8) & 0xFF;
        combinedData[30] = (byteRate >> 16) & 0xFF;
        combinedData[31] = (byteRate >> 24) & 0xFF;

        // Block size in bytes 32-33
        combinedData[32] = blockAlign & 0xFF;
        combinedData[33] = (blockAlign >> 8) & 0xFF;

        // Bits per sample in bytes 34-35
        combinedData[34] = bitsPerSample & 0xFF;
        combinedData[35] = (bitsPerSample >> 8) & 0xFF;

        // Data-Chunk
        combinedData.set([0x64, 0x61, 0x74, 0x61], 36); // data

        // Length of audio data in bytes 40-43
        combinedData[40] = combinedDataSize & 0xFF;
        combinedData[41] = (combinedDataSize >> 8) & 0xFF;
        combinedData[42] = (combinedDataSize >> 16) & 0xFF;
        combinedData[43] = (combinedDataSize >> 24) & 0xFF;

        // Append the audio data sequentially
        let offset = headerSize;
        for (const audioData of audioDataBuffers) {
            combinedData.set(audioData, offset);
            offset += audioData.length;
        }

        // Create a blob
        const blob = new Blob([combinedData], { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);


        const audio = new Audio(url);
        downloadLinkPage(url);

    }

    function downloadLinkPage(url) {
        text.style.display = 'block'
        text.href = url;
        text.download = "combined_audio.wav";
        text.text = "Download Audio File";


    }
    /*-------------------------------------------------------------------------------------------
                    
    --------------------------------------------------------------------------------------------*/

});