
function addishOrEvenish(sayi){
    var sayi1=sayi.toString().split('');
    let sum=0
    for (let i = 0; i < sayi1.length; i++) {
        sum+=Number(sayi1[i]);
    }

    if(sum%2 === 0) {
        console.log("Even")
    } else if(sum%2 === 1) {
        console.log("Odd.")
    } else {
        console.log("Err")
    }
}

addishOrEvenish(476)