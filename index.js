
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(selector) {
  return document.queryElementsByTagName(selector)[0]
  }