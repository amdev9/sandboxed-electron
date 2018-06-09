import { BrowserWindow } from 'electron';
import path from 'path';
import MenuBuilder from './menu';

export default function createView(mainWin) {
  const VIEW_PATH = path.join(__dirname, 'dapps');
  const view = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      sandbox: true,
      contextIsolation: true,
      preload: path.join(VIEW_PATH, 'preload.brow.js'),
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
    'file://'.concat(path.join(VIEW_PATH, 'index.html'))
  );

  const menuBuilder = new MenuBuilder(view);
  menuBuilder.buildMenu();

  return view;
}
