import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppLayout from './componentes/AppLayout';
import AppTarefas from './componentes/AppTarefas';
import AppNavBar from './componentes/AppNavBar';

function App() {
  const [tarefaNova] = useState(undefined);
  const [tarefas] = useState(undefined)

  return (
    <>
    <AppLayout>
      <AppNavBar />
      <AppTarefas tarefa={tarefaNova} tarefas={tarefas} />
    </AppLayout>
    </>
  )
}

export default App
