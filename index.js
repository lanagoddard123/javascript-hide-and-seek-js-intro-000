function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(target){
  return document
  .getElementById('nested')
  .getElementsByClassName('target')[0]
}
function increaseRankBy(n){
  const rankedLists = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].textContent = (parseInt(rankedLists[i].textContent) + n).toString();
  }
}
