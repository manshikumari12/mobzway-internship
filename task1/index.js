// const http = require('http');

// const server = http.createServer((req,res)=>{
//   res.end("hello world")
// })
// server.listen("1111",()=>{
//     console.log("serving is running 1111");
// })


// //here we are Require the Buffer module
// const { Buffer } = require('buffer');

// // taking an array
// const array = [1, 2, 3, 4];

// // Create a new Buffer instance and copy the array contents into it
// const buffer = Buffer.from(array);
// // printing the buffer
// console.log('Buffer:', buffer); 
// // Output the buffer <Buffer 01 02 03 04>















// read file 

// const fs = require("fs")

// fs.readFile("file.txt",  'utf8',(err,data)=>{
//     if(err){
//         console.log("error reading file",err)
//         return
//     }
//     console.log("file:",data)
// })

//writing file

// const fs = require("fs")

// const data= "Hello myself manshi Kuamri ";

// fs.writeFile("file.txt",data,(err)=>{
//     if(err){
//         console.log("errr:",err)
//         return
//     }
//       console.log('File written successfully.');
// })





//opening file

// const fs = require("fs")

// fs.open("file.txt","r",(err)=>{
//      if (err) {
//     console.error('Error opening file:', err);
//     return;
//   }
//   console.log('File opened successfully.');
// })



//deleting file

// const fs = require("fs")

// fs.unlink("file.txt",(err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('File deleted successfully.')
// })











// Writing a File Asynchronously



// const fs = require('fs');

// const data = 'hello, myself manshi Kuamri';

// fs.writeFile('testing.txt', data, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }
//   console.log(data);
// });




















// Other I/O Operations
// const fs = require('fs');
// Rename a file
// fs.rename('testing.txt', 'new-file.txt', (err,data) => {
//   if (err) {
//     console.log(err)
//     return;
//   }
//   console.log('File renamed successfully.');
// });

// Create a directory
// fs.mkdir('new-directory', (err) => {
//   if (err) {
//     console.error('Error creating directory:', err);
//     return;
//   }
//   console.log('Directory created successfully.');
// });

// Copy a file
// fs.copyFile('new-file.txt', 'destination.txt', (err) => {
//   if (err) {
//     console.error('Error copying file:', err);
//     return;
//   }
//   console.log('File copied successfully.');
// });








//creating Buffer


// Creating a buffer from a string
// const buffer1 = Buffer.from('Hello, World!');

// console.log(buffer1)




//Reading and Writing Buffers



// const buffer1 = new Buffer.from('Node.js is awesome!');
// console.log(buffer1)
// console.log(buffer1.toString());












//Manipulating Buffers

// // Create a buffer
// const buffer = Buffer.from('Node.js is awesome!', 'utf8');




// // Using slice() to create a new buffer from a portion of the original buffer
// const slicedBuffer = buffer.slice(0,8);
//  // Slice from index 0 to index 5 (6 characters)


//  // Using fill() to fill a buffer with a specified value
// const filledBuffer = Buffer.alloc(10);
// filledBuffer.fill('!'); // Fill the buffer with exclamation marks

// console.log(slicedBuffer.toString(),filledBuffer.toString()); 
















//reading and writing stream 


// const fs = require('fs');
// const readableStream = fs.createReadStream('input.txt',  'utf8');
// readableStream.on('data', (chunk) => {
//   console.log( chunk);
// });
// readableStream.on('end', () => {
//   console.log('End of file reached.');
// });



//writing stream

// const fs = require('fs');
// const writableStream = fs.createWriteStream('output.txt');
// writableStream.write('Data written to the file.');
// writableStream.end();








// const fs = require('fs');

// const readStream = fs.createReadStream('input.txt');
// const writeStream = fs.createWriteStream('output.txt');

// // Pipe data from the readable stream to the writable stream
// readStream.pipe(writeStream);

// // Optionally, listen for the 'finish' event on the writable stream to know when the writing is complete
// writeStream.on('end', () => {
//   console.log('Data writing completed.');
// });



//piping


// const fs = require("fs");
// const http = require("http");
// const server =http.createServer()
// server.on("request" , (req,res)=>{
//   const stream =fs.createReadStream("input.txt")
//   stream.pipe(res)
// })
// server.listen(1212, () => {
//   console.log("Server is running on port 1212");
// });





// DUPLEX STREAM 

// const { PassThrough, Duplex } = require("stream");
// const { createReadStream, createWriteStream } = require("fs");
// const readStream = createReadStream("input.txt");
// const writeStream = createWriteStream("output.txt");
// class Throttle extends Duplex {
//   constructor(time) {
//     super();
//     this.delay = time;
//   }
//   _read() {}

//   _write(chunk, encoding, callback) {
//     this.push(chunk);
//     setTimeout(callback, this.delay);
//   }
// }
// const tunnel = new PassThrough();
// const throttle = new Throttle(1000); 
// let amount = 0;
// tunnel.on("data", (chunk) => {
//   amount += chunk.length;
//   console.log("bytes :",amount,chunk);
// });

// readStream.pipe(throttle).pipe(tunnel).pipe(writeStream);


// const { Transform } = require('stream');
// const fs = require("fs");


// const uppercaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
  
//     const transformedChunk = chunk.toString().toUpperCase();
  
//     callback(null, transformedChunk);
//   }
// });


// const readStream = fs.createReadStream("input.txt");


// readStream.pipe(uppercaseTransform).pipe(process.stdout);



// function add(a, b) {
//   return a + b;
// }


// console.log(add(5, 'hello'));



// const fs = require('fs');

// // Define a function to read a file asynchronously
// function readFile(filename, callback) {
//   fs.readFile(filename, 'utf8', (err, data) => {
//     // Check if an error occurred
//     if (err) {
//       // Pass the error to the callback as the first parameter
//       callback(err);
//     } else {
//       // Pass the file content to the callback as the second parameter
//       callback(null, data);
//     }
//   });
// }

// // Usage example
// readFile('file.txt', (err, content) => {
//   // Check if an error occurred
//   if (err) {
//     console.error('Error', err);
//   } else {
//     console.log('File content:', content);
//   }
// });

// function fun(str,cb){
//   if(typeof str !=="string"){
// cb("must be string")
//   }
//   const res =str.toUpperCase()
//   cb(null,res)
// }

// fun("hello",(err,result)=>{
//   if(err) throw err
// console.log(result)
// })
// fun(5,(err,result)=>{
//   if(err) throw err
// console.log(result)
// })



// //error eventEmitter
// const Event = require('events');

// const emitter = new Event();

// emitter.on('error', (error) => {
//   console.error('Error occurred:', error);
// });

// emitter.emit('error', new Error('Something went wrong'));





//  uncaughtException

// process.on('uncaughtException', (err) => {
//   console.error('Uncaught exception:', err);
// });


// setTimeout(() => {
//   throw new Error('Simulated uncaught exception');
// }, 1000);

// console.log('uncaught exception');



// const domain = require('domain').create();
// const http = require('http');

// domain.on('error', (err) => {
//   console.error('Error caught by domain:', err);
// });

// const server = http.createServer((req, res) => {
//   domain.run(() => {
//     res.writeHead(500, { 'Content-Type': 'text/plain' });
//     res.end('Internal Server Error');
//     throw new Error('Intentional error occurred');
//   });
// });

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });



// const eventEmiiter =require("events")

// const emiter =new eventEmiiter()
// //
// //can add on or addlistner
// emiter.on("msglogged" ,function(){
//   console.log("listner called");
// })
// //to raise event
// emiter.emit("msglogged")

// var EventEmitter = require('events').EventEmitter; 
// var util = require('util'); 
// var Person = function(name) { 
// this.name = name; 
// }; 
// util.inherits(Person, EventEmitter); 
// var employee = new Person("SomePerson"); 
// employee.on('programmer', function(msg) { 
// return(`${this.name}: ${msg}`); 
// }); 
// employee.emit('programmer', "You are a good learner."); 


//  bindingFunctionsToEvents
// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// function greet() {
//   console.log('Hello, world!');
// }

// myEmitter.on('greet', greet);

// myEmitter.emit('greet');











// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const port = 3000;
// app.use(bodyParser.json());
// let users = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Smith' }
// ];
// // Get all users
// app.get('/users', (req, res) => {
//   res.json(users);
// });
// // Create a new user
// app.post('/users', (req, res) => {
//   const newUser = { id: users.length + 1, name: req.body.name };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });
// // Update an existing user
// app.put('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const userIndex = users.findIndex(user => user.id === id);
//   if (userIndex !== -1) {
//     users[userIndex].name = req.body.name;
//     res.json(users[userIndex]);
//   } else {
//     res.status(404).send('User not found');
//   }
// });
// // Delete a user
// app.delete('/users/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const userIndex = users.findIndex(user => user.id === id);
//   if (userIndex !== -1) {
//     users.splice(userIndex, 1);
//     res.send('User deleted successfully');
//   } else {
//     res.status(404).send('User not found');
//   }
// });
// app.listen(port, () => {
//   console.log(`app listening at http://localhost:${port}`);
// });








// const express = require('express');
// const app = express();
 

// app.set("view engine", "ejs");

// app.get('/home', (req, res) => {
//     const data = {
//         pageTitle: 'Welcome Page',
//         username: ' manshi'
//     };
//     res.render('index', data); 
// });

// app.listen("1111", () => {
//   console.log(` app listening `);
// });






// const express = require('express');
// const app = express();
// const {userrouter} = require('./routers/user.router');
// const {productrouter} = require('./routers/product.router');

// app.use('/users', userrouter);
// app.use('/products', productrouter);

// app.listen(1111, () => {
//     console.log('Server running on port 1111');
// });


// const express = require('express');
// const app = express();

// // Middleware 
// const auth = (req, res, next) => {
 
//   if (req.headers.authorization === 'secret_token') {
   
//     next();
//   } else {
   
//     res.status(401).send('Unauthorized');
//   }
// }

// // Route handler
// app.get('/users', auth, (req, res) => {
//   res.json({ message: 'List of users' });
// });

// // server

// app.listen("1111", () => {
//   console.log("server is running");
// });





// -----------------------------socket.io---------------------------------------

// const express = require("express");
// const http = require("http");
// const path = require("path");
// const app = express();
// const server = http.createServer(app);
// const { Server } = require("socket.io");

// app.use(express.static(path.resolve("./public")));

// app.get("/", (req, res) => {
//     return res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// const io = new Server(server);

// // Creating two namespaces
// const dnsp = io.of("/data-namespace");
// const dnsp1 = io.of("/data-namespace1");

// let roomno = 1;
// let full = 0;

// dnsp.on("connection", (socket) => {
//     socket.on("to-manshi", (msg) => {
//         // Broadcast to everyone in the room
//         dnsp.to("room-" + roomno).emit("message", msg);
//     });

//     socket.join("room-" + roomno);
//     dnsp.to("room-" + roomno).emit("connectedroom", "You are connected to room no. " + roomno);

//     full++;

//     if (full >= 2) {
//         full = 0;
//         roomno++;
//     }

//     socket.on("disconnect", () => {
//         console.log("User disconnected from namespace '/data-namespace'");
//     });
// });


// dnsp1.on("connection", (socket) => {
//     socket.on("to-manshi", (msg) => {
//         dnsp1.emit("message", msg);
//     });

//     socket.on("disconnect", () => {
//         console.log("User disconnected from namespace '/data-namespace1'");
//     });
// });

// server.listen(1111, () => {
//     console.log("Server is running");
// });

const express = require("express");
const { Server } = require("socket.io");
const { connection } = require("./db");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("base point end");
});

server.listen(1212, async () => {
    try {
        await connection;
        console.log("connected to db");
    } catch (error) {
        console.log(error);
    }
    console.log("server is running");
});

const websocketserver = new Server(server);
var nsp = websocketserver.of('/my-namespace');
let count = 0;
var roomno = 1;

nsp.on("connection", (socket) => {
    count++;
    socket.join("room-"+roomno);
    nsp.emit("newuser", count);
    socket.emit('connectToRoom', "You are in room no. "+roomno);

    socket.on("message", (sandesh) => {
        nsp.in("room-"+roomno).emit("usermsg", sandesh, { description: count + ' clients connected!' });
    });

    socket.on('disconnect', () => {
        count--;
        nsp.emit("newuser", count);
    });
});


// nsp.on("connection", (socket) => {
//     count++;
//     socket.join("room-"+roomno);
//     nsp.emit("newuser", count);
//      socket.sockets.in("room-"+roomno).emit('connectToRoom', "You are in room no. "+roomno);
//     socket.on("message", (sandesh) => {
//         nsp.emit("usermsg", sandesh, { description: count + ' clients connected!' });
//     });

//     socket.on('disconnect', () => {
//         count--;
//         nsp.emit("newuser", count);
//     });
// });
