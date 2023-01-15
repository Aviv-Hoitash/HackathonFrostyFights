


fs.readFile('./fights.json', 'utf8', (err, data) => {
    var fights = JSON.parse(data);
    // const grid = document.getElementById("grid-container");
    fights.forEach(fight => {
        console.log(fight.userName)
        console.log("working?")
        const para = document.createElement("p");
        const node = document.createTextNode(fight.userName);
        para.appendChild(node);
        const element = document.getElementById("div1");
        element.appendChild(para);
    })
})

//aviv copy
function functionName(name,age,time) {
    fs.readFile('./fights.json', 'utf8', (err, data) => {
        var fights = JSON.parse(data);
        // const grid = document.getElementById("grid-container");
        fights.forEach(fight => {
            if(name == fight.userName && time == fight.time && location == fight.location){
                return fight
            }
        })
    })
  }