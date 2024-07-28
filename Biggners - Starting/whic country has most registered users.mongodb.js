





use("aggregation");

// Which country has most registered users

db.users.aggregate([
  {
    $group: {
      _id: "$company.location.country",
      count:{
        $sum: 1
      }
    }
  },
  {
    $sort: {
      count: -1
    }
  },
  {
    $limit: 1
  }
])





