

// WHO HAS REGISTERED most recently

use("aggregation");

db.users.aggregate([
  {
    $sort: {
      "registered": -1
    }
  },
  {
    $project: {
      name:1,
      registered:1,
      age:1
    }
  }
])




