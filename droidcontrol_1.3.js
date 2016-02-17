/*Droid Control
    ~ The Droid Team     */
var speed = 1;
var movement = "Normal";
var shouldRun = 1;
var Xdiff = 0;
var Zdiff = 0;
var Xpos = 0;
var Zpos = 0;
var jumpHeight = "1";
var jump = 0;
var jumpVel = 0;
var starterUI = null;
var closeUI = null;
var carbonPE = null;
var gunUI = null;
var jumpUI = null;
var flyUI = null;
var controlUI = null;
var itemDrop = false;
var itemDropChecked = false;
var unlimitedArrow = false;
var unlimitedArrowChecked = false;
var X, Y, Z;
var farmReady = false;
var farmChecked = false;
var spawnType = 10;
var spawnName = "Chicken";
var spawnCount = 160;
var farmActive = false;
var godMode = false;
var modeChecked = false;
var instaKill = false;
var killChecked = false;
var instant = false;
var instantChecked = false;
var saddleUp = false;
var saddleChecked = false;
var flyUp = false;
var flyDown = false;
var flyReady = false;
var flyChecked = false;
var gunReady = false;
var gunChecked = false;
var gunEngaged = false;
var entityType = "65";
var entityName = "Primed TNT";
var defaultDestroyTime = [
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
]
var arrow;
var ground = 0;
var explosive = 0;
var fire = 0;
var onFire = 0;
var teleport = 0;
var canTP = 0;
var water = 0;
var ice = 0;
var light = 0;
var lava = 0;
var web = 0;
var block = 0;
var getBlock;
var getBlockData;
var typeOfArrow = "Normal";
var hitChecked = false;
var knockBack = false;
var controlsReady = false;
var forward = false;
var backward = false;
var up = false;
var down = false;
var verticalDIRchecked = false;
var verticalMovement = false;
var ANIMAL_SPEED = 0.5;
var fontType = "Comic Sans MS";
var initialised = false;
var dButton = " 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 ";

function dip2px(ctx, dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
 
function selectLevelHook(){
	if(!initialised){
		speed = 1;
		movement = "Normal";
		hitChecked = false;
		knockBack = false;
		jumpHeight = "1";
		jump = 0;
		jumpVel = 0;
		ground = 0;
		explosive = 0;
		fire = 0;
		onFire = 0;
		teleport = 0;
		canTP = 0;
		water = 0;
		ice = 0;
		light = 0;
		lava = 0;
		web = 0;
		block = 0;
		typeOfArrow = "Normal";
		itemDrop = false;
		itemDropChecked = false;
		unlimitedArrow = false;
		unlimitedArrowChecked = false;
		farmReady = false;
		farmChecked = false;
		spawnType = 10;
		spawnName = "Chicken";
		spawnCount = 160;
		farmActive = false;
		godMode = false;
		modeChecked = false;
		instaKill = false;
		killChecked = false;
		instant = false;
		instantChecked = false;
		saddleUp = false;
		saddleChecked = false;
		flyUp = false;
		flyDown = false;
		flyReady = false;
		flyChecked = false;
		gunReady = false;
		gunChecked = false;
		gunEngaged = false;
		entityType = "65";
		entityName = "Primed TNT";
		controlsReady = false;
		forward = false;
		backward = false;
		up = false;
		down = false;
		verticalDIRchecked = false;
		verticalMovement = false;
		fontType = "Comic Sans MS";
		Block.defineBlock(250, "Activated NRC", [["reactor_core_stage_x", 1], ["reactor_core_stage_x", 1], ["reactor_core_stage", 1], ["reactor_core_stage_x", 1], ["reactor_core_stage_x", 1], ["reactor_core_stage_x", 1]], 247, false, 0);
		Block.setRenderLayer(250, 0);
		Block.setLightLevel(250, 7);
		initialised = true;
	}
}

function newLevel(){
	starter();
	defaultDestroy();
}
 
function starter(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(0);
			
			var dImage = android.util.Base64.decode(dButton, 0); 
			var menuBtn = new android.widget.ImageView(ctx);
			menuBtn.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(dImage, 0, dImage.length));
			menuBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(gunUI != null){
						gunUI.dismiss();
						gunUI = null;
					}
					if(flyUI != null){
						flyUI.dismiss();
						flyUI = null;
					}
					if(controlUI != null){
						controlUI.dismiss();
						controlUI = null;
					}
					mainMenu();
					close();
				}
			}));
			layout.addView(menuBtn);
             
			starterUI = new android.widget.PopupWindow(layout, dip2px(ctx, 50), dip2px(ctx, 50));
			starterUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 245, 0);
		}catch(err){
			print("The D-Button could not be displayed, because: " + err);
		}
	}}));
}
 
function close(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var closeLayout = new android.widget.LinearLayout(ctx);
			closeLayout.setOrientation(0);
             
			var closeBtn = new android.widget.Button(ctx);
			closeBtn.setText("x");
			closeBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(gunReady==true && gunUI==null){
						gunButton();
					}
					if(flyReady==true && flyUI==null){
						flyButton();
					}
					if(saddleUp==true && controlUI==null){
						mobControls();
					}
					carbonPE.dismiss();
					closeUI.dismiss();
				}
			}));
			closeLayout.addView(closeBtn);
             
			closeUI = new android.widget.PopupWindow(closeLayout, dip2px(ctx,40), dip2px(ctx,40));
			closeUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}catch(e){
			print("The X-Button could not be displayed, because: " + e);
		}
	}}));
}
 
function mainMenu(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var menuLayout = new android.widget.LinearLayout(ctx);
			var menuScroll = new android.widget.ScrollView(ctx);
			var menuLayout1 = new android.widget.LinearLayout(ctx);
			menuLayout.setOrientation(1);
			menuLayout1.setOrientation(1);
             
			menuScroll.addView(menuLayout);
			menuLayout1.addView(menuScroll);
             
			var layoutParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			layoutParams.setMargins(dip2px(ctx, 15), 0, 0, 0);
             
			var heading = new android.widget.TextView(ctx);
			heading.setTextSize(24);
			heading.setText("DroidControl Menu");
			heading.setLayoutParams(layoutParams);
			menuLayout.addView(heading);
             
			var itemDropBtn = new android.widget.CheckBox(ctx);
			itemDropBtn.setTextSize(18);
			itemDropBtn.setText("64 Item Drop");
			itemDropBtn.setChecked(itemDropChecked);
			itemDropBtn.setLayoutParams(layoutParams);
			itemDropBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!itemDrop){
						itemDrop = true;
						itemDropChecked = true;
					}else{
						itemDrop = false;
						itemDropChecked = false;
					}
					itemDropBtn.setChecked(itemDropChecked);
				}
			}));
			menuLayout.addView(itemDropBtn);
             
			var unlimitedArrowBtn = new android.widget.CheckBox(ctx);
			unlimitedArrowBtn.setTextSize(18);
			unlimitedArrowBtn.setText("Unlimited Arrows");
			unlimitedArrowBtn.setChecked(unlimitedArrowChecked);
			unlimitedArrowBtn.setLayoutParams(layoutParams);
			unlimitedArrowBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!unlimitedArrow){
						unlimitedArrow = true;
						unlimitedArrowChecked = true;
					}else{
						unlimitedArrow = false;
						unlimitedArrowChecked = false;
					}
					unlimitedArrowBtn.setChecked(unlimitedArrowChecked);
				}
			}));
			menuLayout.addView(unlimitedArrowBtn);
             
			var farmBtn = new android.widget.CheckBox(ctx);
			farmBtn.setTextSize(18);
			farmBtn.setText("Animal Farm");
			farmBtn.setChecked(farmChecked);
			farmBtn.setLayoutParams(layoutParams);
			farmBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!farmReady){
						farmReady = true;
						farmChecked = true;
					}else{
						farmReady = false;
						farmChecked = false;
					}
					farmBtn.setChecked(farmChecked);
				}
			}));
			menuLayout.addView(farmBtn);
             
			var animalBtn = new android.widget.TextView(ctx);
			animalBtn.setTextSize(18);
			animalBtn.setText("Farm Animal: " + spawnName);
			animalBtn.setLayoutParams(layoutParams);
			animalBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(spawnType==10 && spawnName=="Chicken"){
						spawnType = 11;
						spawnName = "Cow";
					}
					else if(spawnType==11 && spawnName=="Cow"){
						spawnType = 12;
						spawnName = "Pig";
					}
					else if(spawnType==12 && spawnName=="Pig"){
						spawnType = 13;
						spawnName = "Sheep";
					}
					else if(spawnType==13 && spawnName=="Sheep"){
						spawnType = 32;
						spawnName = "Zombie";
					}
					else if(spawnType==32 && spawnName=="Zombie"){
						spawnType = 33;
						spawnName = "Creeper";
					}
					else if(spawnType==33 && spawnName=="Creeper"){
						qspawnType = 34;
						spawnName = "Skeleton";
					}
					else if(spawnType==34 && spawnName=="Skeleton"){
						spawnType = 35;
						spawnName = "Spider";
					}
					else if(spawnType==35 && spawnName=="Spider"){
						spawnType = 36;
						spawnName = "Zombie Pigman";
					}
					else if(spawnType==36 && spawnName=="Zombie Pigman"){
						spawnType = 10;
						spawnName = "Chicken";
					}
					animalBtn.setText("Farm Animal: " + spawnName);
				}
			}));
			menuLayout.addView(animalBtn);
             
			var modeBtn = new android.widget.CheckBox(ctx);
			modeBtn.setTextSize(18);
			modeBtn.setText("God Mode");
			modeBtn.setChecked(modeChecked);
			modeBtn.setLayoutParams(layoutParams);
			modeBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!godMode){
						godMode = true;
						modeChecked = true;
					}else{
						godMode = false;
						modeChecked = false;
						Player.setHealth(20);
					}
					modeBtn.setChecked(modeChecked);
				}
			}));
			menuLayout.addView(modeBtn);
             
			var instaKillBtn = new android.widget.CheckBox(ctx);
			instaKillBtn.setTextSize(18);
			instaKillBtn.setText("Insta Kill");
			instaKillBtn.setChecked(killChecked);
			instaKillBtn.setLayoutParams(layoutParams);
			instaKillBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!instaKill){
						instaKill = true;
						killChecked = true;
					}else{
						instaKill = false;
						killChecked = false;
					}
					instaKillBtn.setChecked(killChecked);
				}
			}));
			menuLayout.addView(instaKillBtn);

			var arrowBtn = new android.widget.TextView(ctx);
			arrowBtn.setTextSize(18);
			arrowBtn.setText("Arrow Type: " + typeOfArrow);
			arrowBtn.setLayoutParams(layoutParams);
			arrowBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(typeOfArrow=="Normal"){
						typeOfArrow = "Explosive"
						explosive = 1;
					}
					else if(typeOfArrow=="Explosive"){
						web = 1;
						explosive = 0;
						typeOfArrow = "Web";
					}
					else if(typeOfArrow=="Web"){
						fire = 1;
						web = 0;
						typeOfArrow = "Fire";
					}
					else if(typeOfArrow=="Fire"){
						teleport = 1;
						fire = 0;
						typeOfArrow = "Teleporting";
					}
					else if(typeOfArrow=="Teleporting"){
						lava = 1;
						teleport = 0;
						typeOfArrow = "Lava";
					}
					else if(typeOfArrow=="Lava"){
						water = 1;
						lava = 0;
						typeOfArrow = "Water";
					}
					else if(typeOfArrow=="Water"){
						ice = 1;
						water = 0;
						typeOfArrow = "Ice";
					}
					else if(typeOfArrow=="Ice"){
						light = 1;
						ice = 0;
						typeOfArrow = "Light";
					}
					else if(typeOfArrow=="Light"){
						block = 1;
						light = 0;
						typeOfArrow = "Block";
					}
					else if(typeOfArrow=="Block"){
						block = 0;
						typeOfArrow = "Normal";
					}
					arrowBtn.setText("Arrow Type: " + typeOfArrow);
				}
			}));
			menuLayout.addView(arrowBtn);

			var instantBtn = new android.widget.CheckBox(ctx);
			instantBtn.setTextSize(18);
			instantBtn.setText("Insta-Mine");
			instantBtn.setChecked(instantChecked);
			instantBtn.setLayoutParams(layoutParams);
			instantBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!instant){
						instant = true;
						instaDestroy();
						instantChecked = true;
					}else{
						instant = false;
						defaultDestroy();
						instantChecked = false;
					}
					instantBtn.setChecked(instantChecked);
				}
			}));
			menuLayout.addView(instantBtn);
             
			var saddleBtn = new android.widget.CheckBox(ctx);
			saddleBtn.setTextSize(18);
			saddleBtn.setText("Saddle Up");
			saddleBtn.setChecked(saddleChecked);
			saddleBtn.setLayoutParams(layoutParams);
			saddleBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!saddleUp){
						saddleUp = true;
						saddleChecked = true;
					}else{
						saddleUp = false;
						saddleChecked = false;
					}
					saddleBtn.setChecked(saddleChecked);
				}
			}));
			menuLayout.addView(saddleBtn);
             
			var speedBtn = new android.widget.TextView(ctx);
			speedBtn.setTextSize(18);
			speedBtn.setText("Speed: " + movement);
			speedBtn.setLayoutParams(layoutParams);
			speedBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(speed==1){
						movement = "Fast";
						speed = 2;
					}
					else if(speed==2){
						Entity.setSneaking(getPlayerEnt(), true);
						movement = "Slow";
						speed = 0;
					}
					else if(speed==0){
						Entity.setSneaking(getPlayerEnt(), false);
						movement = "Normal";
						speed = 1;
					}
					speedBtn.setText("Speed: " + movement);
				}
			}));
			menuLayout.addView(speedBtn);

			var flyBtn = new android.widget.CheckBox(ctx);
			flyBtn.setTextSize(18);
			flyBtn.setText("Flying");
			flyBtn.setChecked(flyChecked);
			flyBtn.setLayoutParams(layoutParams);
			flyBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!flyReady){
						flyReady = true;
						flyChecked = true;
					}else{
						flyUp = false;
						flyDown = false;
						flyReady = false;
						flyChecked = false;
					}
					flyBtn.setChecked(flyChecked);
				}
			}));
			menuLayout.addView(flyBtn);
             
			var entityGunBtn = new android.widget.CheckBox(ctx);
			entityGunBtn.setTextSize(18);
			entityGunBtn.setText("Entity Launcher");
			entityGunBtn.setChecked(gunChecked);
			entityGunBtn.setLayoutParams(layoutParams);
			entityGunBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!gunReady){
						gunReady = true;
						gunChecked = true;
					}else{
						gunReady = false;
						gunChecked = false;
					}
					entityGunBtn.setChecked(gunChecked);
				}
			}));
			menuLayout.addView(entityGunBtn);
             
			var entityBtn = new android.widget.TextView(ctx);
			entityBtn.setTextSize(18);
			entityBtn.setText("Equipped Entity: " + entityName);
			entityBtn.setLayoutParams(layoutParams);
			entityBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(entityType==65 && entityName=="Primed TNT"){
						entityType = 80;
						entityName = "Arrow";
					}
					else if(entityType==80 && entityName=="Arrow"){
						entityType = 80;
						entityName = "Fire Arrow";
					}
					else if(entityType==80 && entityName=="Fire Arrow"){
						entityType = 81;
						entityName = "Snowball";
					}
					else if(entityType==81 && entityName=="Snowball"){
						entityType = 82;
						entityName = "Egg";
					}
					else if(entityType==82 && entityName=="Egg"){
						entityType = 65;
						entityName = "Primed TNT";
					}
					entityBtn.setText("Equipped Entity: " + entityName);
				}
			}));
			menuLayout.addView(entityBtn);

			var knockBackBtn = new android.widget.CheckBox(ctx);
			knockBackBtn.setTextSize(20);
			knockBackBtn.setText("KnockBack");
			knockBackBtn.setChecked(hitChecked);
			knockBackBtn.setLayoutParams(layoutParams);
			knockBackBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!knockBack){
						knockBack = true;
						hitChecked = true;
					
					}else{
						knockBack = false;
						hitChecked = false;
				
					}
					knockBackBtn.setChecked(hitChecked);
				}
			}));
			menuLayout.addView(knockBackBtn);

			var jumpBtn = new android.widget.TextView(ctx);
			jumpBtn.setTextSize(18);
			jumpBtn.setText("Jump Height: " + jumpHeight + " Blocks");
			jumpBtn.setLayoutParams(layoutParams);
			jumpBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(jumpHeight=="1"){
						jumpHeight = "2";
						jumpVel = 0.6;
					}
					else if(jumpHeight=="2"){
						jumpHeight = "3";
						jumpVel = 0.7;
					}
					else if(jumpHeight=="3"){
						jumpHeight = "4";
						jumpVel = 0.8;
					}
					else if(jumpHeight=="4"){
						jumpVel = 0.9;
						jumpHeight = "5";
					}
					else if(jumpHeight=="5"){
						jumpVel = 1;
						jumpHeight = "6";
					}
					else if(jumpHeight=="6"){
						jumpHeight = "1";
					}
					jumpBtn.setText("Jump Height: " + jumpHeight + " Blocks");
				}
			}));
			menuLayout.addView(jumpBtn);
			
			var currentFont = "Comic Sans MS";
			
			var fontScroll = new android.widget.TextView(ctx);
			fontScroll.setText("Current Font: " + currentFont);
			fontScroll.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(fontType=="Comic Sans MS"){
						fontType = "DS Crystal";
					}
					else if(fontType=="DS Crystal"){
						fontType = "Apple Kid";
					}
					else if(fontType=="Apple Kid"){
						fontType = "Archangelsk";
					}
					else if(fontType=="Archangelsk"){
						fontType = "Broadway";
					}
					else if(fontType=="Broadway"){
						fontType = "Choco Cooky";
					}
					else if(fontType=="Choco Cooky"){
						fontType = "Comic Sans MS";
					}
					fontScroll.setText("Current Font: " + fontType);
					setFont(fontType);
				}
			}));
			menuLayout.addView(fontScroll);

			var maker = new android.widget.TextView(ctx);
			maker.setTextSize(16);
			maker.setText("Made By The Droid Team");
			maker.setGravity(android.view.Gravity.CENTER);
			menuLayout.addView(maker);
			
			menuComponents = [
			heading, itemDropBtn, unlimitedArrowBtn, farmBtn, animalBtn, modeBtn, instaKillBtn, arrowBtn, instantBtn, saddleBtn, speedBtn, flyBtn, entityGunBtn, entityBtn, knockBackBtn, jumpBtn, fontScroll, maker
			]
			
			setFont(fontType);
             
			carbonPE = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
			carbonPE.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			carbonPE.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}catch(error){
			print("The menu could not be displayed, because: " + error);
		}
	}}));
}

function setFont(fontName){
	var font = new android.graphics.Typeface.createFromFile(new java.io.File(android.os.Environment.getExternalStorageDirectory() + "/", fontName + ".ttf"));
	
	for(var c = 0; c < menuComponents.length; c++){
		menuComponents[c].setTypeface(font);
	}
}
 
function gunButton(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var gLayout = new android.widget.LinearLayout(ctx);
			gLayout.setOrientation(0);
             
			var gunBtn = new android.widget.Button(ctx);
			gunBtn.setText("x");
			gunBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(view, event){
					switch(event.getAction()){
						case 0:
							gunEngaged = true;
							break;
						case 1:
							gunEngaged = false;
							break;
					}
					return true;
				}
			}));
			gLayout.addView(gunBtn);
             
			gunUI = new android.widget.PopupWindow(gLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			gunUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 230);
		}catch(p){
			print("The entity launcher button could not be displayed, because: " + p);
		}
	}}));
}
 
function flyButton(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var flyLayout = new android.widget.LinearLayout(ctx);
			flyLayout.setOrientation(1);
             
			var upBtn = new android.widget.Button(ctx);
			upBtn.setText("↑");
			upBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(view, event){
					switch(event.getAction()){
						case 0:
							flyUp = true;
							break;
						case 1:
							flyUp = false;
							break;
					}
					return true;
				}
			}));
			flyLayout.addView(upBtn);
             
			var downBtn = new android.widget.Button(ctx);
			downBtn.setText("↓");
			downBtn.setOnTouchListener(new android.view.View.OnTouchListener({
				onTouch: function(view, event){
					switch(event.getAction()){
						case 0:
							flyDown = true;
							break;
						case 1:
							flyDown = false;
							break;
					}
					return true;
				}
			}));
			flyLayout.addView(downBtn);
             
			flyUI = new android.widget.PopupWindow(flyLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			flyUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 50);
		}catch(prob){
			print("The jump button could not be displayed, because: " + prob);
		}
	}}));
}

function mobControls(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var controlLayout = new android.widget.LinearLayout(ctx);
			controlLayout.setOrientation(1);
			
			var forwardBtn = new android.widget.Button(ctx);
			forwardBtn.setText("↑");
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
			middleBtn.setChecked(verticalDIRchecked);
			middleBtn.setText("∞");
			middleBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(!verticalMovement){
						verticalMovement = true;
						verticalDIRchecked = true;
					}else{
						verticalMovement = false;
						verticalDIRchecked = false;
					}
					middleBtn.setChecked(verticalDIRchecked);
					middleBtn.setText("∞");
				}
			}));
			controlLayout.addView(middleBtn);
			
			var backwardBtn = new android.widget.Button(ctx);
			backwardBtn.setText("↓");
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
			controlUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 25);
		}catch(problem){
			print("The mob controls could not be displayed, because: " + problem);
		}
	}}));
}
 
 
function leaveGame(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(starterUI != null){
			starterUI.dismiss();
			starterUI = null;
		}
		if(closeUI != null){
			closeUI.dismiss();
			closeUI = null;
		}
		if(carbonPE != null){
			carbonPE.dismiss();
			carbonPE = null;
		}
		if(gunUI != null){
			gunUI.dismiss();
			gunUI = null;
		}
		if(flyUI != null){
			flyUI.dismiss();
			flyUI = null;
		}
		if(controlUI != null){
			controlUI.dismiss();
			controlUI = null;
		}
	}}));
}
 
function destroyBlock(x,y,z,side){
	var data = Level.getData(x,y,z);
	var tile = Level.getTile(x,y,z);
	if(itemDrop){
	if(tile==1 && getCarriedItem()==270 || tile==1 && getCarriedItem()==257 || tile==1 && getCarriedItem()==274 || tile==1 && getCarriedItem()==278 || tile==1 && getCarriedItem()==285 || tile==4 && getCarriedItem()==270 || tile==4 && getCarriedItem()==257 || tile==4 && getCarriedItem()==274 || tile==4 && getCarriedItem()==278 || tile==4 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,4,63);
	}
	else if(tile==1 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285 || tile==4 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,4,64);
	}
	if(tile==2 || tile==3){
		Level.dropItem(x,y,z,0.5,3,63);
	}
	if(tile==5 || tile==6 || tile==12 || tile==13){
		Level.dropItem(x,y,z,0.5,tile,63,data);
	}
	if(tile==14 && getCarriedItem()==257 || tile==14 && getCarriedItem()==278 || tile==14 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,14,63);
	}
	else if(tile==14 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,14,64);
	}
	if(tile==15 && getCarriedItem()==257 || tile==15 && getCarriedItem()==274 || tile==15 && getCarriedItem()==278 || tile==15 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,15,63);
	}
	else if(tile==15 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,15,64);
	}
	if(tile==16 && getCarriedItem()==270 || tile==16 && getCarriedItem()==257 || tile==16 && getCarriedItem()==274 || tile==16 && getCarriedItem()==278 || tile==16 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,263,63);
	}
	else if(tile==16 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,263,64);
	}
	if(tile==17){
		Level.dropItem(x,y,z,0.5,17,63,data);
	}
	if(tile==18 && getCarriedItem()==359){
		Level.dropItem(x,y,z,0.5,18,63);
	}
	else if(tile==18 && getCarriedItem()!=359){
		Level.dropItem(x,y,z,0.5,18,64);
	}
	if(tile==19 || tile==20){
		Level.dropItem(x,y,z,0.5,tile,63,data);
	}
	if(tile==21 && getCarriedItem()==257 || tile==21 && getCarriedItem()==274 || tile==21 && getCarriedItem()==278 || tile==21 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,21,63);
	}
	else if(tile==21 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,21,64);
	}
	if(tile==22 && getCarriedItem()==257 || tile==22 && getCarriedItem()==274 || tile==22 && getCarriedItem()==278 || tile==22 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,22,63);
	}
	else if(tile==22 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,22,64);
	}
	if(tile==24 && getCarriedItem()==270 || tile==24 && getCarriedItem()==257 || tile==24 && getCarriedItem()==274 || tile==24 && getCarriedItem()==278 || tile==24 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,24,63);
	}
	else if(tile==24 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,24,64);
	}
	if(tile==26){
		Level.dropItem(x,y,z,0.5,26,63,data);
	}
	if(tile==27 && getCarriedItem()==270 || tile==27 && getCarriedItem()==257 || tile==27 && getCarriedItem()==274 || tile==27 && getCarriedItem()==278 || tile==27 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,27,63);
	}
	else if(tile==27 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,27,64);
	}
	if(tile==30 && getCarriedItem()==359){
		Level.dropItem(x,y,z,0.5,287,63);
	}
	else if(tile==30 && getCarriedItem()!=359){
		Level.dropItem(x,y,z,0.5,287,64);
	}
	if(tile==31 && getCarriedItem()==359 || tile==32 & getCarriedItem()==359){
		Level.dropItem(x,y,z,0.5,tile,63,data);
	}
	else if(tile==31 && getCarriedItem()!=359 || tile==32 && getCarriedItem()!=359){
		Level.dropItem(x,y,z,0.5,tile,64,data);
	}
	if(tile==37 || tile==38 || tile==39 || tile==40){
		Level.dropItem(x,y,z,0.5,tile,63);
	}
	if(tile==41 && getCarriedItem()==257 || tile==41 && getCarriedItem()==278 || tile==41 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,41,63);
	}
	else if(tile==41 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,41,64);
	}
	if(tile==42 && getCarriedItem()==257 || tile==42 && getCarriedItem()==274 || tile==42 && getCarriedItem()==278 || tile==42 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,42,63);
	}
	else if(tile==42 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,42,64);
	}
	if(tile==44 && getCarriedItem()==257 || tile==44 && getCarriedItem()==270 || tile==44 && getCarriedItem()==274 || tile==44 && getCarriedItem()==278 || tile==44 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,44,63);
	}
	else if(tile==44 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,44,64);
	}
	if(tile==45 && getCarriedItem()==270 || tile==45 && getCarriedItem()==257 || tile==45 && getCarriedItem()==274 || tile==45 && getCarriedItem()==278 || tile==45 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,45,63);
	}
	else if(tile==45 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,45,64);
	}
	if(tile==47){
		Level.dropItem(x,y,z,0.5,340,61);
	}
	if(tile==48 && getCarriedItem()==270 || tile==48 && getCarriedItem()==257 || tile==48 && getCarriedItem()==274 || tile==48 && getCarriedItem()==278 || tile==48 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,48,63);
	}
	else if(tile==48 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,48,64);
	}
	if(tile==49 && getCarriedItem()==278 || tile==246 && getCarriedItem()==278){
		Level.dropItem(x,y,z,0.5,49,63);
	}
	else if(tile==49 && getCarriedItem()!=278 || tile==246 && getCarriedItem()!=278){
		Level.dropItem(x,y,z,0.5,49,64);
	}
	if(tile==50 || tile==53 || tile==54){
		Level.dropItem(x,y,z,0.5,tile,63);
	}
	if(tile==56 && getCarriedItem()==257 || tile==57 && getCarriedItem()==257 || tile==56 && getCarriedItem()==278 || tile==57 && getCarriedItem()==278 || tile==56 && getCarriedItem()==285 || tile==57 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,tile,63);
	}
	else if(tile==56 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285 || tile==57 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,tile,64);
	}
	if(tile==61 && getCarriedItem()==270 || tile==61 && getCarriedItem()==257 || tile==61 && getCarriedItem()==274 || tile==61 && getCarriedItem()==278 || tile==61 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,61,63);
	}
	else if(tile==61 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,61,64);
	}
	if(tile==63 || tile==64 || tile==65 || tile==66){
		Level.dropItem(x,y,z,0.5,tile,63);
	}
	if(tile==67 && getCarriedItem()==270 || tile==67 && getCarriedItem()==257 || tile==67 && getCarriedItem()==274 || tile==67 && getCarriedItem()==278 || tile==67 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,67,63);
	}
	else if(tile==67 && getCarriedItem()!=270 && getCarriedItem()!=257 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,67,64);
	}
	if(tile==73 && getCarriedItem()==257 || tile==73 && getCarriedItem()==278 || tile==73 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,331,63);
	}
	else if(tile==73 && getCarriedItem()!=257 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,331,64);
	}
	if(tile==78 && getCarriedItem()==256 || tile==78 && getCarriedItem()==269 || tile==78 && getCarriedItem()==273 || tile==78 && getCarriedItem()==277 || tile==78 && getCarriedItem()==284){
		Level.dropItem(x,y,z,0.5,332,63);
	}
	else if(tile==78 && getCarriedItem()!=256 && getCarriedItem()!=269 && getCarriedItem()!=273 && getCarriedItem()!=277 && getCarriedItem()!=284){
		Level.dropItem(x,y,z,0.5,332,64);
	}
	if(tile==80 && getCarriedItem()==256 || tile==80 && getCarriedItem()==269 || tile==80 && getCarriedItem()==273 || tile==80 && getCarriedItem()==277 || tile==80 && getCarriedItem()==284){
		Level.dropItem(x,y,z,0.5,332,60);
	}
	else if(tile==80 && getCarriedItem()!=256 && getCarriedItem()!=269 && getCarriedItem()!=273 && getCarriedItem()!=277 && getCarriedItem()!=284){
		Level.dropItem(x,y,z,0.5,332,64);
	}
	if(tile==81 || tile==82 || tile==83 || tile==85 || tile==86 || tile==89 || tile==91 || tile==96 || tile==102 || tile==107){
		Level.dropItem(x,y,z,0.5,tile,63);
	}
	if(tile==87 && getCarriedItem()==257 || tile==87 && getCarriedItem()==270 || tile==87 && getCarriedItem()==274 || tile==87 && getCarriedItem()==278 || tile==87 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,87,63);
	}
	else if(tile==87 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,87,64);
	}
	if(tile==98 && getCarriedItem()==257 || tile==98 && getCarriedItem()==270 || tile==98 && getCarriedItem()==274 || tile==98 && getCarriedItem()==278 || tile==98 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,98,63);
	}
	else if(tile==98 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,98,64);
	}
	if(tile==101 && getCarriedItem()==257 || tile==101 && getCarriedItem()==270 || tile==101 && getCarriedItem()==274 || tile==101 && getCarriedItem()==278 || tile==101 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,101,63);
	}
	else if(tile==101 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,101,64);
	}
	if(tile==103){
		Level.dropItem(x,y,z,0.5,360,57);
	}
	if(tile==108 && getCarriedItem()==257 || tile==108 && getCarriedItem()==270 || tile==108 && getCarriedItem()==274 || tile==108 && getCarriedItem()==278 || tile==108 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,108,63);
	}
	else if(tile==108 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,108,64);
	}
	if(tile==109 && getCarriedItem()==257 || tile==109 && getCarriedItem()==270 || tile==109 && getCarriedItem()==274 || tile==109 && getCarriedItem()==278 || tile==109 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,109,63);
	}
	else if(tile==109 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,109,64);
	}
	if(tile==112 && getCarriedItem()==257 || tile==112 && getCarriedItem()==270 || tile==112 && getCarriedItem()==274 || tile==112 && getCarriedItem()==278 || tile==112 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,112,63);
	}
	else if(tile==112 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,112,64);
	}
	if(tile==114 && getCarriedItem()==257 || tile==114 && getCarriedItem()==270 || tile==114 && getCarriedItem()==274 || tile==114 && getCarriedItem()==278 || tile==114 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,114,63);
	}
	else if(tile==114 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,114,64);
	}
	if(tile==128 && getCarriedItem()==257 || tile==128 && getCarriedItem()==270 || tile==128 && getCarriedItem()==274 || tile==128 && getCarriedItem()==278 || tile==128 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,128,63);
	}
	else if(tile==128 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,128,64);
	}
	if(tile==134 || tile==135 || tile==136 || tile==158 || tile==170 || tile==171 || tile==245 || tile==247){
		Level.dropItem(x,y,z,0.5,tile,63,data);
	}
	if(tile==139 && getCarriedItem()==257 || tile==139 && getCarriedItem()==270 || tile==139 && getCarriedItem()==274 || tile==139 && getCarriedItem()==278 || tile==139 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,139,63);
	}
	else if(tile==139 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,139,64);
	}
	if(tile==155 && getCarriedItem()==257 || tile==155 && getCarriedItem()==270 || tile==155 && getCarriedItem()==274 || tile==155 && getCarriedItem()==278 || tile==155 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,155,63);
	}
	else if(tile==155 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,155,64);
	}
	if(tile==156 && getCarriedItem()==257 || tile==156 && getCarriedItem()==270 || tile==156 && getCarriedItem()==274 || tile==156 && getCarriedItem()==278 || tile==156 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,156,63);
	}
	else if(tile==156 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,156,64);
	}
	if(tile==173 && getCarriedItem()==257 || tile==173 && getCarriedItem()==270 || tile==173 && getCarriedItem()==274 || tile==173 && getCarriedItem()==278 || tile==173 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,173,63);
	}
	else if(tile==173 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,173,64);
	}
	if(tile==244 && getCarriedItem()==257 || tile==244 && getCarriedItem()==270 || tile==244 && getCarriedItem()==274 || tile==244 && getCarriedItem()==278 || tile==244 && getCarriedItem()==285){
		Level.dropItem(x,y,z,0.5,457,63);
	}
	else if(tile==244 && getCarriedItem()!=257 && getCarriedItem()!=270 && getCarriedItem()!=274 && getCarriedItem()!=278 && getCarriedItem()!=285){
		Level.dropItem(x,y,z,0.5,457,64);
	}
	if(tile==250){
		Level.dropItem(x,y,z,0,247,64);
	}
    }
}
 
function entityAddedHook(entity){
	if(Entity.getEntityTypeId(entity)==80 ){
		ground = 1;
		arrow = entity;
	}
	if(Entity.getEntityTypeId(entity)==80 && unlimitedArrow==true){
		addItemInventory(262,1);
	}
}
function entityRemovedHook(entity){
	var underArrow=getTile(Entity.getX(entity), Entity.getY(entity)-1, Entity.getZ(entity));
	var arrowCoords =getTile(Entity.getX(entity),Entity.getY(entity),Entity.getZ(entity));
	var arrowX=Entity.getX(entity);
	var arrowY=Entity.getY(entity);
	var arrowZ =Entity.getZ(entity);
	if(Entity.getEntityTypeId(entity)==80){
		if(explosive==1){
			explode(Entity.getX(entity), Entity.getY(entity)-1,Entity.getZ(entity), 4);
		}
		if(fire==1){
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity), 51);
			setTile(Entity.getX(entity)+1, Entity.getY(entity), Entity.getZ(entity), 51);
			setTile(Entity.getX(entity)-1, Entity.getY(entity), Entity.getZ(entity), 51);
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity)+1, 51);
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity)-1, 51);
			setTile(Entity.getX(entity)+1, Entity.getY(entity), Entity.getZ(entity)+1, 51);
			setTile(Entity.getX(entity)-1, Entity.getY(entity), Entity.getZ(entity)-1, 51);
			setTile(Entity.getX(entity)+1, Entity.getY(entity), Entity.getZ(entity)-1, 51);
			setTile(Entity.getX(entity)-1, Entity.getY(entity), Entity.getZ(entity)+1, 51);
			setTile(Entity.getX(entity)+2, Entity.getY(entity), Entity.getZ(entity), 51);
			setTile(Entity.getX(entity)-2, Entity.getY(entity), Entity.getZ(entity), 51);
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity)+2, 51);
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity)-2, 51);
			onFire==1;
		}
		if(teleport==1){
			setPosition(getPlayerEnt(),Entity.getX(entity), Entity.getY(entity)+2,Entity.getZ(entity));
		}
		if(water==1){
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity), 9);
			setTile (Entity.getX(entity), Entity.getY(entity)+1,Entity.getZ(entity), 9);
			setTile (Entity.getX(entity), Entity.getY(entity)+2,Entity.getZ(entity), 9);
			setTile (Entity.getX(entity)+1, Entity.getY(entity),Entity.getZ(entity), 9);
			setTile (Entity.getX(entity)+2, Entity.getY(entity),Entity.getZ(entity), 9);
			setTile (Entity.getX(entity)-1, Entity.getY(entity),Entity.getZ(entity), 9);
			setTile (Entity.getX(entity)-2, Entity.getY(entity),Entity.getZ(entity), 9);
			setTile (Entity.getX(entity), Entity.getY(entity)+3,Entity.getZ(entity), 9);
			setTile (Entity.getX(entity)+3, Entity.getY(entity),Entity.getZ(entity), 9);
			setTile (Entity.getX(entity)-3, Entity.getY(entity),Entity.getZ(entity), 9);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)+1, 9);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)-1,9);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)+2, 9);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)-2, 9);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)+3, 9);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)-3, 9);
		}
		if(ice==1){
			if(getTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity))==8||getTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity))==9){
				setTile(arrowX, arrowY,arrowZ,79);
				setTile(arrowX+1, arrowY, arrowZ, 79);
				setTile(arrowX-1, arrowY, arrowZ, 79);
				setTile(arrowX, arrowY, arrowZ+1, 79);
				setTile(arrowX, arrowY, arrowZ-1, 79);
				setTile(arrowX+1, arrowY, arrowZ+1, 79);
				setTile(arrowX-1, arrowY, arrowZ-1, 79);
				setTile(arrowX+1, arrowY, arrowZ-1, 79);
				setTile(arrowX-1, arrowY, arrowZ+1, 79);
				setTile(arrowX+2, arrowY, arrowZ, 79);
				setTile(arrowX-2, arrowY, arrowZ, 79);
				setTile(arrowX, arrowY, arrowZ+2, 79);
				setTile(arrowX, arrowY, arrowZ-2, 79);
			}
			if(underArrow!=8&&underArrow!=9){
				setTile(arrowX, arrowY, arrowZ,79);
			}
			else if(underArrow==8||underArrow==9){
				if(getTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity))==0){
					setTile(arrowX, arrowY-1,arrowZ,79);
					setTile(arrowX+1, arrowY-1, arrowZ, 79);
					setTile(arrowX-1, arrowY-1, arrowZ, 79);
					setTile(arrowX, arrowY-1, arrowZ+1, 79);
					setTile(arrowX, arrowY-1, arrowZ-1, 79);
					setTile(arrowX+1, arrowY-1, arrowZ+1, 79);
					setTile(arrowX-1, arrowY-1, arrowZ-1, 79);
					setTile(arrowX+1, arrowY-1, arrowZ-1, 79);
					setTile(arrowX-1, arrowY-1, arrowZ+1, 79);
					setTile(arrowX+2, arrowY-1, arrowZ, 79);
					setTile(arrowX-2, arrowY-1, arrowZ, 79);
					setTile(arrowX, arrowY-1, arrowZ+2, 79);
					setTile(arrowX, arrowY-1, arrowZ-2, 79);
				}
			}
		}
		if(lava==1){
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity), 10);
			setTile (Entity.getX(entity), Entity.getY(entity)+1,Entity.getZ(entity), 10);
			setTile (Entity.getX(entity), Entity.getY(entity)+2,Entity.getZ(entity), 10);
			setTile (Entity.getX(entity)+1, Entity.getY(entity),Entity.getZ(entity), 10);
			setTile (Entity.getX(entity)+2, Entity.getY(entity),Entity.getZ(entity), 10);
			setTile (Entity.getX(entity)-1, Entity.getY(entity),Entity.getZ(entity), 10);
			setTile (Entity.getX(entity)-2, Entity.getY(entity),Entity.getZ(entity), 10);
			setTile (Entity.getX(entity), Entity.getY(entity)+3,Entity.getZ(entity), 10);
			setTile (Entity.getX(entity)+3, Entity.getY(entity),Entity.getZ(entity), 10);
			setTile (Entity.getX(entity)-3, Entity.getY(entity),Entity.getZ(entity), 10);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)+1, 10);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)-1,10);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)+2, 10);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)-2, 10);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)+3, 10);
			setTile (Entity.getX(entity), Entity.getY(entity),Entity.getZ(entity)-3, 10);
		}
		if(web==1){
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity),30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity), Entity.getZ(entity),30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity), Entity.getZ(entity),30);
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity), Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity), Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity), Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity), Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity), Entity.getY(entity)+1, Entity.getZ(entity),30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity)+1, Entity.getZ(entity),30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity)+1, Entity.getZ(entity),30);
			setTile(Entity.getX(entity), Entity.getY(entity)+1, Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity), Entity.getY(entity)+1, Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity)+1, Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity)+1, Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity)+1, Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity)+1, Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity), Entity.getY(entity)+2, Entity.getZ(entity),30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity)+2, Entity.getZ(entity),30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity)+2, Entity.getZ(entity),30);
			setTile(Entity.getX(entity), Entity.getY(entity)+2, Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity), Entity.getY(entity)+2, Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity)+2, Entity.getZ(entity)+1,30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity)+2, Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)+1, Entity.getY(entity)+2, Entity.getZ(entity)-1,30);
			setTile(Entity.getX(entity)-1, Entity.getY(entity)+2, Entity.getZ(entity)+1,30);
		}
		if(block==1){
			setTile(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity),getBlock, getBlockData);
		}
	}
}

function useItem(x,y,z,itemId,blockId,side){
	if(itemId==261 && block==1){
		getBlock = blockId;
		getBlockData = Level.getData(x, y, z);
		clientMessage("Set block arrow to " + getBlock + ".");
	}
	if(blockId==247 && farmReady==true){
		preventDefault();
		setTile(x,y,z,250);
		X = x;
		Y = y;
		Z = z;
		farmActive = true;
		clientMessage("Animal Farm has started");
	}
	if(blockId==250 && farmActive==true){
		setTile(x,y,z,247);
		farmActive = false;
		clientMessage("Animal Farm has ended");
		spawnCount = 160;
		preventDefault();
	}
}
 
function modTick(){
	if(speed==2){
		if(shouldRun==1){
			Xpos=getPlayerX();
			Zpos=getPlayerZ();
			shouldRun = shouldRun + 1;
		}
		else if(shouldRun==3){
			shouldRun=1;
			Xdiff=getPlayerX()-Xpos;
			Zdiff=getPlayerZ()-Zpos;
			setVelX(getPlayerEnt(),Xdiff);
			setVelZ(getPlayerEnt(),Zdiff);
			Xdiff=0;
			Zdiff=0;
		}
		if(shouldRun!=1){
			shouldRun = shouldRun+ 1;
		}
	}
	if(jumpHeight!="1" && Entity.getVelY(getPlayerEnt())>0 && jump==0){
		setVelY(getPlayerEnt(), jumpVel);
		jump = 1;
	}
	else if(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())!=0&&jump==1){
		jump = 0;
	}
	if(explosive==1&&ground==1||fire==1&&ground==1||water==1&&ground==1||ice==1&&ground==1||lava==1&&ground==1||web==1&&ground==1||block==1&&ground==1){
		if(getTile(Entity.getX(arrow), Entity.getY(arrow)-1,Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow), Entity.getY(arrow)+1,Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow)+1, Entity.getY(arrow),Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow)-1, Entity.getY(arrow),Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow), Entity.getY(arrow),Entity.getZ(arrow)+1)!=0||getTile(Entity.getX(arrow), Entity.getY(arrow),Entity.getZ(arrow)-1)!=0){
			Entity.remove(arrow);
		}
	}
	if(teleport==1&&ground==1){
		if(getTile(Entity.getX(arrow), Entity.getY(arrow)-1,Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow), Entity.getY(arrow)+1,Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow)+1, Entity.getY(arrow),Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow)-1, Entity.getY(arrow),Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow), Entity.getY(arrow),Entity.getZ(arrow)+1)!=0||getTile(Entity.getX(arrow), Entity.getY(arrow),Entity.getZ(arrow)-1)!=0){
			if(getTile(Entity.getX(arrow), Entity.getY(arrow),Entity.getZ(arrow))!=95&&Entity.getY(arrow)>1){
				Entity.remove(arrow);
			}
		}
	}
	if(light==1&&ground==1){
		if(getTile(Entity.getX(arrow), Entity.getY(arrow)-1,Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow), Entity.getY(arrow)+1,Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow)+1, Entity.getY(arrow),Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow)-1, Entity.getY(arrow),Entity.getZ(arrow))!=0||getTile(Entity.getX(arrow), Entity.getY(arrow),Entity.getZ(arrow)+1)!=0||getTile(Entity.getX(arrow), Entity.getY(arrow),Entity.getZ(arrow)-1)!=0){
			setTile(Entity.getX(arrow), Entity.getY(arrow), Entity.getZ(arrow),89);
			Entity.remove(arrow);
		}
	}
	if(farmActive){
		spawnCount--;
	}
	if(spawnCount==140){
		Level.spawnMob(X+4, Y, Z+4, spawnType);
	}
	if(spawnCount==120){
		Level.spawnMob(X+4, Y, Z-4, spawnType);
	}
	if(spawnCount==100){
		Level.spawnMob(X-4, Y, Z+4, spawnType);
	}
	if(spawnCount==80){
		Level.spawnMob(X-4, Y, Z-4, spawnType);
	}
	if(spawnCount==60){
		Level.spawnMob(X+4, Y, Z, spawnType);
	}
	if(spawnCount==40){
		Level.spawnMob(X, Y, Z+4, spawnType);
	}
	if(spawnCount==20){
		Level.spawnMob(X, Y+1, Z, spawnType);
	}
	if(spawnCount==0){
		spawnCount = 160;
	}
	if(godMode){
		Player.setHealth(30000);
	}
	if(gunEngaged==true && getPitch(getPlayerEnt())>40){
		var playerYaw = Entity.getYaw(Player.getEntity());
		var playerPitch = Entity.getPitch(Player.getEntity());
		velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
		velX = Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
		velZ = -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
		entity = Level.spawnMob(Player.getX() + velX * 2, Player.getY(), Player.getZ() + velZ * 2, entityType);
		if(entityType==80 && entityName=="Fire Arrow"){
			Entity.setFireTicks(entity, 60);
		}
		setVelX(entity, velX * 2);
		setVelY(entity, velY);
		setVelZ(entity, velZ * 2);  
	}
	if(gunEngaged==true && getPitch(getPlayerEnt())<40){
		var playerYaw = Entity.getYaw(Player.getEntity());
		var playerPitch = Entity.getPitch(Player.getEntity());
		velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
		velX = Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
		velZ = -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
		entity = Level.spawnMob(Player.getX() + velX * 2, Player.getY() + 1, Player.getZ() + velZ * 2, entityType);
		if(entityType==80 && entityName=="Fire Arrow"){
			Entity.setFireTicks(entity, 60);
		}
		setVelX(entity, velX * 2);
		setVelY(entity, velY);
		setVelZ(entity, velZ * 2);  
	}
	if(flyUp){
		setVelY(getPlayerEnt(), 0.5);
	}
	if(flyDown){
		setVelY(getPlayerEnt(), -0.5);
	}
	if(flyReady==true && flyUp==false && flyDown==false){
		setVelY(getPlayerEnt(), 0);
	}
	if(controlsReady){
		//500ISE's script
		var playerYaw = getYaw();
		var playerPitch = getPitch();
		setRot(controlledMob, playerYaw, 0);
		var velX = -1 * Math.sin(playerYaw / 180 * Math.PI) * ANIMAL_SPEED;
		var velZ = Math.cos(playerYaw / 180 * Math.PI) * ANIMAL_SPEED;
		if(forward){
			setVelX(controlledMob, velX);
			setVelZ(controlledMob, velZ);
			setVelY(controlledMob, 0);
		}
		if(backward){
			setVelX(controlledMob, -velX);
			setVelZ(controlledMob, -velZ);
			setVelY(controlledMob, 0);
		}
		if(up){
			setVelY(controlledMob, 0.5);
		}
		if(down){
			setVelY(controlledMob, -0.5);
		}
	}
	if(controlsReady==true && forward==false && backward==false && up==false && down==false){
		setVelX(controlledMob, 0);
		setVelZ(controlledMob, 0);
		setVelY(controlledMob, 0);
	}
}
 
function attackHook(attacker, victim){
	if(knockBack){
		if(getYaw() < 0){
			var hit = getYaw()+90;
			for(go=0; hit<0; go++){
				hit+= 360;
			}
			x = Math.cos(hit*(Math.PI/180));
			z = Math.sin(hit*(Math.PI/180));
			setVelX(victim, x*3);
			setVelY(victim, 1);
			setVelZ(victim, z*3);
		}
		else if(getYaw() > 0 && getYaw() < 360){
			var hit = getYaw()+90;
			XVel = Math.cos(hit*(Math.PI/180));
			ZVel= Math.sin(hit*(Math.PI/180));
			setVelX(victim, XVel*3);
			setVelY(victim, 1);
			setVelZ(victim, ZVel*3);
		}
		else if( getYaw() >= 360){
			var hit= getYaw()+90;
			for(go=0; hit>=360; go++){
				hit -= 360;
			}
			XVel = Math.cos(hit*(Math.PI/180));
			ZVel = Math.sin(hit*(Math.PI/180));
			setVelX(victim, XVel*3);
			setVelY(victim, 1);
			setVelZ(victim, ZVel*3);
		}
	}
	if(instaKill){
		Entity.setHealth(victim, 0);
	}
	if(saddleUp){
		preventDefault();
		rideAnimal(attacker, victim);
		controlledMob = victim;
		controlsReady = true;
	}
}
 
function instaDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, 0);
	}
}
 
function defaultDestroy(){
	for(i = 0; i < 256; i++){
		Block.setDestroyTime(i, defaultDestroyTime[i]);
	}
}
