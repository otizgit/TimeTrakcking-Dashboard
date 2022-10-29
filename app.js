const toggle = document.querySelectorAll('.toggle')
const div = document.querySelectorAll('.no-overflow')
const toggles = document.querySelector('.toggles')
const innerToggle = document.querySelectorAll('.inner-toggle')
const iT = document.querySelectorAll('.it')
const ellipsis = document.querySelectorAll('.ellipsis')
const time = document.querySelectorAll('.time')
const track = document.querySelectorAll('.track')

toggle[0].addEventListener('click', function(){
    toggle[0].classList.add('active')

    time[0].textContent = "5hrs"
    track[0].textContent = "Yesterday - 7hrs"

    time[1].textContent = "1hr"
    track[1].textContent = "Yesterday - 2hrs"

    time[2].textContent = "0hr"
    track[2].textContent = "Yesterday - 1hr"

    time[3].textContent = "1hr"
    track[3].textContent = "Yesterday - 1hr"

    time[4].textContent = "0hr"
    track[4].textContent = "Yesterday - 3hrs"

    time[5].textContent = "0hr"
    track[5].textContent = "Yesterday - 1hr"
})

toggle[1].addEventListener('click', function(){
    toggle[1].classList.add('active')
    time[0].textContent = "32hrs"
    track[0].textContent = "Last Week - 36hrs"

    time[1].textContent = "10hrs"
    track[1].textContent = "Last Week - 8hrs"

    time[2].textContent = "4hrs"
    track[2].textContent = "Last Week - 7hrs"

    time[3].textContent = "4hrs"
    track[3].textContent = "Last Week - 5hrs"

    time[4].textContent = "5hrs"
    track[4].textContent = "Last Week - 10hrs"

    time[5].textContent = "2hrs"
    track[5].textContent = "Last Week - 2hrs"
})

toggle[2].addEventListener('click', function(){
    toggle[2].classList.add('active')

    time[0].innerHTML = "103hrs"
    track[0].textContent = "Last Month - 128hrs"

    time[1].innerHTML = "23hrs"
    track[1].innerHTML = "Last Month - 29hrs"

    time[2].innerHTML = "13hrs"
    track[2].innerHTML = "Last Month - 19hrs"

    time[3].textContent = "11hrs"
    track[3].textContent = "Last Month - 18hrs"

    time[4].textContent = "21hrs"
    track[4].textContent = "Last Month - 23hrs"

    time[5].textContent = "7hrs"
    track[5].textContent = "Last Month - 11hrs"
})

ellipsis[0].addEventListener('click', function(){
    innerToggle[0].classList.toggle('display-inner')
    innerToggle[1].classList.remove('display-inner')
    innerToggle[2].classList.remove('display-inner')
    innerToggle[3].classList.remove('display-inner')
    innerToggle[4].classList.remove('display-inner')
    innerToggle[5].classList.remove('display-inner')
})

ellipsis[1].addEventListener('click', function(){
    innerToggle[1].classList.toggle('display-inner')
    innerToggle[0].classList.remove('display-inner')
    innerToggle[2].classList.remove('display-inner')
    innerToggle[3].classList.remove('display-inner')
    innerToggle[4].classList.remove('display-inner')
    innerToggle[5].classList.remove('display-inner')
})

ellipsis[2].addEventListener('click', function(){
    innerToggle[2].classList.toggle('display-inner')
    innerToggle[1].classList.remove('display-inner')
    innerToggle[0].classList.remove('display-inner')
    innerToggle[3].classList.remove('display-inner')
    innerToggle[4].classList.remove('display-inner')
    innerToggle[5].classList.remove('display-inner')
})

ellipsis[3].addEventListener('click', function(){
    innerToggle[3].classList.toggle('display-inner')
    innerToggle[1].classList.remove('display-inner')
    innerToggle[2].classList.remove('display-inner')
    innerToggle[0].classList.remove('display-inner')
    innerToggle[4].classList.remove('display-inner')
    innerToggle[5].classList.remove('display-inner')
})

ellipsis[4].addEventListener('click', function(){
    innerToggle[4].classList.toggle('display-inner')
    innerToggle[1].classList.remove('display-inner')
    innerToggle[2].classList.remove('display-inner')
    innerToggle[3].classList.remove('display-inner')
    innerToggle[0].classList.remove('display-inner')
    innerToggle[5].classList.remove('display-inner')
})

ellipsis[5].addEventListener('click', function(){
    innerToggle[5].classList.toggle('display-inner')
    innerToggle[1].classList.remove('display-inner')
    innerToggle[2].classList.remove('display-inner')
    innerToggle[3].classList.remove('display-inner')
    innerToggle[4].classList.remove('display-inner')
    innerToggle[0].classList.remove('display-inner')
})


iT[0].addEventListener('click', function(){
    time[0].textContent = "5hrs"
    track[0].textContent = "Yesterday - 7hrs"
})

iT[1].addEventListener('click', function(){
    time[0].textContent = "32hrs"
    track[0].textContent = "Last Week - 36hrs"
})

iT[2].addEventListener('click', function(){
    time[0].innerHTML = "103hrs"
    track[0].textContent = "Last Month - 128hrs"
})

iT[3].addEventListener('click', function(){
    time[1].textContent = "1hr"
    track[1].textContent = "Yesterday - 2hrs"
})

iT[4].addEventListener('click', function(){
    time[1].textContent = "10hrs"
    track[1].textContent = "Last Week - 8hrs"
})

iT[5].addEventListener('click', function(){
    time[1].innerHTML = "23hrs"
    track[1].innerHTML = "Last Month - 29hrs"
})

iT[6].addEventListener('click', function(){
    time[2].textContent = "0hr"
    track[2].textContent = "Yesterday - 1hr"
})

iT[7].addEventListener('click', function(){
    time[2].textContent = "4hrs"
    track[2].textContent = "Last Week - 7hrs"
})

iT[8].addEventListener('click', function(){
    time[2].innerHTML = "13hrs"
    track[2].innerHTML = "Last Month - 19hrs"
})

iT[9].addEventListener('click', function(){
    time[3].textContent = "1hr"
    track[3].textContent = "Yesterday - 1hr"
})

iT[10].addEventListener('click', function(){
    time[3].textContent = "4hrs"
    track[3].textContent = "Last Week - 5hrs"
})

iT[11].addEventListener('click', function(){
    time[3].textContent = "11hrs"
    track[3].textContent = "Last Month - 18hrs"
})

iT[12].addEventListener('click', function(){
    time[4].textContent = "0hr"
    track[4].textContent = "Yesterday - 3hrs"
})

iT[13].addEventListener('click', function(){
    time[4].textContent = "5hrs"
    track[4].textContent = "Last Week - 10hrs"
})

iT[14].addEventListener('click', function(){
    time[4].textContent = "21hrs"
    track[4].textContent = "Last Month - 23hrs"
})

iT[15].addEventListener('click', function(){
    time[5].textContent = "0hr"
    track[5].textContent = "Yesterday - 1hr"
})

iT[16].addEventListener('click', function(){
    time[5].textContent = "2hrs"
    track[5].textContent = "Last Week - 2hrs"
})

iT[17].addEventListener('click', function(){
    time[5].textContent = "7hrs"
    track[5].textContent = "Last Month - 11hrs"
})

toggles.onclick = function(e){
    if (e.target !== toggles && e.target !== toggle[0]){
        toggle[0].classList.remove('active')
    }
    if (e.target !== toggles && e.target !== toggle[1]){
        toggle[1].classList.remove('active')
    }
    if (e.target !== toggles && e.target !== toggle[2]){
        toggle[2].classList.remove('active')
    }
}

iT.forEach(function(itDiv){
    itDiv.addEventListener('click', function(){
        innerToggle.forEach(function(innerToggles){
            innerToggles.classList.remove('display-inner')
        })
    })
})

document.onclick = function(e){
    if (e.target.id !== 'ellips' && e.target.id !== 'ellips2' && e.target.id !== 'ellips3' && e.target.id !== 'ellips4' && e.target.id !== 'ellips5' && e.target.id !== 'ellips6'){
        innerToggle.forEach(function(innerToggles){
            innerToggles.classList.remove('display-inner')
        })
    }
}