let count = 0;
let num = 13;
for(i=0; i >= num; i++){
    if(num%i==0){
        count++
    }
}
if(count==2){
    console.log("prime")
}
else{
    console.log("Not prime")
}