export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*100000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updated) => {
  return list.map((todo) => todo.id === updated.id ? {...updated} : {...todo})
}

export const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}
