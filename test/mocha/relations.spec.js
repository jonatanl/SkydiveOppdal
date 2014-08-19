define(function(require) {
  require('initializers/model-relations');
  var Plane = require('models/plane'),
      Manifest = require('models/manifest');

  describe("Relations:", function() {
    var plane, manifest;

    before(function() {
      plane = Plane.create({plane_id: 1}),
      manifest = Manifest.create({manifest_id: 1, plane_id: 1});
    });

    describe("Plane relations", function() {
      it("should have manifest in collection", function() {
        assert.ok(plane.manifests().contains(manifest));
        assert.equal(plane.manifests().length, 1);
      });

      it('should be possible to add manifests to plane', function() {
        manifest = Manifest.create({manifest_id: 2, plane_id: 1});
        assert.equal(plane.manifests().length, 2);
      });
    });

    after(function() {
      Manifest.reset();
      Plane.reset();
    });
  });
});