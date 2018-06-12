import { BrowserWindow } from 'electron';
import path from 'path';
// import MenuBuilder from './menu';

let mainWindow = null;

export default function createWindow() {

    mainWindow = new BrowserWindow({
        x: 0,
        y: 0,
        webPreferences: {
            // nodeIntegration: false,
            // sandbox: true,
            // contextIsolation: true,
            //   preload: path.join(CLIENT_PATH, 'preload.js')
        }
    });

    // const CLIENT_PATH = '/home/pidgin/job/boilerplate/sandboxed-electron/electron/client'; //path.join(__dirname, '..', 'client');    
 
    mainWindow.loadURL('file:///home/pidgin/job/boilerplate/sandboxed-electron/electron/client/index.html'); //'.concat(path.join(CLIENT_PATH, 'index.html')));

    // @TODO: Use 'ready-to-show' event
    //        https://github.com/electron/electron/blob/master/docs/api/browser-window.md#using-ready-to-show-event
    mainWindow.webContents.on('did-finish-load', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
        }
        mainWindow.show();
        mainWindow.focus();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    // const menuBuilder = new MenuBuilder(mainWindow);
    // menuBuilder.buildMenu();

    return mainWindow;
}