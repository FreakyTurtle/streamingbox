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
      console.log("process data: ", Buffer.from(data).toString())
      if(data.includes("Initialization Sequence Completed")) resolve()
    });
    process.on('error', (error) => {
      console.log("process error: ", error)
      reject(error)
    });
  })
}

export const disconnect = () => {
  return new Promise<void>((resolve, reject) => {
    console.log("disconnecting", process)
    console.log("disconnected already", (!process || !process.pid))
    if(!process || !process.pid) return 
    console.log("killing process");
    process.kill('SIGTERM')
    const exit_proc = spawn("sudo", ["killall", "-SIGINT", "openvpn"])
    exit_proc.stdout.on("end", () => {
      process = null
      isConnected = false
      resolve()
    })
    exit_proc.stdout.on("error", (error) => {
      console.log(error)
      reject()
    })
    //or process.kill(job.pid, 'SIGTERM')
  })
}

export const isConn = () => (process && process.pid)