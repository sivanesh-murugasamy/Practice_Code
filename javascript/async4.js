var show=async()=>
    {
       var promise=new Promise((res,rej)=>
      {
        setTimeout(()=>{
              var speed=60;
              switch(speed)
              {
                case speed>60:
                    res("High speed")
                    break;
                case speed<60:
                    res("Normal Speed");
                    break;
                
                case speed<50:
                    res("Low Speed");
                    break;
                default:
                    rej("Nothing");
                    break;
              }
        },400)
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