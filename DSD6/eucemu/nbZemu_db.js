
E.setConsole(Serial1,{force:true}); //0000 devmode
euc={};
euc.dash=[];
euc.dash.bat=10;
timeLast=getTime();
//lolo= new Uint8Array([0x5a,0xa5,0x20,0x14,0x3e,0x04,0xb0,0x00,0x00,0x00,0x00,0x48,0x98,0x00,0x00,euc.dash.bat,0x00,0x00,0x00,0x00,0x00,0x18,0x38,0x25,0x00,0x00,0x00,0x3b,0x00,0xbe,0x00,0xa2,0x14,0x08,0x00,0x00,0x00,0x00,0x00]);
lolo= new Uint8Array([0x5a,0xa5,0x20,0x14,0x3e,0x04,0xb0,0x00,0x00,0x00,0x00,0x48,0x98,0x00,0x00,0x41,0x00,0x00,0x00,0x00,0x00,0x18,0x38,0x25,0x00,0x00,0x00,0x3b,0x00,0xbe,0x00,0xa2,0x14,0x08,0x00,0x00,0x00,0x00,0x00]);


NRF.setServices({
	0xfee7: {
		0xfec8: {
		},
		0xfec7: {
		},
		0xfec9: {
		}
	}
}, { uart: true});
		
		
function checksum(packet){
	var end = packet[2] + 7;
	var sum = 0;
	for(var i = 2; i < end; i++)
		sum += packet[i];
	return (sum & 0xFFFF) ^ 0xFFFF;
}

function Checksum(buffer) {
	var check = 0;
	for (var c in buffer) {
		check = check + (c & 0xff);
	}
	check ^= 0xFFFF;
	check &= 0xFFFF;
	return check;
}

function send(data){
	var packetLen = 2 + data.byteLength;
	var packet = new Uint8Array(packetLen);
	packet.set(data, 0);
	var check = checksum(data);
	packet[packetLen - 2] = check & 0xFF;
	packet[packetLen - 1] = (check >> 8) & 0xFF;
	//return packet;
	return Bluetooth.write(packet);
	//lolo= new Uint8Array([0x5a,0xa5,0x02,0x14,0x3e,0x04,0x1a,0x07,0x11])   firmware
	//lolo=new Uint8Array([0x5a,0xa5,0x06,0x14,0x3e,0x04,0x66,0x17,0x01,0x17,0x01,0x01,0x01]);
	//lolo=new Uint8Array([0x5a,0xa5,0x02,0x14,0x3e,0x04,0x68,0x01,0x01]);  start
	//lolo=new Uint8Array([0x5a,0xa5,0x0e,0x14,0x3e,0x04,0x10,0x4e,0x33,0x4f,0x54,0x43,0x31,0x38,0x33,0x33,0x54,0x30,0x30,0x33,0x38]);  model info
}	

function sendT(data){
	var packetLen = 2 + data.byteLength;
	var packet = new Uint8Array(packetLen);
	packet.set(data, 0);
	var check = checksum(data);
	packet[packetLen - 2] = check & 0xFF;
	packet[packetLen - 1] = (check >> 8) & 0xFF;
	return packet;
	//return Bluetooth.write(packet)
}

function bcon() {
   console.log("in",Bluetooth.read());
    Bluetooth.on('data',ccon);
}
function bdis() {
    Bluetooth.removeListener('data',ccon);
	//if (emuMon) { clearInterval(emuMon);emuMon=0;}
}
function ccon(l){ 
    line=E.toUint8Array(l);
	print("in:", line)
	Bluetooth.write([0x5a,0xa5,0x02,0x14,0x3e,0x04,0xc6,0x01,0x00,0xe8,0x1b]);
	//Bluetooth.write([0x5a,0xa5,0x20,0x14,0x3e,0x04,0xb0,0x00,0x00,0x00,0x00,0x48,0x98,0x00,0x00,0x41,0x00,0x00,0x00,0x00,0x00,0x18,0x38,0x25,0x00,0x00,0x00,0x3b,0x00,0xbe,0x00,0xa2,0x14,0x08,0x00,0x00,0x00,0x00,0x00,0x8c,0xfb]);
	//Bluetooth.write([0x5a,0xa5,0x0e,0x14,0x3e,0x04,0x10,0x4e,0x33,0x4f,0x54,0x43,0x31,0x38,0x33,0x33,0x54,0x30,0x30,0x33,0x38,0x36,0xfc]); //info
	//Bluetooth.write([0x5a,0xa5,0x02,0x14,0x3e,0x04,0x68,0x01,0x01,0x3d,0xff]);
	//Bluetooth.write([90,165,2,20,62,4,26,7,17,117,255]); //firm
	//Bluetooth.write(lolo);
}
NRF.on('disconnect',bdis);  
NRF.on('connect',bcon);

