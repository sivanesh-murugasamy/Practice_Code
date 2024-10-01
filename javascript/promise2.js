

let promise=new Promise((res,rej)=>{
    var mark=27;
    if(mark>20)
    {
        res("Accepted");
    }
    else{
        rej("Not Eligible");
    }
})
.then((msg)=>{
   console.log("Your application is "+msg);
})
.catch((msg)=>{
    console.log("Your application is "+msg);
})