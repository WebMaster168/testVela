const languageBtn = document.querySelectorAll('.header__international-language')
const menuBtn = document.querySelector('.header__menu')
const catalog = document.querySelector('.header__catalog')
const features = document.querySelector('.header__top')
const info = document.querySelector('.header__info')
const featureMenu = document.querySelector('.header__people')
const buttons = document.querySelectorAll('.btn-menu')
const categoryesList = document.querySelectorAll('.header__inner')
const categoryesBtns = document.querySelectorAll('.header__categoryes-btn')
const categoryesInputs = document.querySelector('.header__categoryes')
const feature = document.querySelector('.header__features')
const bottom = document.querySelector('.header__features-bottom')
const featureTop = document.querySelector('.header__features-top')
const featureInner = document.querySelector('.header__features-inner')
const itemCatalog = document.querySelector('#header__item-first')
const menuCatalog = document.querySelector('#header__first-menu')
const itemPeople = document.querySelector('#header__item-second')
const menuPeople = document.querySelector('#header__second-menu')
const btnClick = document.querySelector('.header__features-btn--width')
const btnMain = document.querySelector('.header__features-main')
const international = document.querySelector('.header__international')
const internationalContainer = document.querySelector('.header__international-wrapper')
const infoMobile = document.querySelector('.header__info--mobile')
const phoneContainer = document.querySelector('.header__contacts-phone')
const phone = document.querySelector('.header__contacts-phone a')
const btnItem = document.querySelector('.header__buttons-item--position')
const btnContainer = document.querySelector('.header__buttons')
const favourites = document.querySelector('.header__buttons-item--firstChild')
const search = document.querySelector('.header__search')
const searchBtn = document.querySelector('.header__search-btn')
const btnActive = document.querySelector('.header__inner.header__inner--active')
const headerMain = document.querySelector('.header__main-inner')
const city = document.querySelector('.header__contacts-city')
const work = document.querySelector('.header__work')
const social = document.querySelector('.header__social')
const list = document.querySelector('.header__list')
const wrapperMenu = document.createElement('div')
const menuTop = document.createElement('div')
const menuInfo = document.createElement('div')
const linkInner = document.createElement('li')
const link = document.createElement('button')
const create = document.querySelector('.header__create')
const links = document.querySelector('.header__links')
const innerMenu = document.createElement('div')
const listTitles = document.querySelectorAll('.header__menuList-title')


link.textContent = 'Каталог'

let isScrolled = false

let menuArray= []
const menuTitle = document.createElement('h2')


function changeLanguage(event){
    languageBtn.forEach(item=>{
        
        item.classList.remove('header__international-language--active')
        
    })

    event.target.classList.add('header__international-language--active')
}

function toggleMenu(value){
    
    switch(value){
        case 'menu':
            
            
            if(window.innerWidth < 988){
                catalog.classList.remove('header__catalog--visible')
                innerMenu.classList.toggle('hidden')
                menuBtn.classList.toggle('active')
            }else{
                featureMenu.classList.remove('header__people--visible')
                catalog.classList.toggle('header__catalog--visible')
            }
            
            break
        case 'feature':
            
            catalog.classList.remove('header__catalog--visible')
            featureMenu.classList.toggle('header__people--visible')
            break
        default:
            break
    }
    

}
function editElements(){
    menuInfo.prepend(city)
    menuInfo.appendChild(work)
    menuTop.prepend(menuInfo)
    menuTop.appendChild(social)
    catalog.prepend(menuTitle)
    linkInner.appendChild(link)
    list.appendChild(create)
    list.prepend(linkInner)
    
    
    wrapperMenu.prepend(list)
    wrapperMenu.prepend(menuTop)
    wrapperMenu.append(links)
    innerMenu.prepend(catalog)
    innerMenu.prepend(wrapperMenu)
    headerMain.prepend(innerMenu)
}
function addClasses(){
    
    catalog.classList.add('container')
    //catalog.classList.remove('header__catalog--visible')
    work.classList.add('header__work--after')
    menuInfo.classList.add('menu__info')
    wrapperMenu.classList.add('menu__wrapper')
    menuTop.classList.add('menu__top', 'container')
    menuTitle.classList.add('menuTitle')
    
    list.classList.add('container')
    link.classList.add('header__item-btn', 'header__item-btn--before')
    linkInner.classList.add('header__item')
    links.classList.add('container')
}
function removeClasses(){
    menuInfo.classList.remove('menu__info')
    wrapperMenu.classList.remove('menu__wrapper', 'hidden')
    menuTop.classList.remove('menu__top', 'container')
    menuTitle.classList.add('menuTitle')
    list.classList.remove('container')
    link.classList.remove('header__item-btn', 'header__item-btn--before')
    linkInner.classList.remove('header__item')
    links.classList.remove('container')
}
categoryesList.forEach(item=>{
    menuArray.push(item)
})


languageBtn.forEach(item=>{
    
    item.addEventListener('click', (event)=>changeLanguage(event))
    
})

buttons.forEach(item=>{
    const value = item.dataset.modal
    item.addEventListener('click', ()=>toggleMenu(value))
})
function initScroll(){
   if(window.scrollY > 0){
        //console.log('Сброс', window.scrollY)
        window.scrollTo(0, 0)
    } 
}
function moveElement(container1, container2, element, action, exist, featureTop){
    if(window.innerWidth < 988){
        if(exist){
            if(action === 'prepend'){
            
                container2.prepend(element)
            }else if(action === 'append'){
            
                container2.appendChild(element)
            
            }else if(action === 'after'){
                container2.after(element)
            }else if(action === 'before'){
                container2.before(element)
            }
        }else{
            if(action === 'prepend'){
                if(!container2.contains(element)){
                    container2.prepend(element)
                }
            }else if(action === 'append'){
                if(!container2.contains(element)){
                    container2.appendChild(element)
                }
            }
        }
        addClasses()
        menuTitle.textContent = 'Каталог'
        
        
        menuTitle.addEventListener('click', function(){
            wrapperMenu.classList.remove('hidden')
            catalog.classList.remove('header__catalog--visible')
        })
        
        listTitles.forEach(item=>{
            
            item.addEventListener('click', function(){
                categoryesList.forEach(el=>{
                    el.classList.remove('header__inner--active')
                })
                catalog.classList.add('header__catalog--visible')
                categoryesInputs.style.display = 'block'
                menuTitle.style.display = 'block'
            })
        })
        link.addEventListener('click', function(){
            wrapperMenu.classList.add('hidden')
            catalog.classList.add('header__catalog--visible')
        })
        
        menuCatalog.classList.remove('header__inner--active')
        catalog.classList.remove('header__catalog--visible')
    }else{
        if(action === 'prepend'){
            if(!container1.contains(element)){
                container1.prepend(element)
            }
        }else if(action === 'append'){
            if(!container1.contains(element)){
                container1.appendChild(element)
            }
        }else if(action === 'after'){
            container1.after(element)
        }else if(action === 'before'){
            container1.before(element)
        }
       
    }
    
    searchBtn.textContent = window.innerWidth < 461 ? '' : 'Найти'
    
    
    
}




window.addEventListener('load', initScroll)
window.addEventListener('load', ()=>{
    if(window.innerWidth < 988){
        editElements()
        addClasses()
        innerMenu.classList.add('menu__inner', 'hidden')
    }{
        //removeClasses()
    }
    moveElement(internationalContainer, infoMobile, international, 'prepend')
    moveElement(phoneContainer, infoMobile, phone,'append', true)
    moveElement(featureTop, bottom, search,'append')
    moveElement(favourites, menuBtn, btnItem, 'after', true)
    moveElement(btnMain, btnContainer, btnClick, 'before', true)
    moveElement(featureInner, headerMain, catalog, 'prepend')
    
})

let flag = false
window.addEventListener('resize', ()=>{
    if(window.innerWidth < 988 && !flag){
        editElements()
        addClasses()
        flag = true
        innerMenu.classList.add('menu__inner', 'hidden')
    }{
        removeClasses()
    }
    moveElement(internationalContainer, infoMobile, international, 'prepend')
    moveElement(phoneContainer, infoMobile, phone,'append', true)
    moveElement(featureTop, bottom, search,'append')
    moveElement(favourites, menuBtn, btnItem, 'after', true)
    moveElement(btnMain, btnContainer, btnClick, 'before', true)
    moveElement(featureInner, headerMain, catalog, 'prepend')
    
})

window.addEventListener('scroll', function () {
    
    if(!isScrolled && window.scrollY > 65){
        
        isScrolled = true
        info.classList.add('hidden')
        feature.classList.add('hidden')
        features.style.transform = 'translateY(-35px)'
        bottom.classList.add('hidden')
        catalog.classList.add('hidden')
        featureMenu.classList.add('hidden')
        featureTop.style.transform = 'translateY(15px)'
        
        if(window.innerWidth < 988){
            feature.style.marginTop = '-6px'
            featureTop.style.transform = 'translateY(0px)'
            search.classList.add('hidden')
            
            setTimeout(() => {
                bottom.style.display = 'none'
            }, 100);
        }else{
            setTimeout(() => {
                        bottom.style.display = 'none'
            }, 400);
        }
        
    }else if(window.scrollY === 0){
        isScrolled = false
        info.classList.remove('hidden')
        feature.classList.remove('hidden')
        features.style.transform = 'translateY(0px)'
        bottom.style.display = 'flex'
        bottom.classList.remove('hidden')
        featureTop.style.transform = 'translateY(0px)'
        catalog.classList.remove('hidden')
        featureMenu.classList.remove('hidden')
        search.classList.remove('hidden')
        if(window.innerWidth < 987){
            feature.style.marginTop = '0px'
            featureTop.style.transform = 'translateY(0px)'
            search.classList.remove('hidden')
            wrapperMenu.classList.remove('marginTop')
        }
        
    }
    

})

function openMenu(e,value, btn){
    categoryesBtns.forEach(item=>{
        
        item.classList.remove('header__categoryes-btn--active')
        
    })
    if(window.innerWidth < 987){
        menuTitle.style.display = 'none'
        categoryesInputs.style.display = 'none'
    }
    categoryesList.forEach(item=>{
        
        item.classList.remove('header__inner--active')
        
    })
    if(catalog.classList.contains('header__catalog--visible')){
        
        itemPeople.classList.add('header__categoryes-btn--active')
        menuPeople.classList.add('header__inner--active')
    }else if(featureMenu.classList.contains('header__people--visible')){
        
        itemCatalog.classList.add('header__categoryes-btn--active')
        menuCatalog.classList.add('header__inner--active')
    }
    btn.classList.add('header__categoryes-btn--active')
    const menuItem = menuArray.find(item=>item.dataset.category === value)
    
    
    menuItem.classList.add('header__inner--active')
    
    
}
categoryesBtns.forEach(item=>{
    const value = item.dataset.category
    
    
    item.addEventListener('click', (e)=>openMenu(e,value,item))
})