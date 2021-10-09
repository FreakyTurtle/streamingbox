import { ChildProcessWithoutNullStreams, spawn} from "child_process"

let process: ChildProcessWithoutNullStreams | null = null
let isConnected = false
export const connect = () => {
  return new Promise<void>((resolve, reject) => {
    if(process && process.pid) resolve()
    process = spawn("sudo openvpn --config /home/pi/Desktop/client.ovpn")
    process.stdout.on("data", data => {
      if(data.includes("Initialization Sequence Completed")) resolve()
    });
    process.on('error', (error) => {
      reject(error)
    });
  })
}

export const disconnect = () => {
  if(!process || !process.pid) return 
  process.kill('SIGTERM')
  //or process.kill(job.pid, 'SIGTERM')
  process = null
  isConnected = false
  return
}

export const isConn = () => (process && process.pid)