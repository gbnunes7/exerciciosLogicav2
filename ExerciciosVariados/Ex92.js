// function wave(str){
//     let result = []
//     let stringModified = str[0].toUpperCase() + str.substring(1);
//     result.push(stringModified)
//     stringModified = str + str[2].toUpperCase() ;
//     result.push(stringModified)

//     console.log(result)
//   }

//   wave("gabriel")

//   let str = "gabriel"
//   let valorIndex = str[3]
// str = str.replace(valorIndex,valorIndex.toUpperCase())

//   console.log(str)


    let str = "hello"
    let result = []

  for(let i = 0; i < str.length ;i++) {
    let valorIndex = str[i]
    let stringModified = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
    result.push(stringModified)
  }

  console.log(result)
  console.log("Hello", "hEllo", "heLlo", "helLo", "hellO")