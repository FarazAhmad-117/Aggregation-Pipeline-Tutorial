


// Categorize all users on basis of favorite Fruits

use("aggregation");

db.users.aggregate([
  {
    $group: {
      _id: "$favoriteFruit",
      users:{
        $push:"$$ROOT"
      }
    }
  }
])




