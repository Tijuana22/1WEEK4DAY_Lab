function minusOne(num){
    return num - 1;
}
console.log(minusOne(10));


function makeSentence(){
    const x = 'I';
    const y = 'want';
    const z = 'Chimichangas';

    return 'Oh boy, do  '+ x +' '+ y +' '+ z +' or what?';
}
console.log(makeSentence());


function getLastElement(arr){
    return arr[arr.length-1]

}

    

console.log(getLastElement([1,2,3,4,5]));
console.log(getLastElement (['a','b','c']));
console.log(getLastElement([1, 2, 3], [4,5,6]));