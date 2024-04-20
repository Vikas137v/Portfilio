
const tabs=document.querySelectorAll('[data-targets]'),
       tabContents=document.querySelectorAll('[data-content]')

 tabs.forEach(tab=>{
     tab.addEventListener('click',() =>{
         const targets=document.querySelector(tab.dataset.targets)

         tabContents.forEach(tc=>{
             tc.classList.remove('filters__active')
         })
         targets.classList.add('filters__active')
         
     })
})      



const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})