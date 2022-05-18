const Logger = require('./logger')

const logger = new Logger()

logger.on('message', (data) => console.log('Called lister:', data))

logger.log('Hello World')
logger.log('Hi')
logger.log('Hello')
