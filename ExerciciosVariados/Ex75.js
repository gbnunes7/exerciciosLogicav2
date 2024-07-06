function abbrevName(name){
    name = name.split("")
    const espacoPSobrenome = name.indexOf(" ")
    const sigla = `${name[0]},${name[espacoPSobrenome+1]}`
    return sigla.replace(",",".").toUpperCase()
  }

  console.log(abbrevName("Gabriel Melo"))