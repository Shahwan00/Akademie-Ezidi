// 1. قاعدة بيانات الحروف - تم وضع جميع الحروف الـ 38 في المستوى A1 فقط بناءً على طلبك
const lettersData = [
    { level: "A1", yezidi: "𐺀", kurmanji: "A", arabic: "ألف", audio: "audio/a.mp3" }, 
    { level: "A1", yezidi: "𐺁", kurmanji: "B", arabic: "باء", audio: "audio/b.mp3" }, 
    { level: "A1", yezidi: "𐺃", kurmanji: "P", arabic: "پاء", audio: "audio/p.mp3" }, 
    { level: "A1", yezidi: "𐺂", kurmanji: "Ph", arabic: "باء انفجارية", audio: "audio/ph.mp3" },
    { level: "A1", yezidi: "𐺄", kurmanji: "T'", arabic: "تاء", audio: "audio/t.mp3" },
    { level: "A1", yezidi: "𐺫", kurmanji: "", arabic: "ء", audio: "audio/s.mp3" },
    { level: "A1", yezidi: "𐺆", kurmanji: "C", arabic: "جيم", audio: "audio/j.mp3" },
    { level: "A1", yezidi: "𐺇", kurmanji: "Ch", arabic: "تشاء", audio: "audio/ch.mp3" },
    { level: "A1", yezidi: "𐺈", kurmanji: "C'", arabic: "تشاء مشددة", audio: "audio/ch_alt.mp3" },
    { level: "A1", yezidi: "𐺧", kurmanji: "H'", arabic: "هاء", audio: "audio/h.mp3" },
    { level: "A1", yezidi: "𐺊", kurmanji: "X", arabic: "خاء", audio: "audio/x.mp3" },
    { level: "A1", yezidi: "𐺋", kurmanji: "D", arabic: "دال", audio: "audio/d.mp3" },
    { level: "A1", yezidi: "𐺏", kurmanji: "Z", arabic: "ذال", audio: "audio/z.mp3" },
    { level: "A1", yezidi: "𐺍", kurmanji: "R", arabic: "راء مخففة", audio: "audio/r.mp3" },
    { level: "A1", yezidi: "𐺎", kurmanji: "R'", arabic: "راء مفخمة", audio: "audio/rh.mp3" },
    { level: "A1", yezidi: "𐺐", kurmanji: "J", arabic: "جيم خفيفة (ژ)", audio: "audio/je.mp3" },
    { level: "A1", yezidi: "𐺑", kurmanji: "S", arabic: "سين", audio: "audio/sin.mp3" },
    { level: "A1", yezidi: "𐺒", kurmanji: "Sh", arabic: "شين", audio: "audio/sh.mp3" },
    { level: "A1", yezidi: "𐺕", kurmanji: "T", arabic: "طاء", audio: "audio/ta.mp3" },
    { level: "A1", yezidi: "𐺗", kurmanji: "A'", arabic: "عين", audio: "audio/eyn.mp3" },
    { level: "A1", yezidi: "𐺘", kurmanji: "X'", arabic: "غين", audio: "audio/xheyn.mp3" },
    { level: "A1", yezidi: "𐺙", kurmanji: "F", arabic: "فاء", audio: "audio/f.mp3" },
    { level: "A1", yezidi: "𐺛", kurmanji: "V", arabic: "ڤاء", audio: "audio/v.mp3" },
    { level: "A1", yezidi: "𐺜", kurmanji: "Q", arabic: "قاف", audio: "audio/q.mp3" },
    { level: "A1", yezidi: "𐺝", kurmanji: "K", arabic: "كاف", audio: "audio/k.mp3" },
    { level: "A1", yezidi: "𐺞", kurmanji: "Kh'", arabic: "كاف مشددة", audio: "audio/kh.mp3" },
    { level: "A1", yezidi: "𐺟", kurmanji: "G", arabic: "كاف مصرية (گ)", audio: "audio/g.mp3" },
    { level: "A1", yezidi: "𐺠", kurmanji: "L", arabic: "لام", audio: "audio/l.mp3" },
    { level: "A1", yezidi: "𐺡", kurmanji: "M", arabic: "ميم", audio: "audio/m.mp3" },
    { level: "A1", yezidi: "𐺢", kurmanji: "N", arabic: "نون", audio: "audio/n.mp3" },
    { level: "A1", yezidi: "𐺤", kurmanji: "w", arabic: "و", audio: "audio/uu.mp3" },
    { level: "A1", yezidi: "𐺣𐺣", kurmanji: "Ü", arabic: "وو", audio: "audio/w.mp3" },
    { level: "A1", yezidi: "𐺣", kurmanji: "O", arabic: "واو تفخيم (O)", audio: "audio/o.mp3" },
    { level: "A1", yezidi: "𐺦", kurmanji: "E", arabic: "فتحة / ألف قصيرة", audio: "audio/ea.mp3" },
    { level: "A1", yezidi: "𐺨", kurmanji: "yi", arabic: "ي", audio: "audio/ha.mp3" },
    { level: "A1", yezidi: "𐺩", kurmanji: "Y", arabic: "ياء", audio: "audio/y.mp3" },
    { level: "A1", yezidi: "𐺰", kurmanji: "Ł", arabic: "لام مفخمة (تاريخية)", audio: "audio/lam_dot.mp3" },
    { level: "A1", yezidi: "𐺱", kurmanji: "Ê", arabic: "ياء بحركات تاريخية", audio: "audio/yot_circumflex.mp3" }
];

// 2. قاعدة بيانات الكلمات - مقسمة وموزعة على كافة المستويات مع كلمات كورمانجية من عندي
const wordsData = [
    // ================= مستوى A1 =================
    { level: "A1", yezidi: "𐺀𐺛", kurmanji: "Av", arabic: "ماء (Wasser)", audio: "audio/wasser.mp3" },
    { level: "A1", yezidi: "𐺋𐺀𐺞", kurmanji: "Daik", arabic: "الأم (Mutter)", audio: "audio/word_av.mp3" },
    { level: "A1", yezidi: "𐺈𐺀𐺛", kurmanji: "Chav", arabic: "عين (Auge)", audio: "audio/word_chav.mp3" },
    { level: "A1", yezidi: "𐺁𐺀𐺁", kurmanji: "Bav", arabic: "أب (Vater)", audio: "audio/word_bav.mp3" },
    { level: "A1", yezidi: "𐺑𐺠𐺀𐺛", kurmanji: "Silav", arabic: "مرحباً (Hallo)", audio: "audio/hallo.mp3" },
    { level: "A1", yezidi: "𐺁𐺦𐺠𐺩", kurmanji: "Belê", arabic: "نعم (Ja)", audio: "audio/ja.mp3" },
    { level: "A1", yezidi: "𐺢𐺀", kurmanji: "Na", arabic: "لا (Nein)", audio: "audio/nein.mp3" },
    { level: "A1", yezidi: "𐺢𐺀𐺢", kurmanji: "Nan", arabic: "خبز (Brot)", audio: "audio/brot.mp3" },

    // ================= مستوى A2 =================
    { level: "A2", yezidi: "𐺁𐺀𐺍𐺀𐺢", kurmanji: "Baran", arabic: "مطر (Regen)", audio: "audio/Regen.mp3" },
    { level: "A2", yezidi: "𐺆𐺌𐺧", kurmanji: "Cih", arabic: "مكان (Ort)", audio: "audio/Ort.mp3" },
    { level: "A2", yezidi: "𐺄𐺦𐺍𐺦𐺡𐺃𐺩𐺠", kurmanji: "Trimbêl", arabic: "سيارة (Auto)", audio: "audio/auto.mp3" },
    { level: "A2", yezidi: "𐺝𐺄𐺩𐺁", kurmanji: "Kitêb", arabic: "كتاب (Buch)", audio: "audio/buch.mp3" },
    { level: "A2", yezidi: "𐺡𐺦𐺝𐺄𐺀𐺁", kurmanji: "Meqteb", arabic: "مدرسة (Schule)", audio: "audio/schule.mp3" },
    { level: "A2", yezidi: "𐺧𐺦𐺛𐺀𐺠", kurmanji: "Heval", arabic: "صديق (Freund)", audio: "audio/freund.mp3" },

    // ================= مستوى B1 =================
    { level: "B1", yezidi: "𐺡𐺀𐺁𐺀𐺄", kurmanji: "Malbat", arabic: "عائلة (Familie)", audio: "audio/familie.mp3" },
    { level: "B1", yezidi: "𐺤𐺦𐺊𐺄", kurmanji: "Wext", arabic: "وقت (Zeit)", audio: "audio/zeit.mp3" },
    { level: "B1", yezidi: "𐺍𐺣𐺐", kurmanji: "Roj", arabic: "يوم (Tag)", audio: "audio/tag.mp3" },
    { level: "B1", yezidi: "𐺩𐺛𐺀𐺍", kurmanji: "Şev", arabic: "ليلة (Nacht)", audio: "audio/nacht.mp3" },
    { level: "B1", yezidi: "𐺒𐺨𐺍", kurmanji: "Şîr", arabic: "حليب (Milch)", audio: "audio/milch.mp3" },
    { level: "B1", yezidi: "𐺑𐺩𐺛", kurmanji: "Sêv", arabic: "تفاحة (Apfel)", audio: "audio/apfel.mp3" },

    // ================= مستوى B2 =================
    { level: "B2", yezidi: "𐺒𐺣𐺣𐺒𐺄𐺌𐺢", kurmanji: "Şûştin", arabic: "غسل (Waschen)", audio: "audio/Waschen.mp3" },
    { level: "B2", yezidi: "𐺃𐺀𐺜𐺌𐺐𐺝𐺌𐺍𐺌𐺢", kurmanji: "Paqijkirin", arabic: "تنظيف (Reinigen)", audio: "audio/Reinigen.mp3" },
    { level: "B2", yezidi: "𐺀𐺛𐺨𐺄𐺌𐺢", kurmanji: "Avêtin", arabic: "رمي (Werfen)", audio: "audio/Werfen.mp3" },
    { level: "B2", yezidi: "𐺟𐺦𐺧𐺩𐺒𐺄𐺌𐺢", kurmanji: "Gihîştin", arabic: "الوصول (Erreichen)", audio: "audio/Erreichen.mp3" },
    { level: "B2", yezidi: "𐺝𐺦𐺄𐺌𐺢", kurmanji: "Ketin", arabic: "سقوط (Fallen)", audio: "audio/Fallen.mp3" },

    // ================= مستوى C1 =================
    { level: "C1", yezidi: "𐺧𐺌𐺠𐺝𐺌𐺒𐺨\u200c𐺢", kurmanji: "Hilkişiyan", arabic: "الصعود (Steigen)", audio: "audio/Steigen.mp3" },
    { level: "C1", yezidi: "𐺋𐺀𐺝𐺦𐺄𐺌𐺢", kurmanji: "Daketin", arabic: "الهبوط (Sinken)", audio: "audio/Sinken.mp3" },
    { level: "C1", yezidi: "𐺟𐺦𐺍𐺨𐺢", kurmanji: "Geriyan", arabic: "البحث (Suchen)", audio: "audio/Suchen.mp3" },
    { level: "C1", yezidi: "𐺋𐺨𐺄𐺌𐺢", kurmanji: "Dîtin", arabic: "العثور (Finden)", audio: "audio/Finden.mp3" },
    { level: "C1", yezidi: "𐺃𐺀𐺍𐺀\u200c𐺑𐺄𐺌𐺢", kurmanji: "Parastin", arabic: "حماية (Schützen)", audio: "audio/Schützen.mp3" },

    // ================= مستوى C2 =================
    { level: "C2", yezidi: "𐺟𐺣𐺍", kurmanji: "Gur", arabic: "ذئب (der Wolf)", audio: "audio/der_Wolf.mp3" },
    { level: "C2", yezidi: "𐺎𐺣𐺛𐺨", kurmanji: "Rûvî", arabic: "ثعلب (der Fuchs)", audio: "audio/der_Fuchs.mp3" },
    { level: "C2", yezidi: "𐺒𐺩𐺍", kurmanji: "Şêr", arabic: "أسد (der Löwe)", audio: "audio/der_Loewe.mp3" },
    { level: "C2", yezidi: "𐺂𐺌𐺠𐺌𐺢𐺟", kurmanji: "Piling", arabic: "نمر (der Tiger)", audio: "audio/der_Tiger.mp3" },
    { level: "C2", yezidi: "𐺙𐺌𐺠", kurmanji: "Fîl", arabic: "فيل (der Elefant)", audio: "audio/der_Elefant.mp3" }
];

let selectedLevel = "A1"; 
let currentQuestionIndex = 0;
let score = 0;
let filteredQuizWords = []; 

document.addEventListener("DOMContentLoaded", () => {
    goToLevels(); 
});

function playSound(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play().catch(err => console.log("الصوت غير جاهز بعد:", audioSrc));
}

function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo(0, 0); 
}

function goToLevels() {
    switchSection('levels-section');
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));
    document.getElementById('nav-home').classList.add('active');
}

function startLevel(levelName) {
    selectedLevel = levelName; 
    switchSection('letters-section');
    document.getElementById('current-level-title').innerText = `المستوى ${levelName} : تعلّم الحروف`;
    
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        if(item.innerText.trim() === levelName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    renderLetters();
}

function renderLetters() {
    const grid = document.getElementById("letters-grid");
    grid.innerHTML = "";
    
    const filteredLetters = lettersData.filter(item => item.level === selectedLevel);
    
    if (filteredLetters.length === 0) {
        grid.innerHTML = `<p class="no-data-msg">تم نقل جميع الحروف إلى المستوى A1 بنجاح! انتقل مباشرة إلى الكلمات المخصصة للمستوى ${selectedLevel} بالأسفل.</p>`;
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

function goToWords() {
    switchSection('words-section');
    document.getElementById('current-words-title').innerText = `المستوى ${selectedLevel} : تعلّم الكلمات`;
    renderWords();
}

function renderWords() {
    const grid = document.getElementById("words-grid");
    grid.innerHTML = "";
    
    const filteredWords = wordsData.filter(item => item.level === selectedLevel);
    
    if (filteredWords.length === 0) {
        grid.innerHTML = `<p class="no-data-msg">سيتم إضافة المزيد من الكلمات المخصصة للمستوى ${selectedLevel} قريباً!</p>`;
        return;
    }

    filteredWords.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.onclick = () => playSound(item.audio);
        
        card.innerHTML = `
            <div class="yezidi-text">${item.yezidi}</div>
            <div class="translation"><strong style="color:#ffaa00;">${item.kurmanji}</strong><br>${item.arabic}</div>
        `;
        grid.appendChild(card);
    });
}

function goToQuiz() {
    switchSection('quiz-section');
    document.getElementById('current-quiz-title').innerText = `المستوى ${selectedLevel} : الاختبار (Test)`;
    
    filteredQuizWords = wordsData.filter(item => item.level === selectedLevel);
    currentQuestionIndex = 0;
    score = 0;
    
    loadQuestion();
}

function loadQuestion() {
    const questionText = document.getElementById("quiz-question");
    const wordDisplay = document.getElementById("quiz-word");
    const optionsGrid = document.getElementById("quiz-options");
    const resultDiv = document.getElementById("quiz-result");

    resultDiv.innerHTML = "";
    optionsGrid.innerHTML = "";

    if (filteredQuizWords.length === 0) {
        questionText.innerHTML = "⚠️ لا توجد كلمات مخصصة في هذا المستوى لإجراء اختبار حالياً.";
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
    wordDisplay.innerHTML = currentWord.yezidi + `<br><span style="font-size:20px; color:#8b949e;">(${currentWord.kurmanji})</span>`;

    playSound(currentWord.audio);

    let options = [currentWord.arabic];
    
    while (options.length < 4) {
        let randomWord = wordsData[Math.floor(Math.random() * wordsData.length)].arabic;
        if (!options.includes(randomWord)) {
            options.push(randomWord);
        }
    }

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
    setTimeout(loadQuestion, 2000); 
}
