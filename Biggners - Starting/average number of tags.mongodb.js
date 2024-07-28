

use("aggregation");

// Finding average number of tags


// db.users.aggregate([
//     {
//         $unwind: "$tags"
//     },
//     {
//         $group: {
//             _id: "$_id",
//             tagCount: {
//                 $sum: 1
//             }
//         }
//     },
//     {
//         $group: {
//             _id: null,
//             tagAverage: {
//                 $avg: "$tagCount"
//             }
//         }
//     },
//     {
//         $project: {
//             averageTags: {
//                 $round: ["$tagAverage", 2]
//             }
//         }
//     }
// ])



// Other way

// db.users.aggregate([
//     {
//         $project: {
//             tagCount: {
//                 $size: "$tags"
//             }
//         }
//     },
//     {
//         $group: {
//             _id: null,
//             averageTags: {
//                 $avg: "$tagCount"
//             }
//         }
//     },
//     {
//         $project: {
//             averageTags: {
//                 $round: ["$averageTags", 2]
//             }
//         }
//     }
// ])


// Another way;

// db.users.aggregate([
//     {
//         $addFields: {
//             tagCount: {
//                 $size: { $ifNull: ["$tags", []] } // Exceptiona Handeling
//             }
//         }
//     },
//     {
//         $group: {
//             _id: null,
//             averageTags: {
//                 $avg: "$tagCount"
//             }
//         }
//     }
// ])




