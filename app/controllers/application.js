import Ember from 'ember';


let Song = Ember.Object.extend({
    title: '',
    rating: 0,
    band: ''
});

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

let SongCollection = Ember.Object.extend({
    content: [],
    sortProperties: ['rating:desc'],
    sortedContent: Ember.computed.sort('content', 'sortProperties')
});

let songs = SongCollection.create();

//songs.get('content').pushObject(blackDog);
//songs.get('content').pushObject(yellowLedbetter);
//songs.get('content').pushObject(pretender);

songs.get('content').pushObjects([blackDog, yellowLedbetter, pretender]);


export default Ember.Controller.extend({
    songs: songs
});
