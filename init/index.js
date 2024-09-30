const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

main().then(()=>{
    console.log("connected DB")
}).catch((err)=>{
    console.log(err)
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/explore_unknowncity");
};

const initDB = async()=>{
    await Listing.deleteMany({});
    let data = await Listing.insertMany(initData.data);
    console.log(data)
}

initDB();