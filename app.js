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
        // FIX: Remove the shimmer class so the text actually becomes visible
        countdownEl.classList.remove('skeleton-shimmer');
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
    
    // --- Safety Shield for Empty Video IDs ---
    if (videoId && videoId.trim() !== '') {
        // If we have an ID, display and play it normally
        player.style.display = 'block';
        player.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    } else {
        // If the ID is empty, clear the source and fully hide the player to prevent empty gaps/errors
        player.src = "";
        player.style.display = 'none'; 
    }
    
    // --- Search Fallback Engine (Strict Educator Routing) ---
    let teacher = "Class 12 One Shot";

    if (subject === 'physics' || subject === 'chemistry') {
        teacher = "Ashu Sir Science and Fun One Shot";
    } 
    else if (subject === 'botany' || subject === 'zoology' || subject === 'biology') {
        teacher = "Vipin Sir PW One Shot";
    } 
    else if (subject === 'mil-odia') {
        teacher = "HK Sir CHSE Odisha One Shot"; // Assigned to HK Sir
    } 
    else if (subject.includes('english')) {
        teacher = "Nihar Ranjan Nanda CHSE One Shot"; // Assigned to Nihar Ranjan Nanda
    } 
    else if (subject === 'compsci') {
        teacher = "MatSci Odia CHSE Hub One Shot"; // Assigned to MatSci Odia
    }
    else if (subject === 'it') {
        teacher = "MatSci Science IT One Shot"; // Assigned to MatSci Science
    }
    else if (subject === 'mathematics') {
        teacher = "Ushank Sir Science and Fun One Shot";
    }
    else if (subject === 'electronics') {
        teacher = "Class 12 Electronics One Shot";
    }

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
    // 1. Remove the active class to trigger the CSS fade out
    document.getElementById('videoModal').classList.remove('active');
    
    // 2. Wait for the CSS animation to finish (400ms) before clearing data
    setTimeout(() => {
        const player = document.getElementById('youtubePlayer');
        // Instantly kill the video source to stop audio
        player.src = ""; 
        player.style.display = 'none';
        
        // Reset the view back to the topic list for next time
        showTopicList(); 
    }, 400); 
}
// --- Fullscreen Video Logic ---
// --- Fullscreen Video Logic (Refined) ---
function toggleFullScreen() {
    // Target ONLY the video container, not the whole modal
    const videoContainer = document.querySelector('#modalPlayerView .relative');
    
    if (!document.fullscreenElement) {
        // Enter Fullscreen on the specific video div
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
        } else if (videoContainer.webkitRequestFullscreen) { /* Safari */
            videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) { /* IE11 */
            videoContainer.msRequestFullscreen();
        }
        
        // Attempt to lock screen orientation to Landscape on mobile
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape').catch(err => {
                console.log("Orientation lock not supported:", err);
            });
        }
        
        // Add a class so we can style the internal iframe when in fullscreen
        videoContainer.classList.add('is-fullscreen');
        
    } else {
        // Exit Fullscreen
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        
        // Unlock screen orientation
        if (screen.orientation && screen.orientation.unlock) {
            screen.orientation.unlock();
        }
    }
}

// Ensure the container resets its styling when the user exits fullscreen
document.addEventListener('fullscreenchange', () => {
    const videoContainer = document.querySelector('#modalPlayerView .relative');
    if (!document.fullscreenElement && videoContainer) {
        videoContainer.classList.remove('is-fullscreen');
    }
});

// Listen for the user hitting 'Escape' or swiping back to exit fullscreen safely
document.addEventListener('fullscreenchange', () => {
    const modalContent = document.querySelector('.modal-content');
    if (!document.fullscreenElement) {
        // Reset classes when exiting fullscreen
        modalContent.classList.remove('w-full', 'h-full', 'max-w-none', 'max-h-none', 'rounded-none');
        document.querySelector('.relative.w-full.h-full').classList.replace('h-full', 'pt-[56.25%]');
    }
});
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

// --- Advanced Error Handling & Toast System ---

function showToast(message, type = 'error') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    // Define colors based on type
    const colors = {
        error: 'bg-red-500/10 border-red-500 text-red-500',
        info: 'bg-accentBlue/10 border-accentBlue text-accentBlue',
        success: 'bg-accentGreen/10 border-accentGreen text-accentGreen'
    };

    const icon = type === 'error' ? '⚠️' : type === 'success' ? '✅' : 'ℹ️';

    // Create Toast Element
    const toast = document.createElement('div');
    toast.className = `toast flex items-center justify-between min-w-[300px] p-4 rounded-xl border backdrop-blur-md bg-darkBg/90 shadow-2xl pointer-events-auto overflow-hidden relative ${colors[type]}`;
    
    toast.innerHTML = `
        <div class="flex items-center gap-3 relative z-10">
            <span class="text-xl">${icon}</span>
            <span class="font-semibold text-sm text-gray-200">${message}</span>
        </div>
        <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-white transition-colors relative z-10">✕</button>
        <div class="absolute bottom-0 left-0 h-1 ${colors[type].split(' ')[1].replace('border-', 'bg-')} toast-progress"></div>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

// Intercept clicks on links that are not ready
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', function(e) {
        // Find if the clicked element is an anchor tag
        let target = e.target.closest('a');
        if (!target) return;

        const href = target.getAttribute('href');

        // Check 1: Is it a placeholder link?
        if (href === '#') {
            e.preventDefault(); // Stop the page from jumping
            showToast("This material is currently being organized. Check back soon!", "info");
            return;
        }

        // Check 2: Is it a PDF link that we know might be missing?
        // (You can remove this check later when ALL your PDFs are uploaded)
        if (target.classList.contains('pdf-link') && !href.startsWith('http')) {
            // Optional: You can implement a fetch check here in the future to see if the file actually exists on the server.
            // For now, if you know certain links are broken, you can change their href to "#" to trigger Check 1.
        }
    });
});

// --- Part 2: Smart Header Scroll Detector ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    
    // If user scrolls down more than 20 pixels, trigger the shrink effect
    if (window.scrollY > 20) {
        nav.classList.add('nav-scrolled');
    } else {
        // If they scroll back to the absolute top, expand it again
        nav.classList.remove('nav-scrolled');
    }
});

// --- Part 4: Cinematic Entrance & Intersection Observer ---

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.subject-card');
    cards.forEach((card, index) => {
        card.classList.add('fade-in-up');
        // Create a staggered delay based on their order
        const delay = (index % 5 + 1) * 100; 
        card.classList.add(`delay-${delay}`);
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger the animation
                entry.target.classList.add('visible');
                
                // Stop observing this element
                observer.unobserve(entry.target);

                // FIX: Remove the animation classes entirely after they finish (800ms transition + delay)
                // This prevents the 'transform' conflict and restores the 3D hover effect!
                const delayMs = parseInt(Array.from(entry.target.classList).find(c => c.startsWith('delay-'))?.split('-')[1] || 0);
                
                setTimeout(() => {
                    entry.target.classList.remove('fade-in-up', 'visible', `delay-${delayMs}`);
                }, 800 + delayMs + 50); // 800ms duration + delay + 50ms buffer
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => observer.observe(el));
});

// --- Custom Fullscreen Overlay Controls Logic ---

let overlayTimeout;

// 1. Function to show the overlay when the user taps the screen
function showCustomControls() {
    const controls = document.getElementById('custom-video-controls');
    const videoContainer = document.querySelector('#modalPlayerView .relative');
    
    // Only show controls if we are actually in fullscreen mode
    if (document.fullscreenElement && controls) {
        controls.classList.remove('hidden', 'opacity-0');
        controls.classList.add('opacity-100');
        
        // Clear any existing timeout
        clearTimeout(overlayTimeout);
        
        // Auto-hide the controls again after 3 seconds of no interaction
        overlayTimeout = setTimeout(() => {
            controls.classList.remove('opacity-100');
            controls.classList.add('opacity-0');
            // Wait for fade out animation before fully hiding
            setTimeout(() => controls.classList.add('hidden'), 300);
        }, 3000);
    }
}

// 2. Listen for clicks on the video container to trigger the menu
document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('#modalPlayerView .relative');
    if(videoContainer) {
        videoContainer.addEventListener('click', showCustomControls);
        videoContainer.addEventListener('mousemove', showCustomControls); // For desktop users
    }
});

// 3. Custom Exit Button Logic
function exitFullScreenAndClose() {
    // Exit Fullscreen
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
    
    // Unlock screen orientation
    if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
    }
    
    // Immediately hide the custom controls so they don't look weird when returning to normal view
    const controls = document.getElementById('custom-video-controls');
    if(controls) {
        controls.classList.remove('opacity-100');
        controls.classList.add('opacity-0', 'hidden');
    }
}

// 4. Ensure controls hide if the user exits fullscreen using the 'Esc' key
document.addEventListener('fullscreenchange', () => {
    const controls = document.getElementById('custom-video-controls');
    if (!document.fullscreenElement && controls) {
        controls.classList.remove('opacity-100');
        controls.classList.add('opacity-0', 'hidden');
    }
});
