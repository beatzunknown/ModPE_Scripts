var GUI = null;
var Btn = null;
var menu = null;
var position;
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
			
			var cBtn = new android.widget.Button(ctx);
			cBtn.setText("Close");
			cBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					Btn.dismiss();
                    starter();
				}
			}));
			btnLayout.addView(cBtn);
            
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
					healthMenu.show();
                }
			}));
			layout.addView(health);
          
			var speed = new android.widget.Button(ctx);
			speed.setText("Speed Changer");
			speed.setOnClickListener(new android.view.View.OnClickListener({
            	onClick: function(viewarg){
					speedMenu.show();
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
                    menu = null;
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

function leaveGame(){
	var jetpack = 0;
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
	}}));
}

//Array Functions, Thanks to MrARM
function ToArray(ar, sindex, entries){
    for(var i=0;i<entries.length;i++)
        ar[sindex+i] = entries[i];
}

function name2id(word){
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
    if(jetpack==1)
    {
		jetpackTick();
		Player.setHealth(30000);
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
