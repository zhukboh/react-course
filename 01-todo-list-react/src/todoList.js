const ToDoListItem = ({ item }) => (
    <tr>
        <td>{item.text}</td>
        <td class='yesNoTd'>{item.isCompleted ? 'Yes' : 'No'}</td>
    </tr>
);

const ToDoList = ({ todoItems }) => (
    <table>
        <thead>
            <tr>
                <th>What to do</th>
                <th>Is it done?</th>
            </tr>
        </thead>
        <tbody>
            {todoItems.map((item) => <ToDoListItem key={item.id} item={item} />)}
        </tbody>
    </table>
)

export default ToDoList;