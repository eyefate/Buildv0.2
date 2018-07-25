angular.module('angular-editor-fabric-js', ['ngRoute', 'cfp.hotkeys']);

$.getScript('./app/app.components.ts', removeSelected()
{ removeSelected()
    // script is now loaded and executed.
    // put your dependent JS here.
});

hotkeys.add({
  combo: 'a',
  description: 'Delete Buttom',
  callback: removeSelected() {
    event.preventDefault();
  }
});
