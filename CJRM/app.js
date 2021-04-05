const randomNumbers = [36, 99, 37, 63, 19, 17, 2]

console.log(randomNumbers)

const numbersGreaterThan37 = randomNumbers.filter( item => {
    if (item >= 37) {
        return item
    }
})

const numbersLessThan20 = randomNumbers.filter( number => number <= 20)

console.log(numbersGreaterThan37)
console.log(numbersLessThan20)

console.log(
    {
        randomNumbers,
        numbersGreaterThan37,
        numbersLessThan20
    }
)

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

console.log(users)

console.info("## Return only premium users: ##")

const usersPremium = users.filter(user => user.premium === true)
console.log(usersPremium)