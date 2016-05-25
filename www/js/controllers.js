angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('homeCtrl', function ($scope, $state, $ionicHistory, $ionicLoading){
  $scope.submitLogin = function (){
  }

  $scope.submitSignup = function (){
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();
    $ionicHistory.nextViewOptions({disableAnimate: true, disableBack: true});
    $state.go('app.main');
  }
})
.controller('MainCtrl', function ($scope, $state, $ionicPopup, $ionicHistory, $ionicLoading, $compile){

  $scope.showambulancia = function() {
    var alertPopup = $ionicPopup.alert({
     title: 'Buscando ambulacia',
     template: "<p style='text-align:center;'>Por favor espere...</p>"
    });
  }


 
      function initialize() {
        var myLatlng = new google.maps.LatLng(10.9794078,-74.7941095);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
   
  
})
.controller('PlaylistsCtrl', function($scope,$rootScope, $state) {
  $scope.playlists = [
    { title: 'RCP', id: 1 },
    { title: 'Caidas', id: 2 },
    { title: 'Accidentes de transito', id: 3 },
    { title: 'Cortadura', id: 4 },
    { title: 'Envenenamientos', id: 5 },
    { title: 'Paro cardiaco', id: 6},
    { title: 'Asfixia', id: 7 },
    { title: 'Desmayo', id: 8 },
    { title: 'Convulsiones', id: 9 }
  ];

    $scope.detail = function (ad_id){
      console.log("hola " + ad_id)
    $state.go('app.single', {"adId": ad_id});
    
  }
})

.controller('PlaylistCtrl', function($scope,$rootScope, $filter, $ionicLoading, $stateParams, $state) {
  
   var found = $filter('filter')($rootScope.ads, {
    id: parseInt($stateParams.adId)
  }, true);
   console.log("hola2 " + $stateParams.adId);

   if ($stateParams.adId==1) {
        $scope.playlist = [
    {
      id: '1',
      titulo: 'RCP',
      descripcion: '1. Corrobore que el sitio sea seguro y recuerde el concepto de bioseguridad. 2. Verifique que la victima esté boca arriba sobre una superficie plana y firme.  3. Arrodíllese al lado de la victima. 4. Tómela de los hombros y, comprimiéndolos firmemente, pregúntele si se encuentra bien.5. Si no responde, pida a alguien que llame a Emergencias. 6. Quite la ropa de la victima y observe atentamente su pecho por al menos 5 segundos y por no más de 10 , si no respira comience las compresiones. 7. Si la persona respira colóquela en la Posición Lateral de Seguridad. 8. Si la persona no respira coloque la base de la palma de una mano en el centro del pecho, entre sus pezones. Apoye la base de la otra sobre la primera entrelazando los dedos y realice compresiones a una velocidad de al menos 100 por minuto.'
    }    
   ];

   }
  if ($stateParams.adId==2) {
        $scope.playlist = [
    {
      id: '2',
      titulo: 'Caidas',
      descripcion: '1'
    }    
   ];

  }
    if ($stateParams.adId==3) {
        $scope.playlist = [
    {
      id: '2',
      titulo: 'Accidentes de transito',
      descripcion: '1'
    }    
   ];

  }
    if ($stateParams.adId==4) {
        $scope.playlist = [
    {
      id: '2',
      titulo: 'Cortaduras',
      descripcion: '1'
    }    
   ];

  }
    if ($stateParams.adId==5) {
        $scope.playlist = [
    {
      id: '2',
      titulo: 'Quemaduras',
      descripcion: '1'
    }    
   ];

  }
    if ($stateParams.adId==6) {
        $scope.playlist = [
    {
      id: '2',
      titulo: 'Envenenamiento',
      descripcion: '1'
    }    
   ];

  }
    if ($stateParams.adId==7) {
        $scope.playlist = [
    {
      id: '2',
      titulo: 'Paro Cardiaco',
      descripcion: '1'
    }    
   ];

  }
    if ($stateParams.adId==8) {
        $scope.playlist = [
    {
      id: '2',
      titulo: 'Asfixia',
      descripcion: '1'
    }    
   ];

  }
    if ($stateParams.adId==9) {
        $scope.playlist = [
    {
      id: '2',
      titulo: 'Desamayo',
      descripcion: '1'
    }    
   ];

  }

})


.controller('PlaylisstCtrl', function($scope,$ionicPopup) {

  // A confirm dialog
  $scope.showsolicitud = function() {
    var alertPopup = $ionicPopup.alert({
     title: 'Buscando ambulacia',
     template: "<p style='text-align:center;'>Por favor espere...</p>"
    });
  }
});
