setInterval(changeToRelativeAxis, 1000);

function changeToRelativeAxis() {
  var element = document.getElementById('box'),
      rect = element.getBoundingClientRect(),
      move = 50;
  
  var goRight = ( (rect.right+move) <= window.innerWidth) ? true : false;
  var goBottom = ( (rect.bottom+move) <= window.innerHeight ) ? true : false;
  
  if( goRight && goBottom) 
  {
    element.style.top = (rect.top+move) + "px";
    element.style.left = (rect.left+move) + "px";
  } 
  else if( !goRight && goBottom ) 
  {
    element.style.top = (rect.top+move) + "px";
    element.style.left = (rect.left-move) + "px";
  } 
  else if( goRight && !goBottom ) {
    element.style.top = (rect.top-move) + "px";
    element.style.left = (rect.left+move) + "px";
  }
  else
  {
    element.style.top = (rect.top-move) + "px";
    element.style.left = (rect.left-move) + "px";
  }
}

function doMove() {

  var element = document.getElementById('box'),
      rect = element.getBoundingClientRect(),
      move = 10;
  
  var goRight = ( (rect.right+move) <= window.innerWidth) ? true : false;
  var goBottom = ( (rect.bottom+move) <= window.innerHeight ) ? true : false;

  var goBottomRight = (goRight && goBottom) ? true : false;
  

  if( typeof(goDirection) == 'undefined' ) goDirection = 'bottomRight'; 


  if(goDirection == 'topLeft') {
    if(rect.left == 0) goDirection = 'bottomRight';
    if(rect.left > 0) goDirection = 'topLeft';
  }
  else if(goDirection == 'bottomRight') {
    goDirection = (goBottomRight) ? 'bottomRight' : 'topLeft';
  }

  if( goDirection=='bottomRight' ) {
    element.style.top = (rect.top+move) + "px";
    element.style.left = (rect.left+move) + "px";
  } 
  else if( goDirection=='topLeft' ) {
    element.style.top = (rect.top-move) + "px";
    element.style.left = (rect.left-move) + "px";
  }

}