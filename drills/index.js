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
  const s = req.query.s;
  let ourArr = s.split('');
  let resultObj = {
    count: 0,
    average: (this.a + this.b) / (this.count),
    highest: '', 
  };

  ourArr.forEach(letter => {
    if (letter in resultObj) {
      resultObj.letter = resultObj.letter + 1;
    }
    else {
      resultObj.letter = 1;
      resultObj.count = resultObj.count + 1;
    }
  });

  

});