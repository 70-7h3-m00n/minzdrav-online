import { withProps, select, createStore, setProp } from '@ngneat/elf'
import {
    withEntities,
    setEntities,
    addEntities,
    updateEntities,
    deleteEntities,
    selectAllEntitiesApply,
} from '@ngneat/elf-entities'
import { switchMap } from 'rxjs/operators'

export interface Todo {
    id: string
    text: string
    completed: boolean
}

export interface TodosProps {
    filter: 'ALL' | 'ACTIVE' | 'COMPLETED'
}

const store = createStore({ name: 'todos' }, withProps<TodosProps>({ filter: 'ALL' }), withEntities<Todo>())

const filter$ = store.pipe(select(({ filter }) => filter))

export const visibleTodos$ = filter$.pipe(
    switchMap(filter => {
        return store.pipe(
            selectAllEntitiesApply({
                filterEntity({ completed }) {
                    if (filter === 'ALL') return true
                    return filter === 'COMPLETED' ? completed : !completed
                },
            }),
        )
    }),
)
