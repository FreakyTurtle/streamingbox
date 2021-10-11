"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConn = exports.reboot = exports.disconnect = exports.connect = void 0;
const child_process_1 = require("child_process");
let process = null;
let isConnected = false;
const connect = () => {
    return new Promise((resolve, reject) => {
        console.log("connecting", process);
        console.log("already connecteed", (process && process.pid));
        if (process && process.pid)
            resolve();
        process = (0, child_process_1.spawn)("sudo", ["openvpn", "--config", "/home/pi/client.ovpn"]);
        process.stdout.on("data", data => {
            console.log("process data: ", Buffer.from(data).toString());
            if (data.includes("Initialization Sequence Completed"))
                resolve();
        });
        process.on('error', (error) => {
            console.log("process error: ", error);
            reject(error);
        });
    });
};
exports.connect = connect;
const disconnect = () => {
    return new Promise((resolve, reject) => {
        console.log("disconnecting", process);
        console.log("disconnected already", (!process || !process.pid));
        if (!process || !process.pid) {
            resolve();
            return;
        }
        console.log("killing process");
        process.kill('SIGTERM');
        const exit_proc = (0, child_process_1.spawn)("sudo", ["killall", "-SIGINT", "openvpn"]);
        exit_proc.stdout.on("end", () => {
            process = null;
            isConnected = false;
            resolve();
        });
        exit_proc.stdout.on("close", () => {
            process = null;
            isConnected = false;
            resolve();
        });
        exit_proc.stdout.on("error", (error) => {
            console.log(error);
            process = null;
            isConnected = false;
            reject();
        });
    });
};
exports.disconnect = disconnect;
const reboot = () => {
    (0, child_process_1.exec)("sudo reboot", () => { });
};
exports.reboot = reboot;
const isConn = () => (process && process.pid);
exports.isConn = isConn;
//# sourceMappingURL=index.js.map