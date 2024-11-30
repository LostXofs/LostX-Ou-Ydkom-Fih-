    function playSound(checkbox) {
            if (checkbox.checked) {
                var audio = new Audio('https://www.sendgb.com/src/download_one.php?uploadId=CGKDk4bRPd8&sc=86de4cc58324d35f56f151aee84b6ddb&file=OPCION_ACTIVADA_AUDIO_VOZ_1.wav&private_id='); // استبدل 'sound.mp3' بمسار ملف الصوت الخاص بك
                audio.play();
            }
        }
