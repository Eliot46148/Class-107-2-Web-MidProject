function getPos(e){
    x=e.clientX;
    y=e.clientY;
    $('.enlarge').css({'top': 700-y, 'left': 300-x});
}