import { Suspense, lazy } from 'react'

import { createRoot } from 'react-dom/client'

import './styles/globals/_index.module.scss'

import Spinner from './components/Spinner/Spinner'
const Pages = lazy(() => import('./pages/Pages'))

createRoot(document.getElementById('root')!).render(
    <Suspense fallback={<Spinner />}>
        <Pages />
    </Suspense>
)
