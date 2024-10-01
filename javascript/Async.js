
let msg=async()=>
{
    return await "Something that is not true";
    console.log("someone");
}
console.log("this is before the function call");
msg();
console.log("this is after the function call");
// msg().then((result)=>{
//     console.log(result)
// })