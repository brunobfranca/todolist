import { action } from 'typesafe-actions'

export const addTask = (data) => action('@tasks/ADD_TASK' , {data})
export const loadRequest = () => action('@tasks/LOAD_REQUEST')
export const loadSucess = (data) => action ('@tasks/LOAD_SUCESS' , {data})
export const removeTask = (data) => action('@tasks/REMOVE_TASK' , {data})
export const updateTask = (data) => action('@tasks/UPDATE_TASK' , {data} )