function getMiddle(s)
{
    s = s.split("")
    const meio = Math.round(s.length / 2)
    if (s.length % 2 === 0) {
        return s[meio -1] + s[meio]
    } else {
        return s[meio -1]
    }

}

getMiddle("A")
