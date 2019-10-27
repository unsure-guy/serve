console.log('server started')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
            console.log(data)
    })
})


var form = document.getElementsByTagName('form')
var info = document.getElementById('num')
var para= document.getElementsByTagName('p')


form[0].addEventListener('submit' , (e)=>{
    val = info.value
    e.preventDefault()
    console.log('hello' , val)
    if(!val){
        console.log('this has value')
    }
    para[0].textContent = val
    
})