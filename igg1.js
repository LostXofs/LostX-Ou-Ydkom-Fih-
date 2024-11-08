function patchBytes(addr, hex) {
    for(i = 0;i<hex.length/2;i++) {
        var item = parseInt(hex.substring(i*2, i*2+2), 16);
        h5gg.setValue(addr+i,item, "U8");
    }
}	
	

    function namdam9() {
        h5gg.clearResults();
        h5gg.searchNumber('909000060','I32','0x100000000', '0x200000000');
        h5gg.editAll('909035007', 'I32'); //m1887lv7
        h5gg.clearResults();
    }


    function namdam8() {
        h5gg.clearResults();
        h5gg.searchNumber('909000083','I32','0x100000000', '0x200000000');
        h5gg.editAll('909039011', 'I32'); //M1014lv8
        h5gg.clearResults();
    }


    function namdam7() {
        h5gg.clearResults();
        h5gg.searchNumber('909000084','I32','0x100000000', '0x200000000');
        h5gg.editAll('909000085', 'I32'); //xm8
        h5gg.clearResults();
    }



    function namdam6() {
        h5gg.clearResults();
        h5gg.searchNumber('909000018','I32','0x100000000', '0x200000000');
        h5gg.editAll('909000068', 'I32'); //scar
        h5gg.clearResults();
    }



    function namdam5() {
        h5gg.clearResults();
        h5gg.searchNumber('909000013','I32','0x100000000', '0x200000000');
        h5gg.editAll('909040010', 'I32'); //Mp40lv8
        h5gg.clearResults();
    }



    function namdam4() {
        h5gg.clearResults();
        h5gg.searchNumber('909000005','I32','0x100000000', '0x200000000');
        h5gg.editAll('909000090', 'I32'); //famat
        h5gg.clearResults();
    }


    function namdam3() {
        h5gg.clearResults();
        h5gg.searchNumber('909000004','I32','0x100000000', '0x200000000');
        h5gg.editAll('909000081', 'I32'); //M1014lv7
        h5gg.clearResults();
    }

    

    function namdam2() {
        h5gg.clearResults();
        h5gg.searchNumber('909000007','I32','0x100000000', '0x200000000');
        h5gg.editAll('909000098', 'I32'); //ump
        h5gg.clearResults();
    }

    
	
checkbox1 = false;

function norecoil1() {
    if (checkbox1 == false) {
        var modules = h5gg.getRangesList("freefireth"); 
        var base = modules[0].start; 
        var addr = Number(base) + 0x4E1830C; 
        patchBytes(addr, "C0035FD6");
        checkbox1 = true;
    } else if (checkbox1 == true) {
        var modules = h5gg.getRangesList("freefireth"); 
        var base = modules[0].start; 
        var addr = Number(base) + 0x4E1830C; 
        patchBytes(addr, "FF0302D1");
        checkbox1 = false;
    }
}


let checkbox2 = false;
function speed() {
    if (checkbox2 == false) {
        var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4FB0180; 
patchBytes(addr,  "00D0201EC0035FD6");
var addr = Number(base) + 0x4EC9E7C; 
patchBytes(addr,  "400080D2C0035FD6");
        checkbox2 = true;
    } else if (checkbox2 == true) {
        var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4FB0180; 
patchBytes(addr,  "FF8301D1E923026D");
var addr = Number(base) + 0x4EC9E7C; 
patchBytes(addr,  "F44FBEA9FD7B01A9");
        checkbox2 = false;
    }
}

let checkbox3 = false;
function aimlock() {
    if (checkbox3 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3EA7E88; 
patchBytes(addr,  "E003271EC0035FD6");
        checkbox3 = true;
    } else if (checkbox3 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3EA7E88; 
patchBytes(addr,  "F44FBEA9FD7B01A9");
        checkbox3 = false;
    }
}
let checkbox4 = false;
function ghost() {
    if (checkbox4 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x362C6B0; 
patchBytes(addr,  "C0035FD6");
var addr = Number(base) + 0x4EC9D54; 
patchBytes(addr,  "200080D2C0035FD6");
        checkbox4 = true;
    } else if (checkbox4 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x362C6B0; 
patchBytes(addr,  "FF0304D1");
var addr = Number(base) + 0x4EC9D54; 
patchBytes(addr,  "200080D2C0035FD6");
        checkbox4 = false;
    }
	}
	
	
	
let checkbox5 = false;
function Freemove() {
    if (checkbox5 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4EF9C2C; 
patchBytes(addr,  "20008052C0035FD6");
        checkbox5 = true;
    } else if (checkbox5 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4EF9C2C; 
patchBytes(addr,  "F44FBEA9FD7B01A9");
        checkbox5 = false;
    }
}
let checkbox6 = false;
function xoahoat() {
    if (checkbox6 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4E0EB74; 
patchBytes(addr,  "20008052C0035FD6");
        checkbox6 = true;
    } else if (checkbox6 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4E0EB74; 
patchBytes(addr,  "FF8301D1E923016D");
        checkbox6 = false;
    }
}
let checkbox7 = false;
function fastchanged() {
    if (checkbox7 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4EB8420; 
patchBytes(addr,  "00008052C0035FD6");
        checkbox7 = true;
    } else if (checkbox7 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4EB8420; 
patchBytes(addr,  "E923BD6DF44F01A9");
        checkbox7 = false;
    }
}
let checkbox8 = false;
function medkit() {
    if (checkbox8 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4FB27F4; 
patchBytes(addr,  "00102D1EC0035FD6");
        checkbox8 = true;
    } else if (checkbox8 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4FB27F4; 
patchBytes(addr,  "F44FBEA9FD7B01A9");
        checkbox8 = false;
    }
}
let checkbox9 = false;
function highjump() {
    if (checkbox9 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4F4277C; 
patchBytes(addr,  "00502F1EC0035FD6");
        checkbox9 = true;
    } else if (checkbox9 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4F4277C; 
patchBytes(addr,  "F44FBEA9FD7B01A9");
        checkbox9 = false;
    }
	}
	
	
	
	let checkbox10 = false;
function scope() {
    if (checkbox10 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E9CCE4; 
patchBytes(addr,  "C0035FD6");
        checkbox10 = true;
    } else if (checkbox10 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E9CCE4; 
patchBytes(addr,  "FF8302D1");
        checkbox10 = false;
    }
}
let checkbox11 = false;
function camcao() {
    if (checkbox11 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4EC1A48; 
patchBytes(addr,  "200080D2C0035FD6");
        checkbox11 = true;
    } else if (checkbox11 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4EC1A48; 
patchBytes(addr,  "F44FBEA9FD7B01A9");
        checkbox11 = false;
    }
}


let checkbox12 = false;
function highjump1() {
    if (checkbox12 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4F4277C; 
patchBytes(addr,  "C0035FD6");
        checkbox12 = true;
    } else if (checkbox12 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4F4277C; 
patchBytes(addr,  "F44FBEA9FD7B01A9");
        checkbox12 = false;
    }
	
}

let checkbox13 = false;

function ghost1() {
    if (checkbox13 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x362C6B0; 
patchBytes(addr,  "C0035FD6");
var addr = Number(base) + 0x4EC9D5; 
patchBytes(addr,  "200080D2C0035FD6");
        checkbox13
				= true;
    } else if (checkbox13 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x362C6B0; 
patchBytes(addr,  "FF0304D1");
var addr = Number(base) + 0x4EC9D5; 
patchBytes(addr,  "200080D2C0035FD6");
        checkbox13 = false;
    }
		
	}
		
		let checkbox14 = false;
function dobal() {
    if (checkbox14 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E7EC24; 
patchBytes(addr,  "20008052C0035FD6");
        checkbox14 = true;
    } else if (checkbox14 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E7EC24; 
patchBytes(addr,  "20008052C0035FD6");
        checkbox14 = false;
    }
}



let checkbox15 = false;
function Reload() {
    if (checkbox15 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E83378; 
patchBytes(addr,  "00F0271EC0035FD6");
        checkbox15 = true;
    } else if (checkbox15 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E83378; 
patchBytes(addr,  "E923BD6DF44F01A9");
        checkbox15 = false;
    }
	}
		
	
	
		
	let checkbox16 = false;
function camxa() {
    if (checkbox16 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3c156f0; 
patchBytes(addr,  "0857A8520001271EC0035FD6");
        checkbox16 = true;
    } else if (checkbox16 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3c156f0; 
patchBytes(addr,  "F44FBEA9FD7B01A9");
        checkbox16 = false;
    }
		
}	
		let checkbox17 = false;
function aimawm() {
    if (checkbox17 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E824E4; 
patchBytes(addr,  "00008052C0035FD6");
        checkbox17 = true;
    } else if (checkbox17 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E824E4; 
patchBytes(addr,  "E923BD6DF44F01A9");
        checkbox17 = false;
    }
	}
	
	
let checkbox18 = false;
function noscop() {
    if (checkbox18 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4F0528C; 
patchBytes(addr,  "00008052C0035FD6");
        checkbox18 = true;
    } else if (checkbox18 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4F0528C; 
patchBytes(addr,  "E923BD6DF44F01A9");
        checkbox18 = false;
    }
	}

let checkbox19 = false;
function tellkill() {
    if (checkbox19 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x492FF40; 
patchBytes(addr,  "C0035FD6");
        checkbox19 = true;
    } else if (checkbox19 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x492FF40; 
patchBytes(addr,  "FF0302D1");
        checkbox19 = false;
    
			}
			
		}
		
		let checkbox20 = false;
function GarenaV() {
    if (checkbox20 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x368C924; 
patchBytes(addr,  "20008052C0035FD6");
        checkbox20 = true;
    } else if (checkbox20 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x368C924; 
patchBytes(addr,  "FF0302D1");
        checkbox20 = false;
    }
	
}


let checkbox21 = false;
function fastfire() {
    if (checkbox21 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E82180; 
patchBytes(addr,  "E003271EC0035FD6");
        checkbox21 = true;
    } else if (checkbox21 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x3E82180; 
patchBytes(addr,  "EB2BBB6DE923016D");
        checkbox21 = false;
    }
	}
	
	
	let checkbox22 = false;
function spedAnlog() {
    if (checkbox22 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4FB041C; 
patchBytes(addr,  "00D0201EC0035FD6");
        checkbox22 = true;
    } else if (checkbox22 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4FB041C; 
patchBytes(addr,  "FF8301D1E923026D");
        checkbox22 = false;
    }
	} 
	
	
	let checkbox23 = false;

function T1() {
    if (checkbox23 == false) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4F3FD80; 
patchBytes(addr,  "200080D2C0035FD6");
var addr = Number(base) + 0x4E044B4; 
patchBytes(addr,  "200080D2C0035FD6");
var addr = Number(base) + 0x4F3FD24; 
patchBytes(addr,  "200080D2C0035FD6");
        checkbox23
				= true;
    } else if (checkbox23 == true) {
var modules = h5gg.getRangesList("freefireth"); 
var base = modules[0].start; 
var addr = Number(base) + 0x4F3FD80; 
patchBytes(addr,  "200080D2C0035FD6");
var addr = Number(base) + 0x4E044B4; 
patchBytes(addr,  "200080D2C0035FD6");
var addr = Number(base) + 0x4F3FD24; 
patchBytes(addr,  "200080D2C0035FD6");
        checkbox23 = false;
    }
		
	}
