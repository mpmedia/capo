function onGameRemoved_(game){
	var index = _.findWhere(self.list, {id: game.id});
	if (typeof index !== 'undefined'){
		index = index.id;
		$('.join-button[data-id="' +  index + '"]').closest('.row').remove();
		self.list.splice(index, 1);
	}
}

function bindListeners_(){
	mediator.on('player-controller:player', function(name){
		self.playerName = name;
	});

	mediator.publish('player:initialize', {player: 2});

}

function triggerData_(){
	mediator.trigger('game-started');

	mediator.subscribe('game-controller:mode', function(isLocalGame){
		el_.gamesListContainer.toggle();
	});
}