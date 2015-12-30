   var app = angular.module('myApp', ['ngRoute']);

    // configure our routes
    app.config(function($routeProvider) {
    	$routeProvider

            // route for the home page
            .when('/', {
            	templateUrl : 'vistas/home.html',
            	controller  : 'mainController'
            })

            // route for the about page
            .when('/nosotros', {
            	templateUrl : 'vistas/nosotros.html',
            	controller  : 'nosotrosController'
            })

            .when('/licitaciones', {
                templateUrl : 'vistas/licitaciones.html',
                controller  : 'licitacionesController'
            })

            // route for the contact page
            .when('/contacto', {
            	templateUrl : 'vistas/contacto.html',
            	controller  : 'contactoController'
            });
        });

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.mensaje = 'Clase de angularjs';
    });

    app.controller('nosotrosController', function($scope) {
    	$scope.mensaje = 'Tenemos claro que el talento no se compra ni se exige, sino que se merece. Es por ello que estamos diseñando un portfolio realmente desafiante y un clima de trabajo acorde con estos desafios. En nuestro viaje nos acompañan aquellos "makers" que son capaces de hacer realidad lo inimaginable. Reclutamos talento sin fronteras, únete a nuestro equipo.';
    });

    app.controller('licitacionesController', function($scope,$http) {
        $scope.cargando = "cargando";
        $http.get("http://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?fecha=02022014&ticket=F8537A18-6766-4DEF-9E59-426B4FEE2844")
        .then(function(response) 
        {   
            $scope.cargando = "";
            console.log(response);
            $scope.Listado = response.data.Listado;
        });
    });

    app.controller('contactoController', function($scope) {
    	$scope.mensaje = 'llamé ya !';

        $scope.contactar = function()
        {
           swal("Contacto", "Serás contactado a la brevedadm muchas gracias!! ", "success")
       }
   });