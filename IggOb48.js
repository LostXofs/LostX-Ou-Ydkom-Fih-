let CamiraEnabled = false;
        
        function toggleCamira(element) {
            if (CamiraEnabled) {
                // إلغاء التفعيل
                h5gg.searchNumber('0.10', 'F32', '0x100000000', '0x160000000');
                h5gg.editAll('0.4', 'F32');
                h5gg.clearResults();
                CamiraEnabled = false;
                element.classList.remove('active');
            } else {
                // التفعيل
                h5gg.searchNumber('0.4', 'F32', '0x100000000', '0x160000000');
                h5gg.editAll('0.10', 'F32');
                h5gg.clearResults();
                CamiraEnabled = true;
                element.classList.add('active');
            }
        }
				
				
				let AimFovStatus = false; // لتتبع حالة التفعيل أو الإيقاف

function AimFov() {
    if (!AimFovStatus) {
        // عند التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('1057048494', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32');
        h5gg.clearResults();
        h5gg.searchNumber('1054951342', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32');
        h5gg.clearResults();
        h5gg.searchNumber('1053273620', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('-2000', 'I32');
        
        h5gg.clearResults();
        AimFovStatusStatus = true;
    } else {
        // عند الإيقاف
        h5gg.clearResults();
        h5gg.searchNumber('-2000', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('1057048494', 'I32');
        h5gg.clearResults();
        h5gg.searchNumber('-2000', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('1054951342', 'I32');
        h5gg.clearResults();
        h5gg.searchNumber('-2000', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('1053273620', 'I32');
        
        h5gg.clearResults();
        AimFovStatus = false;
    }
}


let AimScopeStatus = false; // لتتبع حالة الميزة

function AimScope() {
    if (!AimScopeStatus) {
        // تفعيل الميزة
        h5gg.clearResults();
        h5gg.searchNumber('0.09', 'F32', '0x0', '0x20000000000');
        h5gg.editAll('180', 'F32');
        h5gg.clearResults();

        // عرض إشعار عند التفعيل
        

        AimScopeStatus = true; // تحديث الحالة
    } else {
        // إيقاف الميزة
        h5gg.clearResults();
        h5gg.searchNumber('180', 'F32', '0x0', '0x20000000000');
        h5gg.editAll('0.09', 'F32');
        h5gg.clearResults();

        // عرض إشعار عند الإلغاء
				

        AimScopeStatus = false; // تحديث الحالة
    }
	}
			 
	
function Norecoil() {
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1016018816, 180, 'I32')
				
			}
					
					function Magec() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
    
	}
	

 SwitchActive = false; // متغير لتتبع حالة التفعيل

function Switch() {
    // دالة لتعديل القيم
    function modifyValues() {
        h5gg.clearResults();
        h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
        h5gg.editAll('72340172821233664', 'I64');
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!SwitchActive) {
        modifyValues(); // تفعيل الميزة بتعديل القيم

        // تفعيل الميزة
        SwitchActive = true;

        // عرض إشعار بالنجاح
				
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
        h5gg.editAll('72340173878198272', 'I64'); // إلغاء التعديل (إعادة القيمة الأصلية)

        // إلغاء تفعيل الميزة
        SwitchActive = false;

        // عرض إشعار بإلغاء التفعيل
        
				
    }
	}	
		


	let skActive = false; // متغير لتتبع حالة التفعيل

function sk() {
    // دالة لتعديل القيم
    function modifyValues(hk1) {
        h5gg.clearResults();
        h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);
        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            var dizhi0 = (Number(addr1) + -4);
            var dizhi1 = (Number(addr1) + -8);
            var dizhi2 = (Number(addr1) + -12);
            var dizhi3 = (Number(addr1) + 0);

            h5gg.setValue(dizhi0, hk1, "F32");
            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");
            h5gg.setValue(dizhi3, hk1, "F32");
        }
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!skActive) {
        var hk1 = prompt("請輸入想要的靈敏");
        modifyValues(hk1); // تفعيل الميزة بتعديل القيم

        // تفعيل الميزة
        skActive = true;

        // عرض إشعار بالنجاح
        
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);
        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            var dizhi0 = (Number(addr1) + -4);
            var dizhi1 = (Number(addr1) + -8);
            var dizhi2 = (Number(addr1) + -12);
            var dizhi3 = (Number(addr1) + 0);

            // إعادة القيم الأصلية (أو تحديد القيم الافتراضية)
            h5gg.setValue(dizhi0, 1, "F32"); // أو ضع القيم الأصلية التي كانت في البداية
            h5gg.setValue(dizhi1, 1, "F32");
            h5gg.setValue(dizhi2, 1, "F32");
            h5gg.setValue(dizhi3, 1, "F32");
        }

        // إلغاء تفعيل الميزة
        skActive = false;

        // عرض إشعار بإلغاء التفعيل
        
    }
	
}
	


let so90Active = false; // متغير لتتبع حالة التفعيل

function so90() {
    // دالة لتعديل القيم
    function modifyValues() {
        h5gg.clearResults();
        h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
        h5gg.editAll('4848124999925814228', 'I64');
        h5gg.clearResults();
        h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
        h5gg.editAll('4848124999925251973', 'I64');
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!so90Active) {
        modifyValues(); // تفعيل الميزة بتعديل القيم

        // تفعيل الميزة
        so90Active = true;

        // عرض إشعار بالنجاح
        
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
        h5gg.editAll('4575657222469899220', 'I64'); // إعادة القيم الأصلية
        h5gg.clearResults();
        h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
        h5gg.editAll('4575657222469336965', 'I64'); // إعادة القيم الأصلية

        // إلغاء تفعيل الميزة
        so90Active = false;

        // عرض إشعار بإلغاء التفعيل
        
    }
}





let so91Active = false; // متغير لتتبع حالة التفعيل

function so91() {
    // دالة لتعديل القيم عند التفعيل
    function modifyValues() {
        h5gg.clearResults();
        h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);

        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            var dizhi0 = (Number(addr1) + 20);
            h5gg.setValue(dizhi0, 200, "F32");
        }
        
        h5gg.clearResults();
        h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
        h5gg.editAll('4848125002066881600', 'I64');
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!so91Active) {
        modifyValues(); // تفعيل الميزة بتعديل القيم

        // تفعيل الميزة
        so91Active = true;

        // عرض إشعار بالنجاح
        
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
        h5gg.editAll('1051196712', 'I64'); // إعادة القيم الأصلية
        h5gg.clearResults();
        h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
        h5gg.editAll('4575657224610966592', 'I64'); // إعادة القيم الأصلية

        // إلغاء تفعيل الميزة
        so91Active = false;

        // عرض إشعار بإلغاء التفعيل
        
    }
}


let so92Active = false; // متغير لتتبع حالة التفعيل

function so92() {
    // دالة لتعديل القيم عند التفعيل
    function modifyValues() {
        h5gg.clearResults();
        h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
        h5gg.editAll('4848124999899886606', 'I64'); // تعديل القيم عند التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
        h5gg.editAll('4848125002034454477', 'I64'); // تعديل القيم عند التفعيل
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!so92Active) {
        modifyValues(); // تفعيل الميزة بتعديل القيم

        // تفعيل الميزة
        so92Active = true;

        // عرض إشعار بالنجاح
        
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
        h5gg.editAll('4575657222443971598', 'I64'); // إعادة القيم الأصلية
        h5gg.clearResults();
        h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
        h5gg.editAll('4575657224578539469', 'I64'); // إعادة القيم الأصلية

        // إلغاء تفعيل الميزة
        so92Active = false;

        // عرض إشعار بإلغاء التفعيل
        
    }
}



function setSpeed88() {
  h5gg.editAll('4366458311853685297', 'I64');
}

function disableSpeed88() {
  h5gg.editAll('4397530849764387586', 'I64');
}

function searchSpeed88() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
}

function toggleSpeed88() {
  const button = document.querySelector('.menu-option .switch');
  if (button.classList.contains('active')) {
    disableSpeed88();
  } else {
    if (h5gg.getResultsCount() !== 1) {
      searchSpeed88();
    }
    setSpeed88();
  }
  button.classList.toggle('active');
}			

	



function setSpeed22() {
  h5gg.editAll('4397530849758414897', 'I64');
}

function disableSpeed22() {
  h5gg.editAll('4397530849764387586', 'I64');
}

function searchSpeed22() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
}

function toggleSpeed22() {
  const button = document.querySelector('.menu-option .switch');
  if (button.classList.contains('active')) {
    disableSpeed22();
  } else {
    if (h5gg.getResultsCount() !== 1) {
      searchSpeed22();
    }
    setSpeed22();
  }
  button.classList.toggle('active');
}			
				



function setSpeed55() {
  h5gg.editAll('4397530849758414697', 'I64');
}

function disableSpeed55() {
  h5gg.editAll('4397530849764387586', 'I64');
}

function searchSpeed55() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
}

function toggleSpeed55() {
  const button = document.querySelector('.menu-option .switch');
  if (button.classList.contains('active')) {
    disableSpeed55();
  } else {
    if (h5gg.getResultsCount() !== 1) {
      searchSpeed55();
    }
    setSpeed55();
  }
  button.classList.toggle('active');
}	

let HsHeadStatus = false;
let fixScopeStatus = false;
let wallGlowStatus = false;
let wallHackStatus = false;
let BuffDameStatus = false;
let trakingStatus = false; // لتتبع حالة التفعيل أو الإيقاف

function Traking() {
    if (!trakingStatus) {
        // عند التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('0.15', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('120', 'F32'); // تغيير القيمة إلى 9999
        
        trakingStatus = true;
    } else {
        // عند الإيقاف
        h5gg.clearResults();
        h5gg.searchNumber('120', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('0.15', 'F32'); // إعادة القيمة إلى 0.15
        
        trakingStatus = false;
    }
	
}

function FixScope() {
    if (!fixScopeStatus) {
        h5gg.clearResults();
        h5gg.searchNumber('0.03', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('10', 'F32');
        
        fixScopeStatus = true;
    } else {
        h5gg.clearResults();
        h5gg.searchNumber('10', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('0.03', 'F32');
        
        fixScopeStatus = false;
    }
	
}

function WallGlow() {
    if (!wallGlowStatus) {
        h5gg.clearResults();
        h5gg.searchNumber('1.22', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('965', 'F32');
        
        wallGlowStatus = true;
    } else {
        h5gg.clearResults();
        h5gg.searchNumber('965', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('1.22', 'F32');
        
        wallGlowStatus = false;
    }
}

function WallHack() {
    if (!wallHackStatus) {
        h5gg.clearResults();
        h5gg.searchNumber('1.5', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('965', 'F32');
        
        wallHackStatus = true;
    } else {
        h5gg.clearResults();
        h5gg.searchNumber('965', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('1.5', 'F32');
        
        wallHackStatus = false;
    }
		}
		
		
		
		function BuffDame() {
    if (!BuffDameStatus) {
        h5gg.clearResults();
        h5gg.searchNumber('5.5', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('99999', 'F32');
        
        BuffDameStatus = true;
    } else {
        h5gg.clearResults();
        h5gg.searchNumber('99999', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('5.5', 'F32');
        
        BuffDameStatus = false;
    }
	}
				
	function HsHead() {
    if (!HsHeadStatus) {
        h5gg.clearResults();
        h5gg.searchNumber('96688289', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('-1051086991', 'I32');
        
        HsHeadStatus = true;
    } else {
        h5gg.clearResults();
        h5gg.searchNumber('-1051086991', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('96688289', 'I32');
        
         HsHeadStatus = false;
    }
	}
	
		
