const menu_list_open = document.querySelector('.menu_list_open');
const nav_list = document.querySelector('.nav_list');
const menu_list_close = document.querySelector('.menu_list_close');
const nav_link = document.querySelectorAll('.nav_link');

let isOpen = false
const navOpenAndClose = () => {
    if(isOpen){
        console.log("isOpen",isOpen)
        nav_list.classList.remove('nav_list')
        nav_list.classList.add('show_menu' )
      
    }else{
        nav_list.classList.remove('show_menu')
        nav_list.classList.add("nav_list")
    }
}
if(menu_list_open){
    menu_list_open.addEventListener('click', () => {
        isOpen =true;
        navOpenAndClose()
       
        
    })
}

if(menu_list_close){
    menu_list_close.addEventListener('click', () => {
        isOpen = false;
        navOpenAndClose();
    })
}

nav_link.forEach(ele => {
    ele.addEventListener('click', () => {
        isOpen = false;
        navOpenAndClose();
    })
})

/*------skill----------- */
const font_end_ele =document.querySelector('.font-end');
const back_end_ele  = document.querySelector('.back-end');
const fontendArray =  [
    {skillName : "HTML", skillPercent : 80},{skillName : "CSS", skillPercent : 80 },
    {skillName : "Bootstrap", skillPercent : 80},
    {skillName : "JavaScript", skillPercent : 80},{skillName : "React", skillPercent : 80}
]
const backendArray = [
    {skillName : "Node.js / Express.js", skillPercent : 80},{skillName : "MongoBD / Mongoose", skillPercent : 70},
    {skillName : "Php", skillPercent : 80},{skillName : "Laravel", skillPercent : 80},
    {skillName : "Python", skillPercent : 80},

]

const skillShow = (skillName,skillPercent,className) => {
    
    return  `
        <div class="skill">
            <div class="skill_content">
                <span>${skillName}</span> <span>${skillPercent}%</span>
            </div>
            <div class="progress-bar">
                <div class="inside-progress-bar ${className}"></div>
            </div>
        </div>
        
    
    ` 
}

for(let i = 0 ; i<fontendArray.length ; i++){
    font_end_ele.innerHTML += skillShow(fontendArray[i].skillName , fontendArray[i].skillPercent)   
}


for(let i = 0 ;i<backendArray.length ; i++){
    back_end_ele.innerHTML += skillShow(backendArray[i].skillName , backendArray[i].skillPercent)
}


/*--------- project slide show-------- */
const projectArray = [
    {path : "assets/img/project_img/music_player.png", name: "Music Player" , link : "https://github.com/Kha0-tech/Music-Player"},
    {path : "assets/img/project_img/todo_list.png", name : "Todo List", 
    link :"https://www.youtube.com/"},
    {path : "assets/img/project_img/mongoDb.jpg", name : "MongoDb",
    link : "https://www.mongodb.com/"}

]
let projectCount = 0;
let projectShowNumber = 1;

const project_left_arrow = document.querySelector('.project_left_arrow');
const project_right_arrow = document.querySelector('.project_right_arrow');


const poject_count_link = (...paras) => {
    document.querySelector('.project_count').textContent = `${paras[0]} / ${projectArray.length}`
    document.querySelector('.project_slide_image').src = projectArray[paras[1]].path;
    document.querySelector('.project_github_link').href = projectArray[paras[1]].link;
}

poject_count_link(projectShowNumber,projectCount);

const projectSlideShow = () => {
    projectCount++
    if(projectCount > projectArray.length -1){
        projectCount = 0;
    }

    projectShowNumber ++;
    if(projectShowNumber > projectArray.length){
        projectShowNumber = 1
    }
    poject_count_link(projectShowNumber,projectCount);
}
project_right_arrow.addEventListener('click', () => {
    projectSlideShow()
})
setInterval(projectSlideShow,3000)
project_left_arrow.addEventListener('click',() => {
    projectCount --;
    if(projectCount === -1){
        projectCount = projectArray.length -1;
    }
    projectShowNumber --;
    if(projectShowNumber === 0){
        projectShowNumber = projectArray.length;
    }
    poject_count_link(projectShowNumber,projectCount);
    
})
