// 1. قاعدة بيانات الحروف مقسمة حسب المستويات
const lettersData = [
    // حروف المستوى A1
    { level: "A1", yezidi: "𐺀", kurmanji: "A", arabic: "ألف", audio: "audio/a.mp3" },
    { level: "A1", yezidi: "𐺁", kurmanji: "B", arabic: "باء", audio: "audio/b.mp3" },
    { level: "A1", yezidi: "𐺃", kurmanji: "P", arabic: "پاء", audio: "audio/p.mp3" },
    { level: "A1", yezidi: "𐺂", kurmanji: "Ph", arabic: "باء انفجارية", audio: "audio/ph.mp3" },
    { level: "A1", yezidi: "𐺄", kurmanji: "T'", arabic: "تاء", audio: "audio/t.mp3" },
    { level: "A1", yezidi: "𐺫", kurmanji: "", arabic: "ء", audio: "audio/s.mp3" },
    { level: "A1", yezidi: "𐺆", kurmanji: "C", arabic: "جيم", audio: "audio/j.mp3" },
    { level: "A1", yezidi: "𐺇", kurmanji: "Ch", arabic: "تشاء", audio: "audio/ch.mp3" },

    // حروف المستوى A2
    { level: "A2", yezidi: "𐺈", kurmanji: "C'", arabic: "تشاء مشددة", audio: "audio/ch_alt.mp3" },
    { level: "A2", yezidi: "𐺧", kurmanji: "H'", arabic: "هاء", audio: "audio/h.mp3" },
    { level: "A2", yezidi: "𐺊", kurmanji: "X", arabic: "خاء", audio: "audio/x.mp3" },
    { level: "A2", yezidi: "𐺋", kurmanji: "D", arabic: "دال", audio: "audio/d.mp3" },
    { level: "A2", yezidi: "𐺏", kurmanji: "Z", arabic: "ذال", audio: "audio/z.mp3" },
    { level: "A2", yezidi: "𐺍", kurmanji: "R", arabic: "راء مخففة", audio: "audio/r.mp3" },
    { level: "A2", yezidi: "𐺎", kurmanji: "R'", arabic: "راء مفخمة", audio: "audio/rh.mp3" }
    
    // يمكنك إضافة حروف للمستويات B1, B2, C1, C2 بنفس الطريقة بأسفل...
];

// 2. قاعدة بيانات الكلمات مقسمة حسب المستويات
const wordsData = [
    // كلمات المستوى A1 (مثال: كلمات أساسية، تحيات، مأكولات)
    { level: "A1", yezidi: "𐺀𐺛", arabic: "ماء (Wasser)", audio: "audio/wasser.mp3" },
    { level: "A1", yezidi: "𐺋𐺀𐺞", arabic: "الأم (Mutter)", audio: "audio/word_av.mp3" },
    { level: "A1", yezidi: "𐺈𐺀𐺛", arabic: "عين (Auge)", audio: "audio/word_chav.mp3" },
    { level: "A1", yezidi: "𐺁𐺀𐺁", arabic: "أب (Vater)", audio: "audio/word_bav.mp3" },
    { level: "A1", yezidi: "𐺑𐺠𐺀𐺛", arabic: "مرحباً (Hallo)", audio: "audio/hallo.mp3" },
    { level: "A1", yezidi: "𐺑𐺌𐺁𐺦𐺧 𐺊𐺩𐺍", arabic: "صباح الخير (Guten Morgen)", audio: "audio/guten_morgen.mp3" },
    { level: "A1", yezidi: "𐺁𐺦𐺠𐺩", arabic: "نعم (Ja)", audio: "audio/ja.mp3" },
    { level: "A1", yezidi: "𐺢𐺀", arabic: "لا (Nein)", audio: "audio/nein.mp3" },
    { level: "A1", yezidi: "𐺢𐺀𐺢", arabic: "خبز (Brot)", audio: "audio/brot.mp3" },
    { level: "A1", yezidi: "𐺡𐺀𐺠", arabic: "منزل (Haus)", audio: "audio/haus.mp3" },

    // كلمات المستوى A2 (مثال: أفعال، حيوانات، جمل متقدمة)
    { level: "A2", yezidi: "𐺁𐺀𐺍𐺀𐺢", arabic: "مطر (Regen)", audio: "audio/Regen.mp3" },
    { level: "A2", yezidi: "𐺆𐺌𐺧", arabic: "مكان (Ort)", audio: "audio/Ort.mp3" },
    { level: "A2", yezidi: "𐺄𐺦𐺍𐺦𐺡𐺃𐺩𐺠", arabic: "سيارة (Auto)", audio: "audio/auto.mp3" },
    { level: "A2", yezidi: "𐺝𐺄𐺩𐺁", arabic: "كتاب (Buch)", audio: "audio/buch.mp3" },
    { level: "A2", yezidi: "𐺟𐺣𐺍", arabic: "ذئب (der Wolf)", audio: "audio/der_Wolf.mp3" },
    { level: "A2", yezidi: "𐺎𐺣𐺛𐺨", arabic: "ثعلب (der Fuchs)", audio: "audio/der_Fuchs.mp3" },
    { level: "A2", yezidi: "𐺒𐺩𐺍", arabic: "أسد (der Löwe)", audio: "audio/der_Loewe.mp3" },
    { level: "A2", yezidi: "𐺦𐺏 𐺁𐺌𐺍𐺇𐺨 𐺡𐺦", arabic: "أنا جوعان (Ich habe Hunger)", audio: "audio/ana_joaan.mp3" },
    { level: "A2", yezidi: "𐺦𐺏 𐺄𐺨 𐺡𐺦", arabic: "أنا عطشان (Ich habe Durst)", audio: "audio/ana_atshan.mp3" }

    // يمكنك إضافة كلمات للمستويات B1, B2, C1, C2 بنفس الطريقة...
];

// المتغيرات العامة للنظام لتعقب الاختيارات الحالية
let selectedLevel = "A1"; 
let currentQuestionIndex = 0;
let score = 0;
let filteredQuizWords = []; // الكلمات الخاصة بالمستوى المختار فقط للاختبار

document.addEventListener("DOMContentLoaded", () => {
    goToLevels(); // بدء التطبيق من واجهة المستويات الرئيسية دائماً
});

function playSound(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play().catch(err => console.log("الصوت غير جاهز أو غير موجود بعد:", audioSrc));
}

// دالة الانتقال الآمن بين الأقسام
function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo(0, 0); // رفع الصفحة لأعلى عند الانتقال لراحة المستخدم
}

// العودة إلى قائمة المستويات الكاملة
function goToLevels() {
    switchSection('levels-section');
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));
    document.getElementById('nav-home').classList.add('active');
}

// تفعيل مستوى معين عند ضغط كرت المستوى
function startLevel(levelName) {
    selectedLevel = levelName; // حفظ المستوى المختار حالياً
    switchSection('letters-section');
    
    // تحديث العناوين بما يتناسب مع المستوى المختار
    document.getElementById('current-level-title').innerText = `المستوى ${levelName} : تعلّم الحروف`;
    
    // إدارة تفعيل أزرار شريط التنقل السفلي
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        if(item.innerText === levelName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    renderLetters();
}

// عرض الحروف الخاصة بالمستوى المحدد فقط
function renderLetters() {
    const grid = document.getElementById("letters-grid");
    grid.innerHTML = "";
    
    // فلترة الحروف بناءً على المستوى الحالي выбранный level
    const filteredLetters = lettersData.filter(item => item.level === selectedLevel);
    
    if (filteredLetters.length === 0) {
        grid.innerHTML = `<p class="no-data-msg">سيتم إضافة الحروف الخاصة بالمستوى ${selectedLevel} قريباً جداً!</p>`;
        return;
    }

    filteredLetters.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => playSound(item.audio);
        
        card.innerHTML = `
            <div class="yezidi-text">${item.yezidi}</div>
            <div class="translation">${item.kurmanji} ${item.kurmanji ? '/' : ''} ${item.arabic}</div>
        `;
        grid.appendChild(card);
    });
}

// الانتقال لقسم الكلمات وتصفيتها للمستوى المختار
function goToWords() {
    switchSection('words-section');
    document.getElementById('current-words-title').innerText = `المستوى ${selectedLevel} : تعلّم الكلمات`;
    renderWords();
}

// عرض الكلمات الخاصة بالمستوى المحدد فقط
function renderWords() {
    const grid = document.getElementById("words-grid");
    grid.innerHTML = "";
    
    // فلترة الكلمات للمستوى المختار
    const filteredWords = wordsData.filter(item => item.level === selectedLevel);
    
    if (filteredWords.length === 0) {
        grid.innerHTML = `<p class="no-data-msg">سيتم إضافة الكلمات الخاصة بالمستوى ${selectedLevel} قريباً جداً!</p>`;
        return;
    }

    filteredWords.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => playSound(item.audio);
        
        card.innerHTML = `
            <div class="yezidi-text">${item.yezidi}</div>
            <div class="translation">${item.arabic}</div>
        `;
        grid.appendChild(card);
    });
}

// الانتقال لقسم الاختبار الخاص بالمستوى المختار
function goToQuiz() {
    switchSection('quiz-section');
    document.getElementById('current-quiz-title').innerText = `المستوى ${selectedLevel} : الاختبار (Test)`;
    
    // فلترة الكلمات الخاصة بالمستوى لإنشاء اختبار مخصص له
    filteredQuizWords = wordsData.filter(item => item.level === selectedLevel);
    currentQuestionIndex = 0;
    score = 0;
    
    loadQuestion();
}

// تحميل أسئلة الاختبار المفلترة للمستوى الحالي
function loadQuestion() {
    const questionText = document.getElementById("quiz-question");
    const wordDisplay = document.getElementById("quiz-word");
    const optionsGrid = document.getElementById("quiz-options");
    const resultDiv = document.getElementById("quiz-result");

    resultDiv.innerHTML = "";
    optionsGrid.innerHTML = "";

    if (filteredQuizWords.length === 0) {
        questionText.innerHTML = "⚠️ لا توجد كلمات كافية في هذا المستوى لإجراء اختبار حالياً.";
        wordDisplay.innerHTML = "";
        return;
    }

    if (currentQuestionIndex >= filteredQuizWords.length) {
        questionText.innerHTML = "🎉 !Gut gemacht! Du hast den Test bestanden";
        wordDisplay.innerHTML = `النتيجة النهائيّة للمستوى ${selectedLevel}: <br><span style="color: #58a6ff;">${score} من ${filteredQuizWords.length}</span>`;
        return;
    }

    const currentWord = filteredQuizWords[currentQuestionIndex];
    questionText.innerHTML = "🤔 Was bedeutet dieses Wort؟ ما معنى هذه الكلمة؟";
    wordDisplay.innerHTML = currentWord.yezidi;

    playSound(currentWord.audio);

    let options = [currentWord.arabic];
    
    // جلب خيارات عشوائية من كامل قاعدة البيانات لتوفير التمويه والاختيارات الأربعة
    while (options.length < 4) {
        let randomWord = wordsData[Math.floor(Math.random() * wordsData.length)].arabic;
        if (!options.includes(randomWord)) {
            options.push(randomWord);
        }
    }

    // خلط الأزرار
    options.sort(() => Math.random() - 0.5);

    options.forEach(option => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option, currentWord.arabic);
        optionsGrid.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    const resultDiv = document.getElementById("quiz-result");
    if (selected === correct) {
        resultDiv.innerHTML = "<span class='alert-msg success-msg'>✔️ إجابة صحيحة! Richtige Antwort</span>";
        score++;
    } else {
        resultDiv.innerHTML = `<span class='alert-msg error-msg'>❌ إجابة خاطئة. الصحيح هو: ${correct}</span>`;
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 2000); // الانتقال التلقائي للسؤال القادم بعد ثانيتين
}
