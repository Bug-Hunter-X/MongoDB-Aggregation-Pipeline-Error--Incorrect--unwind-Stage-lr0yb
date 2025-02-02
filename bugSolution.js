```javascript
//Correct aggregation pipeline to avoid unexpected results
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
    $unwind: {
      path: "$relatedData",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $match: {
      "relatedData.someField": "someValue"
    }
  }
])
```