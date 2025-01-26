const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  listPorts: () => ipcRenderer.invoke('list-ports'),
  uploadCode: (port, pythonCode) => ipcRenderer.invoke('upload-code', port, pythonCode),
});
