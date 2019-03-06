let team_showing = [];
let type = null;
const sysact = null;
function team_filter(position) {
    if(position===type){position="RESET";type=null;}
    let user_array = document.getElementsByClassName("user_card");
    let arraylength = user_array.length;
    for(let i = 0; i < arraylength; i++){
        if(position!=="RESET"||type===position){
            type=position;
            let user = user_array[i].getElementsByClassName("position");
            for(let i1 = 0; i1 < user.length; i1++){
                if(user[i1].innerHTML.includes(position)){
                    if(user_array[i].classList.contains('fade')){user_array[i].classList.toggle('fade');}
                }else {
                    if(!(team_showing.includes(user_array[i].getElementsByClassName("name")[0]))){
                        if(!(user_array[i].classList.contains('fade'))){user_array[i].classList.toggle('fade');}
                    }
                }
            }
        }else{if(user_array[i].classList.contains('fade')){user_array[i].classList.toggle('fade');}}
    }
    team_showing=[];
}