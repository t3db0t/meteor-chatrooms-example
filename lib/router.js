FlowRouter.route('/', {
	subscriptions: function(params) {
        this.register('rooms', Meteor.subscribe('rooms'));
    },
    action: function(params) {
        FlowLayout.render("rooms");
    }
});

FlowRouter.route('/room/:roomId', {
	subscriptions: function(params) {
        this.register('room', Meteor.subscribe('room', params.roomId));
    },
    action: function(params) {
        FlowLayout.render("room");
    }
});