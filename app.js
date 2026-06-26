// --- Global State Variables ---
let currentBoard = 'chse';
let currentMaterial = 'papers';
let currentStream = 'science';
let currentLevel = '12th';
let currentSubLevel = '2nd-year';

// --- Routing Functions ---
function toggleBoard(board) {
    currentBoard = board;
    updateDisplay();
}

function toggleStream(stream) {
    currentStream = stream;
    updateDisplay();
}

function toggleMaterial(material) {
    currentMaterial = material;
    updateDisplay();
}

function toggleLevel(level) {
    currentLevel = level;
    updateDisplay();
}

function toggleSubLevel(subLevel) {
    currentSubLevel = subLevel;
    updateDisplay();
}

// --- Main Display Logic ---
function updateDisplay() {
    // 1. Update Board Buttons
    const btnChse = document.getElementById('btn-chse');
    const btnCbse = document.getElementById('btn-cbse');
    
    if (btnChse) {
        btnChse.className = currentBoard === 'chse' 
            ? "px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-accentBlue text-darkBg shadow-[0_0_15px_rgba(56,189,248,0.4)]" 
            : "px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-transparent text-gray-400 hover:text-white";
    }
        
    if (btnCbse) {
        btnCbse.className = currentBoard === 'cbse' 
            ? "px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-accentPurple text-darkBg shadow-[0_0_15px_rgba(192,132,252,0.4)]" 
            : "px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-transparent text-gray-400 hover:text-white";
    }

    // 2. Update Stream Buttons
    ['science', 'arts', 'commerce'].forEach(s => {
        const btn = document.getElementById(`btn-stream-${s}`);
        if (btn) {
            btn.className = s === currentStream 
                ? "bg-gray-800 text-white px-6 py-2 rounded-full font-bold border border-gray-600 shadow-lg"
                : "bg-darkBg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 px-6 py-2 rounded-full font-semibold transition-all";
        }
    });

    // 3. Update Material Buttons
    const btnPapers = document.getElementById('btn-mat-papers');
    const btnBooks = document.getElementById('btn-mat-books');
    const btnLectures = document.getElementById('btn-mat-lectures');
    
    const activeColor = currentBoard === 'chse' ? 'border-accentBlue text-accentBlue' : 'border-accentPurple text-accentPurple';

    if (btnPapers) {
        btnPapers.className = currentMaterial === 'papers'
            ? `bg-cardBg border ${activeColor} px-6 py-2 rounded-lg font-semibold shadow-sm transition-all`
            : "bg-transparent border border-gray-700 text-gray-400 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all";
    }
    if (btnBooks) {
        btnBooks.className = currentMaterial === 'books'
            ? `bg-cardBg border ${activeColor} px-6 py-2 rounded-lg font-semibold shadow-sm transition-all`
            : "bg-transparent border border-gray-700 text-gray-400 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all";
    }
    if (btnLectures) {
        btnLectures.className = currentMaterial === 'lectures'
            ? `bg-cardBg border ${activeColor} px-6 py-2 rounded-lg font-semibold shadow-sm transition-all`
            : "bg-transparent border border-gray-700 text-gray-400 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all";
    }

    // 4. Update Level Button Styling
    ['10th', '12th', 'plus3'].forEach(l => {
        const btn = document.getElementById(`btn-level-${l}`);
        if (btn) {
            btn.className = l === currentLevel 
                ? "px-5 py-2.5 rounded-xl font-bold transition-all duration-300 bg-accentBlue text-darkBg shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                : "px-5 py-2.5 rounded-xl font-bold transition-all duration-300 bg-transparent text-gray-400 hover:text-white flex items-center border border-transparent hover:border-gray-700";
        }
    });

    // 5. Update Sub-Level Button Styling
    ['1st-year', '2nd-year'].forEach(sl => {
        const btn = document.getElementById(`btn-sub-${sl}`);
        if (btn) {
            btn.className = sl === currentSubLevel 
                ? "bg-gray-800 text-white px-6 py-2 rounded-full font-bold border border-gray-500 shadow-lg"
                : "bg-darkBg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 px-6 py-2 rounded-full font-semibold transition-all flex items-center shadow-md";
        }
    });

    // 6. Sub-Level Visibility (Wrapper for 1st/2nd year buttons)
    const wrapper12th = document.getElementById('wrapper-12th-years');
    if (wrapper12th) {
        wrapper12th.style.display = currentLevel === '12th' ? 'flex' : 'none';
    }

    // 7. The "Coming Soon" Firewall
    const comingSoonMsg = document.getElementById('coming-soon-message');
    const isActiveState = (currentLevel === '12th' && currentSubLevel === '2nd-year');

    // Hide all major sections safely first to clear the board
    ['chse', 'cbse'].forEach(b => {
        ['papers', 'books', 'lectures'].forEach(m => {
            const el = document.getElementById(`content-${b}-${m}`);
            if (el) el.style.display = 'none';
        });
    });

    if (isActiveState) {
        // Firewall OPEN: Hide 'coming soon', show active materials
        if (comingSoonMsg) comingSoonMsg.style.display = 'none';

        const activeContainer = document.getElementById(`content-${currentBoard}-${currentMaterial}`);
        if (activeContainer) {
            activeContainer.style.display = 'block';
        }

        // Hide/Show Stream Sub-sections
        document.querySelectorAll('.stream-section').forEach(el => el.style.display = 'none');
        document.querySelectorAll(`.stream-${currentStream}`).forEach(el => el.style.display = 'block');
    } else {
        // Firewall CLOSED: Only show the 'coming soon' message
        if (comingSoonMsg) comingSoonMsg.style.display = 'block';
    }
}

function changeYear(selectedYear) {
    const yearDisplays = document.querySelectorAll('.year-display');
    yearDisplays.forEach(display => {
        display.innerHTML = `📅 Year: ${selectedYear} Final`;
    });

    const pdfLinks = document.querySelectorAll('.pdf-link');
    pdfLinks.forEach(link => {
        const subject = link.getAttribute('data-subject');
        const set = link.getAttribute('data-set'); 
        const type = link.getAttribute('data-type'); 
        
        if (type === 'qpaper') {
            link.href = `${subject}-${selectedYear}-set-${set}.pdf`;
            link.download = `${subject}-${selectedYear}-set-${set}.pdf`;
        } else if (type === 'answer') {
            link.href = `${subject}-${selectedYear}-set-${set}-ans.pdf`;
            link.download = `${subject}-${selectedYear}-set-${set}-ans.pdf`;
        }
    });
}

function updateAgeTimer() {
    const now = new Date();
    const birthDate = new Date(2009, 3, 12); 
    
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    
    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    
    const diff = now - birthDate;
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const countdownEl = document.getElementById('bday-countdown');
    if (countdownEl) {
        countdownEl.innerText = `⏳ Age: ${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}
setInterval(updateAgeTimer, 1000);

function openVideoModal(board, subject) {
    const modal = document.getElementById('videoModal');
    const topicListContainer = document.getElementById('modalTopicList');
    const title = document.getElementById('modalTitle');
    
    // Safety Net: This checks BOTH possible formats of your database
    let topics = [];
    if (syllabusDB['plus2-2nd']) {
        topics = syllabusDB['plus2-2nd'][board]?.[subject] || [];
    } else {
        topics = syllabusDB[board]?.[subject] || [];
    }
    
    topicListContainer.innerHTML = '';
    if(topics.length > 0) {
        topics.forEach(topic => {
            const btn = document.createElement('button');
            btn.className = "text-left bg-darkBg border border-gray-700 hover:border-red-500 p-4 rounded-xl text-gray-300 hover:text-white transition-all shadow-sm flex justify-between items-center group";
            btn.innerHTML = `<span class="font-medium text-sm pr-2">${topic.name}</span> <span class="text-xs bg-red-600 text-white px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Play ▶</span>`;
            
            btn.onclick = () => playTopicVideo(topic.name, topic.videoId, board, subject);
            topicListContainer.appendChild(btn);
        });
    } else {
         topicListContainer.innerHTML = `<p class="text-gray-400 col-span-2 text-center py-10 font-medium">Topic list arriving soon for ${subject.toUpperCase()}!</p>`;
    }

    const formattedSubject = subject.replace('-', ' ').toUpperCase();
    title.innerHTML = `<svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg> ${formattedSubject} Chapters`;
    
    showTopicList();
    modal.classList.add('active'); 
}

function playTopicVideo(topicName, videoId, board, subject) {
    document.getElementById('modalTopicList').classList.add('hidden');
    document.getElementById('modalPlayerView').classList.remove('hidden');
    document.getElementById('modalPlayerView').classList.add('flex');
    document.getElementById('backToTopicsBtn').classList.remove('hidden');
    
    document.getElementById('modalTitle').innerText = topicName;
    
    const player = document.getElementById('youtubePlayer');
    player.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    
    let teacher = "Class 12";
    if(subject === 'physics' || subject === 'chemistry') teacher = "Ashu Sir Science and Fun";
    else if(subject === 'mathematics') teacher = "Ushank Sir Science and Fun";
    else if(subject === 'biology') teacher = "Class 12 Biology One Shot";
    else if(subject === 'english') teacher = "Class 12 English One Shot";
    else if(subject === 'compsci') teacher = "Class 12 Computer Science Python One Shot";
    else if(subject === 'mil-odia') teacher = "CHSE Odisha MIL Odia";
    else if(subject === 'statistics') teacher = "Class 12 Statistics One Shot";
    else if(subject === 'electronics') teacher = "Class 12 Electronics One Shot";

    const searchBtn = document.getElementById('searchYoutubeBtn');
    const exactSearchQuery = encodeURIComponent(`${board.toUpperCase()} ${topicName} ${teacher}`);
    searchBtn.href = `https://www.youtube.com/results?search_query=${exactSearchQuery}`;
}

function showTopicList() {
     document.getElementById('modalTopicList').classList.remove('hidden');
     document.getElementById('modalPlayerView').classList.add('hidden');
     document.getElementById('modalPlayerView').classList.remove('flex');
     document.getElementById('backToTopicsBtn').classList.add('hidden');
     
     document.getElementById('youtubePlayer').src = ''; 
}

function closeVideoModal() {
    document.getElementById('videoModal').classList.remove('active');
    setTimeout(() => {
        document.getElementById('youtubePlayer').src = "";
        showTopicList(); 
    }, 300);
}

function simulateActiveLearners() {
    const learnersEl = document.getElementById('active-learners');
    if (!learnersEl) return;
    
    let currentLearners = Math.floor(Math.random() * (350 - 120 + 1)) + 120;
    learnersEl.innerText = currentLearners;

    setInterval(() => {
        const fluctuation = Math.floor(Math.random() * 7) - 2;
        currentLearners += fluctuation;
        if (currentLearners < 50) currentLearners = 50;
        
        learnersEl.innerText = currentLearners;
    }, 5000); 
}

// CRITICAL INITIALIZATION TO FIX BLANK SCREENS:
simulateActiveLearners();
updateAgeTimer();
updateDisplay();
