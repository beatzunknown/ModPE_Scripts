/*
DroidControl v1.1 - Your worlds will no longer control you, you will control THEM!
*/

var GUI = null;
var Btn = null;
var menu = null;
var hGUI = null;
var mGUI = null;
var sneaking = false;
var running = false;
var invincible = false;
var sText = "Off"
var sText1 = "Off"
var jump = false;
var sjump = false;
var jText = "Off";
var Xpos=0;
var Zpos=0;
var i=1;
var Xdiff=0;
var Zdiff=0;
var jetpack = 0;
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;
var type = "None";
var type1 = "None";
var type2 = "None";
var type3 = "None";

function dip2px(ctx, dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){
  	starter();
}

function starter(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
            var GUILayout = new android.widget.LinearLayout(ctx);
			GUILayout.setOrientation(0);
			
			var startBtn = new android.widget.Button(ctx);
			startBtn.setText("S");
			startBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
                  	GUI.dismiss();
					btn();
				}
			}));
			GUILayout.addView(startBtn);
            
			GUI = new android.widget.PopupWindow(GUILayout, dip2px(ctx, 48), dip2px(ctx, 48));
			GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 120, 0);
		}catch(prob){
			print("The button could not be displayed because: " + prob);
		}
	}}));
}

function btn(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
            var btnLayout = new android.widget.LinearLayout(ctx);
			btnLayout.setOrientation(0);
			
			var menuBtn = new android.widget.Button(ctx);
			menuBtn.setText("Menu");
			menuBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					openMenu();
				}
			}));
			btnLayout.addView(menuBtn);
			
			var jetpackBtn = new android.widget.ToggleButton(ctx);
			jetpackBtn.setText("Jetpack");
			jetpackBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(jetpack==0){jetpack = 1;}else{jetpack = 0;}
					jetpackBtn.setText("Jetpack");
				}
			}));
			btnLayout.addView(jetpackBtn);
			
			var c = new android.widget.Button(ctx);
			c.setText("Close");
			c.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Btn.dismiss(); 
                    starter();
				}
			}));
			btnLayout.addView(c);
            
			Btn = new android.widget.PopupWindow(btnLayout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			Btn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			Btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
		}catch(error){
			print("The button could not be displayed because: " + error);
		}
	}}));
}

function openMenu(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var layout = new android.widget.LinearLayout(ctx);
          	var layoutScroll = new android.widget.ScrollView(ctx);
          	var layout1 = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
          	layout1.setOrientation(1);
          	
          	layoutScroll.addView(layout);
          	layout1.addView(layoutScroll);
			
			var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
			
            var title = new android.widget.TextView(ctx);
            title.setTextSize(24);
            title.setText("DroidControl");
            title.setLayoutParams(textParams);
            layout.addView(title);
			
            var stitle = new android.widget.TextView(ctx);
            stitle.setTextSize(14);
            stitle.setText("By C0D3-H4CK3R");
            stitle.setLayoutParams(textParams);
            layout.addView(stitle);
			
			var health = new android.widget.Button(ctx);
			health.setText("Health Changer");
			health.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					healthMenu();
                }
			}));
			layout.addView(health);
          
			var move = new android.widget.Button(ctx);
			move.setText("Movement");
			move.setOnClickListener(new android.view.View.OnClickListener({
            	onClick: function(viewarg){
					moveMenu();
                }
			}));
			layout.addView(speed);
          
			var explo = new android.widget.Button(ctx);
			explo.setText("Explode");
			explo.setOnClickListener(new android.view.View.OnClickListener({
            	onClick: function(viewarg){
					exploMenu.show();
                }
			}));
			layout.addView(explo);
		  
			var armBtn = new android.widget.Button(ctx);
			armBtn.setText("Armour Manager");
			armBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
					try{
						var ar = java.lang.reflect.Array.newInstance(java.lang.CharSequence, 4);
						ar[0] = "Helmet: " + type;
						ar[1] = "Chestplate: " + type1;
						ar[2] = "Leggings: " + type2;
						ar[3] = "Boots: " + type3;
                
						var builder = new android.app.AlertDialog.Builder(ctx);
						builder.setTitle("Armour Manager");
						builder.setItems(ar, new android.content.DialogInterface.OnClickListener({
							onClick: function(dialog, which) {
								total = 5;
								if(which == 0){
									total = 6;
								}else if(which == 1){
									total = 6;
								}else if(which == 2){
									total = 6;
								}else if(which == 3){
									total = 6;
								}
						  
								var arra = java.lang.reflect.Array.newInstance(java.lang.CharSequence, total);
								var Added = 0;
								var Add = 0;
								var Adde = 0;
								var Ad = 0;
							
								if(which == 0) {
									ToArray(arra, Added, ["Leather Cap", "Gold Helmet", "Chainmail Helmet", "Iron Helmet", "Diamond Helmet", "None"]);
									Added += 6;
								}
						  
								if(which == 1) {
									ToArray(arra, Add, ["Leather Tunic", "Gold Chestplate", "Chainmail Chestplate", "Iron Chestplate", "Diamond Chestplate", "None"]);
									Add += 6;
								}
						
								if(which == 2) {
									ToArray(arra, Adde, ["Leather Pants", "Gold Leggings", "Chainmail Leggings", "Iron Leggings", "Diamond Leggings", "None"]);
									Adde += 6;
								}
						  
								if(which == 3) {
									ToArray(arra, Ad, ["Leather Boots", "Gold Boots", "Chainmail Boots", "Iron Boots", "Diamond Boots", "None"]);
									Ad += 6;
								}
                        
								var builder2 = new android.app.AlertDialog.Builder(ctx);
								builder2.setTitle("Select Armour Piece");
								builder2.setItems(arra, new android.content.DialogInterface.OnClickListener({
									onClick: function(dialog2, which2) {
										var id = name3id(arra[which2]);
										if(which == 0){
											Player.setArmorSlot(0,id);
										}else if(which == 1){
											Player.setArmorSlot(1,id);
										}else if(which == 2){
											Player.setArmorSlot(2,id);
										}else if(which == 3){
											Player.setArmorSlot(3,id);
										}
									}
								}));
								builder2.show();
							}
						}));
						builder.show();
					}catch(err){
						print("Error: "+err);
					}
				}
			}));
			layout.addView(armBtn);
			
			var eaBtn = new android.widget.Button(ctx);
			eaBtn.setText("Elemental Arrows");
			eaBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					arrowMenu();
				}
			}));
			layout.addView(eaBtn);
			
			var xbutton = new android.widget.Button(ctx);
			xbutton.setText("Close");
			xbutton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    menu.dismiss();
                }
			}));
			layout.addView(xbutton);
			
            menu = new android.widget.PopupWindow(layout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}catch(e){
			print("The menu could not be displayed because: " + e);
		}
	}}));
}

function healthMenu(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var healthLayout = new android.widget.LinearLayout(ctx);
			var healthScroll = new android.widget.ScrollView(ctx);
			var healthLayout1 = new android.widget.LinearLayout(ctx);
			healthLayout.setOrientation(1);
			healthLayout1.setOrientation(1);
			
			healthScroll.addView(healthLayout);
			healthLayout1.addView(healthScroll);
			
			var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
			
            var title = new android.widget.TextView(ctx);
            title.setTextSize(24);
            title.setText("DroidControl:");
            title.setLayoutParams(textParams);
            healthLayout.addView(title);
			
			var stitle = new android.widget.TextView(ctx);
			stitle.setTextSize(22);
			stitle.setText("Health Menu");
			stitle.setLayoutParams(textParams);
			healthLayout.addView(stitle);
			
			var stitle1 = new android.widget.TextView(ctx);
			stitle1.setTextSize(16);
			stitle1.setText("Current health: " + Entity.getHealth(getPlayerEnt()));
			stitle1.setLayoutParams(textParams);
			healthLayout.addView(stitle1);
			
			var stitle2 = new android.widget.TextView(ctx);
			stitle2.setTextSize(20);
			stitle2.setText("Increase health by...");
			stitle2.setLayoutParams(textParams);
			healthLayout.addView(stitle2); 
			
			var heal1 = new android.widget.TextView(ctx);
			heal1.setText("1 half-heart");
			heal1.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setHealth(Entity.getHealth(getPlayerEnt()) + 1);
				}
			}));
			healthLayout.addView(heal1);
			
			var heal2 = new android.widget.TextView(ctx);
			heal2.setText("2 half-hearts");
			heal2.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setHealth(Entity.getHealth(getPlayerEnt()) + 2);
				}
			}));
			healthLayout.addView(heal2);
			
			var heal5 = new android.widget.TextView(ctx);
			heal5.setText("5 half-hearts");
			heal5.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setHealth(Entity.getHealth(getPlayerEnt()) + 5);
				}
			}));
			healthLayout.addView(heal5);
			
			var heal10 = new android.widget.TextView(ctx);
			heal10.setText("10 half-hearts");
			heal10.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Player.setHealth(Entity.getHealth(getPlayerEnt()) + 10);
				}
			}));
			healthLayout.addView(heal10);
			
			var stitle3 = new android.widget.TextView(ctx);
			stitle3.setTextSize(20);
			stitle3.setText("Make yourself...");
			stitle3.setLayoutParams(textParams);
			healthLayout.addView(stitle3); 
			
			var heald = new android.widget.TextView(ctx);
			heald.setText("Dead");
			heald.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					invincible = false;
					Player.setHealth(0);
				}
			}));
			healthLayout.addView(heald);
			
			var healw = new android.widget.TextView(ctx);
			healw.setText("Weak");
			healw.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					invincible = false;
					Player.setHealth(5);
				}
			}));
			healthLayout.addView(healw);
			
			var healn = new android.widget.TextView(ctx);
			healn.setText("Normal");
			healn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					invincible = false;
					Player.setHealth(20);
				}
			}));
			healthLayout.addView(healn);
			
			var healm = new android.widget.TextView(ctx);
			healm.setText("Mighty");
			healm.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					invincible = false;
					Player.setHealth(50);
				}
			}));
			healthLayout.addView(healm);
			
			var healg = new android.widget.TextView(ctx);
			healg.setText("God-Like");
			healg.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					invincible = false;
					Player.setHealth(500);
				}
			}));
			healthLayout.addView(healg);
			
			var heali = new android.widget.TextView(ctx);
			heali.setText("Invincible");
			heali.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					invincible = true;
				}
			}));
			healthLayout.addView(heali);
			
			var cbtn = new android.widget.Button(ctx);
			cbtn.setText("Close");
			cbtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    hGUI.dismiss();
                }
			}));
			healthLayout.addView(cbtn);
			
			hGUI = new android.widget.PopupWindow(healthLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
			hGUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			hGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}catch(mistake){
			print("The health menu could not be displayed, because: " + mistake);
		}
	}}));
}

function moveMenu(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		try{
			var moveLayout = new android.widget.LinearLayout(ctx);
			moveLayout.setOrientation(1);
			
			var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
			
            var title = new android.widget.TextView(ctx);
            title.setTextSize(24);
            title.setText("DroidControl:");
            title.setLayoutParams(textParams);
            moveLayout.addView(title);
			
			var stitle = new android.widget.TextView(ctx);
			stitle.setTextSize(22);
			stitle.setText("Movement Menu");
			stitle.setLayoutParams(textParams);
			moveLayout.addView(stitle);
			
			var fastBtn = new android.widget.Button(ctx);
			fastBtn.setText("Sprinting: " + sText);
			fastBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(running==false){running = true; sText = "On";}else{running = false; sText = "Off";}
				}
			}));
			moveLayout.addView(fastBtn);
			
			var slowBtn = new android.widget.Button(ctx);
			slowBtn.setText("Sneaking: " + sText1);
			slowBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(sneaking==false){sneaking = true; sText1 = "On";}else{sneaking = false; sText1 = "Off";}
			}
			}));
			moveLayout.addView(slowBtn);
			
			var sj = new android.widget.Button(ctx);
			sj.setText("Super-Jump: " + jText);
			sj.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(sjump==false){sjump = true; jText = "On";}else{sjump = false; jText = "Off";}
				}
			}));
			moveLayout.addView(sj);
			
			var norBtn = new android.widget.Button(ctx);
			norBtn.setText("Normal");
			norBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					running = false;
					sneaking = false;
					sjump = false;
					sText = "Off";
					sText1 = "Off";
					jText = "Off";
				}
			}));
			moveLayout.addView(norBtn);
			
			var cBtn = new android.widget.Button(ctx);
			cBtn.setText("Close");
			cBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					mGUI.dismiss();
				}
			}));
			moveLayout.addView(cBtn);
			
			mGUI = new android.widget.PopupWindow(moveLayout, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
			mGUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			mGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}catch(mis){
			print("The movement menu could not be displayed, because: " + mis);
		}
	}}));
}

function leaveGame(){
	var jetpack = 0;
	var sneaking = false;
	var running = false;
	var invincible = false;
	var sText = "Off";
	var sText1 = "Off";
	var jump = false;
	var sjump = false;
	var jText = "Off";
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
		if(GUI != null){
			GUI.dismiss();
			GUI = null;
		}
		if(Btn != null){
			Btn.dismiss();
			Btn = null;
		}
		if(menu != null){
			menu.dismiss();
			menu = null;
		}
		if(mGUI != null){
			mGUI.dismiss();
			mGUI = null;
		}
		if(hGUI != null){
			hGUI.dismiss();
			hGUI = null;
		}
	}}));
}

//Array Functions
function ToArray(ar, sindex, entries){
    for(var i=0;i<entries.length;i++)
        ar[sindex+i] = entries[i];
}

function name3id(word){
    if(word == "Leather Cap") return 298;
    if(word == "Chainmail Helmet") return 302;
    if(word == "Iron Helmet") return 306;
    if(word == "Diamond Helmet") return 310;
    if(word == "Gold Helmet") return 314;
  
    if(word == "Leather Tunic") return 299;
    if(word == "Chainmail Chestplate") return 303;
    if(word == "Iron Chestplate") return 307;
    if(word == "Diamond Chestplate") return 311;
    if(word == "Gold Chestplate") return 315;
  
    if(word == "Leather Pants") return 300;
    if(word == "Chainmail Leggings") return 304;
    if(word == "Iron Leggings") return 308;
    if(word == "Diamond Leggings") return 312;
    if(word == "Gold Leggings") return 316;
  
    if(word == "Leather Boots") return 301;
    if(word == "Chainmail Boots") return 305;
    if(word == "Iron Boots") return 309;
    if(word == "Diamond Boots") return 313;
    if(word == "Gold Boots") return 317;

	if(word == "None") return 0;
}

//Non Java Functions
function modTick()
{
	//Modified Super Jump Code, Thanks to Cactigod
	for(sjump==true){
		if(getTile(getPlayerX(), getPlayerY()-2.5, getPlayerZ())==0 && jump==0 || getTile(getPlayerX(), getPlayerY()-2.5, getPlayerX())==78 && jump==0){
			setVelY(getPlayerEnt(), 1);
			jump = 1;
		}
		else if(getTile(getPlayerX(), getPlayerY()-2.5, getPlayerZ())!=0 && jump==1){
			jump = 0;
		}
	}
    if(jetpack==1){
		jetpackTick();
		Player.setHealth(30000);
    }
	//Sprinting Code, Thanks to WhyToFu
	if(running==true){
		if(i==1){
			Xpos=getPlayerX();
			Zpos=getPlayerZ();
			i = i + 1;
		}
		else if(i==3){
			i=1;
			Xdiff=getPlayerX()-Xpos;
			Zdiff=getPlayerZ()-Zpos;
			setVelX(getPlayerEnt(),Xdiff);
			setVelZ(getPlayerEnt(),Zdiff);
			Xdiff=0;
			Zdiff=0;
		}
		if(i!=1){
			i = i + 1;
		}
	}
	if(invincible==true){
		Player.setHealth(500);
	}
	if(sneaking==false){
		Entity.setSneaking(getPlayerEnt(), false);
	}
	else if(sneaking==true){
		Entity.setSneaking(getPlayerEnt(), true);
	}
	if(Player.getArmorSlot(0)==298){
		type = "Leather";
	}
	else if(Player.getArmorSlot(0)==302){
		type = "Chainmail";
	}
	else if(Player.getArmorSlot(0)==306){
		type = "Iron";
	}
	else if(Player.getArmorSlot(0)==310){
		type = "Diamond";
	}
	else if(Player.getArmorSlot(0)==314){
		type = "Gold";
	}
	else if(Player.getArmorSlot(0)==0){
		type = "None";
	}
	if(Player.getArmorSlot(1)==299){
		type1 = "Leather";
	}
	else if(Player.getArmorSlot(1)==303){
		type1 = "Chainmail";
	}
	else if(Player.getArmorSlot(1)==307){
		type1 = "Iron";
	}
	else if(Player.getArmorSlot(1)==311){
		type1 = "Diamond";
	}
	else if(Player.getArmorSlot(1)==315){
		type1 = "Gold";
	}
	else if(Player.getArmorSlot(1)==0){
		type1 = "None";
	}
	if(Player.getArmorSlot(2)==300){
		type2 = "Leather";
	}
	else if(Player.getArmorSlot(2)==304){
		type2 = "Chainmail";
	}
	else if(Player.getArmorSlot(2)==308){
		type2 = "Iron";
	}
	else if(Player.getArmorSlot(2)==312){
		type2 = "Diamond";
	}
	else if(Player.getArmorSlot(2)==316){
		type2 = "Gold";
	}
	else if(Player.getArmorSlot(2)==0){
		type2 = "None";
	}
	if(Player.getArmorSlot(3)==301){
		type3 = "Leather";
	}
	else if(Player.getArmorSlot(3)==305){
		type3 = "Chainmail";
	}
	else if(Player.getArmorSlot(3)==309){
		type3 = "Iron";
	}
	else if(Player.getArmorSlot(3)==313){
		type3 = "Diamond";
	}
	else if(Player.getArmorSlot(3)==317){
		type3 = "Gold";
	}
	else if(Player.getArmorSlot(3)==0){
		type3 = "None";
	}
}

//Jetpack Functions, Thanks to 500ISE
function jetpackTick()
{
    toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
	player = getPlayerEnt();
	setVelX(player, playerFlySpeed * playerDir[0]);
	setVelY(player, playerFlySpeed * playerDir[1]);
	setVelZ(player, playerFlySpeed * playerDir[2]);
}

function toDirectionalVector(vector, yaw, pitch)
{
	vector[0] = Math.cos(yaw) * Math.cos(pitch);
	vector[1] = Math.sin(pitch);
	vector[2] = Math.sin(yaw) * Math.cos(pitch);
}
