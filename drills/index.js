'use strict';
/* eslint-disable no-inner-declarations */
/* eslint-disable quotes */
const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));

function sortFunction(list) { 
  for(let i = 0; i < list.length; i++){
    let j = i + 1;
    while(j > 0 && list[j - 1] > list[j]){
      let temp = list[j];
      list[j] = list[j - 1];
      list[j - 1] = temp;
      j++;
    }
  }
  return list;
}

module.exports = sortFunction;

app.get('/frequency', (req, res) => {
  const {s} = req.query;

  if (!s) {
    return res.status(400).send('Please enter a string query for response!');
  }

  let ourObj = s
    .toLowerCase()
    .split('')
    .reduce((acc,curr) => {
      if (acc[curr]) {
        acc[curr]++;
      }
      else{
        acc[curr] = 1;
      }
      return acc;
    }, {});

  let resultObj = {
    count: 0,
    average: 0,
    highest: '',
  };

  let highestValue = 0;

  Object.keys(ourObj).forEach(key => {
    if (ourObj[key] > highestValue) {
      highestValue = ourObj[key];
      resultObj.highest = key;
    }
  });

  resultObj.count = Object.keys(ourObj).length;
  resultObj.average = s.length / ourObj.count;

  res.json(resultObj);

});

app.listen(8000, function () {
  console.log('Ready');
});