// Code your solution here
const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'bobby',
        hometown: 'Tampa Bay'
    }
];




function findMatching(arr, string) {
    return arr.filter(driver => driver.toLowerCase() === string.toLowerCase());
}





function fuzzyMatch(arr, string) {
    return arr.filter(driver =>
        driver.name && driver.name.toLowerCase().startsWith(string.toLowerCase())
    )
        .map(driver => driver.name)
}





function matchName(arr, string) {
    return arr.filter(driver => {
        if (driver.name === string) {
            return driver
        }
    })

}
