import { TaskModel } from '../../models/TaskModel'
import { TASKS_LIST } from './tasksData'
import { DataSource } from 'apollo-datasource'

export class TasksAPI extends DataSource {
  getTasks(): Promise<TaskModel[]> {
    return Promise.resolve([...TASKS_LIST])
  }
}
