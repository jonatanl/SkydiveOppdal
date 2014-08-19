define(function(require) {
  require('initializers/model-relations');
  var Plane = require('models/plane'),
      Manifest = require('models/manifest');

  describe('Models', function() {
    describe("plane ", function() {
      var plane = Plane.create({plane_id: 1});

      it("should have api url", function() {
        assert(plane.url(), '/api/v0/planes/1');
      }); 

      it('has id equal to 1', function() {
        assert(plane.get('plane_id'), 1);
      });
    });

    describe("manifest", function() {
      it("should have api url", function() {
      var plane = Plane.create({plane_id: 2, name:'Plane name'}),
          manifest = Manifest.create({manifest_id: 1, plane_id: 2, name: 'manifest name'});
          
        assert.equal(manifest.url(), '/api/v0/planes/2/manifests/1');
      });
    });
  });
});