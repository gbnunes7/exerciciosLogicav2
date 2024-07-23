function toCsvText(array) {
    // Convert each row to a CSV string
    const csvRows = array.map(row => 
        row.join(',')
    );

    // Join all rows with newline characters
    return csvRows.join('\n');
}


 console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ]))