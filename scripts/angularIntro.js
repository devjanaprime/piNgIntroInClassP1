console.log( 'js' );

var myApp = angular.module( 'myApp', [] );

myApp.controller( 'commanderDreamboat', [ '$scope', function( $scope ){
  console.log( 'NG' );
  var protonTorpedoes = 12;
  console.log( 'protonTorpedoes:', protonTorpedoes );

  $scope.getCrystals = function(){
    console.log( 'in getCrystals' );
    console.log( 'crystals as input:', $scope.crystals );
  } // end getCrystals

}]); // end controller
