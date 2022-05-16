// console.log('May 17th')

// console.log('synchronous 1')

// setTimeout(_ => console.log(`Timeout 2`), 0)

// Promise.resolve().then(_ => console.log(`Promise 3`))

// console.log(`Synchronous 4`)

// // import fetch from 'node-fetch';

// const promise = fetch('https://jasonplaceholder.typicode.com/todos/1')

// promise 
//     .then(res => res.json())
//     .then(user => console.log('smile', user.title))
//     .catch(err => console.log(err))

// console.log('Synchronous')


// const codeBlocker = () => {
//     // //let i = 0
//     // //while(i < 1000000) { i++ }
//     // // return 'billion loops done'

//     // return new Promise((resolve, reject) => {
//     //     let i = 0
//     //     while(i < 10000000) { i++ } {
//     //         return 'the loops be done'
//     //     }

//     return Promise.resolve().then(v => {
//         let i
//     })

// }

// function promiseHell() {
//     let userId
//     let postId
//     let db

//     db.then(u => {
//         return db.user().then((v) => v.json())
//     })
//     .then(u => {
//         userId = u.id
//         return db.post(userId).then((v) => v.json())
//     })
//     .then(p => {
//         postId = p.id
//         return db.comments(postId).then((v) => v.json())
//     })
// }


// const getFruit = async (name) => {
//     const fruits = {
//         pineapple: 'pineapple',
//         peach: 'peach',
//         strawberry: 'strawberry'
//     }
//     return fruits[name]
//     //return Promise.resolve.(fruits[name]) <--without async keyword above
// }

// getFruit('peach').then(console.log)


// const makeSmoothie = async () => {
//    try {
//     const a = getFruit('pineapple');
//     const b = getFruit('strawberry');
//     const smoothie = Promise.all([a, b])

//     throw 'broken'

//     return smoothie
//    } catch(err) {
//        console.log(err)
//    }

// }

// makeSmoothie().then(log)

//with regular promises, the above would look like:

// const makeSMoothie2 = () =>  {
//     let a;
//     return getFruit('Pineapple')
//         .then(v => {
//             v = a
//             return getFruit('Strawberry')

//         })
//         .then(v => v + a)
// }

const fruits = ['peach', 'pineapple', 'strawberry']

const smoothie = fruits.map(async v => {
    getFruit(v)
    log(emoji)
    return emoji
})