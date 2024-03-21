require('dotenv').config();
const { default: mongoose } = require('mongoose');
const statisticsModel = require('../../model/statisticsModel')
const asyncHandle = require('express-async-handler');

//CreateUpdate 
const CreateUpdateStatistic = async (req,res) => {
    const {name,year,userId,expense,revenue} = req.body;

}
   
