// find returns the first item that satisfies the condition

const scores = [10,20,30,40,50];

const firsthHighscore = scores.find((score)=>{

  return score > 30
})
console.log(firsthHighscore)