import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/base/base.min.css';

const rootDiv:HTMLDivElement = document.querySelector('#root') as HTMLDivElement;
const root = createRoot(rootDiv);

root.render(
    <>
        <App />
    </>
)