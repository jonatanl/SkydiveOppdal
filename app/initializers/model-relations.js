define(function(require) {
    var Plane = require('models/plane'),
        Manifest = require('models/manifest'),
        Manifests = require('collections/manifests');

        Plane.has().many('manifests', {
            collection: Manifests,
            inverse: 'plane'
        });

        Manifest.has().one('plane', {
                model: Plane,
                inverse: 'manifests'
        });

    console.log('Model relations added');
});