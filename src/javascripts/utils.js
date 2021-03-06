/* global fetch */

const utils = {}

utils.capitalizeFirstLetter = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

utils.capitalizeEachWord = function (s) {
  const words = s.split(' ')
  const wordList = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return wordList.join(' ')
}

/*
  Takes 2 objects and performs a shallow merge
  Returns a new obj
*/
utils.extend = function (obj1, obj2) {
  // use the spread operator to force a (shallow) clone of the obj instead of a reference
  // https://stackoverflow.com/questions/12690107/clone-object-without-reference-javascript
  const extended = { ...obj1 }

  const merge = function (obj) {
    for (const prop in obj) {
      if (Object.hasOwnProperty.call(obj, prop)) {
        // Push each value from `obj` into `extended`
        extended[prop] = obj[prop]
      }
    }
  }

  merge(obj2)
  return extended
}

utils.createElement = function (tag, textContent, classlist) {
  const $el = document.createElement(tag)
  $el.textContent = textContent
  if (classlist && classlist.length) {
    classlist.forEach((cls) => $el.classList.add(cls))
  }
  return $el
}

utils.createLink = function (href, text, classes = []) {
  const $link = document.createElement('a')
  $link.href = href
  $link.textContent = text
  if (classes.length) {
    $link.classList.add(...classes)
  }
  return $link
}

utils.randomHexColorCode = function () {
  const n = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + n.slice(0, 6)
}

utils.getRelevantFeatures = function (features, dataType) {
  return features.filter(function (feature) {
    if (feature.id.includes(dataType)) {
      return true
    }
    return false
  })
}

export default utils
