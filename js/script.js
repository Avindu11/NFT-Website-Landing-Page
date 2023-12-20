function navIconToggle(){
    let togglerIcon = document.getElementById("nav-toggler-icon");

    if(togglerIcon.classList.contains("nav-toggler-open")){
        togglerIcon.classList.remove("nav-toggler-open");
        togglerIcon.classList.add("nav-toggler-close");
    }else{
        togglerIcon.classList.remove("nav-toggler-close")
        togglerIcon.classList.add("nav-toggler-open");
    };

}