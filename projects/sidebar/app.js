const sidebar = document.querySelector('.sidebar')
const sidebarToggleBtn = document.querySelector('.sidebar-toggle')
const sidebarCloseBtn = document.querySelector('.close-btn')

sidebarToggleBtn.addEventListener('click', function(){
    // console.log(sidebar.classList)
    sidebar.classList.toggle('show-sidebar')
})

sidebarCloseBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
})

