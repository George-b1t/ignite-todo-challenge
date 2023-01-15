import styles from './styles.module.scss'
import logo from './assets/Logo.png'
import { useState } from 'react';

function App() {
  const [ newTaskName, setNewTaskName ] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={logo} alt="Logo" />

        <div className={styles.includeNewTask}>
          <input
            type="text"
            value={newTaskName}
            onChange={e => setNewTaskName(e.target.value)}
            placeholder="Adicione uma nova tarefa"
          />
          <button>Criar +</button>
        </div>
      </div>
    </div>
  )
}

export default App
