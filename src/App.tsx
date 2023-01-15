import { useState } from 'react'

import { TaskItem } from './components/TaskItem';

import styles from './styles.module.scss'
import logo from './assets/Logo.png'
import clipboard from './assets/Clipboard.png'

export interface Task {
  id: number;
  description: string;
  isConcluded: boolean;
}

function App() {
  const [ newTaskName, setNewTaskName ] = useState("");
  const [ tasks, setTasks ] = useState<Task[]>([]);

  function addTask() {
    const newId = tasks.length > 0
      ? tasks[tasks.length - 1].id + 1
      : 1

    const newTask: Task = {
      id: newId,
      description: newTaskName,
      isConcluded: false
    }

    setTasks(state => [...state, newTask])
  }

  function toggleTask(taskId: number) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isConcluded: !task.isConcluded
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  function removeTask(taskId: number) {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

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
          <button onClick={addTask}>
            Criar +
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.taskStatus}>
          <div className={styles.taskStatusCreated}>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>
          <div className={styles.taskStatusConcluded}>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </div>

        <div className={styles.tasks}>
          {
            tasks.length === 0 && (
              <div className={styles.noTasks}>
                <img src={clipboard} alt="Clipboard" />

                <div className={styles.noTasksMessage}>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
              </div>
            )
          }
          {
            tasks.map((task, index) => (
              <TaskItem
                key={index}
                task={task}
                toggleTask={toggleTask}
                removeTask={removeTask}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
