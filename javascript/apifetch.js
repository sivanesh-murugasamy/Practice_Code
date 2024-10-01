

async function fetchUserData()
{
    try{
        var user=fetch('https://randomuser.me/api/')
        const data=(await user).json();
        var UserData=await data
        console.log(UserData)
    }
    catch(error)
    {
        console.log("Error fetching data"+error)
    }
}

fetchUserData();