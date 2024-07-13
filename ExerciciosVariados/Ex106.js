
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
 

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

console.log(countSmileys([':D',':~)',';~D',':)']        ))