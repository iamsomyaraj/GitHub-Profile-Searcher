async function search(){const user=document.querySelector("#user");
    const username=user.value;
    const pfp=document.querySelector(".pfp");
    const bio=document.querySelector("#bio");
    if(username===""){
        alert("Please type a username!");
        return;
    }
    const url=`https://api.github.com/users/${username}`
    try{
        const response =await fetch(url);
        const data= await response.json();
        if(data.message ==="Not Found"){
            alert("User does not exist");
            return;
        }
        bio.innerText=`${data.bio}`;
        pfp.style.backgroundImage = `url('${data.avatar_url}')`;
        console.log(data);
    }
    catch(error){
        alert("Error: ",error);
    }
    
}