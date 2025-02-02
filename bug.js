```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {
    $lookup: {
      from: "otherCollection",
      localField: "_id",
      foreignField: "relatedId",
      as: "relatedData"
    }
  },
  {
    $unwind: "$relatedData" //This is where it may go wrong
  },
  {
    $match: {
      "relatedData.someField": "someValue"
    }
  }
])
```