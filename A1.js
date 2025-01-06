let aim180Status = false; // لتتبع حالة التفعيل أو الإيقاف

function aim180() {
    if (!aim180Status) {
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
        aim180Status = true;
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
        aim180Status = false;
    }
}


let aimScopeStatus = false; // لتتبع حالة الميزة

function aimscope() {
    if (!aimScopeStatus) {
        // تفعيل الميزة
        h5gg.clearResults();
        h5gg.searchNumber('0.09', 'F32', '0x0', '0x20000000000');
        h5gg.editAll('180', 'F32');
        h5gg.clearResults();

        // عرض إشعار عند التفعيل
    

        aimScopeStatus = true; // تحديث الحالة
    } else {
        // إيقاف الميزة
        h5gg.clearResults();
        h5gg.searchNumber('180', 'F32', '0x0', '0x20000000000');
        h5gg.editAll('0.09', 'F32');
        h5gg.clearResults();

        // عرض إشعار عند الإلغاء
      

        aimScopeStatus = false; // تحديث الحالة
    }
}


let lockScopeStatus = false; // لتتبع حالة الميزة

function lockscope() {
    if (!lockScopeStatus) {
        // تفعيل الميزة
        h5gg.clearResults();
        h5gg.searchNumber('1075000115', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNearby('3', 'I32', '0x100');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('1075000115', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('-5', 'I32'); 
        h5gg.clearResults();

        // عرض إشعار عند التفعيل
   

        lockScopeStatus = true; // تحديث الحالة
    } else {
        // إيقاف الميزة
        h5gg.clearResults();
        h5gg.searchNumber('-5', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('1075000115', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNearby('-5', 'I32', '0x100');
        h5gg.editAll('1075000115', 'I32'); 
        h5gg.clearResults();
        h5gg.searchNumber('-5', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('1075000115', 'I32'); 
        h5gg.clearResults();

        // عرض إشعار عند الإلغاء
   ;

        lockScopeStatus = false; // تحديث الحالة
    }
}

	


	
	
let buffDameStatus = false; // لتتبع حالة الميزة

function buffhead() {
    if (!buffDameStatus) {
        // تفعيل الميزة
        h5gg.clearResults();
        h5gg.searchNumber('5.5', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('10000000', 'F32'); 
        h5gg.clearResults();
        h5gg.searchNumber('0.75', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('10000000', 'F32'); 
        h5gg.clearResults();

        // عرض إشعار عند التفعيل
       

        buffDameStatus = true; // تحديث الحالة
    } else {
        // إيقاف الميزة
        h5gg.clearResults();
        h5gg.searchNumber('10000000', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('5.5', 'F32'); // استعادة القيمة الأصلية
        h5gg.clearResults();
        h5gg.searchNumber('10000000', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('0.75', 'F32'); // استعادة القيمة الأصلية
        h5gg.clearResults();

        // عرض إشعار عند الإلغاء
     ;

        buffDameStatus = false; // تحديث الحالة
    }
}


	function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {
            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;
        }}); if (modifiedCount > 0) {
        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}
var Nhayman = 15;
var nhayngam = 10;

function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {
    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');
    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;

    results.forEach(result => {
        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');
            modifiedCount++;
              if (searchValue === Nhayman) Nhayman = replaceValue;
            if (searchValue === nhayngam) nhayngam = replaceValue;
        }
    });

    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);
    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");
    }
}


		

function cao() {
    // تعديل القيمة بناءً على الإدخال من المستخدم
    const inputValue = Number(prompt("𝐂𝐚𝐦 𝐂𝐚𝐨 - 𝟎.𝟎𝟓 -> ...  :", ""));
    if (!isNaN(inputValue)) { // التحقق من أن المدخل هو رقم صالح
        modifyValue1(-0.05, inputValue, 'F00', null);
        
        // عرض إشعار عند تفعيل الميزة
        vant.showNotify({
            type: 'success',
            message: 'Cam Cao  Activado '
        });
    } else {
        vant.showNotify({
            type: 'warning',
            message: ' Enter the correct code to deactivate '
        });
    }
}

function xa() {
    // تعديل القيمة بناءً على الإدخال من المستخدم
    const inputValue = Number(prompt("𝐂𝐚𝐦 𝐗𝐚 - 𝟐.𝟓 -> ... :", ""));
    if (!isNaN(inputValue)) { // التحقق من أن المدخل هو رقم صالح
        modifyValue1(2.5, inputValue, 'F04', null);
        
        // عرض إشعار عند تفعيل الميزة
        vant.showNotify({
            type: 'success',
            message: 'Cam Xa  Activado '
        });
    } else {
        vant.showNotify({
            type: 'warning',
            message: ' Enter the correct code to deactivate '
        });
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


let balasMagecV10Active = false; // متغير لتتبع حالة التفعيل

function so881() {
    // دالة للبحث والتعديل
    function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults();
        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
        var results = h5gg.getResults(h5gg.getResultsCount());
        for (var i = 0; i < results.length; i++) {
            h5gg.setValue(results[i].address, replaceValue.toString(), type);
        }
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!balasMagecV10Active) {
        h5gg.clearResults();
        h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
        h5gg.searchNearby('0.01', 'F32', '0x8');
        h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32');
        h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
        h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
        h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
        h5gg.editAll('10.875', "F32");

        // تفعيل الميزة
        balasMagecV10Active = true;

        // عرض إشعار بالنجاح
        vant.showNotify({
            type: 'success',
            message: 'Balas Magec V10  Activado '
        });
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء تفعيلها
        searchAndReplace('10.875', '0.1035', 'F32'); // استرجاع القيمة الأصلية (أو القيمة التي كانت قبل التفعيل)

        // إلغاء تفعيل الميزة
        balasMagecV10Active = false;

        // عرض إشعار بإلغاء التفعيل
        vant.showNotify({
            type: 'success',
            message: 'Balas Magec V10  Deactivate '
        });
    }
}


let aimForActive = false; // متغير لتتبع حالة التفعيل

function AimFor() {
    // دالة للبحث والتعديل
    function modifyValue(address, value, type) {
        h5gg.clearResults();
        h5gg.searchNumber(address, type, '0x100000000', '0x160000000');
        var results = h5gg.getResults(h5gg.getResultsCount());
        for (var i = 0; i < results.length; i++) {
            h5gg.setValue(results[i].address, value.toString(), type);
        }
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!aimForActive) {
        // تطبيق التعديلات
        modifyValue(1077936128, -20000, 'A04');
        modifyValue(1069547520, 1148829696, 'A10');

        // تفعيل الميزة
        aimForActive = true;

        // عرض إشعار بالنجاح
   
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء تفعيلها
        modifyValue(1077936128, 0, 'A04');  // إرجاع القيمة الأصلية أو القيمة التي كانت قبل التفعيل
        modifyValue(1069547520, 0, 'A10');  // إرجاع القيمة الأصلية أو القيمة التي كانت قبل التفعيل

        // إلغاء تفعيل الميزة
        aimForActive = false;

        // عرض إشعار بإلغاء التفعيل
     
    }
}

let aimlockActive = false; // متغير لتتبع حالة التفعيل

function Aimlock() {
    // دالة للبحث والتعديل
    function modifyValue(address, value, type) {
        h5gg.clearResults();
        h5gg.searchNumber(address, type, '0x100000000', '0x160000000');
        var results = h5gg.getResults(h5gg.getResultsCount());
        for (var i = 0; i < results.length; i++) {
            h5gg.setValue(results[i].address, value.toString(), type);
        }
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!aimlockActive) {
        // تطبيق التعديلات
        modifyValue(1077936128, -20000, 'A04');
        modifyValue(1069547520, 1148829696, 'A10');

        // تفعيل الميزة
        aimlockActive = true;

        // عرض إشعار بالنجاح
     
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء تفعيلها
        modifyValue(1077936128, 0, 'A04');  // إرجاع القيمة الأصلية أو القيمة التي كانت قبل التفعيل
        modifyValue(1069547520, 0, 'A10');  // إرجاع القيمة الأصلية أو القيمة التي كانت قبل التفعيل

        // إلغاء تفعيل الميزة
        aimlockActive = false;

        // عرض إشعار بإلغاء التفعيل
     
    }
}



let s100sActive = false; // متغير لتتبع حالة التفعيل

function awm() {
    // دالة للبحث والتعديل
    function modifyValues(addr1) {
        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);
        var dizhi2 = (Number(addr1) + -308);

        // تعديل القيم
        h5gg.setValue(dizhi0, 0.01, "F32");
        h5gg.setValue(dizhi1, 0.01, "F32");
        h5gg.setValue(dizhi2, 0, "I32");
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!s100sActive) {
        h5gg.clearResults();
        h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);

        // تعديل القيم في جميع النتائج
        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            modifyValues(addr1);
        }

        // تفعيل الميزة
        s100sActive = true;

        // عرض إشعار بالنجاح
   
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);

        // إعادة القيم الأصلية (أو إلغاء التعديلات)
        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            h5gg.setValue(Number(addr1) + 36, 0, "F32"); // إعادة قيمة 0 بدلًا من 0.01
            h5gg.setValue(Number(addr1) + 40, 0, "F32"); // إعادة قيمة 0 بدلًا من 0.01
            h5gg.setValue(Number(addr1) + -308, 0, "I32"); // إعادة قيمة 0 بدلًا من 0
        }

        // إلغاء تفعيل الميزة
        s100sActive = false;

        // عرض إشعار بإلغاء التفعيل

    }
}

	

let s105sActive = false; // متغير لتتبع حالة التفعيل

function s105s() {
    // دالة للبحث والتعديل
    function modifyValues(addr1) {
        var dizhi0 = (Number(addr1) + 8);
        // تعديل القيم
        h5gg.setValue(dizhi0, 2139095040, "I32");
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!s105sActive) {
        h5gg.clearResults();
        h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);

        // تعديل القيم في جميع النتائج
        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            modifyValues(addr1);
        }

        // تفعيل الميزة
        s105sActive = true;

        // عرض إشعار بالنجاح
        vant.showNotify({
            type: 'success',
            message: 'Sniper Scope  Activado '
        });
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);

        // إعادة القيم الأصلية (أو إلغاء التعديلات)
        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            h5gg.setValue(Number(addr1) + 8, 0, "I32"); // إعادة القيمة الأصلية
        }

        // إلغاء تفعيل الميزة
        s105sActive = false;

        // عرض إشعار بإلغاء التفعيل
        vant.showNotify({
            type: 'success',
            message: 'Sniper Scope  Deactivate '
        });
    }
}





let s101sActive = false; // متغير لتتبع حالة التفعيل

function s101s() {
    // دالة لتعديل القيم
    function modifyValues(addr1) {
        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);

        // تعديل القيم
        h5gg.setValue(dizhi0, 0.01, "F32");
        h5gg.setValue(dizhi1, 0.01, "F32");
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!s101sActive) {
        h5gg.clearResults();
        h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);

        // تعديل القيم في جميع النتائج
        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            modifyValues(addr1);
        }

        // تفعيل الميزة
        s101sActive = true;

        // عرض إشعار بالنجاح
        vant.showNotify({
            type: 'success',
            message: 'Sniper Switch  Activado '
        });
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
        var count = h5gg.getResultsCount();
        var r = h5gg.getResults(count);

        // إعادة القيم الأصلية (أو إلغاء التعديلات)
        for (var i = 0; i < count; i++) {
            var addr1 = r[i].address;
            h5gg.setValue(Number(addr1) + 36, 0, "F32"); // إعادة القيمة الأصلية
            h5gg.setValue(Number(addr1) + 40, 0, "F32"); // إعادة القيمة الأصلية
        }

        // إلغاء تفعيل الميزة
        s101sActive = false;

        // عرض إشعار بإلغاء التفعيل
        vant.showNotify({
            type: 'success',
            message: 'Sniper Switch  Deactivate '
        });
    }
}

	
let so89Active = false; // متغير لتتبع حالة التفعيل

function Fast() {
    // دالة لتعديل القيم
    function modifyValues() {
        h5gg.clearResults();
        h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
        h5gg.editAll('72340172821233664', 'I64');
    }

    // إذا كانت الميزة غير مفعلة، نقوم بتفعيلها
    if (!so89Active) {
        modifyValues(); // تفعيل الميزة بتعديل القيم

        // تفعيل الميزة
        so89Active = true;

        // عرض إشعار بالنجاح
   
    } else {
        // إذا كانت الميزة مفعلة، نقوم بإلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');
        h5gg.editAll('72340173878198272', 'I64'); // إلغاء التعديل (إعادة القيمة الأصلية)

        // إلغاء تفعيل الميزة
        so89Active = false;

        // عرض إشعار بإلغاء التفعيل
   
    }
}


let skActive = false; // متغير لتتبع حالة التفعيل

function Sensi() {
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
   ;
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
 ;
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
		
		
function S2() {
h5gg.clearResults();
h5gg.searchNumber('4397530849764387586','I64','0x100000000', '0x160000000');
h5gg.editAll('4397530849758414897', 'I64');
alert("Speed X2 On");
}




function S5() {
h5gg.clearResults();
h5gg.searchNumber('4397530849764387586','I64','0x100000000', '0x160000000');
 h5gg.editAll('4397530849758414697', 'I64');
alert("Speed X5 On");
}


        function R1() {
    h5gg.editAll('4397530849764387586', 'I64');
 

}










function S8() {
h5gg.clearResults();
h5gg.searchNumber('4397530849764387586','I64','0x100000000', '0x160000000');
h5gg.editAll('4366458311853685297', 'I64');
alert("Speed X8 On");
}

function S10() {
h5gg.clearResults();
h5gg.searchNumber('4397530849764387586','I64','0x100000000', '0x160000000');
h5gg.editAll('4397530849749489418', 'I64');
alert("Speed X10 On");
}



function S50() {
h5gg.clearResults();
h5gg.searchNumber('4397530849764387586','I64','0x100000000', '0x160000000');
h5gg.editAll('4397530849740000000', 'I64');
alert("Speed X50 On");
}



function HpX1() {
 
h5gg.clearResults();
h5gg.searchNumber('4397530849764387586','I64','0x100000000', '0x160000000');
h5gg.editAll('4397530849758414897', 'I64');
alert("Active in Loby ");
}

function Anti() {
    
h5gg.clearResults();
modifyValue(-1042808832,1120403456,'');


}


function Antib() {
    
h5gg.clearResults();
modifyValue(-1042808832,1120403456,'');


}

function Bypass() {
h5gg.clearResults();
modifyValue(134402, 84148993, '');
modifyValue(132228, 133890, '');
modifyValue(132176, 133890, '');
h5gg.clearResults();
	
}
