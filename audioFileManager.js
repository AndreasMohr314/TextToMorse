// This code was written by Andreas Mohr. 
// Last change 20.01.2025.

/*-------------------------------------------------------------------------------------------
                File Managment
--------------------------------------------------------------------------------------------*/

// Letters
const A = ['A', "./audio/A.wav", ". _"];
const B = ['B', "./audio/B.wav", "_ . . ."];
const C = ['C', "./audio/C.wav", "_ . _ ."];
const D = ['D', "./audio/D.wav", "_ . ."];
const E = ['E', "./audio/E.wav", "."];
const F = ['F', "./audio/F.wav", ". . _ ."];
const G = ['G', "./audio/G.wav", "_ _ ."];
const H = ['H', "./audio/H.wav", ". . . ."];
const I = ['I', "./audio/I.wav", ". ."];
const J = ['J', "./audio/J.wav", ". _ _ _"];
const K = ['K', "./audio/K.wav", "_ . _"];
const L = ['L', "./audio/L.wav", ". _ . ."];
const M = ['M', "./audio/M.wav", "_ _"];
const N = ['N', "./audio/N.wav", "_ ."];
const O = ['O', "./audio/O.wav", "_ _ _"];
const P = ['P', "./audio/P.wav", ". _ _ ."];
const Q = ['Q', "./audio/Q.wav", "_ _ . _"];
const R = ['R', "./audio/R.wav", ". _ ."];
const S = ['S', "./audio/S.wav", ". . ."];
const T = ['T', "./audio/T.wav", "_"];
const U = ['U', "./audio/U.wav", ". . _"];
const V = ['V', "./audio/V.wav", ". . . _"];
const W = ['W', "./audio/W.wav", ". _ _"];
const X = ['X', "./audio/X.wav", "_ . . _"];
const Y = ['Y', "./audio/Y.wav", "_ . _ _"];
const Z = ['Z', "./audio/Z.wav", "_ _ . ."];

// Special Letter
const Å = ['Å', "./audio/Å.wav", ". _ _ . _"];
const Ä = ['Ä', "./audio/Ä.wav", ". _ . _"];
const È = ['È', "./audio/È.wav", ". _ . . _"];
const É = ['É', "./audio/É.wav", ". . _ . ."];
const Ö = ['Ö', "./audio/Ö.wav", "_ _ _ ."];
const Ü = ['Ü', "./audio/Ü.wav", ". . _ _"];
const SZ = ['ß', "./audio/SZ.wav", ". . . _ _ . ."];
const Ñ = ['Ñ', "./audio/Ñ.wav", "._.._"];

// Numbers
const numberOne = ['1', "./audio/1.wav", ". _ _ _ _"];
const numberTwo = ['2', "./audio/2.wav", ". . _ _ _"];
const numberThree = ['3', "./audio/3.wav", ". . . _ _"];
const numberFour = ['4', "./audio/4.wav", ". . . . _"];
const numberFive = ['5', "./audio/5.wav", ". . . . ."];
const numberSix = ['6', "./audio/6.wav", "_ . . . ."];
const numberSeven = ['7', "./audio/7.wav", "_ _ . . ."];
const numberEight = ['8', "./audio/8.wav", "_ _ _ . ."];
const numberNine = ['9', "./audio/9.wav", "_ _ _ _ ."];
const numberZero = ['0', "./audio/0.wav", "_ _ _ _ _"];

// Symbols
const space = [' ', "./audio/space.wav", " "];
const point = ['.', "./audio/point.wav", ". _ . _ . _"];
const comma = [',', "./audio/comma.wav", "_ _ . . _ _"];
const colon = [':', "./audio/colon.wav", "_ _ _ . . ."];
const semicolon = [';', "./audio/semicolon.wav", "_ . _ . _ ."];
const questionMark = ['?', "./audio/questionMark.wav", ". . _ _ . ."];
const exclamationMark = ['!', "./audio/exclamationMark.wav", "_ ._ . _ _"];
const hyphen = ['-', "./audio/hyphen.wav", "_ . . . . _"];
const underscore = ['_', "./audio/underscore.wav", ". . _ _ . _"];
const bracketOn = ['(', "./audio/bracketOn.wav", "_ . _ _ ."];
const bracketOff = [')', "./audio/bracketOff.wav", "_ . _ _ . _"];
const quotationMarks = ['\'', "./audio/quotationMarks.wav", ". _ _ _ _ ."];
const equalSign = ['=', "./audio/equalSign.wav", "_ . . . _"];
const plus = ['+', "./audio/plus.wav", ". _ . _ ."];
const diagonal = ['/', "./audio/diagonal.wav", "_ . . _ ."];
const addSymbol = ['@', "./audio/addSymbol.wav", ". _ _ . _ ."];
const doppelQuotationMarks = ['"', "./audio/doppelQuotationMarks.wav", ". _ . . _ ."];

export const allAudioFiles = [
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
    Å, Ä, È, É, Ö, Ü, SZ, Ñ,
    numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberZero,
    space, point, comma, colon, semicolon, questionMark, exclamationMark, hyphen, underscore, bracketOn, bracketOff, quotationMarks,
    equalSign, plus, diagonal, addSymbol, doppelQuotationMarks
];
/*-------------------------------------------------------------------------------------------
                
--------------------------------------------------------------------------------------------*/