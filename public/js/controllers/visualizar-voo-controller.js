angular.module('controlador-de-voos').controller('VisualizarVooController', function($scope, $http, $routeParams) {

    $scope.voo = {};
    $scope.mensagem = '';
    $scope.url = 'http://localhost:8081/';

    $http.get('http://localhost:8080/voo/' + $routeParams.id)
        .success(function(retorno) {
            $scope.voo = retorno;
            if (retorno == '') {
                $scope.mensagem = 'Voo não encontrado';
            }
        })
        .error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível buscar voo'
        });
});