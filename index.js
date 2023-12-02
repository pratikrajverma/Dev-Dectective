const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

const wrapper = document.querySelector(".wrapper");

light.addEventListener("click",()=>{
    wrapper.classList.remove("darkness");
    light.classList.add("hidden");
    dark.classList.add("active");
})

dark.addEventListener("click",()=>{
    wrapper.classList.add("darkness");
    light.classList.remove("hidden");
    dark.classList.remove("active");
    
})


// search form input
const searchform = document.querySelector(".searchform");
const usernameInput = document.querySelector("[data-username]");

searchform.addEventListener('submit',(e)=>{
    e.preventDefault();
    var username = usernameInput.value;
    if(username==="") return;
    else{
            fetchGitdata(username);
    }
})

async function fetchGitdata(username)
{
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        renderGitdata(data);
    }
    catch(err)
    {
        // alert('somthing went wrong');
    }
}





function renderGitdata(data)
{
    const dp = document.querySelector("[data-dp]");
    const displayname = document.querySelector("[data-displayname]");
    const userlink = document.querySelector("[data-userlink]");
    const biodata = document.querySelector("[bio-data]");
    const joineddate = document.querySelector("[joined-date]");
    const repo = document.querySelector("[data-repo]");
    const follower = document.querySelector("[data-follower]");
    const following = document.querySelector("[data-following]");
    const location = document.querySelector("data-location");
    const twiter = document.querySelector("[data-twiter]");
    const home = document.querySelector("[data-home]");

    dp.src = data?.avatar_url;
    displayname.innerText = data?.name;
    userlink.href=`https://github.com/${data?.login}`
    userlink.innerText = `@${data?.login}`;
    biodata.innerText = data?.bio;
    joineddate.innerText = data?.created_at;
    repo.innerText = data?.public_repos;
    follower.innerText = data?.followers;
    following.innerText = data?.following;
    location.innerText = data?.location;
    twiter.innerText = data?.twitter_username;
    home.innerText = data?.organizations_url;



}


defaultuser("pratikrajverma");
async function defaultuser(username)
{
    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data);
        renderGitdata(data);
    }
    catch(err)
    {
        // alert('somthing went wrong');
    }
}

