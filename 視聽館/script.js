function getPos(e){
    x=e.clientX;
    y=e.clientY;
    $('.enlarge').css({'top': 900-y, 'left': 400-x});
}