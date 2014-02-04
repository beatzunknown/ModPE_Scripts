//Controllable Mobs by BeAT-UnKNoWN

var controlUI = null;
var controlsReady = false;
var forward = false;
var backward = false;
var left = false;
var right = false;
var up = false;
var down = false;

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
					switch(event.getAction()){
						case 0:
							forward = true;
							break;
						case 1:
							forward = false;
							break;
					}
					return true;
				}
			}));
			controlLayout.addView(forwardBtn);
			
			var backwardBtn = new android.widget.Button(ctx);
			backwardBtn.setText("B");
			backwardBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(v, event){
					switch(event.getAction()){
						case 0:
							backward = true;
							break;
						case 1:
							backward = false;
							break;
					}
					return true;
				}
			}));
			controlLayout.addView(backwardBtn);
			
			var leftBtn = new android.widget.Button(ctx);
			leftBtn.setText("L");
			leftBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(v, event){
					switch(event.getAction()){
						case 0:
							left = true;
							break;
						case 1:
							left = false;
							break;
					}
					return true;
				}
			}));
			controlLayout.addView(leftBtn);
			
			var rightBtn = new android.widget.Button(ctx);
			rightBtn.setText("R");
			rightBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(v, event){
					switch(event.getAction()){
						case 0:
							right = true;
							break;
						case 1:
							right = false;
							break;
					}
					return true;
				}
			}));
			controlLayout.addView(rightBtn);
			
			var upBtn = new android.widget.Button(ctx);
			upBtn.setText("U");
			upBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(v, event){
					switch(event.getAction()){
						case 0:
							up = true;
							break;
						case 1:
							up = false;
							break;
					}
					return true;
				}
			}));
			controlLayout.addView(upBtn);
			
			var downBtn = new android.widget.Button(ctx);
			downBtn.setText("D");
			downBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(v, event){
					switch(event.getAction()){
						case 0:
							down = true;
							break;
						case 1:
							down = false;
							break;
					}
					return true;
				}
			}));
			controlLayout.addView(downBtn);
			
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
		if(forward==true){
			setVelZ(controlledMob, -0.5);
		}
		if(backward==true){
			setVelZ(controlledMob, 0.5);
		}
		if(left==true){
			setVelX(controlledMob, -0.5);
		}
		if(right==true){
			setVelX(controlledMob, 0.5);
		}
		if(up==true){
			setVelY(controlledMob, 0.5);
		}
		if(down==true){
			setVelY(controlledMob, -0.5);
		}
	}
	if(controlsReady==true && forward==false && backward==false && left==false && right==false && up==false && down==false){
		setVelX(controlledMob, 0);
		setVelY(controlledMob, 0);
		setVelZ(controlledMob, 0);
	}
}
