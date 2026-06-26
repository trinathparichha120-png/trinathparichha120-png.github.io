// SYLLABUS DATABASE
const syllabusDB = {
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
        }
    }
};

// 1. Deep Copy CBSE to CHSE within the strict hierarchy
syllabusDB['plus2-2nd']['chse'] = JSON.parse(JSON.stringify(syllabusDB['plus2-2nd']['cbse']));

// 2. Syllabus Constraint Overrides
syllabusDB['plus2-2nd']['chse']['physics'][13].name = '14. Semiconductor Electronics (Excluding Logic Gates)';

// 3. Remove inherited flat arrays prior to restructuring
delete syllabusDB['plus2-2nd']['chse']['biology'];
delete syllabusDB['plus2-2nd']['chse']['english'];

// 4. Implement Biology Split (Botany & Zoology)
syllabusDB['plus2-2nd']['chse']['botany'] = [
    { name: '1. Reproduction in Organisms', videoId: 'oF4xQe3u92E' },
    { name: '2. Sexual Reproduction in Flowering Plants', videoId: '9Hf-v8-WTtY' },
    { name: '3. Plant Water Relations', videoId: '24YuubvxVLY' },
    { name: '4. Mineral Nutrition', videoId: 'dQw4w9WgXcQ' },
    { name: '5. Photosynthesis', videoId: 'MS6MtjQMWuU' },
    { name: '6. Respiration', videoId: 'wNJTLxXfDS8' },
    { name: '7. Plant Growth & Development', videoId: '-tCdzYEotgQ' },
    { name: '8. Mendelian Genetics', videoId: 'cH0zuEoY4r0' },
    { name: '9. Molecular Basis of Inheritance', videoId: 'Y2BrCETu9EU' }
];

syllabusDB['plus2-2nd']['chse']['zoology'] = [
    { name: '1. Human Reproduction', videoId: 'oF4xQe3u92E' },
    { name: '2. Reproductive Health', videoId: 'uOaOviIfCTU' },
    { name: '3. Evolution', videoId: 'rEUYpKt9V20' },
    { name: '4. Human Health and Disease', videoId: 'uTx3zRNqwwM' },
    { name: '5. Biotechnology: Principles and Processes', videoId: 'Y8Tko2YAui0' },
    { name: '6. Biotechnology and its Applications', videoId: 'zT2W44kC6bQ' },
    { name: '7. Ecology', videoId: '9b8Dhh-Pq1w' }
];

// 5. Implement English Split (Invitations 1-4)
syllabusDB['plus2-2nd']['chse']['english-inv1'] = [
    { name: 'Prose: My Greatest Olympic Prize', videoId: 'XwZKEBt0PXU' },
    { name: 'Prose: On Examinations', videoId: '0ITTB4C_1jQ' },
    { name: 'Prose: The Magic of Teamwork', videoId: 'b0VBEnlwVLs' },
    { name: 'Poetry: Daffodils', videoId: 'hs1sgXEla8Q' },
    { name: 'Poetry: The Ballad of Father Gilligan', videoId: 'gNqFqtO-EpY' },
    { name: 'Poetry: A Psalm of Life', videoId: 'hQ6-B7R4Yiw' }
];

syllabusDB['plus2-2nd']['chse']['english-inv2'] = [
    { name: '1. The Doctor\'s Word', videoId: 'hQ6-B7R4Yiw' },
    { name: '2. The Nightingale and the Rose', videoId: 'hQ6-B7R4Yiw' },
    { name: '3. Mystery of the Missing Cap', videoId: 'hQ6-B7R4Yiw' },
    { name: '4. The Monkey\'s Paw', videoId: 'hQ6-B7R4Yiw' }
];

syllabusDB['plus2-2nd']['chse']['english-inv3'] = [
    { name: '1. Essay Writing', videoId: 'hQ6-B7R4Yiw' },
    { name: '2. Report Writing', videoId: 'hQ6-B7R4Yiw' },
    { name: '3. Note Making', videoId: 'hQ6-B7R4Yiw' }
];

syllabusDB['plus2-2nd']['chse']['english-inv4'] = [
    { name: '1. Tense Patterns', videoId: 'hQ6-B7R4Yiw' },
    { name: '2. Modals', videoId: 'hQ6-B7R4Yiw' },
    { name: '3. Conditionals', videoId: 'hQ6-B7R4Yiw' },
    { name: '4. Passive Voice', videoId: 'hQ6-B7R4Yiw' }
];

// 6. Curate MIL Odia 
syllabusDB['plus2-2nd']['chse']['mil-odia'] = [
    { name: 'Prose: Itihasa', videoId: 'Iy9H5LCeDME' },
    { name: 'Prose: Pushpapura re Varshabarana', videoId: 'GKWJzuRVQrk' },
    { name: 'Prose: Swadhina Deshare Sikshya Chinta', videoId: 'wDe_MDc9ciQ' },
    { name: 'Poetry: Bada Pana', videoId: '4U7biZkJ3aI' },
    { name: 'Poetry: Tapaswinira Patra', videoId: 'gigJFoNlAAY' },
    { name: 'Poetry: Bandira Viraha Vyatha', videoId: 'zT2W44kC6bQ' },
    { name: 'Poetry: Pingalara Abhisara', videoId: 'zT2W44kC6bQ' },
    { name: 'Short Story: Sabhya Zamindar', videoId: 'zT2W44kC6bQ' },
    { name: 'Short Story: Pataka Uttolana', videoId: 'zT2W44kC6bQ' },
    { name: 'Short Story: Rup Narayan Saha', videoId: 'zT2W44kC6bQ' },
    { name: 'Grammar: Samasa', videoId: 'zT2W44kC6bQ' },
    { name: 'Grammar: Roudhi', videoId: 'zT2W44kC6bQ' },
    { name: 'Grammar: Krudanta', videoId: 'zT2W44kC6bQ' },
    { name: 'Grammar: Tadhita', videoId: 'zT2W44kC6bQ' }
];

// 7. Retain other CHSE Specific Subjects
syllabusDB['plus2-2nd']['chse']['compsci'] = [
    { name: '1. Python Revision Tour', videoId: 'Y8Tko2YAui0' },
    { name: '2. Functions & Modules', videoId: 'Y8Tko2YAui0' },
    { name: '3. File Handling', videoId: 'Y8Tko2YAui0' },
    { name: '4. Data Structures (Stacks)', videoId: 'Y8Tko2YAui0' },
    { name: '5. Computer Networks', videoId: 'Y8Tko2YAui0' },
    { name: '6. Database Management (SQL)', videoId: 'Y8Tko2YAui0' },
    { name: '7. Interface Python with MySQL', videoId: 'Y8Tko2YAui0' }
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

syllabusDB['plus2-2nd']['chse']['history'] = [
    { name: '1. Bricks, Beads and Bones', videoId: 'wNJTLxXfDS8' },
    { name: '2. Kings, Farmers and Towns', videoId: '9b8Dhh-Pq1w' },
    { name: '3. Kinship, Caste and Class', videoId: 'Y8Tko2YAui0' }
];

syllabusDB['plus2-2nd']['chse']['political-science'] = [
    { name: '1. Democracy in India', videoId: 'z1gy8O-9a-0' },
    { name: '2. Party System in India', videoId: '9Hf-v8-WTtY' },
    { name: '3. Contemporary World Politics', videoId: '24YuubvxVLY' }
];

syllabusDB['plus2-2nd']['chse']['economics'] = [
    { name: '1. Microeconomics: Introduction', videoId: 'rEUYpKt9V20' },
    { name: '2. Consumer Equilibrium', videoId: 'uTx3zRNqwwM' },
    { name: '3. National Income', videoId: 'oF4xQe3u92E' }
];

syllabusDB['plus2-2nd']['chse']['accountancy'] = [
    { name: '1. Partnership Accounts', videoId: 'uOaOviIfCTU' },
    { name: '2. Company Accounts', videoId: 'Y2BrCETu9EU' },
    { name: '3. Financial Statement Analysis', videoId: 'cH0zuEoY4r0' }
];

syllabusDB['plus2-2nd']['chse']['business-studies'] = [
    { name: '1. Nature and Significance of Management', videoId: '-tCdzYEotgQ' },
    { name: '2. Principles of Management', videoId: 'wNJTLxXfDS8' },
    { name: '3. Financial Management', videoId: 'MS6MtjQMWuU' }
];
