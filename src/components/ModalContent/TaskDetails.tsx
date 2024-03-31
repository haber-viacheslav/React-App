import React from 'react';
import { useAppSelector } from '../../redux/hook/hook';
import { selectCurrentTask } from '../../redux/modal/selectors';
export const TaskDetailsModalContent: React.FC = () => {
  const task = useAppSelector(selectCurrentTask);
  const arr = [task.status, task.dueDate, task.priority];
  console.log(task);
  return (
    <div>
      <div>
        <h2>{task.name}</h2>
        <button></button>
        {arr && (
          <ul>
            {arr.map(arg => (
              <li key={arg}>
                <p>
                  <div></div>
                  <span>{arg}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>Activity</h3>
        <ul>
          <li>
            <p></p>
          </li>
        </ul>
      </div>
    </div>
  );
};
