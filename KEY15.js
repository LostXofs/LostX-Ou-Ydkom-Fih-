
loopy() 
function loopy() {
    var correctUsername = "Inar"; // استبدل باسم المستخدم الصحيح هنا
    var correctPassword = "X1"; // كلمة السر الصحيحة

    // إدخال اسم المستخدم
    var username = prompt("𝗘𝗻𝘁𝗲𝗿 𝗬𝗼𝘂𝗿 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲");

    // تحقق من اسم المستخدم
    if (username !== correctUsername) {
        alert("𝗘𝗿𝗿𝗼𝗿 : 𝗧𝗵𝗲 𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲 𝗶𝘀 𝗶𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁");
        return; // إنهاء الدالة إذا كان اسم المستخدم خاطئًا
    }

    var password; // متغير لكلمة السر

    // الحلقة للتحقق من كلمة السر
    while (true) {
        password = prompt("𝗘𝗻𝘁𝗲𝗿 𝗧𝗵𝗲 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱"); // إدخال كلمة السر
        
        // التحقق إذا كانت كلمة السر خاطئة
        if (password !== correctPassword) {
            alert("𝗘𝗿𝗿𝗼𝗿 : 𝗧𝗵𝗲 𝗽𝗮𝘀𝘀𝘄𝗼𝗿𝗱 𝗶𝘀 𝗶𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁"); // رسالة الخطأ
        } else {
            break; // الخروج من الحلقة إذا كانت كلمة السر صحيحة
        }
    }

    // تشغيل الصوت عند تسجيل الدخول الناجح
    var audio = new Audio('https://drive.google.com/uc?id=1O4TPSa7mo0y-BePp3O8pdYVvAVav0U2C'); // استخدم رابط مباشر
    audio.play();

    window.alert("𝗪𝗔𝗟𝗖𝗢𝗠 𝗧𝗢 𝗠𝗬 𝗣𝗔𝗡𝗘𝗟 ⇨ 𝗜𝗡𝗔𝗥 ( 𝟭𝟱𝗷 )");
}