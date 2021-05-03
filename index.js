// Write your code here!
//const element = document.createElement('div'); 
document.querySelector('#main')
.remove("main")

//const newHeader = ('h1#victory') 
//document.body.appendChild(newHeader)

const newHeader = document.createElement("h1")
newHeader.id = 'victory'

newHeader.innerHTML = 'YOUR-NAME is the champion'
