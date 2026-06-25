// 1. قاعدة بيانات الحروف
const lettersData = [
    { yezidi: "𐺀", kurmanji: "A", arabic: "ألف", audio: "audio/a.mp3" }, 
    { yezidi: "𐺁", kurmanji: "B", arabic: "باء", audio: "audio/b.mp3" }, 
    { yezidi: "𐺃", kurmanji: "P", arabic: "پاء", audio: "audio/p.mp3" }, 
    { yezidi: "𐺂", kurmanji: "Ph", arabic: "باء انفجارية", audio: "audio/ph.mp3" },
    { yezidi: "𐺄", kurmanji: "T'", arabic: "تاء", audio: "audio/t.mp3" },
    { yezidi: "𐺫", kurmanji: "", arabic: "ء", audio: "audio/s.mp3" },
    { yezidi: "𐺆", kurmanji: "C", arabic: "جيم", audio: "audio/j.mp3" },
    { yezidi: "𐺇", kurmanji: "Ch", arabic: "تشاء", audio: "audio/ch.mp3" },
    { yezidi: "𐺈", kurmanji: "C'", arabic: "تشاء مشددة", audio: "audio/ch_alt.mp3" },
    { yezidi: "𐺧", kurmanji: "H'", arabic: "هاء", audio: "audio/h.mp3" },
    { yezidi: "𐺊", kurmanji: "X", arabic: "خاء", audio: "audio/x.mp3" },
    { yezidi: "𐺋", kurmanji: "D", arabic: "دال", audio: "audio/d.mp3" },
    { yezidi: "𐺏", kurmanji: "Z", arabic: "ذال", audio: "audio/z.mp3" },
    { yezidi: "𐺍", kurmanji: "R", arabic: "راء مخففة", audio: "audio/r.mp3" },
    { yezidi: "𐺎", kurmanji: "R'", arabic: "راء مفخمة", audio: "audio/rh.mp3" },
    { yezidi: "𐺐", kurmanji: "J", arabic: "جيم خفيفة (ژ)", audio: "audio/je.mp3" },
    { yezidi: "𐺑", kurmanji: "S", arabic: "سين", audio: "audio/sin.mp3" },
    { yezidi: "𐺒", kurmanji: "Sh", arabic: "شين", audio: "audio/sh.mp3" },
    { yezidi: "𐺕", kurmanji: "T", arabic: "طاء", audio: "audio/ta.mp3" },
    { yezidi: "𐺗", kurmanji: "A'", arabic: "عين", audio: "audio/eyn.mp3" },
    { yezidi: "𐺘", kurmanji: "X'", arabic: "غين", audio: "audio/xheyn.mp3" },
    { yezidi: "𐺙", kurmanji: "F", arabic: "فاء", audio: "audio/f.mp3" },
    { yezidi: "𐺛", kurmanji: "V", arabic: "ڤاء", audio: "audio/v.mp3" },
    { yezidi: "𐺜", kurmanji: "Q", arabic: "قاف", audio: "audio/q.mp3" },
    { yezidi: "𐺝", kurmanji: "K", arabic: "كاف", audio: "audio/k.mp3" },
    { yezidi: "𐺞", kurmanji: "Kh'", arabic: "كاف مشددة", audio: "audio/kh.mp3" },
    { yezidi: "𐺟", kurmanji: "G", arabic: "كاف مصرية (گ)", audio: "audio/g.mp3" },
    { yezidi: "𐺠", kurmanji: "L", arabic: "لام", audio: "audio/l.mp3" },
    { yezidi: "𐺡", kurmanji: "M", arabic: "ميم", audio: "audio/m.mp3" },
    { yezidi: "𐺢", kurmanji: "N", arabic: "نون", audio: "audio/n.mp3" },
    { yezidi: "𐺤", kurmanji: "w", arabic: "و", audio: "audio/uu.mp3" },
    { yezidi: "𐺣𐺣", kurmanji: "Ü", arabic: "وو", audio: "audio/w.mp3" },
    { yezidi: "𐺣", kurmanji: "O", arabic: "واو تفخيم (O)", audio: "audio/o.mp3" },
    { yezidi: "𐺦", kurmanji: "E", arabic: "فتحة / ألف قصيرة", audio: "audio/ea.mp3" },
    { yezidi: "𐺨", kurmanji: "yi", arabic: "ي", audio: "audio/ha.mp3" },
    { yezidi: "𐺩", kurmanji: "Y", arabic: "ياء", audio: "audio/y.mp3" },
    { yezidi: "𐺰", kurmanji: "Ł", arabic: "لام مفخمة (تاريخية)", audio: "audio/lam_dot.mp3" },
    { yezidi: "𐺱", kurmanji: "Ê", arabic: "ياء بحركات تاريخية", audio: "audio/yot_circumflex.mp3" }
];

// 2. قاعدة بيانات الكلمات المحسنة بالألمانية
const wordsData = [
    { yezidi: "𐺀𐺛", kurmanji: "", arabic: "ماء (Wasser)", audio: "audio/wasser.mp3" },
    { yezidi: "𐺋𐺀𐺞", kurmanji: "", arabic: "الأم (Mutter)", audio: "audio/word_av.mp3" },
    { yezidi: "𐺈𐺀𐺛", kurmanji: "", arabic: "عين (Auge)", audio: "audio/word_chav.mp3" },
    { yezidi: "𐺁𐺀𐺁", kurmanji: "", arabic: "أب (Vater)", audio: "audio/word_bav.mp3" },
    { yezidi: "𐺁𐺀𐺍𐺀𐺢", kurmanji: "", arabic: "مطر (Regen)", audio: "audio/Regen.mp3" },
    { yezidi: "𐺆𐺌𐺧", kurmanji: "", arabic: "مكان (Ort)", audio: "audio/Ort.mp3" },
    { yezidi: "𐺃𐺦𐺄𐺀", kurmanji: "", arabic: "تعادل (unentschieden)", audio: "audio/unentschieden.mp3" },
    { yezidi: "𐺠𐺨𐺑𐺄𐺌𐺞", kurmanji: "", arabic: "الألعاب (Spielen)", audio: "audio/Spielen.mp3" },
    { yezidi: "𐺑𐺠𐺀𐺛", kurmanji: "", arabic: "مرحباً (Hallo)", audio: "audio/hallo.mp3" },
    { yezidi: "𐺑𐺌𐺁𐺦𐺧 𐺊𐺩𐺍", kurmanji: "", arabic: "صباح الخير (Guten Morgen)", audio: "audio/guten_morgen.mp3" },
    { yezidi: "𐺐𐺌 𐺝𐺦𐺍𐺦𐺡𐺀 𐺊𐺤𐺦", kurmanji: "", arabic: "من فضلك / العفو (Bitte)", audio: "audio/bitte.mp3" },
    { yezidi: "𐺊𐺠𐺡𐺦𐺄 𐺜𐺦𐺁𐺣𐺠", kurmanji: "", arabic: "شكراً (Danke)", audio: "audio/danke.mp3" },
    { yezidi: "𐺁𐺦𐺠𐺩", kurmanji: "", arabic: "نعم (Ja)", audio: "audio/ja.mp3" },
    { yezidi: "𐺢𐺀", kurmanji: "", arabic: "لا (Nein)", audio: "audio/nein.mp3" },
    { yezidi: "𐺢𐺀𐺢", kurmanji: "", arabic: "خبز (Brot)", audio: "audio/brot.mp3" },
    { yezidi: "𐺡𐺀𐺠", kurmanji: "", arabic: "منزل (Haus)", audio: "audio/haus.mp3" },
    { yezidi: "𐺄𐺦𐺍𐺦𐺡𐺃𐺩𐺠", kurmanji: "", arabic: "سيارة (Auto)", audio: "audio/auto.mp3" },
    { yezidi: "𐺝𐺄𐺩𐺁", kurmanji: "", arabic: "كتاب (Buch)", audio: "audio/buch.mp3" },
    { yezidi: "𐺡𐺦𐺝𐺄𐺀𐺁", kurmanji: "", arabic: "مدرسة (Schule)", audio: "audio/schule.mp3" },
    { yezidi: "𐺧𐺦𐺛𐺀𐺠", kurmanji: "", arabic: "صديق (Freund)", audio: "audio/freund.mp3" },
    { yezidi: "𐺡𐺀𐺁𐺀𐺄", kurmanji: "", arabic: "عائلة (Familie)", audio: "audio/familie.mp3" },
    { yezidi: "𐺤𐺦𐺊𐺄", kurmanji: "", arabic: "وقت (Zeit)", audio: "audio/zeit.mp3" },
    { yezidi: "𐺍𐺣𐺐", kurmanji: "", arabic: "يوم (Tag)", audio: "audio/tag.mp3" },
    { yezidi: "𐺩𐺛𐺀𐺍", kurmanji: "", arabic: "ليلة (Nacht)", audio: "audio/nacht.mp3" },
    { yezidi: "𐺒𐺨𐺍", kurmanji: "", arabic: "حليب (Milch)", audio: "audio/milch.mp3" },
    { yezidi: "𐺑𐺩𐺛", kurmanji: "", arabic: "تفاحة (Apfel)", audio: "audio/apfel.mp3" },
    { yezidi: "𐺒𐺣𐺣𐺒𐺄𐺌𐺢", kurmanji: "", arabic: "غسل (Waschen)", audio: "audio/Waschen.mp3" },
    { yezidi: "𐺃𐺀𐺜𐺌𐺐𐺝𐺌𐺍𐺌𐺢", kurmanji: "", arabic: "تنظيف (Reinigen)", audio: "audio/Reinigen.mp3" },
    { yezidi: "𐺀𐺛𐺨𐺄𐺌𐺢", kurmanji: "", arabic: "رمي (Werfen)", audio: "audio/Werfen.mp3" },
    { yezidi: "𐺟𐺦𐺧𐺩𐺒𐺄𐺌𐺢", kurmanji: "", arabic: "الوصول (Erreichen)", audio: "audio/Erreichen.mp3" },
    { yezidi: "𐺝𐺦𐺄𐺌𐺢", kurmanji: "", arabic: "سقوط (Fallen)", audio: "audio/Fallen.mp3" },
    { yezidi: "𐺧𐺌𐺠𐺝𐺌𐺒𐺨𐺢", kurmanji: "", arabic: "الصعود (Steigen)", audio: "audio/Steigen.mp3" },
    { yezidi: "𐺋𐺀𐺝𐺦𐺄𐺌𐺢", kurmanji: "", arabic: "الهبوط (Sinken)", audio: "audio/Sinken.mp3" },
    { yezidi: "𐺟𐺦𐺍𐺨𐺢", kurmanji: "", arabic: "البحث (Suchen)", audio: "audio/Suchen.mp3" },
    { yezidi: "𐺋𐺨𐺄𐺌𐺢", kurmanji: "", arabic: "العثور (Finden)", audio: "audio/Finden.mp3" },
    { yezidi: "𐺃𐺀𐺍𐺀𐺑𐺄𐺌𐺢", kurmanji: "", arabic: "حماية (Schützen)", audio: "audio/Schützen.mp3" },
    { yezidi: "𐺋𐺌𐺠", kurmanji: "", arabic: "قلب (Herz)", audio: "audio/Herz.mp3" },
    { yezidi: "𐺟𐺦𐺍𐺡", kurmanji: "", arabic: "حار (Heiß)", audio: "audio/Heiß.mp3" },
    { yezidi: "𐺩𐺒", kurmanji: "", arabic: "الم (Schmerz)", audio: "audio/Schmerz.mp3" },
    { yezidi: "𐺦𐺍𐺩", kurmanji: "", arabic: "نعم (Ja)", audio: "audio/Jaa.mp3" },
    { yezidi: "𐺦𐺏 𐺁𐺌𐺍𐺇𐺨 𐺡𐺦", kurmanji: "", arabic: "أنا جوعان (Ich habe Hunger)", audio: "audio/ana_joaan.mp3" },
    { yezidi: "𐺦𐺏 𐺄𐺨 𐺡𐺦", kurmanji: "", arabic: "أنا عطشان (Ich habe Durst)", audio: "audio/ana_atshan.mp3" },
    { yezidi: "𐺊𐺦𐺤𐺀 𐺡𐺌𐺢 𐺕𐺩", kurmanji: "", arabic: "نعسان (Ich bin schläfrig)", audio: "audio/naasan.mp3" },
    { yezidi: "𐺊𐺀𐺄𐺍", kurmanji: "", arabic: "وداعاً (Tschüss)", audio: "audio/tschuess.mp3" },
    { yezidi: "𐺟𐺣𐺍", kurmanji: "", arabic: "ذئب (der Wolf)", audio: "audio/der_Wolf.mp3" },
    { yezidi: "𐺎𐺣𐺛𐺨", kurmanji: "", arabic: "ثعلب (der Fuchs)", audio: "audio/der_Fuchs.mp3" },
    { yezidi: "𐺒𐺩𐺍", kurmanji: "", arabic: "أسد (der Löwe)", audio: "audio/der_Loewe.mp3" },
    { yezidi: "𐺂𐺌𐺠𐺌𐺢𐺟", kurmanji: "", arabic: "نمر (der Tiger)", audio: "audio/der_Tiger.mp3" },
    { yezidi: "𐺙𐺌𐺠", kurmanji: "", arabic: "فيل (der Elefant)", audio: "audio/der_Elefant.mp3" },
    { yezidi: "𐺧𐺌𐺍𐺈", kurmanji: "", arabic: "دب (der Bär)", audio: "audio/der_Baer.mp3" },
    { yezidi: "𐺈𐺌𐺛𐺩𐺞", kurmanji: "", arabic: "عصفور (der Spatz / der Vogel)", audio: "audio/der_Spatz.mp3" },
    { yezidi: "𐺐𐺣𐺣𐺐𐺨", kurmanji: "", arabic: "قنفذ (der Igel)", audio: "audio/der_Igel.mp3" },
    { yezidi: "𐺡𐺀𐺑𐺨", kurmanji: "", arabic: "سمكة (der Fisch)", audio: "audio/der_Fisch.mp3" },
    { yezidi: "𐺡𐺌𐺒𐺞", kurmanji: "", arabic: "فأر (die Maus)", audio: "audio/die_Maus.mp3" }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    // الصفحة الرئيسية ستبدأ تلقائياً من قسم المستويات الكلي
    goToLevels();
});

function playSound(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play().catch(err => console.log("الصوت غير متوفر بعد: ", audioSrc));
}

// دالة تفعيل الأقسام وإخفاء الأخرى بشكل آمن
function switchSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// العودة إلى قائمة المستويات الرئيسية
function goToLevels() {
    switchSection('levels-section');
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => item.classList.remove('active'));
    document.getElementById('nav-home').classList.add('active');
}

// بدء مستوى معين (عند النقر على الكرت)
function startLevel(levelName) {
    switchSection('letters-section');
    document.getElementById('current-level-title').innerText = `المستوى ${levelName} : تعلّم الحروف والألفبائية`;
    
    // تحديث تفعيل الأزرار السفلية بناءً على الاختيار
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        if(item.innerText === levelName) {
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
    lettersData.forEach(item => {
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
    renderWords();
}

function renderWords() {
    const grid = document.getElementById("words-grid");
    grid.innerHTML = "";
    wordsData.forEach(item => {
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

function goToQuiz() {
    switchSection('quiz-section');
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

    if (currentQuestionIndex >= wordsData.length) {
        questionText.innerHTML = "🎉 !Gut gemacht! Du hast den Test erfolgreich bestanden";
        wordDisplay.innerHTML = `النتيجة النهائيّة: ${score} من ${wordsData.length}`;
        return;
    }

    const currentWord = wordsData[currentQuestionIndex];
    questionText.innerHTML = "🤔 Was bedeutet dieses Wort؟ ما معنى هذه الكلمة؟";
    wordDisplay.innerHTML = currentWord.yezidi ? currentWord.yezidi : currentWord.kurmanji;

    playSound(currentWord.audio);

    let options = [currentWord.arabic];
    
    // سحب عينات عشوائية خاطئة
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
        resultDiv.innerHTML = "<span style='color: #2ecc71; background: rgba(46,204,113,0.1); padding: 8px 15px; border-radius: 5px; display: inline-block;'>✔️ إجابة صحيحة! Richtige Antwort</span>";
        score++;
    } else {
        resultDiv.innerHTML = `<span style='color: #e74c3c; background: rgba(231,76,60,0.1); padding: 8px 15px; border-radius: 5px; display: inline-block;'>❌ إجابة خاطئة. الصحيح هو: ${correct}</span>`;
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 2200);
}
