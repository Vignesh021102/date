let oldDate = new Date("2002-11-02")
let endDate = new Date("2102-11-02")
let newDate = new Date()
let time = newDate-oldDate
let numberOfWeeks = time / (1000*60*60*24*7)
let cube
let totalWeeks = (endDate-oldDate )/(1000*60*60*24*7)
console.log(totalWeeks)
for (let i = 0;i<totalWeeks;i++){
    cube = document.createElement('div')
    cube.className = "cube"
    // cube.innerText = i
    cube.style.background = (i <= numberOfWeeks)?"rgb(255, 255, 255)":"grey";
    document.querySelector("#container").appendChild(cube)
}
