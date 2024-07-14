function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }

    // Find the minimum value in the array
    const min = Math.min(...numbers);
    
    // Remove the first occurrence of the minimum value
    const index = numbers.indexOf(min);
    if (index > -1) {
        numbers.splice(index, 1);
    }

    return numbers;
}