const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//get url/ get serialized url
console.log(myUrl.href)
//too string method
console.log(myUrl.toString())

//host (root domain)
console.log(myUrl.host)
//host name?
console.log(myUrl.hostname) //difference is, hostname doesn't include the port. host does. 

//path name
console.log(myUrl.pathname) //the actual path/ file. 

//serialized query (the query parameters)
console.log(myUrl.search)
//params object (create an object)
console.log(myUrl.searchParams)


//add paramerters dynamically. 
myUrl.searchParams.append('abc', '123')

//loop through paramaters
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))

