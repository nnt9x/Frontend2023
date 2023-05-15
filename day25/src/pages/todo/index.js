// Hiển thị danh sách công việc

export function TodoList(props){
    const data = [
        "1. Dự án 1",
        "2. Dự án 2",
        "3. Dự án 3",
        "4. Dự án 4",
        "5. Dự án 5"
    ]
    const viewTodo = data.map((item, index) => 
        <li key={index}>{item}</li>
    );
    
    return (
        <div>
            <p className='display-1'>Danh sách công việc</p>
            <ul>
                {viewTodo}
            </ul>
        </div>
    )
}