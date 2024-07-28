

use("aggregation");


// How to count users who have 'enim' tag ;

db.users.aggregate([
  {
    $match: {
      tags: {
        $in: [ "enim" ] // Alll thoes who have this perticular field
      }
    }
  },
  {
    $group: {
      _id: null,
      usersCount: {
        $sum: 1
      }
    }
  }
])




