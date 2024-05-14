import { App } from './app';
import { createRoot } from 'react-dom/client';

import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
