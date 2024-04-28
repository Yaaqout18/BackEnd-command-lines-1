const commandsLogic = require('./commands-logic');
const yargs = require('yargs') 

yargs.command({
  command: 'add',
  describe:'add command description',
  builder: {
fName: {
describe:' this is the first Name to add command',
demandOption: true,
type : 'string'
},
lName: {
  describe:' this is the last Name to add command',
  demandOption: true,
  type : 'string'
}
  },
  handler:(x)=>{
    commandsLogic.addPerson(x.id , x.fName, x.lName, x.city);
  }
})
// delete an item 
yargs.command({
  command : "delete",
  describe : "to delete an item",
  handler : (x)=>{                    
      commandsLogic.deleteData(x.id)     
  }
})
// Read an item 
yargs.command({
  command : "read",
  describe : "to read an item",
  builder : {
    id:{
      describe:' this is id description  ',
      demandOption :true,
      type:"number"
    }
  },
  handler:(x)=>{
    commandsLogic.readData(x.id)
  }
}) 
// to show all data
yargs.command({ 
  command : 'list',
  describe : 'to show all items',
  handler : ()=>{
    commandsLogic.listData()
  }
})
yargs.parse()
