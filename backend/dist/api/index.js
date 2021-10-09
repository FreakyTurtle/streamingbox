"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../utilimports");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const vpn_1 = require("@ft/vpn");
const startServer = async () => {
    try {
        const app = (0, express_1.default)();
        const port = 8080;
        app.use((0, helmet_1.default)());
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: true }));
        app.use((0, cors_1.default)());
        app.get('/connect', async (req, res) => {
            try {
                await (0, vpn_1.connect)();
                res.status(200).send('OK');
            }
            catch (error) {
                res.status(500).send('OK');
            }
        });
        app.get('/disconnect', async (req, res) => {
            try {
                await (0, vpn_1.disconnect)();
                res.status(200).send('OK');
            }
            catch (error) {
                res.status(500).send('OK');
            }
        });
        app.get('/reboot', async (req, res) => {
            (0, vpn_1.reboot)();
        });
        app.get('/*', (req, res) => {
            console.log('404');
            res.status(404).send("The page you're looking for has not been found");
        });
        app.get('health', (req, res) => {
            res.status(200).send("Healthy");
        });
        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error(`Service unable to start`, error);
    }
};
startServer();
//# sourceMappingURL=index.js.map