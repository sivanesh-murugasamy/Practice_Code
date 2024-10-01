
var show=async()=>
    {
       var promise=new Promise((res,rej)=>
      {
        setTimeout(()=>{
              var a=5;
              if(a>=10)
              {
                res("Accepted");
              }
              else{
                rej(" Not Accepted");
              }
        },4000)
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