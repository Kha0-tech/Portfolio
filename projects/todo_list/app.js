const form_control = document.querySelector(".form_control");
const todo_list = document.querySelector('.todo_list');


form_control.addEventListener('change',(event) => {
    const eventValue = event.target.value;

    const todoEle=document.createElement('div')
    todoEle.classList.add('todo');

    const inputContentEl = document.createElement('input');
    inputContentEl.value = eventValue ;
    inputContentEl.classList.add('inputContentEl')
    inputContentEl.setAttribute('readonly','readonly')

    const btnGroupEle = document.createElement('div');
    const deleteEle = document.createElement('i')
    deleteEle.classList.add('ri-delete-bin-5-line')

    const editEle = document.createElement('i');
    editEle.classList.add('ri-edit-2-line')

    const editSave = document.createElement('i');
    editSave.classList.add('ri-save-line');

    btnGroupEle.append(editEle,editSave , deleteEle);

    todoEle.append(inputContentEl,btnGroupEle)
    todo_list.append(todoEle)

    form_control.value = ""

    deleteEle.addEventListener('click',() => {
        console.log('delete')
        todoEle.remove();
    })

    editEle.addEventListener('click',() => {
        inputContentEl.removeAttribute('readonly')
        inputContentEl.focus();
        editEle.style.display = "none";
        editSave.style.display = "inline"
    })

    editSave.addEventListener('click', () => {
        inputContentEl.setAttribute('readonly','readonly');
        editEle.style.display = "inline";
        editSave.style.display= "none"
    })
})