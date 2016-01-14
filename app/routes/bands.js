import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';

let blackDog = Song.create({
    title: 'Black Dog',
    band: 'Led Zeppelin',
    rating: 3
});

let yellowLedbetter = Song.create({
    title: 'Yellow Ledbetter',
    band: 'Pearl Jam',
    rating: 4
});

let pretender = Song.create({
    title: 'The Pretenders',
    band: 'Foo Fighters',
    rating: 2
});

let BandsCollection = Ember.Object.extend({
    content: [],
    sortProperties: ['name: desc'],
    sortedContent: Ember.computed.sort('content', 'sortProperties')
});

let ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
let pearlJam = Band.create({ name: 'Pearl Jam', songs: [yellowLedbetter] });
let fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender] });

let bands = BandsCollection.create();

bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters]);

export default Ember.Route.extend({
    model: function() {
        return bands;
    },

    actions: {
        createBand: function() {
            let name = this.get('controller').get('name');
            let band = Band.create({ name: name });
            bands.get('content').pushObject(band);
            this.get('controller').set('name', '');
            this.transitionTo('bands.band.songs', band);
        }
    }
});
