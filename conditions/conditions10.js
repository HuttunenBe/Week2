function findFox(hasFox, foxName){
    if (hasFox === true && foxName === 'Fiona'){
        console.log ("Fiona the fox is here!");
    } else {
        console.log("No foxes found.");
    }
    }

findFox(true, 'Fiona')
findFox (true, 'Amelia')


function findFox(hasFox, foxName){
    if (hasFox === true && foxName === 'Fiona'){
        return ("Fiona the fox is here!");
    } else {
        return("No foxes found.");
    }
    }

console.log(findFox(true, 'Fiona'))
console.log(findFox (true, 'Amelia'))