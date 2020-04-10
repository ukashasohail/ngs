console.log('Current user is', process.env.USER);

console.log('\nScript executed with:');

console.log('VAL1 equal to:', process.env.VAL1);
console.log('VAL2 equal to:', process.env.VAL2);

// linux command:
// $ export PORT = 5000
// GET THAT BY process.env.PORT

console.log(process.argv);

// first item would be location of node commands
// 2nd would be script name
// remaining are arguments passed
