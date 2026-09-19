const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 480, height: 860, minWidth: 360,
    title: 'Pinpoint', autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon-512.png'),
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  win.loadFile('index.html');
  // Lookup links open in the normal browser, not inside the app.
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
