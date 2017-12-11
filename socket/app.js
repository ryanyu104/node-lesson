const  net=require('net')

const server=net.createServer(socketConnect)

function socketConnect(socket){
  console.log(socket)
  // console.log(socket.address())
  socket.on('data',(chunk)=>{
    console.log(chunk.toString());
  })
}
const port=3000

server.listen(port, (err) => {
  if(err){
    throw err
  }
  console.log('server bound')
})



