angular.module('CVApp', ["ngRoute"])

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/',
            {
                templateUrl:'templates/about.html',
                controller:'MainCtrl'
            });
        $routeProvider.when('/skills',
            {
                templateUrl:'templates/skills.html',
                controller:'MainCtrl'
            });
        $routeProvider.when('/experience',
            {
                templateUrl:'templates/experience.html',
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
        $scope.education = ['2001 – 2012: Cherkasy Gymnasium №31',
            '2012 – 2016: Cherkasy Bohdan Khmelnytsky National University. Department of Foreign languages. Speciality: English language and literature, bachelor',
            '2016 – nowadays: Cherkasy Bohdan Khmelnytsky National University. Department of Foreign languages. Speciality: English language and literature, master',
        '2014, 2015: Internship in the USA by the program Work and Travel, (2014 - Gaylord, Tennessee; 2015 - J.W. Marriott, Texas)',
        '2016 – nowadays: JavaScript courses by GeekHub'];

        $scope.hobbies = ['Music', 'Table tennis', 'Football', 'Movie'];
        $scope.languages = ['Ukrainian (native)', 'Russian (fluent)', 'English (Advanced)', 'German (Pre-Intermediate)'];

        $scope.messageId = document.getElementById('mail');

        $scope.sendMessage = function () {
            location = "/submit/" + encodeURIComponent($scope.messageId.value);
            console.log(location);
        }
    });
