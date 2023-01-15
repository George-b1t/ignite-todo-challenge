import styles from './styles.module.scss'

import check from '../../assets/Check.png'
import trash from '../../assets/Trash.png'
import { Task } from '../../App'

interface TaskItemProps {
  task: Task;
  toggleTask: (taskId: number) => void;
  removeTask: (taskId: number) => void;
}

function TaskItem({ task, toggleTask, removeTask }: TaskItemProps) {
  const { id, description, isConcluded } = task;

  function handleToggleTask() {
    toggleTask(id);
  }

  function handleRemoveTask() {
    removeTask(id);
  }

  return (
    <div className={styles.container}>
      {
        isConcluded ? (
          <img
            onClick={handleToggleTask}
            src={check}
            alt="Check"
          />
        ) : (
          <span
            onClick={handleToggleTask}
            className={styles.notConcludedTask}
          />
        )
      }
      <p className={`${isConcluded && styles.concludedTask}`}>{description}</p>
      <img onClick={handleRemoveTask} src={trash} alt="Trash" />
    </div>
  )
}

export { TaskItem }
