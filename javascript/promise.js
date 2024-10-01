

let data=new Promise((res,rej)=>{

   setTimeout(()=>{
      rej("rejectted mamu")
   },300)
});
data.catch((item)=>{
    console.log(item)
})
