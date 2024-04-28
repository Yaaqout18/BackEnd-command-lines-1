const fs = require("fs");

const addPerson = (id, fName, lName, city) => {
  const allData = loadData();
  const duplicatedData = allData.filter((obj) => {
    return obj.id === id;
  });
  if (duplicatedData.length == 0) {
    allData.push({
      id: id,
      fName: fName,
      lName: lName,
      city: city,
    });
    console.log("added this item successfully ✅");
    saveAllData(allData);
  } else {
    console.log("Error  Duplicated data");
  }
};

// /////////////////////

const loadData = () => {
  try {
    const dataJson = fs.readFileSync("./alldata.json", "utf8");
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

// ///////////////////////////////

const saveAllData = (allData) => {
  const allDataJson = JSON.stringify(allData);
  fs.writeFileSync("./alldata.json", allDataJson);
};

//  delete data

const deleteData = (id) => {
  const allData = loadData();

  const dataToKeep = allData.filter((obj) => {
    return obj.id != id;
  });
  saveAllData(dataToKeep);
  console.log(" @@  🗑️ you have deleted an item that has id number : ", id);
  console.log(
    " ## 🧾 there is ",
    dataToKeep.length,
    " items inside your data ⤵️."
  );
  console.table(dataToKeep);
};

//  read data
const readData = (id) => {
  const allData = loadData();
  const itemNeeded = allData.find((obj) => {
    return obj.id == id;
  });
  if (itemNeeded) {
    console.log("this is all data about element :", itemNeeded.id);
    console.table(itemNeeded);
  } else {
    console.log("This item is not found ⚠️");
  }
};

// List data
const listData = () => {
  const allData = loadData();
  console.log("this is all data ✨");
  allData.forEach((elements) => {
    console.table(elements);
  });
};

module.exports = {
  addPerson,
  deleteData,
  readData,
  listData,
};
