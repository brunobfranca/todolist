import { action } from 'typesafe-actions'

export const loadRequest = () => action('@user/LOAD_REQUEST')
export const setUser = (data) => action('@user/SET_USER' , {data})
export const readUser = (data) => action('@user/READ_USER' , {data})