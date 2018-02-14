

// initialize a PubNub instance.
var pubnub = new PubNub({
    subscribeKey: 'sub-c-f58342d2-1158-11e8-a78c-ded3dc92678b', // always required
    publishKey: 'pub-c-88530e4b-9d85-4bcb-86ac-2019a7d19c24' // only required if publishing
});


var $btn = document.querySelector("button.on");
var channel = 'blinkLED';
var blinkState = true;


$btn.addEventListener('click', function (e) {
    // publishing
    pubnub.publish({
            channel: channel,
            message: {blink: blinkState},
            callback: function(m){
                console.log(m);
                blinkState = !blinkState;
                $btn.textContent = (blinkState) ? 'Blink LED' : 'Stop LED';
            }
        });
});