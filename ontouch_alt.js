var bowshot;
var GUI;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var start = false;


function newLevel(){


 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
try{
 
GUI = new android.widget.PopupWindow();

var layout = new android.widget.LinearLayout(ctx);
var btn = new android.widget.Button(ctx);
 
btn.setText("x");

layout.addView(btn);

GUI.setContentView(layout);
GUI.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, 450);

btn.onTouchListener(new android.view.View.OnTouchListener({
 
onTouch: function(view, event){

switch(event.getAction()){
case MotionEvent.ACTION_DOWN:
bowshot = 1;
break;
case MotionEvent.ACTION_UP:
bowshot = 0;
break;
}

}
 
}));
 
} catch (e){
print ("Error: "+e)
}

}});
}
 
function leaveGame(){
 
ctx.runOnUiThread(new java.lang.Runnable(){
 
run: function(){
 
if(GUI != null){
 
GUI.dismiss();
 
}
 
}
 
});
 
}
function modTick() {
	if(bowshot==1&&getPitch(getPlayerEnt())<40){
		var playerYaw = Entity.getYaw(Player.getEntity());
		var playerPitch = Entity.getPitch(Player.getEntity());
		velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
		velX = Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
		velZ = -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
		tnt = Level.spawnMob(Player.getX(),Player.getY()+1,Player.getZ(),81);
		setVelX(tnt,velX);
		setVelY(tnt,velY);
		setVelZ(tnt,velZ);	
	}
	else if(bowshot==1&&getPitch(getPlayerEnt())>40){
		var Yaw = Entity.getYaw(Player.getEntity());
		var Pitch = Entity.getPitch(Player.getEntity());
		velY = Math.sin((Pitch - 180) / 180 * Math.PI);
		velX = Math.sin(Yaw / 180 * Math.PI) * Math.cos((Pitch - 180) / 180 * Math.PI);
		velZ = -1 * Math.cos(Yaw / 180 * Math.PI) * Math.cos((Pitch - 180) / 180 * Math.PI);
		tnt = Level.spawnMob(Player.getX()+1,Player.getY(),Player.getZ(),80);
		setVelX(tnt,velX);
		setVelY(tnt,velY);
		setVelZ(tnt,velZ);
	}
}
