export function renderToDo(task, idx){
  return `
    <div class="task" data-status="toDo" id="${idx}">
      <div class="task-header">
        <span class="task-status">to do</span>
        <p class="task-date">${task.date}</p>
      </div>
      <div class="task-title">${task.title}</div>
      <div class="task-desc">${task.desc}</div>
      <div class="task-author">${task.author}</div>
      <div class="task-options">
        <button class="task-btn-move-on" id="${idx}">
          <i class="fa-regular fa-circle-right"></i>
        </button>
        <button class="task-btn-delete" id="${idx}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>            
    </div>
  `  
}
