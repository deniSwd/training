const oddOrEven = (array) => {
    if (array.length > 0) {
        return array.reduce((sum, el) => sum + el) % 2 === 0 ? 'even' : 'odd'
    }
    return 'even'
}