// --- Global State Variables ---
let currentLevel = 'plus2-2nd'; // New root level state
let currentBoard = 'chse';
let currentMaterial = 'papers';
let currentStream = 'science';

// --- Routing Functions ---
function toggleLevel(level) {
    currentLevel = level;
    updateDisplay();
}

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

// --- Main Display Logic ---
function updateDisplay() {
    // 1. Update Level Buttons
    ['plus2-1st', 'plus2-2nd', 'plus3'].forEach(lvl => {
        const btn = document.getElementById(`btn-level-${lvl}`);
        if(btn) {
            if(lvl === currentLevel) {
                btn.className = "flex-1 py-2 px-4 rounded-xl font-bold text-sm transition-all bg-emerald-500 text-darkBg shadow-[0_0_15px_rgba(16,185,129,0.4)]";
            } else {
                btn.className = "flex-1 py-2 px-4 rounded-xl font-bold text-sm transition-all text-gray-400 hover:text-white bg-transparent";
            }
        }
    });

    // 2. Hide all Level Containers, show the active one
    ['plus2-1st', 'plus2-2nd', 'plus3'].forEach(lvl => {
        const container = document.getElementById(`level-${lvl}`);
        if(container) {
            container.style.display = (lvl === currentLevel) ? 'block' : 'none';
        }
    });

    // 3. Update Board Buttons
    const btnChse = document.getElementById('btn-chse');
    const btnCbse = document.getElementById('btn-cbse');
    
    if(btnChse) {
        btnChse.className = currentBoard === 'chse' 
            ? "px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-accentBlue text-darkBg shadow-[0_0_15px_rgba(56,189,248,0.4)]" 
            : "px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-transparent text-gray-400 hover:text-white";
    }
        
    if(btnCbse) {
        btnCbse.className = currentBoard === 'cbse' 
            ? "px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-accentPurple text-darkBg shadow-[0_0_15px_rgba(192,132,252,0.4)]" 
            : "px-8 py-3 rounded-xl font-bold transition-all duration-300 bg-transparent text-gray-400 hover:text-white";
    }

    // 4. Update Stream Buttons
    ['science', 'arts', 'commerce'].forEach(s => {
        const btn = document.getElementById(`btn-stream-${s}`);
        if(btn) {
            if(s === currentStream) {
                btn.className = "bg-gray-800 text-white px-6 py-2 rounded-full font-bold border border-gray-600 shadow-lg";
            } else {
                btn.className = "bg-darkBg border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 px-6 py-2 rounded-full font-semibold transition-all";
            }
        }
    });

    // 5. Update Material Buttons
    const btnPapers = document.getElementById('btn-mat-papers');
    const btnBooks = document.getElementById('btn-mat-books');
    const activeColor = currentBoard === 'chse' ? 'border-accentBlue text-accentBlue' : 'border-accentPurple text-accentPurple';

    if(btnPapers) {
        btnPapers.className = currentMaterial === 'papers'
            ? `bg-cardBg border ${activeColor} px-6 py-2 rounded-lg font-semibold shadow-sm transition-all`
            : "bg-transparent border border-gray-700 text-gray-400 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all";
    }

    if(btnBooks) {
        btnBooks.className = currentMaterial === 'books'
            ? `bg-cardBg border ${activeColor} px-6 py-2 rounded-lg font-semibold shadow-sm transition-all`
            : "bg-transparent border border-gray-700 text-gray-400 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all";
    }

    // 6. Handle the Internal Display (only applies if we are in +2 2nd year currently)
    if (currentLevel === 'plus2-2nd') {
        const chsePapers = document.getElementById('content-chse-papers');
        const chseBooks = document.getElementById('content-chse-books');
        const cbsePapers = document.getElementById('content-cbse-papers');
        const cbseBooks = document.getElementById('content-cbse-books');
        
        if(chsePapers) chsePapers.style.display = 'none';
        if(chseBooks) chseBooks.style.display = 'none';
        if(cbsePapers) cbsePapers.style.display = 'none';
        if(cbseBooks) cbseBooks.style.display = 'none';

        const activeContainerId = `content-${currentBoard}-${currentMaterial}`;
        const activeContainer = document.getElementById(activeContainerId);
        if(activeContainer) activeContainer.style.display = 'block';

        document.querySelectorAll('.stream-section').forEach(el => el.style.display = 'none');
        document.querySelectorAll(`.stream-${currentStream}`).forEach(el => el.style.display = 'block');
    }
}

// --- Dynamic File Year Routing ---
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

// --- Live Age Timer Logic ---
function updateAgeTimer() {
    const now = new Date();
    const birthDate = new Date(2009, 3, 12); // April 12, 2009
    
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

updateAgeTimer();
setInterval(updateAgeTimer, 1000);

// --- Video Modal Logic ---
function openVideoModal(board, subject) {
    const modal = document.getElementById('videoModal');
    const topicListContainer = document.getElementById('modalTopicList');
    const title = document.getElementById('modalTitle');
    
    const topics = syllabusDB[currentLevel]?.[board]?.[subject] || [];
    
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
    
    // Highly specific Search Query generator based on Subject
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

// --- Advanced Live Active Learner Simulation ---
function simulateActiveLearners() {
    const learnersEl = document.getElementById('active-learners');
    if (!learnersEl) return;
    
    // 1. Determine base traffic based on the current hour of the day
    const currentHour = new Date().getHours();
    let baseTraffic = 150; // Default baseline for mid-day
    
    // Adjust traffic based on typical student study hours
    if (currentHour >= 18 && currentHour <= 22) {
        baseTraffic = 340; // Peak study hours (6 PM - 10 PM)
    } else if (currentHour >= 8 && currentHour <= 12) {
        baseTraffic = 210; // Morning school/college hours
    } else if (currentHour >= 0 && currentHour <= 5) {
        baseTraffic = 45;  // Late night/early morning hours
    }
    
    // Set an initial realistic starting count
    let currentLearners = baseTraffic + Math.floor(Math.random() * 20) - 10;
    learnersEl.innerText = currentLearners;

    // 2. Continuous real-time pulse updates (simulating users entering/leaving)
    setInterval(() => {
        // Randomizer to decide if users join, leave, or stay the same this second
        const changeProbability = Math.random();
        let fluctuation = 0;
        
        if (changeProbability > 0.6) {
            fluctuation = Math.floor(Math.random() * 3) + 1; // 1 to 3 users joined
        } else if (changeProbability > 0.2) {
            fluctuation = -(Math.floor(Math.random() * 2) + 1); // 1 to 2 users left
        }
        
        currentLearners += fluctuation;
        
        // Keep the numbers realistic so it doesn't drop too low or go incredibly high
        if (currentLearners < baseTraffic - 30) currentLearners = baseTraffic - 15;
        if (currentLearners > baseTraffic + 30) currentLearners = baseTraffic + 15;
        
        // Update the UI dynamically
        learnersEl.innerText = currentLearners;
        
        // Add a tiny visual "pop" effect when the number changes
        learnersEl.style.transform = 'scale(1.1)';
        setTimeout(() => {
            learnersEl.style.transform = 'scale(1)';
        }, 150);

    }, 3000); // Updates smoothly every 3 seconds
}

// Initialize the function when the script loads
simulateActiveLearners();
