const age1 = 16
if (age1 >=18){
    console.log ('Eligible to vote')
}  else {
    console.log('Not eligible to vote');
}


const canVote= (age)=> {
    return age >= 18 
}

let age = 18

if (canVote(age)){
    console.log ('Eligible to vote')}

else{
    console.log('Not eligible to vote')
}


canVote(10)
console.log(canVote(17))