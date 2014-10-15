#twilio-mk.js

This is a bit of a custom fork of [mk.js](https://github.com/mgechev/mk.js).

You can control characters using SMS!

To use: Text `<player number><action>` to `(703) 991-4940`

Example: `1HP` would make player 1 throw a high punch.

Player numbers: `1`, `2`

Player commands: 

- `L` (left),
- `R` (right),
- `U` (up),
- `D` (down),
- `B` (block),
- `HK` (high kick),
- `LK` (low kick),
- `HP` (high punch),
- `LP` (low punch)

##Live Demo

You can see a live demo of this [here](http://tmkjs.meteor.com/)

##Installing it on your own

Installation is super simple. Clone the repo, run meteorite, and point your twilio SMS webhook to http://yoururl/in. That's it!
