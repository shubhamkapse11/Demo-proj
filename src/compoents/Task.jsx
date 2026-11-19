

const Task = ( {task} ) => {
    return (
        <div>
        { task.map((task) => (
            <div key={task?.id}>
                <h1>{task?.title}</h1>
                <p>{task?.description}</p>
            </div>
        ))}
        </div>
    )
}

export default Task;