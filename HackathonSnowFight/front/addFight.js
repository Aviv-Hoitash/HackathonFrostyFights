// const fs = require('fs');
// fs.readFile('./fights.json', 'utf8', (err, data) => {
//     if (err) {
//         console.log(`Error reading file from disk: ${err}`);
//     } else {
//         const databases = JSON.parse(data);
//           databases.push({
//             userName:"Aviv",
//             userAge:"15",
//             fightLocation:"newton south high school",
//             userTime:"15:00"
//         });
//         fs.writeFile('./serverDicts.json', JSON.stringify(databases, null, 4), (err) => {
//             if (err) {
//                 console.log(`Error writing file: ${err}`);
//             }
//         })
//     }

// });
const form = document.querySelector('.fightForm');
const button = document.getElementById('addFight');

    button.addEventListener('click', e => {
        e.preventDefault();
        const formData = new FormData(form);
        let formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        localStorage.setItem("formData", JSON.stringify(formObject));
    }); 

const storedData = JSON.parse(localStorage.getItem("formData"));

fs.writeFileSync('fights.json', JSON.stringify(storedData));
console.log("Data saved to formData.json file");



// var list = [f1, f2, f3]

// var f1 = {
//     Name: "Ethan K",
//     age: 16,
//     location: "Newton South Highschool",
//     time: "6:45 PM"
// };

// var f2 = {
//     Name: "Noam E",
//     age: 15,
//     location: "Water Town",
//     time: "2:34 AM"
// };

// var f3 = {
//     Name: "Aviv H",
//     age: 15,
//     location: "Needham",
//     time: "1:12 PM"
// };
