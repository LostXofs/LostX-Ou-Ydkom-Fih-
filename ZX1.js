  let aim180Status = false; // لتتبع حالة التفعيل أو الإيقاف

    function playSound() {
        var audio = new Audio('https://www.sendgb.com/src/download_one.php?uploadId=CGKDk4bRPd8&sc=86de4cc58324d35f56f151aee84b6ddb&file=OPCION_ACTIVADA_AUDIO_VOZ_1.wav&private_id=');
        audio.play();
    }

    function aim180() {
        playSound(); // تشغيل الصوت عند الضغط على الزر

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
            vant.showNotify({
                type: 'success',
                message: 'Aim 180 Activado'
            });
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
            vant.showNotify({
                type: 'success',
                message: 'Aim 180 Deactivate'
            });
            h5gg.clearResults();
            aim180Status = false;
        }
    }
