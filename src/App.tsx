import './App.css';
import Cardcontent from './app/dashboard/card';
import Headerlayout from './app/dashboard/layout';
import MenuLayout from './app/dashboard/nav';
import { CaretLeftOutlined } from '@ant-design/icons';

function App() {
  return (
    <>
    <Headerlayout />
    <Cardcontent />
    <MenuLayout />
    </>
  );
};

export default App;
