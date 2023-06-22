import { withProps, select, createStore, setProp } from '@ngneat/elf'
import {
    withEntities,
    setEntities,
    addEntities,
    updateEntities,
    deleteEntities,
    selectAllEntitiesApply,
} from '@ngneat/elf-entities'

export interface Todo {
    id: string
    text: string
    completed: boolean
}

export interface TodosProps {
    filter: 'ALL' | 'ACTIVE' | 'COMPLETED'
}

const store = createStore({ name: 'todos' }, withProps<TodosProps>({ filter: 'ALL' }), withEntities<Todo>())
