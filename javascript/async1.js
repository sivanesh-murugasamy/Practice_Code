
var show=async()=>
{
   var promise=new Promise((res,rej)=>
  {
    var x=27;
    if(x<=50)
    {
      res("Accepted");
    }else{
      rej("Not Accepted");
    }
  })
  try{
    var result=await promise
    console.log(result);
  }catch(error)
  {
    console.log(error)
  }
}

show();