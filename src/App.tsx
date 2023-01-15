import React from 'react'
import Header from "src/Components/Header";
import Dock from 'src/Components/Dock'
import { contextMenu } from 'react-contexify';
import wallpaper from 'images/wallpaper.png'
import ContextMenu from 'src/Components/ContextMenu';
import customConfig from 'src/custom.config';

const MENU_ID = customConfig.contextMenu.id;

const App: React.FC = () => {
  document.title = 'AdonS'

  return (<>
    <div onContextMenu={(e) => contextMenu.show({ id: MENU_ID, event: e })}>
      <Header />
      <img src={wallpaper} alt="" />
      <Dock />
    </div>
    <ContextMenu />
  </>
  )
}

export default App
