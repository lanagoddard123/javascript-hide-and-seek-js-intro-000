function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(target){
  return document
  .getElementById('nested')
  .getElementsByClassName('target')[0]
}
