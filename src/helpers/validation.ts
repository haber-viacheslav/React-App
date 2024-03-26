import { string, object, date, number, ObjectSchema } from 'yup';
import { ITask } from '@/types/types';
export const AddListSchema = object().shape({
  listName: string().trim().strict().required(),
});

export const AddTaskSchema: ObjectSchema<ITask> = object({
  name: string().trim().strict().required(),
  status: string().trim().strict().required(),
  priority: string<'low' | 'medium' | 'high'>().required(),
  description: string().trim().strict().required(),
  dueDate: date()
    .default(() => new Date())
    .required(),
  statusId: number().required(),
});
