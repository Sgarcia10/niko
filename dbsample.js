db.categories.find().forEach(function(myDoc){ 
    var questions = myDoc.questions;
    for (var i = 0; i < questions.length; i++) {
        var q = questions[i];
        q.idCategory=myDoc._id.valueOf();
    }
    db.categories.updateOne(
    {_id: myDoc._id},
    {$set : {questions:questions}});
 });