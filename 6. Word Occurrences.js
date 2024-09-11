function wordOccurrences(arr) {
    let objWord = {};
let count = 0
    for(let word of arr){
        if(!objWord.hasOwnProperty(word)){
            count =1
            objWord[word]=count
        }else{
            count +=1
            objWord[word]=count
        }
    }
    let sorted = Object.entries(objWord).sort((a,b)=>b[1]-a[1]);
for(let i=0; i<sorted.length; i++){
    let [word, count]= sorted[i];

    console.log(`${word} -> ${count} times`);
    
}
    console.log();
}
wordOccurrences(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",
    
    "finally", "the", "third", "sentence"]);

