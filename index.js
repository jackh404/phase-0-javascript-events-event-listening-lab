function addingEventListener() {
    const input = document.getElementById("button");
    function clickAlert(){
        alert("Yahaha!");
    }
    input.addEventListener('click',clickAlert);
}
addingEventListener();
