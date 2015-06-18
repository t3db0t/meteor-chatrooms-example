Meteor.publish("rooms", function(){
	return Rooms.find();
});

Meteor.publish("room", function(roomId){
	// console.log("publishing room: "+Rooms.find(roomId).fetch());
	return Rooms.find(roomId);
});