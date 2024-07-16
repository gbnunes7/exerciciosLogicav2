function removeUrlAnchor(url){
    url = url.split('')
    let indexCerquila = url.indexOf('#')
    return indexCerquila > 0 ? url = url.splice(0,indexCerquila).join('') :url.join('')

  }

  console.log(removeUrlAnchor('www.codewars.com/katas/'))