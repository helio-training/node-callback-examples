const phrase = 'I am groot';

module.exports = {


  speak(callback) {

    console.log(typeof(callback) === 'function');

    // Do some processing;
    const shouting = phrase.toUpperCase();
    // Processing...

    return callback(null, shouting);

    // return callback(new Error('Whoa!'));
  }
};