const roundNumber = (num, precision = 2) => {
    return Number(num.toFixed
        (precision));
}

console.log (roundNumber(19.568491, 2));
