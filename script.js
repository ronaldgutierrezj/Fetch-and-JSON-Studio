// TODO: add code here
window.addEventListener("load" , function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then( function(json){
            // json = json.sort((a,b) => {
            //     if(a.hoursInSpace > b.hoursInSpace){
            //         return -1;
            //     }
            // })
            const div = document.getElementById("container");
            div.innerHTML = ``
            for (let i = 0; i < json.length; i++){
                div.innerHTML = div.innerHTML + `<div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName}  ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class ="status">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img src=${json[i].picture} class="avatar">
                </div>
                `
                
                
             
            }
            const status = document.getElementsByClassName("status");
            console.log(status)
            for(let i = 0 ; i < status.length; i++){
                if(status[i].innerHTML == "Active: true"){
                    status[i].style.color = "green"
                }
            }
        })
    })
    
})
