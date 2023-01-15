const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const fs = require('fs');

//get fight
router.get('/', async (req, res) => {
    try {
        fs.readFile('./fights.json', 'utf8', (err, data) => {
            var fights = JSON.parse(data);
            res.json(fights);
        })
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


// add fight
router.post('/', 
check('name', 'Name is required').exists(),
check('age', 'Please enter valid age').isNumeric(),
check('location', 'Please enter valid location').exists(),
check('time', 'Please enter valid time').exists(), //make it datetime
async (req, res) => {
  console.log(req)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } 
  
  const { name, age, location, time } = req.body;

    try {
      fs.readFile('./fights.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {
            const databases = JSON.parse(data);
              databases.push({
                userName:name,
                userAge:age,
                fightLocation:location,
                userTime:time,
      
            });
            fs.writeFile('./fights.json', JSON.stringify(databases, null, 4), (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);
                }
            })
            res.status(200).send('Sucess');
        }
    
    });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;