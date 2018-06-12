import { BrowserWindow } from 'electron';
import path from 'path';
 

export default function createView(mainWin) {
  const DAPPS_PATH = path.join(__dirname, '..', 'dapps');
  const view = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
      contextIsolation: true,
      preload: path.join(DAPPS_PATH, 'preload.prod.js'),
      additionalArguments: ['testId']
    }
  });

  const bounds = {
    x: 300,
    y: 0,
    width: 300,
    height: 300
  };

  // mainWin.setBrowserView(view);
  // view.setBounds(bounds);
  view.webContents.loadURL(
    'file://'.concat(path.join(DAPPS_PATH, 'dappBrowserView1', 'index.html'))
  );

  return view;
}
