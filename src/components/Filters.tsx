import React from 'react';
import { FILTERS_BUTTONS } from '../const';
import { type FilterValue } from '../type';

interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue, // con esta linea de codigo estamos diciendo que utilice el las key como tipo de dato
}
export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''
                    return (
                        <li key={key}>
                            <a
                                href={href}
                                className={className}
                                onClick={(event) => {
                                    event.preventDefault()
                                    onFilterChange(key as FilterValue)
                                }}
                            >
                                {literal}
                            </a>
                        </li>


                    )
                })

            }
        </ul>
    )
}
