

// How to find total users count

use("aggregation");


// db.authors.count() // One way!

// db.users.aggregate([
//     // Stage 1:
//     {
//         $match: {
//             isActive:false
//         }
//     },
//     {
//         $count: 'nonActiveUsers'
//     }
// ]);














