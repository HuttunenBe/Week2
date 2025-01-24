
const getGrade = (score) => {
    if (score >= 90){ 
        return 'Grade A!';
     } else if (score >= 80 && score <= 89){
        return 'Grade B';
     } else {
        return 'Grade C';
    }
};
     
console.log (getGrade (70));

const getGrade2 = (score) => {
    switch (score){
        case score >= 90:
        return 'Grade A'
        case score >= 80 && score <= 89:
        return 'Grade B'
    default: 
    return 'Grade C'

    }
}

console.log (getGrade2 (67));
