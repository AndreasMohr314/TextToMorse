// This code was written by Andreas Mohr. 
// Last change 20.01.2025.

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

export const allAudioFiles = [
    A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,
    Å, Ä, È, É, Ö, Ü, SZ, Ñ,
    numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, numberZero,
    space, point, comma, colon, semicolon, questionMark, exclamationMark, hyphen, underscore, bracketOn, bracketOff, quotationMarks,
    equalSign, plus, diagonal, addSymbol, doppelQuotationMarks
];
/*-------------------------------------------------------------------------------------------
                
--------------------------------------------------------------------------------------------*/