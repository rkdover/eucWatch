//kingsong  set advanced
face[0] = {
	offms: (set.def.off[face.appCurr])?set.def.off[face.appCurr]:5000,
	g:w.gfx,
	init: function(){
		if (euc.state!=="READY") {face.go(set.dash[set.def.dash.face],0);return;}
        //if (!face.appPrev.startsWith("dash")) this.g.clear();
		this.g.setColor(0,0);
		this.g.fillRect(0,98,239,99);
        this.g.flip();	
		this.g.fillRect(120,0,121,195);
        this.g.flip();
		this.g.setColor(0,0);
		this.g.fillRect(0,205,239,239);
		this.g.setColor(1,col("white"));
		this.g.setFont("Vector",20);
		this.g.drawString("ADVANCED",122-(this.g.stringWidth("ADVANCED")/2),217); 
		this.g.flip();
		this.g.setColor(0,col("black"));
		this.g.fillRect(0,196,239,204);
		this.g.setColor(1,col("lgray"));
      	this.g.fillRect(75,200,165,204);
		this.g.flip();
        this.g.setColor(1,col("white"));
      	this.g.fillRect(143,200,165,204);
		this.g.flip(); 
		//ride mode
		this.b1=euc.dash.mode;
		if (!this.b1) {
			this.b1t="HARD";this.b1c=col("raf4");
		}else if (this.b1==1) {
			this.b1t="MED";this.b1c=col("raf2");
		}else if (this.b1==2) {
			this.b1t="SOFT";this.b1c=col("raf3");
		}
		this.g.setColor(0,this.b1c);
		this.g.fillRect(0,0,119,97);
		this.g.setColor(1,col("white"));
		this.g.setFont("Vector",18);	
		this.g.drawString("MODE",60-(this.g.stringWidth("MODE")/2),15); 
		this.g.setFont("Vector",30);	
		this.g.drawString(this.b1t,60-(this.g.stringWidth(this.b1t)/2),50); 
		this.g.flip();
		//calibrate
		this.g.setColor(0,col("olive"));
		this.g.fillRect(122,0,239,97);
		this.g.setColor(1,col("white"));
//		this.g.drawImage(E.toArrayBuffer(atob("GAiBADAYDHg8HsxmM8xmM8xmI8xmM3g8HjAYDA==")),195,45);
		this.g.setFont("Vector",18);	
		this.g.drawString("CALIBRATE",185-(this.g.stringWidth("CALIBRATE")/2),37); 
		this.g.flip();
		//limits
		this.g.setColor(0,col("olive"));
		this.g.fillRect(0,100,119,195);
		this.g.setColor(1,col("white"));
		this.g.setFont("Vector",22);	
		this.g.drawString("WHEEL",60-(this.g.stringWidth("WHEEL")/2),115); 
//		this.g.setFont("Vector",25);
		this.g.drawString("ALERTS",60-(this.g.stringWidth("ALERTS")/2),150); 
//		this.g.drawString(euc.dash.spdT,60-(this.g.stringWidth(euc.dash.spdT)/2),150); 
		this.g.flip();
		//pass
		this.g.setColor(0,col("olive"));
		this.g.fillRect(122,100,239,195);
		this.g.setColor(1,col("white"));
		this.g.setFont("Vector",28);	
		this.g.drawString("PASS",185-(this.g.stringWidth("PASS")/2),135); 
		this.g.flip();
		this.run=true;
	},
	show : function(){
		if (euc.state!=="READY") {face.go(set.dash[set.def.dash.face],0);return;}
		if (!this.run) return; 
        this.tid=setTimeout(function(t,o){
		  t.tid=-1;
		  t.show();
        },1000,this);
	},
    btn: function(txt,size,x,y,clr,rx1,ry1,rx2,ry2,txt1,size1,x1,y1){
			this.g.setColor(0,clr);
			this.g.fillRect(rx1,ry1,rx2,ry2);
			this.g.setColor(1,col("white"));
			this.g.setFont("Vector",size);	
            this.g.drawString(txt,x-(this.g.stringWidth(txt)/2),y); 
   			if (txt1){
            this.g.setFont("Vector",size1);	
            this.g.drawString(txt1,x1-(this.g.stringWidth(txt1)/2),y1);
            }
			this.g.flip();
    },
	tid:-1,
	run:false,
	clear : function(){
		//this.g.clear();
		this.run=false;
		if (this.tid>=0) clearTimeout(this.tid);this.tid=-1;
   		if (this.itid) clearTimeout(this.itid);this.itid=0;
		return true;
	},
	off: function(){
		this.g.off();
		this.clear();
	}
};
//loop face
face[1] = {
	offms:1000,
	init: function(){
		return true;
	},
	show : function(){
		face.go("dashKingsong",0);
		return true;
	},
	clear: function(){
		return true;
	},
};	
//touch
touchHandler[0]=function(e,x,y){ 
	switch (e) {
      case 5:case 12: //tap event
		if ( x<=120 && y<=100 ) { //ride mode
			if (euc.dash.mode==0) {euc.dash.mode=1;euc.wri("rideMed");face[0].btn("MODE",18,60,15,col("raf2"),0,0,119,97,"MED",30,60,50);}
			else if (euc.dash.mode==1) {euc.dash.mode=2;euc.wri("rideSoft");face[0].btn("MODE",18,60,15,col("raf3"),0,0,119,97,"SOFT",30,60,50);}
			else if (euc.dash.mode==2) {euc.dash.mode=0;euc.wri("rideHard");face[0].btn("MODE",18,60,15,col("raf4"),0,0,119,97,"HARD",30,60,50);}
			buzzer([30,50,30]);		
		}else if ( 120<=x  && y<=100 ) { //calibrate
            buzzer([30,50,30]);
			face.go("dashKingsongAdvCalibrate",0);
			return;
		}else if ( x<=120 && 100<=y ) {   //limits
			buzzer([30,50,30]);
			face.go("dashKingsongAdvLimits",0);
			return;
		}else if ( 120<=x && 100<=y ) { //pass
			buzzer([30,50,30]);		
			if (euc.dash.pass.length>=4) face.go("dashKingsongAdvPass",5);
			else face.go("dashKingsongAdvPass",0);
			return;
		}else buzzer([30,50,30]);
		this.timeout();
		break;
	case 1: //slide down event
		//face.go("main",0);
		face.go(set.dash[set.def.dash.face],0);
		return;	 
	case 2: //slide up event
		if (y>200&&x<50) { //toggles full/current brightness on a left down corner swipe up. 
			if (w.gfx.bri.lv!==7) {this.bri=w.gfx.bri.lv;w.gfx.bri.set(7);}
			else w.gfx.bri.set(this.bri);
			buzzer([30,50,30]);
		}else if (Boolean(require("Storage").read("settings"))) {face.go("settings",0);return;}  
		this.timeout();
		break;
	case 3: //slide left event
		buzzer(40);    
		this.timeout();
		break;
	case 4: //slide right event (back action)
		face.go("dashKingsongOpt2",0);
		return;
  }
};
