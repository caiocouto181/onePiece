const slider = document.querySelectorAll(".item5 img")
let i = 0
setInterval(slideImg, 15)
function slideImg()
{
    i++

    slider.forEach((f)=>
    {
        if(i > 799)
        {
            i = -1
        }
        f.style.transform = `translateX(-${i}px)`
    })
}
function hamburguerButton()
{
    const menuMobile = document.querySelector(".menuMobile")
    const header = document.querySelector("header")
    const opcoes = document.querySelector(".opcoes")
    menuMobile.onclick = ()=>
    {
        menuMobile.classList.toggle("open")
        header.classList.toggle("openHeader")
        opcoes.classList.toggle("openOpcoes")
    }
}
hamburguerButton()