// SYLLABUS DATABASE
// Structured by Level -> Board -> Subject

const syllabusDB = {
    // ==========================================
    // LEVEL: +2 2nd Year
    // ==========================================
    'plus2-2nd': {
        'cbse': {
            'physics': [
                { name: '1. Electric Charges and Fields', videoId: 'z1gy8O-9a-0' }, 
                { name: '2. Electrostatic Potential and Capacitance', videoId: '9Hf-v8-WTtY' }, 
                { name: '3. Current Electricity', videoId: '24YuubvxVLY' }, 
                { name: '4. Moving Charges and Magnetism', videoId: 'UFQx9UuT_Y0' }, 
                { name: '5. Magnetism and Matter', videoId: 'MS6MtjQMWuU' }, 
                { name: '6. Electromagnetic Induction', videoId: 'wNJTLxXfDS8' }, 
                { name: '7. Alternating Current', videoId: '-tCdzYEotgQ' }, 
                { name: '8. Electromagnetic Waves', videoId: '-tCdzYEotgQ' }, 
                { name: '9. Ray Optics and Optical Instruments', videoId: 'cH0zuEoY4r0' }, 
                { name: '10. Wave Optics', videoId: 'Y2BrCETu9EU' }, 
                { name: '11. Dual Nature of Radiation and Matter', videoId: 'Y2BrCETu9EU' }, 
                { name: '12. Atoms', videoId: 'uOaOviIfCTU' }, 
                { name: '13. Nuclei', videoId: 'uOaOviIfCTU' }, 
                { name: '14. Semiconductor Electronics', videoId: 'Y2BrCETu9EU' } 
            ],
            'chemistry': [
                { name: '1. Solutions', videoId: 'rEUYpKt9V20' }, 
                { name: '2. Electrochemistry', videoId: 'rEUYpKt9V20' },
                { name: '3. Chemical Kinetics', videoId: 'rEUYpKt9V20' },
                { name: '4. d and f Block Elements', videoId: 'rEUYpKt9V20' },
                { name: '5. Coordination Compounds', videoId: 'rEUYpKt9V20' },
                { name: '6. Haloalkanes and Haloarenes', videoId: 'rEUYpKt9V20' },
                { name: '7. Alcohols, Phenols and Ethers', videoId: 'rEUYpKt9V20' },
                { name: '8. Aldehydes, Ketones and Carboxylic Acids', videoId: 'rEUYpKt9V20' },
                { name: '9. Amines', videoId: 'rEUYpKt9V20' },
                { name: '10. Biomolecules', videoId: 'rEUYpKt9V20' }
            ],
            'mathematics': [
                { name: '1. Relations and Functions', videoId: 'uTx3zRNqwwM' }, 
                { name: '2. Inverse Trigonometric Functions', videoId: 'uTx3zRNqwwM' }, 
                { name: '3. Matrices', videoId: 'uTx3zRNqwwM' }, 
                { name: '4. Determinants', videoId: 'uTx3zRNqwwM' }, 
                { name: '5. Continuity and Differentiability', videoId: 'uTx3zRNqwwM' }, 
                { name: '6. Application of Derivatives', videoId: 'uTx3zRNqwwM' }, 
                { name: '7. Integrals', videoId: 'uTx3zRNqwwM' }, 
                { name: '8. Application of Integrals', videoId: 'uTx3zRNqwwM' }, 
                { name: '9. Differential Equations', videoId: 'uTx3zRNqwwM' }, 
                { name: '10. Vector Algebra', videoId: 'uTx3zRNqwwM' }, 
                { name: '11. Three Dimensional Geometry', videoId: 'uTx3zRNqwwM' }, 
                { name: '12. Linear Programming', videoId: 'uTx3zRNqwwM' }, 
                { name: '13. Probability', videoId: 'uTx3zRNqwwM' } 
            ],
            'biology': [
                { name: '1. Reproduction in Organisms', videoId: 'oF4xQe3u92E' },
                { name: '2. Human Reproduction', videoId: 'oF4xQe3u92E' },
                { name: '3. Genetics', videoId: 'oF4xQe3u92E' }
            ],
            'english': [
                { name: '1. Reading Comprehension', videoId: 'hQ6-B7R4Yiw' },
                { name: '2. Literature', videoId: 'hQ6-B7R4Yiw' }
            ],
            'compsci': [
                { name: '1. Python Fundamentals', videoId: 'Y8Tko2YAui0' },
                { name: '2. Database Concepts', videoId: 'Y8Tko2YAui0' }
            ]
        },
        'chse': {
            // Will be populated dynamically below
        }
    },

    // ==========================================
    // LEVEL: +2 1st Year (Placeholders for future)
    // ==========================================
    'plus2-1st': {
        'cbse': {},
        'chse': {}
    },

    // ==========================================
    // LEVEL: +3 Degree (Placeholders for future)
    // ==========================================
    'plus3': {}
};


// ---------------------------------------------------------
// DYNAMIC DATA INJECTION FOR CHSE (+2 2nd Year)
// ---------------------------------------------------------

// 1. Copy CBSE syllabus to CHSE as a baseline
syllabusDB['plus2-2nd']['chse'] = JSON.parse(JSON.stringify(syllabusDB['plus2-2nd']['cbse']));

// 2. Override and Append CHSE Specific Science Subjects
syllabusDB['plus2-2nd']['chse']['biology'] = [
    { name: '1. Reproduction in Organisms', videoId: 'oF4xQe3u92E' },
    { name: '2. Sexual Reproduction in Flowering Plants', videoId: 'oF4xQe3u92E' },
    { name: '3. Human Reproduction', videoId: 'oF4xQe3u92E' },
    { name: '4. Reproductive Health', videoId: 'oF4xQe3u92E' },
    { name: '5. Principles of Inheritance and Variation', videoId: 'oF4xQe3u92E' },
    { name: '6. Molecular Basis of Inheritance', videoId: 'oF4xQe3u92E' },
    { name: '7. Evolution', videoId: 'oF4xQe3u92E' },
    { name: '8. Human Health and Disease', videoId: 'oF4xQe3u92E' },
    { name: '9. Biotechnology: Principles and Processes', videoId: 'oF4xQe3u92E' },
    { name: '10. Ecology and Environment', videoId: 'oF4xQe3u92E' }
];

syllabusDB['plus2-2nd']['chse']['compsci'] = [
    { name: '1. Python Revision Tour', videoId: 'Y8Tko2YAui0' },
    { name: '2. Functions & Modules', videoId: 'Y8Tko2YAui0' },
    { name: '3. File Handling', videoId: 'Y8Tko2YAui0' },
    { name: '4. Data Structures (Stacks)', videoId: 'Y8Tko2YAui0' },
    { name: '5. Computer Networks', videoId: 'Y8Tko2YAui0' },
    { name: '6. Database Management (SQL)', videoId: 'Y8Tko2YAui0' },
    { name: '7. Interface Python with MySQL', videoId: 'Y8Tko2YAui0' }
];

syllabusDB['plus2-2nd']['chse']['english'] = [
    { name: '1. Reading Comprehension', videoId: 'hQ6-B7R4Yiw' },
    { name: '2. Writing Skills & Grammar', videoId: 'hQ6-B7R4Yiw' },
    { name: '3. Prose: My Greatest Olympic Prize', videoId: 'hQ6-B7R4Yiw' },
    { name: '4. Prose: On Examinations', videoId: 'hQ6-B7R4Yiw' },
    { name: '5. Poetry: Daffodils', videoId: 'hQ6-B7R4Yiw' },
    { name: '6. Poetry: The Ballad of Father Gilligan', videoId: 'hQ6-B7R4Yiw' },
    { name: '7. Non-Detailed: The Doctor\'s Word', videoId: 'hQ6-B7R4Yiw' }
];

syllabusDB['plus2-2nd']['chse']['mil-odia'] = [
    { name: '1. Prose (ଗଦ୍ୟ)', videoId: 'zT2W44kC6bQ' },
    { name: '2. Poetry (ପଦ୍ୟ)', videoId: 'zT2W44kC6bQ' },
    { name: '3. Short Story (ଗଳ୍ପ)', videoId: 'zT2W44kC6bQ' },
    { name: '4. Grammar (ବ୍ୟାକରଣ)', videoId: 'zT2W44kC6bQ' },
    { name: '5. Essay Writing (ପ୍ରବନ୍ଧ ରଚନା)', videoId: 'zT2W44kC6bQ' }
];

syllabusDB['plus2-2nd']['chse']['statistics'] = [
    { name: '1. Probability Theory', videoId: '9b8Dhh-Pq1w' },
    { name: '2. Random Variables', videoId: '9b8Dhh-Pq1w' },
    { name: '3. Theoretical Distributions', videoId: '9b8Dhh-Pq1w' },
    { name: '4. Statistical Inference', videoId: '9b8Dhh-Pq1w' },
    { name: '5. Time Series Analysis', videoId: '9b8Dhh-Pq1w' }
];

syllabusDB['plus2-2nd']['chse']['electronics'] = [
    { name: '1. Semiconductor Physics', videoId: 'wNJTLxXfDS8' },
    { name: '2. Junction Diodes', videoId: 'wNJTLxXfDS8' },
    { name: '3. Bipolar Junction Transistors', videoId: 'wNJTLxXfDS8' },
    { name: '4. Amplifiers', videoId: 'wNJTLxXfDS8' },
    { name: '5. Oscillators', videoId: 'wNJTLxXfDS8' },
    { name: '6. Digital Electronics Basics', videoId: 'wNJTLxXfDS8' }
];

// 3. ARTS STREAM SUBJECTS
syllabusDB['plus2-2nd']['chse']['history'] = [
    { name: '1. The Harappan Civilization', videoId: 'hQ6-B7R4Yiw' },
    { name: '2. Kings, Farmers and Towns', videoId: 'hQ6-B7R4Yiw' },
    { name: '3. Kinship, Caste and Class', videoId: 'hQ6-B7R4Yiw' },
    { name: '4. Thinkers, Beliefs and Buildings', videoId: 'hQ6-B7R4Yiw' },
    { name: '5. Through the Eyes of Travellers', videoId: 'hQ6-B7R4Yiw' },
    { name: '6. Bhakti-Sufi Traditions', videoId: 'hQ6-B7R4Yiw' },
    { name: '7. An Imperial Capital: Vijayanagara', videoId: 'hQ6-B7R4Yiw' },
    { name: '8. Mahatma Gandhi and the Nationalist Movement', videoId: 'hQ6-B7R4Yiw' }
];

syllabusDB['plus2-2nd']['chse']['political-science'] = [
    { name: '1. The Cold War Era', videoId: 'zT2W44kC6bQ' },
    { name: '2. The End of Bipolarity', videoId: 'zT2W44kC6bQ' },
    { name: '3. Alternative Centres of Power', videoId: 'zT2W44kC6bQ' },
    { name: '4. Contemporary South Asia', videoId: 'zT2W44kC6bQ' },
    { name: '5. International Organisations', videoId: 'zT2W44kC6bQ' },
    { name: '6. Environment and Natural Resources', videoId: 'zT2W44kC6bQ' },
    { name: '7. Challenges of Nation Building', videoId: 'zT2W44kC6bQ' }
];

syllabusDB['plus2-2nd']['chse']['economics'] = [
    { name: '1. Introduction to Macroeconomics', videoId: '9b8Dhh-Pq1w' },
    { name: '2. National Income Accounting', videoId: '9b8Dhh-Pq1w' },
    { name: '3. Money and Banking', videoId: '9b8Dhh-Pq1w' },
    { name: '4. Determination of Income and Employment', videoId: '9b8Dhh-Pq1w' },
    { name: '5. Government Budget and the Economy', videoId: '9b8Dhh-Pq1w' },
    { name: '6. Balance of Payments', videoId: '9b8Dhh-Pq1w' }
];

// 4. COMMERCE STREAM SUBJECTS
syllabusDB['plus2-2nd']['chse']['accountancy'] = [
    { name: '1. Accounting for Partnership Firms', videoId: 'Y8Tko2YAui0' },
    { name: '2. Goodwill: Nature and Valuation', videoId: 'Y8Tko2YAui0' },
    { name: '3. Admission of a Partner', videoId: 'Y8Tko2YAui0' },
    { name: '4. Retirement and Death of a Partner', videoId: 'Y8Tko2YAui0' },
    { name: '5. Dissolution of Partnership Firm', videoId: 'Y8Tko2YAui0' },
    { name: '6. Accounting for Share Capital', videoId: 'Y8Tko2YAui0' },
    { name: '7. Issue and Redemption of Debentures', videoId: 'Y8Tko2YAui0' }
];

syllabusDB['plus2-2nd']['chse']['business-studies'] = [
    { name: '1. Nature and Significance of Management', videoId: 'oF4xQe3u92E' },
    { name: '2. Principles of Management', videoId: 'oF4xQe3u92E' },
    { name: '3. Business Environment', videoId: 'oF4xQe3u92E' },
    { name: '4. Planning and Organising', videoId: 'oF4xQe3u92E' },
    { name: '5. Staffing and Directing', videoId: 'oF4xQe3u92E' },
    { name: '6. Controlling', videoId: 'oF4xQe3u92E' },
    { name: '7. Financial Management', videoId: 'oF4xQe3u92E' },
    { name: '8. Marketing Management', videoId: 'oF4xQe3u92E' }
];
