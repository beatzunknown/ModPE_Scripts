//Controllable Mobs by BeAT-UnKNoWN

var controlUI = null;
var controlsReady = false;
var forward = false;
var backward = false;
var up = false;
var down = false;
var checked = false;
var verticalMovement = false;
var ANIMAL_SPEED = 0.5;

function newLevel(){
	mobControls();
}

function mobControls(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var controlLayout = new android.widget.LinearLayout(ctx);
			controlLayout.setOrientation(1);
			
			var forwardBtn = new android.widget.Button(ctx);
			forwardBtn.setText("F");
			forwardBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(v, event){
					if(!verticalMovement){
						switch(event.getAction()){
							case 0:
								forward = true;
								break;
							case 1:
								forward = false;
								break;
						}
					}else{
						switch(event.getAction()){
							case 0:
								up = true;
								break;
							case 1:
								up = false;
								break;
						}
					}
					return true;
				}
			}));
			controlLayout.addView(forwardBtn);
			
			var middleBtn = new android.widget.ToggleButton(ctx);
			middleBtn.setChecked(checked);
			middleBtn.setText("∞");
			middleBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!verticalMovement){
						verticalMovement = true;
						checked = true;
					}else{
						verticalMovement = false;
						checked = false;
					}
					middleBtn.setChecked(checked);
					middleBtn.setText("∞");
				}
			}));
			controlLayout.addView(middleBtn);
			
			var backwardBtn = new android.widget.Button(ctx);
			backwardBtn.setText("B");
			backwardBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(v, event){
					if(!verticalMovement){
						switch(event.getAction()){
							case 0:
								backward = true;
								break;
							case 1:
								backward = false;
								break;
						}
					}else{
						switch(event.getAction()){
							case 0:
								down = true;
								break;
							case 1:
								down = false;
								break;
						}
					}
					return true;
				}
			}));
			controlLayout.addView(backwardBtn);
			
			controlUI = new android.widget.PopupWindow(controlLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			controlUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 50);
		}catch(err){
			print("The mob controls could not be displayed, because: " + err + ".");
		}
	}}));
}

function leaveGame(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(controlUI != null){
			controlUI.dismiss();
		}
	}}));
}

function attackHook(attacker, victim){
	rideAnimal(attacker, victim);
	controlledMob = victim;
	controlsReady = true;
}

function modTick(){
	if(controlsReady==true){
	    //500ISE's script
		var playerYaw = getYaw();
		var playerPitch = getPitch();
		var velX = -1 * Math.sin(playerYaw / 180 * Math.PI) * ANIMAL_SPEED;
		var velZ = Math.cos(playerYaw / 180 * Math.PI) * ANIMAL_SPEED;
		var velY = 0;
		var jumpVel = 0.2;
		//Start of MrARM's script
		if(velX > 0){
			if(getTile(Player.getX()+1, Math.floor(Entity.getY(controlledMob)), Player.getZ()) != 0)
				velY = jumpVel;
		}else{
			if(getTile(Player.getX()-1, Math.floor(Entity.getY(controlledMob)), Player.getZ()) != 0)
				velY = jumpVel;
		}
		if(velZ > 0){
			if(getTile(Player.getX(), Math.floor(Entity.getY(controlledMob)), Player.getZ()+1) != 0)
				velY = jumpVel;
		}else{
			if(getTile(Player.getX(), Math.floor(Entity.getY(controlledMob)), Player.getZ()-1) != 0)
				velY = jumpVel;
		}
		//End of MrARM's script
		if(forward==true){
			setVelX(controlledMob, velX);
			setVelZ(controlledMob, velZ);
			setVelY(controlledMob, velY);
		}
		if(backward==true){
			setVelX(controlledMob, -velX);
			setVelZ(controlledMob, -velZ);
			setVelY(controlledMob, velY);
		}
		if(up==true){
			setVelY(controlledMob, 0.5);
		}
		if(down==true){
			setVelY(controlledMob, -0.5);
		}
	}
	if(controlsReady==true && forward==false && backward==false && up==false && down==false){
		setVelX(controlledMob, 0);
		setVelZ(controlledMob, 0);
		setVelY(controlledMob, 0);
	}
}
