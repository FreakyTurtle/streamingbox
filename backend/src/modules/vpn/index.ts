import { ChildProcessWithoutNullStreams, exec, spawn} from "child_process"

let process: ChildProcessWithoutNullStreams | null = null
let isConnected = false
export const connect = () => {
  return new Promise<void>((resolve, reject) => {
    console.log("connecting", process)
    console.log("already connecteed", (process && process.pid))
    // exec("sudo", ["openvpn", "--config", "/home/pi/client.ovpn"], (error, stdout, stderr) => {
    //   if(stdout.includes("Initialization Sequence Completed")) {
    //     isConnected = true
    //     resolve()
    //   }
    // })
    if(process && process.pid) resolve()
    process = spawn("sudo", ["openvpn", "--config", "/home/pi/client.ovpn"])
    process.stdout.on("data", data => {
      console.log("process data: ", data)
      if(data.includes("Initialization Sequence Completed")) resolve()
    });
    process.on('error', (error) => {
      console.log("process error: ", error)
      reject(error)
    });
  })
}

export const disconnect = () => {
  console.log("disconnecting")
  console.log("disconnected already", (!process || !process.pid))
  if(!process || !process.pid) return 
  console.log("killing process");
  
  process.kill('SIGTERM')
  //or process.kill(job.pid, 'SIGTERM')
  process = null
  isConnected = false
  return
}

export const isConn = () => (process && process.pid)