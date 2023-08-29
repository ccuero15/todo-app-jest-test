export const TODO_FILTERS = {
    ALL:'all',
    ACTIVE:'active',
    COMPLETED:'completed'
} as const //const aplica inmutabilidad a las propiedades del objeto ponerla solo lectura

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]:{
       literal:'Todos',
       href:`/?filters=${TODO_FILTERS.ALL}` 
    },
    [TODO_FILTERS.ACTIVE]:{
       literal:'Activos',
       href:`/?filters=${TODO_FILTERS.ACTIVE}` 
    },
    [TODO_FILTERS.COMPLETED]:{
       literal:'Completados',
       href:`/?filters=${TODO_FILTERS.COMPLETED}` 
    },
} as const
