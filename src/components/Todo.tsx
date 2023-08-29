import { TodoId, type Todo as TodoTypes } from "../type"
interface Props extends TodoTypes {
    onRemoveTodo: ({ id }: TodoId) => void,
    onToggleCompleteTodo: ({ id, completed }: Pick<TodoTypes, 'id' | 'completed'>) => void

}
//type Props = TodoTypes;
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleteTodo }) => {
    const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleteTodo({
            id,
            completed: event.target.checked
        })
    }
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={handleChangeCheckBox}

            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                    onRemoveTodo({ id })
                }} />
        </div>
    )
}