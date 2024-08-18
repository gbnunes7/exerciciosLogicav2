const arr = ["olá","tudo bem?","oi"]

function find(arr) {
    const achou = arr.find((word) => word === "oi")
    return achou
}

console.log(find(arr))