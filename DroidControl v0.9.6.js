/*CarbonPE - Droid Edition
    ~BeATz-UnKNoWN & Thecactigod     */
 
var starterUI = null;
var closeUI = null;
var carbonPE = null;
var gunUI = null;
var jumpUI = null;
var flyUI = null;
var itemDrop = false;
var itemDropChecked = false;
var unlimitedArrow = false;
var unlimitedArrowChecked = false;
var infiniteItem = false;
var infiniteItemChecked = false;
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
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 0.2, 0.6, 0.3, 3, 3, 0.8, 0.2, 0.7, 4, 0, 0, 0.8, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0, 3.5, 50, 5, 0.6, 0.6, null, null, null, null, null, 0
]
 
function dip2px(ctx, dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
 
function newLevel(){
    starter();
    itemDrop = false;
    itemDropChecked = false;
    unlimitedArrow = false;
    unlimitedArrowChecked = false;
    infiniteItem = false;
    infiniteItemChecked = false;
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
}
 
function starter(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(0);
             
            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("T");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                    close();
                }
            }));
            layout.addView(menuBtn);
             
            starterUI = new android.widget.PopupWindow(layout, dip2px(ctx,40), dip2px(ctx,40));
            starterUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 50, 0);
        }catch(err){
            print("The T-Button could not be displayed, because: " + err);
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
                    carbonPE.dismiss();
                    closeUI.dismiss();
                }
            }));
            closeLayout.addView(closeBtn);
             
            closeUI = new android.widget.PopupWindow(closeLayout, dip2px(ctx,40), dip2px(ctx,40));
            closeUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(err){
            print("The T-Button could not be displayed, because: " + err);
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
            menuLayout.addView(heading);
             
            var itemDropBtn = new android.widget.CheckBox(ctx);
            itemDropBtn.setTextSize(18);
            itemDropBtn.setText("64 Item Drop");
            itemDropBtn.setChecked(itemDropChecked);
            itemDropBtn.setLayoutParams(layoutParams);
            itemDropBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(itemDrop==false){
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
             
            var arrowBtn = new android.widget.CheckBox(ctx);
            arrowBtn.setTextSize(18);
            arrowBtn.setText("Unlimited Arrows");
            arrowBtn.setChecked(unlimitedArrowChecked);
            arrowBtn.setLayoutParams(layoutParams);
            arrowBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(unlimitedArrow==false){
                        unlimitedArrow = true;
                        unlimitedArrowChecked = true;
                    }else{
                        unlimitedArrow = false;
                        unlimitedArrowChecked = false;
                    }
                    arrowBtn.setChecked(unlimitedArrowChecked);
                }
            }));
            menuLayout.addView(arrowBtn);
             
            var itemBtn = new android.widget.CheckBox(ctx);
            itemBtn.setTextSize(18);
            itemBtn.setText("Infinite Items");
            itemBtn.setChecked(infiniteItemChecked);
            itemBtn.setLayoutParams(layoutParams);
            itemBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(infiniteItem==false){
                        infiniteItem = true;
                        infiniteItemChecked = true;
                    }else{
                        infiniteItem = false;
                        infiniteItemChecked = false;
                    }
                    itemBtn.setChecked(infiniteItemChecked);
                }
            }));
            menuLayout.addView(itemBtn);
             
            var farmBtn = new android.widget.CheckBox(ctx);
            farmBtn.setTextSize(18);
            farmBtn.setText("Animal Farm");
            farmBtn.setChecked(farmChecked);
            farmBtn.setLayoutParams(layoutParams);
            farmBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(farmReady==false){
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
                        spawnType = 34;
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
                    if(godMode==false){
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
                    if(instaKill==false){
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
             
            var instantBtn = new android.widget.CheckBox(ctx);
            instantBtn.setTextSize(18);
            instantBtn.setText("Insta-Mine");
            instantBtn.setChecked(instantChecked);
            instantBtn.setLayoutParams(layoutParams);
            instantBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(instant==false){
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
                    if(saddleUp==false){
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
             
            var flyBtn = new android.widget.CheckBox(ctx);
            flyBtn.setTextSize(18);
            flyBtn.setText("Flying");
            flyBtn.setChecked(flyChecked);
            flyBtn.setLayoutParams(layoutParams);
            flyBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    if(flyReady==false){
                        flyReady = true;
                        flyChecked = true;
                    }else{
                        flyUp = false;
                        flyDown = false;
                        flyReady = false;
                        flyChecked = false;
                        flyUI.dismiss();
                        flyUI = null;
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
                    if(gunReady==false){
                        gunReady = true;
                        gunChecked = true;
                    }else{
                        gunReady = false;
                        gunChecked = false;
                        gunUI.dismiss();
                        gunUI = null;
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
             
            var maker = new android.widget.TextView(ctx);
            maker.setTextSize(16);
            maker.setText("Made By BeATz-UnKNoWN & Thecactigod");
            maker.setGravity(android.view.Gravity.CENTER);
            menuLayout.addView(maker);
             
            carbonPE = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
            carbonPE.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
            carbonPE.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("The menu could not be displayed, because: " + error);
        }
    }}));
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
        }catch(err){
            print("The entity launcher button could not be displayed, because: " + err);
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
        }catch(err){
            print("The jump button could not be displayed, because: " + err);
        }
    }}));
}
 
 
function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(starterUI != null){
            starterUI.dismiss();
        }
        if(closeUI != null){
            closeUI.dismiss();
        }
        if(carbonPE != null){
            carbonPE.dismiss();
        }
        if(gunUI != null){
            gunUI.dismiss();
        }
        if(flyUI != null){
            flyUI.dismiss();
        }
    }}));
}
 
function destroyBlock(x,y,z,side){
    var data = Level.getData(x,y,z);
    var tile = Level.getTile(x,y,z);
    if(itemDrop==true){
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
    }
}
 
function entityAddedHook(entity){
    if(Entity.getEntityTypeId(entity)==80 && unlimitedArrow==true){
        addItemInventory(262,1);
    }
}
 
function useItem(x,y,z,itemId,blockId,side){
    if(blockId==247 && farmReady==true){
        preventDefault();
        setTile(x,y,z,246);
        farmActive = true;
        clientMessage("Animal Farm has started");
    }
    if(blockId==246 && farmActive==true){
        setTile(x,y,z,247);
        farmActive = false;
        clientMessage("Animal Farm has ended");
        spawnCount = 160;
        preventDefault();
    }
    if(itemId<=255 && infiniteItem==true){
        addItemInventory(itemId, 1);
    }
}
 
function modTick(){
    if(farmActive==true){
        spawnCount--;
    }
    if(spawnCount==140){
        Level.spawnMob(getPlayerX()+4, getPlayerY(), getPlayerZ()+4, spawnType);
    }
    if(spawnCount==120){
        Level.spawnMob(getPlayerX()+4, getPlayerY(), getPlayerZ()-4, spawnType);
    }
    if(spawnCount==100){
        Level.spawnMob(getPlayerX()-4, getPlayerY(), getPlayerZ()+4, spawnType);
    }
    if(spawnCount==80){
        Level.spawnMob(getPlayerX()-4, getPlayerY(), getPlayerZ()-4, spawnType);
    }
    if(spawnCount==60){
        Level.spawnMob(getPlayerX()+4, getPlayerY(), getPlayerZ(), spawnType);
    }
    if(spawnCount==40){
        Level.spawnMob(getPlayerX(), getPlayerY(), getPlayerZ()+4, spawnType);
    }
    if(spawnCount==0){
        spawnCount = 160;
    }
    if(godMode==true){
        Player.setHealth(30000);
    }
    if(gunEngaged==true && getPitch(getPlayerEnt())<40){
        var playerYaw = Entity.getYaw(Player.getEntity());
        var playerPitch = Entity.getPitch(Player.getEntity());
        velY = Math.sin((playerPitch - 180) / 180 * Math.PI);
        velX = Math.sin(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
        velZ = -1 * Math.cos(playerYaw / 180 * Math.PI) * Math.cos((playerPitch - 180) / 180 * Math.PI);
        tnt = Level.spawnMob(Player.getX(),Player.getY()+1,Player.getZ(),entityType);
        if(entityType==80 && entityName=="Fire Arrow"){
            Entity.setFireTicks(tnt, 60);
        }
        setVelX(tnt,velX*2);
        setVelY(tnt,velY);
        setVelZ(tnt,velZ*2);   
    }
    else if(gunEngaged==true && getPitch(getPlayerEnt())>40){
        var Yaw = Entity.getYaw(Player.getEntity());
        var Pitch = Entity.getPitch(Player.getEntity());
        velY = Math.sin((Pitch - 180) / 180 * Math.PI);
        velX = Math.sin(Yaw / 180 * Math.PI) * Math.cos((Pitch - 180) / 180 * Math.PI);
        velZ = -1 * Math.cos(Yaw / 180 * Math.PI) * Math.cos((Pitch - 180) / 180 * Math.PI);
        tnt = Level.spawnMob(Player.getX()+1,Player.getY(),Player.getZ(),entityType);
        if(entityType==80 && entityName=="Fire Arrow"){
            Entity.setFireTicks(tnt, 60);
        }
        setVelX(tnt,velX*2);
        setVelY(tnt,velY);
        setVelZ(tnt,velZ*2);
    }
    if(flyUp==true){
        setVelY(getPlayerEnt(), 0.5);
    }
    if(flyDown==true){
        setVelY(getPlayerEnt(), -0.5);
    }
    if(flyReady==true && flyUp==false && flyDown==false){
        setVelY(getPlayerEnt(), 0);
    }
}
 
function attackHook(attacker, victim){
    if(instaKill==true){
        Entity.setHealth(victim,0);
    }
    if(saddleUp==true){
        rideAnimal(attacker, victim);
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
