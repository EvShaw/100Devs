const os = require('os')

//platform
console.log(os.platform())

//cpu Architecture. 
console.log(os.arch())

// cpu core info
console.log(os.cpus())

//free memory available
console.log(os.freemem())

//total memory:
console.log(os.totalmem())

//home directory
console.log(os.homedir())

//uptime (time system has been up)

console.log(os.uptime()) //in seconds