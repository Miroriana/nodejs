const os = require('os')
//info about the current user
const user = os.userInfo();
console.log(user);
// method returns the systems uptime in seconds
console.log(`the system uptime is ${os.uptime( )}`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);
