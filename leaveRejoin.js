function setupLeaveRejoin(bot){ 
// Disabled intentional leave/rejoin cycle.
// Original file was disconnecting the bot every 1-5 minutes.
// Keep only lightweight anti-AFK jumping.
let jumpTimer=null;
function nextJump(){
 if(!bot?.entity) return;
 bot.setControlState('jump',true);
 setTimeout(()=>bot.setControlState('jump',false),300);
 jumpTimer=setTimeout(nextJump,60000+Math.random()*120000);
}
bot.once('spawn',()=>nextJump());
bot.on('end',()=>clearTimeout(jumpTimer));
}
module.exports=setupLeaveRejoin;
