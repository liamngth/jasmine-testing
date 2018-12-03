$(function() {
    describe('RSS Feeds', function() {
        /* A test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URL defined and not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.url).toBeDefined();
             expect(feed.url.length).toBeGreaterThan(0);
           });
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('name defined and not empty', function() {
           allFeeds.forEach(function(feed) {
             expect(feed.name).toBeDefined();
             expect(feed.name.length).toBeGreaterThan(0);
           });
         });
    });

    describe('The menu', function() {
      /* A test that ensures the menu element is
       * hidden by default.
       */

       it('menu element is hidden by default', function() {
         expect(document.querySelector('.menu-hidden')).toHaveClass('menu-hidden');
       });

       /* A test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */

        it('menu changes visibility when menu icon is clicked', function() {
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(false);
          $('.menu-icon-link').trigger('click');
          expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
      /* A test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
       beforeEach(function(done) {
          loadFeed(1, done);
       });

       it('there is at least a single .entry within .feed container', function(done) {
          expect($('.feed .entry').length > 0).toBe(true);
          done();
       });
    });

    describe('New Feed Selection', function() {
      /* A test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
       let firstContentOfLoadfeed, secondContentOfLoadfeed;
       beforeEach(function(done) {
         loadFeed(0, function() {
          firstContentOfLoadfeed = $('.feed').find('a');
          loadFeed(1, function() {
           secondContentOfLoadfeed = $('.feed').find('a');
           done();
         });
        });
       });

       it('when new feed is loaded, the content actually changes', function(done) {
         expect(firstContentOfLoadfeed).not.toBe(secondContentOfLoadfeed);
         done();
       });

    });
}());
