console.log( 'js' );

// our first NG app, must be added to html element around any controllers
var myApp = angular.module( 'myApp', [] );

// our first controller, $scope is an injected dependency
// is bound to a div in HTML which defines it's scope
myApp.controller( 'commanderDreamboat', [ '$scope', function( $scope ){
  console.log( 'NG' );
  // just to show you can do old school JS in here...
  var protonTorpedoes = 12;
  console.log( 'protonTorpedoes:', protonTorpedoes );

  // this function is called in the ng-click in HTML
  $scope.getCrystals = function(){
    console.log( 'in getCrystals' );
    // $scope.crystals is bound to the input html element's ng-model
    console.log( 'crystals as input:', $scope.crystals );
  } // end getCrystals
}]); // end controller
