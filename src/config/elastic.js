require('dotenv').config();
let elasticsearch = require('elasticsearch');
let elasticConnect = elasticsearch.Client({
    host: process.env.ELASTIC_HOST,
});

elasticConnect.ping({
    requestTimeout: 30000
}, function(error) {
    if (error) {
        console.log(error);
        console.log('elasticsearch cluster is down!');
    } else {
        console.log('Connect to Elasticsearch OK.');
    }
});


// DELETE /graduate_project
//
// DELETE /graduate_project/posts/1
//
// PUT graduate_project
// {
//     "mappings": {
//     "type_name": {
//         "properties" : {
//             "postId" : {
//                 "type" : "integer"
//             },
//             "writerId" : {
//                 "type" : "integer"
//             },
//             "title" : {
//                 "type" : "text"
//             },
//             "content" : {
//                 "type" : "text"
//             },
//             "image" : {
//                 "type" : "text"
//             }
//         }}
// }
// }
//
// PUT /graduate_project/post/2
// {
//     "postId": "3",
//     "writerId": "6",
//     "title": "test post 2",
//     "content":"Lorem Ipsum is  bac si pham van tuan simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//     "image":"default"
// }
//
//
// GET /graduate_project/posts/_search
// {
//     "query": {
//     "multi_match": {
//         "query": "test post phạm văn tuấn",
//             "type": "most_fields",
//             "fields": [ "title", "content" ]
//     }
// },
//     "highlight": {
//     "pre_tags": [ "<strong>" ],
//         "post_tags": [ "</strong>" ],
//         "fields": {
//         "title": {
//             "fragment_size": 200,
//                 "number_of_fragments": 1
//         },
//         "content": {
//             "fragment_size": 200,
//                 "number_of_fragments": 1
//         }
//     }
// }
// }

module.eports = {
    elasticConnect: elasticConnect
};