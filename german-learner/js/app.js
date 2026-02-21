// --- Global State ---
let currentView = 'dashboard';
let nouns = [];

function initApp() {
    console.log("Initializing App with data size:", vocabularyData.length);

    // Process Data
    nouns = vocabularyData.filter(item => ['der', 'die', 'das'].includes(item.article));

    // Update Dashboard Stats
    document.getElementById('total-words').textContent = vocabularyData.length;
    document.getElementById('total-nouns').textContent = nouns.length;

    // Wire Navigation
    const navLinks = document.querySelectorAll('.nav-links li');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetId = link.getAttribute('data-tab');
            switchTab(targetId);

            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Initialize Submodules
    initFlashcards();
    initVocabList();
}

function switchTab(viewId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
        view.classList.remove('active-view');
    });

    // Show target view
    const target = document.getElementById(viewId);
    target.classList.remove('hidden');
    target.classList.add('active-view');
    currentView = viewId;

    // Trigger module specific renders if necessary
    if (viewId === 'article-game' && !gameActive) {
        // Reset game UI
        document.getElementById('game-target-word').textContent = "Ready?";
        document.getElementById('start-game-btn').style.display = 'inline-block';
        document.querySelector('.article-buttons').style.display = 'none';
        document.getElementById('game-target-english').textContent = "";
    }
}

// --- Module: Article Game ---
let gameActive = false;
let score = 0;
let timeLeft = 60;
let timer;
let currentNoun = null;

document.getElementById('start-game-btn').addEventListener('click', startGame);

function startGame() {
    gameActive = true;
    score = 0;
    timeLeft = 60;
    updateGameHud();

    document.getElementById('start-game-btn').style.display = 'none';
    document.querySelector('.article-buttons').style.display = 'flex';

    timer = setInterval(() => {
        timeLeft--;
        updateGameHud();
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    nextWord();
}

function nextWord() {
    currentNoun = nouns[Math.floor(Math.random() * nouns.length)];
    document.getElementById('game-target-word').textContent = currentNoun.german;
    document.getElementById('game-target-english').textContent = currentNoun.english || "(No translation provided)";
}

function checkArticle(selected) {
    if (!gameActive) return;

    const wordCard = document.querySelector('.word-card');

    if (selected === currentNoun.article) {
        score += 10;
        // visual feedback
        wordCard.style.boxShadow = `0 0 30px var(--color-${selected})`;
    } else {
        score = Math.max(0, score - 5);
        wordCard.style.boxShadow = `0 0 30px var(--color-die)`; // red pulse for error
    }

    setTimeout(() => {
        wordCard.style.boxShadow = 'var(--glass-shadow)';
    }, 300);

    updateGameHud();
    nextWord();
}

function updateGameHud() {
    document.getElementById('game-score').textContent = score;
    document.getElementById('game-timer').textContent = `${timeLeft}s`;
}

function endGame() {
    clearInterval(timer);
    gameActive = false;
    document.getElementById('game-target-word').textContent = `Time's Up!`;
    document.getElementById('game-target-english').textContent = `Final Score: ${score}`;
    document.getElementById('start-game-btn').style.display = 'inline-block';
    document.getElementById('start-game-btn').textContent = "Play Again";
    document.querySelector('.article-buttons').style.display = 'none';
}

// --- Module: Flashcards ---
let currentFlashcardIndex = 0;
let flashcardList = [];

function initFlashcards() {
    flashcardList = [...vocabularyData];
    // Populate categories
    const categories = [...new Set(flashcardList.map(item => item.category))];
    const select = document.getElementById('flashcard-category');
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
        const cat = e.target.value;
        if (cat === 'all') {
            flashcardList = [...vocabularyData];
        } else {
            flashcardList = vocabularyData.filter(i => i.category === cat);
        }
        currentFlashcardIndex = 0;
        renderFlashcard();
    });

    renderFlashcard();

    // Card Flip Event
    document.getElementById('flashcard').addEventListener('click', function () {
        this.classList.toggle('is-flipped');
    });

    // Navigation
    document.getElementById('fc-next').addEventListener('click', () => {
        const card = document.getElementById('flashcard');
        card.classList.remove('is-flipped');
        setTimeout(() => {
            currentFlashcardIndex = (currentFlashcardIndex + 1) % flashcardList.length;
            renderFlashcard();
        }, 150); // wait for flip halfway to swap content
    });

    document.getElementById('fc-prev').addEventListener('click', () => {
        const card = document.getElementById('flashcard');
        card.classList.remove('is-flipped');
        setTimeout(() => {
            currentFlashcardIndex = (currentFlashcardIndex - 1 + flashcardList.length) % flashcardList.length;
            renderFlashcard();
        }, 150);
    });
}

function renderFlashcard() {
    const data = flashcardList[currentFlashcardIndex];
    if (!data) return;

    // Front: Use english if available, else german
    const frontText = data.english ? data.english : `*${data.german}*`;
    document.getElementById('fc-front-text').textContent = frontText;

    // Back: German + Article
    document.getElementById('fc-back-text').textContent = data.german;
    const badge = document.getElementById('fc-article');
    if (data.article) {
        badge.textContent = data.article.charAt(0).toUpperCase() + data.article.slice(1);
        badge.className = `article-badge ${data.article}`;
    } else {
        badge.textContent = 'Verb/Other';
        badge.className = `article-badge none`;
    }

    const plural = document.getElementById('fc-plural');
    if (data.plural) {
        plural.textContent = `Plural: ${data.plural}`;
        plural.style.display = 'block';
    } else {
        plural.style.display = 'none';
    }
}

// --- Module: Vocabulary List ---
let vocabList = [];

function initVocabList() {
    vocabList = [...vocabularyData];

    // Populate categories in filter
    const categories = [...new Set(vocabList.map(item => item.category))];
    const select = document.getElementById('vocab-category-filter');
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        select.appendChild(option);
    });

    // Event Listeners for search and filter
    document.getElementById('vocab-search').addEventListener('input', renderVocabList);
    document.getElementById('vocab-category-filter').addEventListener('change', renderVocabList);

    // Initial Render
    renderVocabList();
}

function renderVocabList() {
    const tbody = document.getElementById('vocab-tbody');
    const searchTerm = document.getElementById('vocab-search').value.toLowerCase();
    const categoryFilter = document.getElementById('vocab-category-filter').value;

    tbody.innerHTML = '';

    const filteredData = vocabList.filter(item => {
        const matchesSearch = item.german.toLowerCase().includes(searchTerm) ||
            (item.english && item.english.toLowerCase().includes(searchTerm));
        const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    filteredData.forEach(item => {
        const tr = document.createElement('tr');

        // Article Badge
        const tdArticle = document.createElement('td');
        const badge = document.createElement('span');
        if (item.article) {
            badge.className = `vocab-article-badge ${item.article}`;
            badge.textContent = item.article;
        } else {
            badge.className = `vocab-article-badge none`;
            badge.textContent = '-';
        }
        tdArticle.appendChild(badge);

        // German Word
        const tdGerman = document.createElement('td');
        tdGerman.textContent = item.german;
        tdGerman.style.fontWeight = '600';

        // Plural / Info
        const tdPlural = document.createElement('td');
        tdPlural.textContent = item.plural || '-';
        tdPlural.style.color = 'var(--text-secondary)';

        // English
        const tdEnglish = document.createElement('td');
        tdEnglish.textContent = item.english || '-';

        tr.appendChild(tdArticle);
        tr.appendChild(tdGerman);
        tr.appendChild(tdPlural);
        tr.appendChild(tdEnglish);

        tbody.appendChild(tr);
    });
}

// Boot
window.onload = initApp;
