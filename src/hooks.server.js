import { WebSocketServer } from 'ws';
import { spawn } from 'child_process';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    let commandProcess = null;

    ws.on('message', (message) => {
        const commandString = message.toString().trim();
        console.log(`Received command: ${commandString}`);

        if (!commandString) {
            ws.send('ERROR: No command provided');
            return;
        }

        if (commandProcess) {
            commandProcess.kill();
            console.log('Previous process killed');
        }

        // Split command into executable and arguments
        const [command, ...args] = commandString.split(' ');

        // Run the command
        commandProcess = spawn(command, args, { shell: true });

        commandProcess.stdout.on('data', (data) => {
            console.log(`STDOUT: ${data.toString()}`);
            ws.send(data.toString());
        });

        commandProcess.stderr.on('data', (data) => {
            console.error(`STDERR: ${data.toString()}`);
            ws.send(`ERROR: ${data.toString()}`);
        });

        commandProcess.on('close', () => {
            console.log('Process ended');
            ws.send('Process ended');
        });

        commandProcess.on('error', (err) => {
            console.error(`Process error: ${err.message}`);
            ws.send(`ERROR: ${err.message}`);
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        if (commandProcess) commandProcess.kill();
    });
});

console.log('WebSocket server running on ws://localhost:8080');

