Meteor.methods({
	createNewRoom:function(){
		console.log('createNewRoom');
		var roomId = Rooms.insert({
			"name":"New Room",
			// "creatorUserId":"",
			"log":[]
		});
		return roomId;
	},
	addLogEntry:function(roomId, text){
		// db.rooms.update({"_id":"bWMbBaeswB2bB4fY5"}, {$push: {log:{'test':'test'}}})

		console.log("addLogEntry");
		var query = {$push:{}};
		var logEntry = {
			"userId":"",
			"timestamp":new Date(),
			"message":text
		};
		query.$push['log'] = logEntry;
		Rooms.update(roomId, query);
	}
});