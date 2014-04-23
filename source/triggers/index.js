var actions = require('../actions');

function userRegistered(bus) {
	bus.subscribe('user-registered', function (e) {
		actions.sendWelcomeEmail(e);
	});

	bus.subscribe('collection-created', function (e) {
		actions.sendNotifyFollowersCollectionCreated(e);
	});

	bus.subscribe('collection-followed', function (e) {
		actions.sendNotifyOwnerCollectionFollowed(e);
	});

	bus.subscribe('collection-item-added', function (e) {
		// disable as for now, since it's too noisy
		// actions.sendNotifyFollowersNewItemAdded(e);
	});

	bus.subscribe('user-feedback', function (e) {
		actions.sendNotifyToDevelopers(e);
	});
}

module.exports = userRegistered;