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
    {skillName : "HTML", skillPercent : 75},
    {skillName : "CSS", skillPercent : 65 },
    {skillName : "Bootstrap", skillPercent : 60},
    {skillName : "JavaScript", skillPercent : 75},
    {skillName : "React", skillPercent : 40}
]
const backendArray = [
    {skillName : "Node.js / Express.js", skillPercent : 30},
    {skillName : "MongoBD / Mongoose", skillPercent : 20},
    {skillName : "Php", skillPercent : 50},
    {skillName : "Python" ,skillPercent : 40},
    {skillName : "Java" ,skillPercent : 30}

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
    font_end_ele.innerHTML += skillShow(fontendArray[i].skillName , fontendArray[i].skillPercent,fontendArray[i].skillName)   
    
}


for(let i = 0 ;i<backendArray.length ; i++){
    back_end_ele.innerHTML += skillShow(backendArray[i].skillName , backendArray[i].skillPercent)
}

/*----------blog ------- */
const blogAry = [
    {path : 'assets/img/blog_img/html.jpg', content : "html",link : 'https://en.wikipedia.org/wiki/HTML'},
    {path : 'assets/img/blog_img/css.jpg', content : "css" , link : 'https://en.wikipedia.org/wiki/CSS'},
    {path : 'assets/img/blog_img/js.png', content : "JavaScript", link  : 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {path : 'assets/img/blog_img/mongoDb.jpg', content : "MongoDb" ,link: 'https://www.mongodb.com/'},
    {path : 'assets/img/blog_img/node.png', content : "Node.js" , link : 'https://nodejs.org/en/'},
    {path : 'assets/img/blog_img/php.jpg', content : "Php", link : 'https://www.php.net/'},
    {path : 'assets/img/blog_img/react.png', content : "Php", link : 'https://reactjs.org/'},

];
const blog = document.querySelector('.blog');
for(let i = 0 ; i< blogAry.length ; i++){
    const blog_card = `
    <div class="blog_card">
        <img src="${blogAry[i].path}" alt="html" class="blog_img">
        
        <a href="${blogAry[i].link}" target="_blank" class="blog_see_more">
            See More <i class="ri-arrow-right-line right-arrow"></i>
         </a>
    </div>
    `;
    blog.innerHTML += blog_card;
}
/*--------- project slide show-------- */
const projectArray = [
    {
        path : "assets/img/project_img/music_player.png", 
        projectTitle: "Music Player" ,
        link : "https://github.com/Kha0-tech/Music-Player",
        page : "projects/Music-Player/index.html"
    },
    {
        path : "assets/img/project_img/todo_list.png",
        projectTitle : "Todo List", 
        link :"https://github.com/Kha0-tech/todo_list",
        page : "projects/todo_list/index.html"
    },
    {   path : "assets/img/project_img/stop_watch.png",
        projectTitle : "Stopwatch",
        link : "https://github.com/Kha0-tech/stopwatch",
        page : "projects/Stopwatch/index.html"
    }

]
let projectCount = 0;
let projectShowNumber = 1;

const project_left_arrow = document.querySelector('.project_left_arrow');
const project_right_arrow = document.querySelector('.project_right_arrow');


const poject_count_link = (...paras) => {
    document.querySelector('.project_count').textContent = `${paras[0]} / ${projectArray.length}`
    document.querySelector('.project_slide_image').src = projectArray[paras[1]].path;
    document.querySelector('.project_github_link').href = projectArray[paras[1]].link;
    document.querySelector('.project_link').href = projectArray[paras[1]].page;
    document.querySelector('.project_title_link').textContent = projectArray[paras[1]].projectTitle;
    document.querySelector('.project_title_link').href = projectArray[paras[1]].page
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
/* -toast_alert-- */
const toast_alert = document.querySelector('.toast_alert');
const openAndCloseToastAlert= () => {
    const divEle = document.createElement('div')
    const btn = document.createElement('button')
    btn.classList.add("toast_alert_btn")
    btn.textContent = 'Accept'
    divEle.innerHTML = "This project creates HTM,CSS,JS ,Dynamic Portfolio"
    toast_alert.append(divEle,btn)
    toast_alert.style.bottom = `-${toast_alert.offsetHeight}px`
    setTimeout(() => {
        toast_alert.style.bottom = `0px`;
    },1000)
    btn.addEventListener('click', () => {
        localStorage.setItem("accept","true")
        toast_alert.style.bottom = `-${toast_alert.offsetHeight}px`
    })
}


window.addEventListener('load',() => {
    const accept = localStorage.getItem('accept')
    if(accept  !== 'true'){
        openAndCloseToastAlert()
    }
})
