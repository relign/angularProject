require.config({
  urlArgs:"r=1.0.0",
  baseUrl:'../app/',
  paths:{
    app:'./app',
    angular:'../js/angular.1.4.7',
    homeController:'./modules/homeController'
  },
  shim:{
    angular:{
      exports:'angular'
    }
  }
});

require(['angular','app','homeController'],function (angular) {
  angular.bootstrap(document,['app']);
})
