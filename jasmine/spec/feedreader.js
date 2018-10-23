/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This test suite contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Tests makes sure the
         * allFeeds variable has been defined and it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('loop object url defined url not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

           it('loop object name defined name not empty', function(){
                allFeeds.forEach(function(feed) {
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
            });
        });


    });


    /* A test suite named "The menu" */

    describe('The menu', function() {

      /* Test ensures that the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */


       it('check if hidden', function() {
         expect(document.body.classList.contains('menu-hidden')).toBe(true);
       });

       /* Test ensures that the menu changes
        * visibility when the menu icon is clicked. This test
        * has two expectations: the menu displays when
        * clicked and it hides when clicked again.
        */

        it('check menu icon click visibility', function () {

          $('a.menu-icon-link').trigger('click');
          expect(document.body.classList.contains('menu-hidden')).toBe(false);
          $('a.menu-icon-link').trigger('click');
          expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });





    /* A test suite named "Initial Entries" */

    describe('Initial Entries', function () {



        /* Test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('are present', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

         });

    /*A test suite named "New Feed Selection" */

    describe('New Feed Selection', function(){


        /* test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         var pastFeed;

         beforeEach(function(done) {
            loadFeed(0, function() {
                // store old feed
                pastFeed = $('.feed').html();
                // fetch newer feed
                loadFeed(1, done);
            });
        });

        it('content change when new feed is loaded', function() {
            expect($('.feed').html()).not.toBe(pastFeed);
        });
    });
}());
