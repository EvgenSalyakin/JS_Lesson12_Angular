angular.module('App', ["ngRoute"])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/about',
            {
                templateUrl:'templates/about.html',
                controller:'MainCtrl'
            });
        $routeProvider.when('/skills',
            {
                templateUrl:'templates/skills.html',
                controller:'MainCtrl'
            });
        $routeProvider.when('/portfolio',
            {
                templateUrl:'templates/portfolio.html',
                controller:'MainCtrl'
            });
        $routeProvider.when('/contact',
            {
                templateUrl:'templates/contact.html',
                controller:'MainCtrl'
            });
        $locationProvider.html5Mode(false).hashPrefix('');
    })

    .controller('MainCtrl', function($scope) {
        $scope.contacts = [
            {name:'Email', data:'e.salyakin@gmail.com'},
            {name:'Phone', data:'(093) 951-73-82'},
            {name:'Skype', data:'e.salyakin'},
            {name:'GitHub', data:'https://github.com/EvgenSalyakin/'}
        ];
        $scope.skills = [
            {   category:"Programming Languages/ Technologies",
                data: [
                    "JavaScript",
                    "HTML/CSS",
                    "1C"
                ]},
            {   category:"Frameworks/Libraries",
                data: [
                    "React JS",
                    "Meteor JS",
                    "Angular JS",
                    "Bootstrap",
                    "jQuery",
                    "Node JS",
                    "Express",
                    "Socket.io"
                ]},
            {   category:"Development Tools",
                data: [
                    "Git",
                    "WebPack",
                    "Heroku",
                    "WebStorm"
                ]},
            {   category:"Data Base",
                data: [
                    "MS SQL",
                    "MongoDB",
                    "PostgresSQL",
                    "MySQL"
                ]}
        ];

        $scope.messageId = document.getElementById('mail');
        $scope.sendMessage = function () {
            location = "/submit/" + encodeURIComponent($scope.messageId.value);
            console.log(location);
        }
    });
