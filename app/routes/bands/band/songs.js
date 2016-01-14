import Ember from 'ember';
import Song from '../../../models/song';

export default Ember.Route.extend({
    model: function() {
        return this.modelFor('bands.band');
    },

    actions: {
        createSong: function () {
            let controller = this.get('controller');
            let band = this.modelFor('bands.band');
            let title = controller.get('title');

            let song = Song.create({ title: title, band: band });
            band.get('songs').pushObject(song);
            controller.set('title', '');
        }
    }
});
