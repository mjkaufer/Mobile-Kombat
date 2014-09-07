// cmds = new Meteor.Stream('cmds');
keymap = [
    {
        R: 74,
        L: 71,
        U: 89,
        D: 72,//movement
        B: 16,//block
        HP: 65,//high punch
        LP: 83,//low
        LK: 68,//low kick
        HK: 70//high punch
    },
    {
        R: 39,
        L: 37,
        U: 38,
        D: 40,
        B: 17,
        HP: 80,
        LP: 219,
        LK: 221,
        HK: 220 
    }
]

window.onload = function(){
    cmds.on('cmd', function(cmd) {//format should be (Player #)(Action), so something like 2HP or 1LK
        console.log(cmd);
        
        cmd = cmd.substring(0, cmd.indexOf("*"));//cut off number
        
        cmd = cmd.replace(" ","").toUpperCase();
        try{
            var code = parseInt(keymap[parseInt(cmd.substr(0,1)) - 1][cmd.substring(1)]);
            
            mk.game.key(code, 400);
        } catch(e){
            console.log(cmd + " is an invalid code");
        }
        
    });
}

