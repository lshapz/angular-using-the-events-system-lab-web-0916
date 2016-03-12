function Contact() {
	return {
		restrict: 'E',
		template: [
			'<div class="contact">',
				'Name: {{ ctrl.contact.name.title }} {{ ctrl.contact.name.first }} {{ ctrl.contact.name.last }} - <a href="" ng-click="ctrl.remove()">Remove</a>',
			'</div>'
		].join(''),
		controller: function () {
			this.remove = function () {

			};
		},
		controllerAs: 'ctrl',
		bindToController: {
			id: '=',
			contact: '='
		}
	}
}

angular
	.module('app')
	.directive('contact', Contact);