//quick apps for settings menu (swipe up to access settings, swipe up again for apps)
//custom part
var g=w.gfx;
this.appImgNone=E.toArrayBuffer(atob("AQGBAAA="));//empty
//App actions
//app1
this.appDo1="face.go('calc',0)";
g.setColor(1,col("raf2"));
g.fillRect(0,0,75,75);
g.setColor(0,col("white"));
g.drawImage(E.toArrayBuffer(atob("MDCBAAAAAAAAAAAAAAAAAAAAAAAAAA//+B//8B///D//+B///n//+B///n//+B///n//+B///n//+B///n//+B///n//+BwADn//+BwADn//+BwADn//+B///n//+B///n//+B///n//+B///nAAOB///nAAOB///nAAOB///n//+A///H//+Af/8H//+AAAAH//+AAAAH//+Af/8HAAOA///HAAOB///nAAOB/j/n//+B/j/n//+B/j/n//+B/j/n//+B/j/n//+B/j/n//+BwADn//+BwADn//+BwADn//+B/j/n//+B/j/n//+B/j/n//+B/j/n//+B/j/n//+B///n//+B///D//+A//+B//8AAAAAAAAAAAAAAAAAAAAAAAAA==")),13,15);
g.flip();
g.setColor(0,0);
g.clearRect(76,0,79,75);
g.flip();
//app2
this.appDo2="face.go('repellent',0)";
g.setColor(1,col("raf2"));
g.fillRect(80,0,155,75);
g.setColor(0,col("white"));
g.drawImage(E.toArrayBuffer(atob("MDCBAAAAAAAAAAAB//gAAAAH//8AAABH///AAAPP///wAAPP///4AAeOAAf8AAeAAAH+AAeADgB/AAcB/+A/gAwP//wfwAA///4PwAB///8H4AD/4f/D8AH+AD/D8AP8AA/h8APwAAfx+Afgf4Pw+AfB/+H4+A/D//D4/A+H//j4fA+H8/j4fB8PwPj4fB8PgPj4fB8PgPj4fB8fg/j4fB8fA/j4fB8fAfD4fB8fgeH4fB8PgIHw+B8PgAPw+B8PwAfx+B+H4A/h+A+H+D/D8A/D//+D4AfB//8H4Afg//4PwAPwP/gfwAP4B8B/gAH+AAD/AAD/gAf+AAB//P/8AAA////wAAAP///AAAAD//8AAAAA//gAAAAAAAAAAAAAAAAAAA==")),94,15);
g.flip();
//app3
this.appDo3="face.go('euc',0)";
g.setColor(1,col("raf2"));
g.fillRect(160,0,239,75);
g.setColor(0,col("white"));
g.drawImage(E.toArrayBuffer(atob("MDCBAAAAAB/gAAAAA//+AAAAD//+AAAAPgAcAAAA/+AAAAAD//8AAAAH///AAAAP///wAAAf///8AAB////+AAD/////AAH8//+/gAP4//8fwAPw//8P4Afg//8H4A/A//+D8A/A//+D8A+A//+B+B+B//+B+B+B//+A+B8B//+A/B8B//+A/B8B//+A/D8B//+A/D8A//+A/D8A//8A/B8AAAAA/B+AAAAA/B+AAAAB/B+AGAAB+B/AP/wB+A/Af/4D+A/g//8H8Afw//8P8Afwf/4f4AP8P/g/wAH/f/x/gAH/////gAD/////AAB/////AAA////+AAAf///8AAAP///wAAAH///gAAAB//+AAAAAf/4AAAAAH/4AAAAAAAAAAA==")),176,15);
g.flip();
//app4
this.appDo4="face.go('hello',0)";
g.setColor(1,col("raf2"));
g.fillRect(0,80,75,155);
g.setColor(0,col("white"));
g.drawImage(require("heatshrink").decompress(atob("mEwwIIFn4FKmYFHv/ggYFBgf//kD2cAh/An8B+cAngNB4AFBuAZB8F/gPgAoN4j0DwAFBjkMgYuCh0GgwFCAgMMAoUDg0cAoeGjEHwEegOGmEfFoOA4cwjFgsIFBsBwB4HAsYFL8AFDufADocz4ApDAoI1CPoPAQYgFEn4FKFgIFEPgQABuFgAodgApcx/wFC4AFFjCnCgOAjk4RIWAhhRBAoKdBg/AnilBg8B//4hwTCKAKlBYohJCaIQCBboYFBdIS8DeoJQDv4WCA")),13,94);
g.flip();
//app5
this.appDo5="face.go('life',0)";
g.setColor(1,col("raf2"));
g.fillRect(80,80,155,155);
g.setColor(0,col("red"));
//g.drawImage(this.appImgNone,94,94);
g.drawImage(E.toArrayBuffer(atob("MDCBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAGAAAAAAAPAAAAAAAfAAAAAAAfgAAAAAA9wAAAAAA84AAAAAB+cAAAAAB/OAAAAAB7nAAAAAB5zgAAAAB85wAAAAB+c4AAAAB/OcAAAAB7nOAAAAB5znAAAAB85z4AAP/+c78AB///Of4AH/////wAP/////gA/85//+AAfOc//wAAPnOeAAAABzneAAAAA5z+AAAAAc5+AAAAAOc+AAAAAHOeAAAAADneAAAAABz+AAAAAA5+AAAAAAc8AAAAAAO8AAAAAAH8AAAAAAD4AAAAAAD4AAAAAADwAAAAAABgAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==")),94,94);
g.flip();
//app6
//this.appDo6="face.go('main',0)";
g.setColor(1,col("raf2"));
g.fillRect(160,80,239,155);
g.setColor(0,col("white"));
g.drawImage(this.appImgNone,176,94);
g.flip();
this.appImgNone=-1;