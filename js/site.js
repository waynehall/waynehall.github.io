(function () {
  var app = angular.module('app', []);
    app.controller('AppController', function ($scope) {
      this.portfolio = programs;
      $scope.navtab = 1
    })


    var programs = [
            {
                name: 'Property Management Desktop',
                languages: ['Django'],
                description: "A Django application to for property management. Link to running sample app on the github page.",
                url: 'https://github.com/waynehall/kmpmd',
                comments: "Designed this to help out at Kidder Mathews to further combine several tools and files into one webapp that can be used remotely.",
                img: 'https://waynehall.github.io/img/pmd.jpg',
            },
            {
                name: 'Blazers Salary Cap Calculator',
                languages: ['AngularJS'],
                description: "A tool designed for Basketball Nerds to speculate which players the Blazers may keep and which new players they may sign.",
                url: 'http://codepen.io/wayneculverhall/full/mErvbV/',
                comments: "I approached this wanting to do more with Angular.  Mostly playing with arrays and JSON objects.",
                img: 'https://waynehall.github.io/img/blaz.JPG',
            },
             {
                 name: 'Comics Adventure',
                 languages: ['Bootstrap'],
                 description: 'A mockup site for a local comic book shop.',
                 url: 'http://codepen.io/wayneculverhall/full/dXjRYL/',
                 comments: 'I\'ve created several mockups of a site for a local comic book shop that currently does not have their own.  This is just the latest.',
                 img: 'https://waynehall.github.io/img/camock.PNG',
             },
             {
                 name: 'Random Quote Generator',
                 languages: ['jQuery', 'Bootstrap'],
                 description: 'A space-themed random quote generator powered by jQuery and styled with bootstrap.',
                 url: 'http://codepen.io/wayneculverhall/pen/Kzxgqm',
                 comments: 'I wanted to style this a bit different than your average random quote generator.  I decided to try to give it a pixelated look and use loops to create a live typing effect.',
                 img: 'https://waynehall.github.io/img/quotegen.JPG',
             },
             {
                 name: 'Fibonacci-Me',
                 languages: ['AngularJS', 'Bootstrap'],
                 description: 'Fibonacci sequence generator',
                 url: 'http://codepen.io/wayneculverhall/pen/dXzZro',
                 comments: 'A big part of learning to program is understanding algorithms, and the Fibonacci sequence was good practice.  I threw in some AngularJS to keep refining my skills in that area.',
                 img: 'https://waynehall.github.io/img/fibo.PNG',
             },
             {
                 name: 'Contract Generator',
                 languages: ['C#', 'WinForms'],
                 description: "Pulls information from an access database and populates a Word document with placeholders.",
                 url: 'https://github.com/waynehall/csharp_wordfindreplace',
                 comments: "This desktop app was created to reduce the amount of time people spent creating contracts at Kidder Mathews.  The difficult part was having to incorporate Microsoft Word in the solution, as the document needed to be easily editable after it was created.",
                 img: 'https://waynehall.github.io/img/contract.PNG',
             },
             {
                 name: 'wayneBlog',
                 languages: ['Django', 'Python'],
                 description: 'A blog created in Django to comment on my path in learning programming. ',
                 url: 'https://wayneblog.herokuapp.com/',
                 comments: "My first Django App! Actually, its my second, but a tutorial doesn't really count. It is barebones for now, but it won't always be that way. It was fun getting back to Python, but once you figure out how it works and what it all does, there really wasn't much python to be written.  Seems to do most of the work for you.  Hopefully as I add more features, I'll get to do more with python.",
                 img: 'https://waynehall.github.io/img/blog.JPG',
             },
             {
                 name: 'divBright',
                 languages: ['jQuery'],
                 description: 'A programatically generated board that functions like the classic Light Brights.',
                 url: 'http://codepen.io/wayneculverhall/pen/bpxOzB',
                 comments: 'I really just wanted to play around with Divs here...',
                 img: 'https://waynehall.github.io/img/divBright.JPG',
             },
             {
                 name: "What's it look like outside?",
                 languages: ['jQuery', 'Bootstrap', 'Open Weather API'],
                 description: "Simple weather app.",
                 url: 'http://codepen.io/wayneculverhall/pen/ONdbmL',
                 comments: "Wanted to make a little weather application using Open Weather Maps API.",
                 img: 'https://waynehall.github.io/img/weather.JPG',
             },
        ];




})();
