const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { SerialPort } = require('serialport');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Enable nodeIntegration
      preload: path.join(__dirname, 'preload.js'), // Set preload for communication
    },
  });

  win.loadFile('index.html');
  win.on('closed', () => {
    win = null;
  });
}

// Listen for request from renderer to list ports
ipcMain.handle('list-ports', async () => {
  try {
    const ports = await SerialPort.list();
    return ports;
  } catch (error) {
    console.error('Error listing ports:', error);
    return [];
  }
});

// Listen for request to upload code to Arduino
ipcMain.handle('upload-code', async (event, port, pythonCode) => {
  const exec = require('child_process').exec;
  try {
    // Pass the port and code to the python script
    exec(`python arduino_comm.py ${port} "${pythonCode}"`, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing Python code:', error);
        return;
      }
      console.log('Python execution output:', stdout);
    });
  } catch (error) {
    console.error('Error uploading code to Arduino:', error);
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
