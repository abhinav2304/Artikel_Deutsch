function parseCategoryInfo(catString) {
    if (!catString) return { main: 'Unknown', sub: null };
    if (catString.includes(' - ')) {
        const parts = catString.split(' - ');
        return { main: parts[0], sub: parts[1] };
    }
    return { main: catString, sub: null };
}

// --- Global State ---
let currentView = 'dashboard';
let nouns = [];

function initApp() {
    console.log("Initializing App with data size:", vocabularyData.length);

    // Group and sort vocabularyData by article while preserving the existing sequential category order
    const categorizedDict = {};
    const categoryOrder = [];
    vocabularyData.forEach(item => {
        if (!categorizedDict[item.category]) {
            categorizedDict[item.category] = [];
            categoryOrder.push(item.category);
        }
        categorizedDict[item.category].push(item);
    });

    const articleOrder = { 'der': 1, 'die': 2, 'das': 3 };
    vocabularyData.length = 0; // clear existing array inline to preserve bindings
    categoryOrder.forEach(cat => {
        const items = categorizedDict[cat];
        items.sort((a, b) => {
            const aVal = articleOrder[a.article] || 4; // 'der': 1, 'die': 2, 'das': 3, verbs/phrases: 4
            const bVal = articleOrder[b.article] || 4;
            if (aVal !== bVal) return aVal - bVal;
            return a.german.localeCompare(b.german);
        });
        vocabularyData.push(...items);
    });

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
    const allParsed = flashcardList.map(item => parseCategoryInfo(item.category));
    const mainCategories = [...new Set(allParsed.map(p => p.main))];
    const catSelect = document.getElementById('flashcard-category');
    const subSelect = document.getElementById('flashcard-subcategory');

    mainCategories.forEach(main => {
        const option = document.createElement('option');
        option.value = main;
        option.textContent = main;
        catSelect.appendChild(option);
    });

    catSelect.addEventListener('change', (e) => {
        const selectedMain = e.target.value;
        if (selectedMain === 'all') {
            subSelect.style.display = 'none';
            flashcardList = [...vocabularyData];
        } else {
            // Find subcategories for this main category
            const relevantParsed = allParsed.filter(p => p.main === selectedMain && p.sub);
            const subCategories = [...new Set(relevantParsed.map(p => p.sub))];

            if (subCategories.length > 0) {
                subSelect.style.display = 'inline-block';
                subSelect.innerHTML = '<option value="all">All Subcategories</option>';
                subCategories.forEach(sub => {
                    const option = document.createElement('option');
                    option.value = sub;
                    option.textContent = sub;
                    subSelect.appendChild(option);
                });
            } else {
                subSelect.style.display = 'none';
            }

            // Filter flashcardList by main category initially
            flashcardList = vocabularyData.filter(i => parseCategoryInfo(i.category).main === selectedMain);
        }
        subSelect.value = 'all'; // reset subcategory
        currentFlashcardIndex = 0;
        renderFlashcard();
    });

    subSelect.addEventListener('change', (e) => {
        const selectedMain = catSelect.value;
        const selectedSub = e.target.value;

        if (selectedSub === 'all') {
            flashcardList = vocabularyData.filter(i => parseCategoryInfo(i.category).main === selectedMain);
        } else {
            flashcardList = vocabularyData.filter(i => {
                const parsed = parseCategoryInfo(i.category);
                return parsed.main === selectedMain && parsed.sub === selectedSub;
            });
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
    const allParsed = vocabList.map(item => parseCategoryInfo(item.category));
    const mainCategories = [...new Set(allParsed.map(p => p.main))];
    const catSelect = document.getElementById('vocab-category-filter');
    const subSelect = document.getElementById('vocab-subcategory-filter');

    mainCategories.forEach(main => {
        const option = document.createElement('option');
        option.value = main;
        option.textContent = main;
        catSelect.appendChild(option);
    });

    catSelect.addEventListener('change', (e) => {
        const selectedMain = e.target.value;
        if (selectedMain === 'all') {
            subSelect.style.display = 'none';
        } else {
            const relevantParsed = allParsed.filter(p => p.main === selectedMain && p.sub);
            const subCategories = [...new Set(relevantParsed.map(p => p.sub))];

            if (subCategories.length > 0) {
                subSelect.style.display = 'inline-block';
                subSelect.innerHTML = '<option value="all">All Subcategories</option>';
                subCategories.forEach(sub => {
                    const option = document.createElement('option');
                    option.value = sub;
                    option.textContent = sub;
                    subSelect.appendChild(option);
                });
            } else {
                subSelect.style.display = 'none';
            }
        }
        subSelect.value = 'all';
        renderVocabList();
    });

    subSelect.addEventListener('change', renderVocabList);
    document.getElementById('vocab-search').addEventListener('input', renderVocabList);

    // Initial Render
    renderVocabList();
}

function renderVocabList() {
    const tbody = document.getElementById('vocab-tbody');
    const searchTerm = document.getElementById('vocab-search').value.toLowerCase();
    const categoryFilter = document.getElementById('vocab-category-filter').value;
    const subcategoryFilter = document.getElementById('vocab-subcategory-filter').value;

    tbody.innerHTML = '';

    const filteredData = vocabList.filter(item => {
        const matchesSearch = item.german.toLowerCase().includes(searchTerm) ||
            (item.english && item.english.toLowerCase().includes(searchTerm));

        const parsed = parseCategoryInfo(item.category);
        const matchesCategory = categoryFilter === 'all' || parsed.main === categoryFilter;
        const matchesSubcategory = subcategoryFilter === 'all' || parsed.sub === subcategoryFilter;

        return matchesSearch && matchesCategory && matchesSubcategory;
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
