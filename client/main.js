Template.rooms.helpers({
  roomList: function () {
    return Rooms.find();
  }
});

Template.rooms.events({
  'click #addButton': function (){
    console.log('clicked on addButton');
    Meteor.call('createNewRoom', function(err, data){
      console.log('Created room '+data);
      FlowRouter.go('/room/'+data);
    });
    return false;
  }
});

Template.room.helpers({
  title:function(){
    if(FlowRouter.subsReady()){
      return Rooms.findOne(FlowRouter.getParam("roomId")).name;
    } else {
      return "Loading...";
    }
  },
  log:function(){
    if(FlowRouter.subsReady()){
      // console.log(Rooms.findOne(FlowRouter.getParam("roomId")).log);
      return Rooms.findOne(FlowRouter.getParam("roomId")).log;
    } else {
      return [{"message":"Loading..."}];
    }
  }
});

Template.room.events({
  'click #backButton': function (){
    FlowRouter.go('/');
    return false;
  },
  'submit .logEntry': function(e,t){
    // var text = e.target.text.value;
    e.preventDefault();
    var text = $(".logInput").val().trim();
    if(text=="") return false;
    console.log("logEntry: "+text);
    Meteor.call("addLogEntry", FlowRouter.getParam("roomId"), text);
    // e.target.text.value = "";
    $(".logInput").val("");
    return false;
  }
});