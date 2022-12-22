export function renderDone(task, idx){
  return `
    <div class="task" data-status="done" id="${idx}">
      <div class="task-header">
        <span class="task-status">done</span>
        <p class="task-date">${task.date}</p>
      </div>
      <div class="task-title">${task.title}</div>
      <div class="task-desc">${task.desc}</div>
      <div class="task-author">${task.author}</div>
      <div class="task-options">
        <button class="task-btn-move-back" id="${idx}">
          <i class="fa-regular fa-circle-left"></i>
        </button>
        <button class="task-btn-delete" id="${idx}">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>            
    </div>
  `  
}
