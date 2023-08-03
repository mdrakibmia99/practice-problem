const fruits=[
    {mango:1,apple:2,banana:3,jackfruit:4},
    {banana:5,orange:6,lemon:7},
    {mangoes:8,apples:9,bananas:10,jackfruit:11},
]
// create a empty object for push unique value 
const newFruitObject={}
let total=0;
fruits.forEach(item=>{
   // item = every object show 
  for(let fruit in item){
   //  fruit = show every object key 
       total += item[fruit]
     if(newFruitObject[fruit]){
        newFruitObject[fruit] += item[fruit]
     }else{
        newFruitObject[fruit] = item[fruit]
     }
    
  }
})
 console.log(newFruitObject)
 console.log(total)
 
    



