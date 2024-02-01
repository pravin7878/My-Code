### 1. Your task is to explain why the console.log shows the older value of count

ans- when we change state value that time component will Rerender but still not updeting count value becouse it is not applid rigth now it is do scheduled rigth now so we seeing older velue in console.


### 2.Your task is to explain why count value is not updated to 3 as expected
ans:- count value not updeted 3 becouse when will Run component code 1st time that time count value will be initialize 0 so this will setcount value(0+1) every time so Ount put not came 3 Output only one.

## if we want to achive expexted Output.
so we can initialize a call back functon inside the setcount.and we neet to a parameter for this function and we need to +1 in this parameter inside the function body.

like `this :-
```
const [count,setcount] = useState(0)
setcount((prev)=>(prev+1))
setcount((prev)=>(prev+1))
setcount((prev)=>(prev+1))
```

So dafinitely my Out put will be came 3.
