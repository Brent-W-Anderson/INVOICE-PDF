import { createRoot } from 'react-dom/client'

import './styles/globals/_index.scss'
import Pages from './pages/Pages'

createRoot(document.getElementById('root')!).render(<Pages />)
