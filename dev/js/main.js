require.config({
    baseUrl: './lib/',
    paths: {
        'angular': 'angular/angular.min',
        'angular-route': 'angular-route/angular-route.min',
        'angular-ui-router': 'angular-ui-router/release/angular-ui-router.min',
        'angularAMD': 'angularAMD/angularAMD.min',
        'ngload': '../js/common/ngload',
        'angular-resource': 'angular-resource/angular-resource.min',
        'angular-aria': 'angular-aria/angular-aria.min',
        'angular-animate': 'angular-animate/angular-animate.min',
        'angular-material': 'angular-material/angular-material.min',
        'ng-file-upload': 'ng-file-upload/ng-file-upload.min',
        'angular-loading-bar': 'angular-loading-bar/build/loading-bar.min',
        'angular-socket-io': 'angular-socket-io/socket.min',
        'ng-clip': 'ng-clip/dest/ng-clip.min',
        'angular-messages': 'angular-messages/angular-messages.min',
        'angular-sanitize': 'angular-sanitize/angular-sanitize.min',

        'jquery': 'jquery/dist/jquery.min',
        'moment': 'moment/min/moment.min',
        'socket.io': 'socket.io-client/socket.io',
        'ZeroClipboard': 'zeroclipboard/dist/ZeroClipboard.min',

        // custom
        'common': '../js/common/common',
        'constant': '../js/common/constant',
        'utilities': '../js/common/utilities'
    },

    shim: {
        'angular-route': ['angular'],
        'angularAMD': ['angular'],
        'ngload': ['angularAMD'],
        'angular-resource': ['angular'],
        'angular-ui-router': ['angular'],
        'angular-aria': ['angular'],
        'angular-animate': ['angular'],
        'angular-material': ['angular', 'angular-animate', 'angular-aria'],
        'ng-file-upload': ['angular'],
        'angular-loading-bar': ['angular'],
        'angular-socket-io': ['angular', 'socket.io'],
        'angular-messages': ['angular'],
        'angular-sanitize': ['angular'],
        // 'zeroclipboard': {
        // 	deps: [],
        // 	exports: 'ZeroClipboard'
        // },
        'ZeroClipboard': [],
        'ng-clip': ['angular', 'ZeroClipboard']
    },

    waitSeconds: 10,

    deps: ['../js/app']
});
