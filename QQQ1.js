
let aim180Enabled = false; // حالة التفعيل (غير مفعّل افتراضيًا)

function aim180() {
    if (aim180Enabled) {
        // إلغاء التفعيل
        h5gg.clearResults();
        h5gg.searchNumber('1057048494', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('2000', 'I32'); // إعادة القيمة الأصلية
        h5gg.clearResults();
        h5gg.searchNumber('1054951342', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('2000', 'I32'); // إعادة القيمة الأصلية
        h5gg.clearResults();
        h5gg.searchNumber('1053273620', 'I32', '0x100000000', '0x160000000');
        h5gg.editAll('2000', 'I32'); // إعادة القيمة الأصلية
        h5gg.clearResults();

        vant.showNotify({
            type: 'info',
            message: 'Aim 180 Disabled' // رسالة إلغاء التفعيل
        });

        aim180Enabled = false; // تحديث الحالة إلى غير مفعّل
    } else {
        // تفعيل الكود
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

        vant.showNotify({
            type: 'success',
            message: 'Aim 180 Enabled' // رسالة التفعيل
        });

        aim180Enabled = true; // تحديث الحالة إلى مفعّل
    }
}
