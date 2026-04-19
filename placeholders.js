// Indian school themed SVG illustrations as data URIs
// Used as gallery placeholders - warm, realistic, child-friendly

export const svgToDataUri = (svg) => `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;

// Classroom scene
export const CLASSROOM_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#FFF8F0"/>
  <rect x="0" y="350" width="800" height="150" fill="#F0E6D3"/>
  <!-- Blackboard -->
  <rect x="150" y="60" width="500" height="200" rx="8" fill="#2d5a3d"/>
  <rect x="160" y="70" width="480" height="180" rx="4" fill="#356b48"/>
  <!-- Writing on board -->
  <line x1="200" y1="120" x2="580" y2="120" stroke="white" stroke-width="3" opacity="0.7"/>
  <line x1="200" y1="150" x2="500" y2="150" stroke="white" stroke-width="3" opacity="0.7"/>
  <line x1="200" y1="180" x2="540" y2="180" stroke="white" stroke-width="3" opacity="0.7"/>
  <!-- Desks -->
  <rect x="80" y="310" width="120" height="15" rx="3" fill="#c8956c"/>
  <rect x="340" y="310" width="120" height="15" rx="3" fill="#c8956c"/>
  <rect x="600" y="310" width="120" height="15" rx="3" fill="#c8956c"/>
  <!-- Kids sitting - simplified figures -->
  <!-- Kid 1 -->
  <circle cx="135" cy="280" r="22" fill="#f5cba7"/>
  <rect x="108" y="302" width="54" height="40" rx="5" fill="#3498db"/>
  <!-- Kid 2 -->
  <circle cx="395" cy="280" r="22" fill="#e8b89a"/>
  <rect x="368" y="302" width="54" height="40" rx="5" fill="#e74c3c"/>
  <!-- Kid 3 -->
  <circle cx="655" cy="280" r="22" fill="#f5cba7"/>
  <rect x="628" y="302" width="54" height="40" rx="5" fill="#2ecc71"/>
  <!-- Teacher -->
  <circle cx="400" cy="230" r="18" fill="#d4956a"/>
  <rect x="378" y="248" width="44" height="35" rx="4" fill="#8e44ad"/>
  <!-- Decorative top border -->
  <rect x="0" y="0" width="800" height="8" fill="#e8a020"/>
  <!-- Text -->
  <text x="400" y="460" font-family="Arial" font-size="22" fill="#5d4037" text-anchor="middle" font-weight="bold">Classroom Learning</text>
</svg>`);

// Kids studying together
export const STUDY_GROUP_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#F0F7FF"/>
  <rect x="0" y="380" width="800" height="120" fill="#E3F0FF"/>
  <!-- Table -->
  <rect x="150" y="300" width="500" height="20" rx="5" fill="#d4a574"/>
  <rect x="180" y="320" width="20" height="80" rx="3" fill="#b8865a"/>
  <rect x="600" y="320" width="20" height="80" rx="3" fill="#b8865a"/>
  <!-- Books on table -->
  <rect x="280" y="265" width="60" height="35" rx="3" fill="#e74c3c"/>
  <rect x="350" y="260" width="60" height="40" rx="3" fill="#3498db"/>
  <rect x="420" y="268" width="55" height="32" rx="3" fill="#2ecc71"/>
  <!-- Kids around table -->
  <!-- Kid left -->
  <circle cx="200" cy="240" r="28" fill="#f5cba7"/>
  <rect x="168" y="268" width="64" height="50" rx="6" fill="#9b59b6"/>
  <!-- Kid center-left -->
  <circle cx="340" cy="225" r="28" fill="#e8b89a"/>
  <rect x="308" y="253" width="64" height="50" rx="6" fill="#e74c3c"/>
  <!-- Kid center-right -->
  <circle cx="470" cy="225" r="28" fill="#f5cba7"/>
  <rect x="438" y="253" width="64" height="50" rx="6" fill="#3498db"/>
  <!-- Kid right -->
  <circle cx="610" cy="240" r="28" fill="#d4956a"/>
  <rect x="578" y="268" width="64" height="50" rx="6" fill="#27ae60"/>
  <!-- Pencils -->
  <line x1="230" y1="270" x2="260" y2="290" stroke="#f39c12" stroke-width="4" stroke-linecap="round"/>
  <!-- Window -->
  <rect x="50" y="60" width="120" height="140" rx="5" fill="#87CEEB" opacity="0.6"/>
  <line x1="110" y1="60" x2="110" y2="200" stroke="white" stroke-width="3"/>
  <line x1="50" y1="130" x2="170" y2="130" stroke="white" stroke-width="3"/>
  <rect x="0" y="0" width="800" height="8" fill="#2e7abf"/>
  <text x="400" y="460" font-family="Arial" font-size="22" fill="#1a3a5c" text-anchor="middle" font-weight="bold">Group Study Session</text>
</svg>`);

// Art and craft
export const ART_CRAFT_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#FFF5E6"/>
  <rect x="0" y="360" width="800" height="140" fill="#FFE8CC"/>
  <!-- Art table -->
  <rect x="100" y="290" width="600" height="18" rx="6" fill="#c8956c"/>
  <!-- Paint palette -->
  <ellipse cx="250" cy="270" rx="70" ry="45" fill="#f5f5f5" stroke="#ddd" stroke-width="2"/>
  <circle cx="220" cy="255" r="12" fill="#e74c3c"/>
  <circle cx="255" cy="248" r="12" fill="#f39c12"/>
  <circle cx="290" cy="255" r="12" fill="#2ecc71"/>
  <circle cx="275" cy="278" r="12" fill="#3498db"/>
  <circle cx="235" cy="280" r="12" fill="#9b59b6"/>
  <!-- Drawing paper -->
  <rect x="320" y="220" width="200" height="150" rx="5" fill="white" stroke="#ddd" stroke-width="2"/>
  <!-- Sun drawing on paper -->
  <circle cx="420" cy="290" r="30" fill="#f39c12" opacity="0.8"/>
  <line x1="420" y1="245" x2="420" y2="232" stroke="#f39c12" stroke-width="4"/>
  <line x1="420" y1="335" x2="420" y2="348" stroke="#f39c12" stroke-width="4"/>
  <line x1="375" y1="290" x2="362" y2="290" stroke="#f39c12" stroke-width="4"/>
  <line x1="465" y1="290" x2="478" y2="290" stroke="#f39c12" stroke-width="4"/>
  <!-- Paintbrushes -->
  <line x1="560" y1="230" x2="590" y2="280" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="558" cy="226" rx="6" ry="10" fill="#e74c3c"/>
  <line x1="580" y1="235" x2="610" y2="285" stroke="#8B4513" stroke-width="6" stroke-linecap="round"/>
  <ellipse cx="578" cy="231" rx="6" ry="10" fill="#3498db"/>
  <!-- Child doing art -->
  <circle cx="200" cy="220" r="32" fill="#f5cba7"/>
  <rect x="164" y="252" width="72" height="55" rx="7" fill="#e74c3c"/>
  <!-- Hands -->
  <ellipse cx="152" cy="290" rx="16" ry="10" fill="#f5cba7"/>
  <ellipse cx="248" cy="285" rx="16" ry="10" fill="#f5cba7"/>
  <!-- Color splashes decoration -->
  <circle cx="680" cy="80" r="25" fill="#e74c3c" opacity="0.3"/>
  <circle cx="720" cy="110" r="18" fill="#3498db" opacity="0.3"/>
  <circle cx="650" cy="115" r="20" fill="#f39c12" opacity="0.3"/>
  <rect x="0" y="0" width="800" height="8" fill="#e8a020"/>
  <text x="400" y="450" font-family="Arial" font-size="22" fill="#5d4037" text-anchor="middle" font-weight="bold">Art &amp; Craft Activities</text>
</svg>`);

// Teacher guiding student
export const TEACHER_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#F8FFF4"/>
  <rect x="0" y="370" width="800" height="130" fill="#EDF7E6"/>
  <!-- Bookshelf background -->
  <rect x="550" y="60" width="220" height="280" rx="5" fill="#d4a574" opacity="0.4"/>
  <rect x="560" y="75" width="190" height="25" rx="3" fill="#e74c3c" opacity="0.7"/>
  <rect x="560" y="108" width="190" height="25" rx="3" fill="#3498db" opacity="0.7"/>
  <rect x="560" y="141" width="190" height="25" rx="3" fill="#2ecc71" opacity="0.7"/>
  <rect x="560" y="174" width="190" height="25" rx="3" fill="#f39c12" opacity="0.7"/>
  <rect x="560" y="207" width="190" height="25" rx="3" fill="#9b59b6" opacity="0.7"/>
  <!-- Desk -->
  <rect x="100" y="310" width="380" height="18" rx="5" fill="#c8956c"/>
  <rect x="130" y="328" width="18" height="70" rx="3" fill="#a0724a"/>
  <rect x="440" y="328" width="18" height="70" rx="3" fill="#a0724a"/>
  <!-- Book on desk -->
  <rect x="220" y="270" width="140" height="40" rx="4" fill="#3498db"/>
  <line x1="290" y1="270" x2="290" y2="310" stroke="white" stroke-width="2"/>
  <!-- Teacher figure -->
  <circle cx="170" cy="210" r="35" fill="#d4956a"/>
  <!-- Hair -->
  <path d="M135 195 Q170 165 205 195" fill="#3d2b1f"/>
  <rect x="130" y="245" width="80" height="75" rx="8" fill="#6c3483"/>
  <!-- Saree detail -->
  <path d="M130 280 Q170 300 210 280" stroke="#9b59b6" stroke-width="3" fill="none"/>
  <!-- Arm pointing -->
  <line x1="210" y1="270" x2="300" y2="250" stroke="#d4956a" stroke-width="12" stroke-linecap="round"/>
  <!-- Student figure -->
  <circle cx="420" cy="235" r="28" fill="#f5cba7"/>
  <rect x="388" y="263" width="64" height="55" rx="6" fill="#3498db"/>
  <!-- Pencil in student hand -->
  <line x1="380" y1="285" x2="355" y2="305" stroke="#f39c12" stroke-width="5" stroke-linecap="round"/>
  <!-- Speech bubble -->
  <ellipse cx="470" cy="170" rx="80" ry="40" fill="white" stroke="#e8a020" stroke-width="2"/>
  <polygon points="440,208 430,225 460,210" fill="white" stroke="#e8a020" stroke-width="2"/>
  <text x="470" y="165" font-family="Arial" font-size="16" fill="#e8a020" text-anchor="middle" font-weight="bold">Very Good!</text>
  <!-- Stars -->
  <text x="90" y="120" font-size="28" fill="#f39c12">★</text>
  <text x="680" y="350" font-size="22" fill="#e8a020">★</text>
  <rect x="0" y="0" width="800" height="8" fill="#27ae60"/>
  <text x="400" y="455" font-family="Arial" font-size="22" fill="#1a5c2a" text-anchor="middle" font-weight="bold">Teacher Guidance</text>
</svg>`);

// Morning assembly / prayer
export const ASSEMBLY_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#FFF9F0"/>
  <!-- Sky gradient -->
  <rect x="0" y="0" width="800" height="200" fill="#87CEEB" opacity="0.3"/>
  <!-- School building outline -->
  <rect x="300" y="80" width="200" height="130" fill="#f5e6d3" stroke="#c8956c" stroke-width="2"/>
  <polygon points="300,80 400,30 500,80" fill="#c8956c"/>
  <!-- Flag -->
  <line x1="400" y1="30" x2="400" y2="0" stroke="#555" stroke-width="3"/>
  <rect x="400" y="0" width="50" height="30" fill="#FF9933"/>
  <rect x="400" y="10" width="50" height="10" fill="white"/>
  <rect x="400" y="20" width="50" height="10" fill="#138808"/>
  <!-- Door -->
  <rect x="370" y="150" width="60" height="60" rx="4" fill="#8B4513" opacity="0.7"/>
  <!-- Windows -->
  <rect x="315" y="100" width="45" height="35" rx="3" fill="#87CEEB" opacity="0.8"/>
  <rect x="440" y="100" width="45" height="35" rx="3" fill="#87CEEB" opacity="0.8"/>
  <!-- Ground -->
  <rect x="0" y="350" width="800" height="150" fill="#90EE90" opacity="0.4"/>
  <!-- Row of students in assembly -->
  <!-- Row 1 -->
  <circle cx="120" cy="310" r="20" fill="#f5cba7"/><rect x="100" y="330" width="40" height="35" rx="4" fill="#3498db"/>
  <circle cx="185" cy="310" r="20" fill="#e8b89a"/><rect x="165" y="330" width="40" height="35" rx="4" fill="#3498db"/>
  <circle cx="250" cy="310" r="20" fill="#f5cba7"/><rect x="230" y="330" width="40" height="35" rx="4" fill="#3498db"/>
  <circle cx="315" cy="310" r="20" fill="#d4956a"/><rect x="295" y="330" width="40" height="35" rx="4" fill="#3498db"/>
  <!-- Row 2 right side -->
  <circle cx="490" cy="310" r="20" fill="#f5cba7"/><rect x="470" y="330" width="40" height="35" rx="4" fill="#fff"/>
  <circle cx="555" cy="310" r="20" fill="#e8b89a"/><rect x="535" y="330" width="40" height="35" rx="4" fill="#fff"/>
  <circle cx="620" cy="310" r="20" fill="#f5cba7"/><rect x="600" y="330" width="40" height="35" rx="4" fill="#fff"/>
  <circle cx="685" cy="310" r="20" fill="#d4956a"/><rect x="665" y="330" width="40" height="35" rx="4" fill="#fff"/>
  <!-- Sun -->
  <circle cx="720" cy="70" r="40" fill="#FDB813" opacity="0.8"/>
  <rect x="0" y="0" width="800" height="8" fill="#FF9933"/>
  <text x="400" y="460" font-family="Arial" font-size="22" fill="#5d4037" text-anchor="middle" font-weight="bold">Morning Assembly</text>
</svg>`);

// Storytelling / reading circle
export const STORYTELLING_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#FFF0F5"/>
  <rect x="0" y="370" width="800" height="130" fill="#FFE0EC"/>
  <!-- Big book -->
  <rect x="290" y="150" width="220" height="170" rx="8" fill="#e74c3c"/>
  <rect x="300" y="160" width="95" height="150" rx="4" fill="#c0392b"/>
  <rect x="405" y="160" width="95" height="150" rx="4" fill="#e74c3c"/>
  <line x1="400" y1="160" x2="400" y2="310" stroke="#922b21" stroke-width="4"/>
  <!-- Lines in book -->
  <line x1="315" y1="190" x2="385" y2="190" stroke="white" stroke-width="2" opacity="0.6"/>
  <line x1="315" y1="210" x2="385" y2="210" stroke="white" stroke-width="2" opacity="0.6"/>
  <line x1="315" y1="230" x2="380" y2="230" stroke="white" stroke-width="2" opacity="0.6"/>
  <line x1="315" y1="250" x2="385" y2="250" stroke="white" stroke-width="2" opacity="0.6"/>
  <!-- Star drawing in book -->
  <text x="435" y="250" font-size="50" fill="#f39c12" opacity="0.8">★</text>
  <!-- Teacher reading aloud -->
  <circle cx="200" cy="210" r="35" fill="#d4956a"/>
  <path d="M165 196 Q200 168 235 196" fill="#3d2b1f"/>
  <rect x="162" y="245" width="76" height="70" rx="8" fill="#8e44ad"/>
  <ellipse cx="148" cy="280" rx="16" ry="10" fill="#d4956a"/>
  <ellipse cx="252" cy="280" rx="16" ry="10" fill="#d4956a"/>
  <!-- Kids sitting in semicircle listening -->
  <!-- Left kids -->
  <circle cx="100" cy="320" r="22" fill="#f5cba7"/><rect x="78" y="342" width="44" height="38" rx="5" fill="#3498db"/>
  <circle cx="160" cy="330" r="22" fill="#e8b89a"/><rect x="138" y="352" width="44" height="38" rx="5" fill="#e74c3c"/>
  <!-- Right kids -->
  <circle cx="640" cy="320" r="22" fill="#f5cba7"/><rect x="618" y="342" width="44" height="38" rx="5" fill="#2ecc71"/>
  <circle cx="700" cy="330" r="22" fill="#d4956a"/><rect x="678" y="352" width="44" height="38" rx="5" fill="#9b59b6"/>
  <!-- Front kids -->
  <circle cx="350" cy="340" r="22" fill="#f5cba7"/><rect x="328" y="362" width="44" height="38" rx="5" fill="#f39c12"/>
  <circle cx="450" cy="340" r="22" fill="#e8b89a"/><rect x="428" y="362" width="44" height="38" rx="5" fill="#3498db"/>
  <!-- Stars floating -->
  <text x="580" y="130" font-size="24" fill="#f39c12" opacity="0.6">★</text>
  <text x="120" y="140" font-size="20" fill="#e74c3c" opacity="0.5">✦</text>
  <text x="650" y="200" font-size="18" fill="#9b59b6" opacity="0.5">✦</text>
  <rect x="0" y="0" width="800" height="8" fill="#e74c3c"/>
  <text x="400" y="455" font-family="Arial" font-size="22" fill="#5d4037" text-anchor="middle" font-weight="bold">Storytelling Circle</text>
</svg>`);

// Sports / outdoor play
export const OUTDOOR_SVG = svgToDataUri(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#E8F5E9"/>
  <!-- Sky -->
  <rect x="0" y="0" width="800" height="220" fill="#87CEEB" opacity="0.5"/>
  <!-- Ground -->
  <rect x="0" y="360" width="800" height="140" fill="#8BC34A" opacity="0.5"/>
  <!-- Trees -->
  <rect x="60" y="200" width="20" height="100" fill="#795548"/>
  <circle cx="70" cy="185" r="55" fill="#4CAF50" opacity="0.8"/>
  <rect x="700" y="210" width="20" height="90" fill="#795548"/>
  <circle cx="710" cy="195" r="50" fill="#4CAF50" opacity="0.8"/>
  <!-- Sun -->
  <circle cx="700" cy="70" r="45" fill="#FDB813" opacity="0.9"/>
  <!-- Clouds -->
  <ellipse cx="200" cy="80" rx="70" ry="35" fill="white" opacity="0.8"/>
  <ellipse cx="250" cy="70" rx="60" ry="30" fill="white" opacity="0.8"/>
  <!-- Kids playing -->
  <!-- Kid running left -->
  <circle cx="200" cy="290" r="26" fill="#f5cba7"/>
  <rect x="176" y="316" width="50" height="45" rx="6" fill="#e74c3c"/>
  <line x1="176" y1="340" x2="155" y2="370" stroke="#f5cba7" stroke-width="8" stroke-linecap="round"/>
  <line x1="226" y1="340" x2="245" y2="365" stroke="#f5cba7" stroke-width="8" stroke-linecap="round"/>
  <!-- Kid in middle -->
  <circle cx="400" cy="275" r="28" fill="#e8b89a"/>
  <rect x="374" y="303" width="54" height="48" rx="6" fill="#9b59b6"/>
  <!-- Arms up -->
  <line x1="374" y1="325" x2="345" y2="300" stroke="#e8b89a" stroke-width="9" stroke-linecap="round"/>
  <line x1="428" y1="325" x2="455" y2="300" stroke="#e8b89a" stroke-width="9" stroke-linecap="round"/>
  <!-- Ball -->
  <circle cx="460" cy="265" r="22" fill="#f39c12"/>
  <line x1="438" y1="265" x2="482" y2="265" stroke="white" stroke-width="2"/>
  <line x1="460" y1="243" x2="460" y2="287" stroke="white" stroke-width="2"/>
  <!-- Kid right -->
  <circle cx="610" cy="285" r="26" fill="#f5cba7"/>
  <rect x="586" y="311" width="50" height="45" rx="6" fill="#3498db"/>
  <line x1="586" y1="335" x2="565" y2="362" stroke="#f5cba7" stroke-width="8" stroke-linecap="round"/>
  <line x1="636" y1="335" x2="655" y2="360" stroke="#f5cba7" stroke-width="8" stroke-linecap="round"/>
  <!-- Flowers -->
  <circle cx="350" cy="385" r="8" fill="#FF69B4"/><line x1="350" y1="393" x2="350" y2="415" stroke="#4CAF50" stroke-width="3"/>
  <circle cx="500" cy="390" r="8" fill="#FF69B4"/><line x1="500" y1="398" x2="500" y2="415" stroke="#4CAF50" stroke-width="3"/>
  <rect x="0" y="0" width="800" height="8" fill="#4CAF50"/>
  <text x="400" y="460" font-family="Arial" font-size="22" fill="#1b5e20" text-anchor="middle" font-weight="bold">Outdoor Activities</text>
</svg>`);

export const GALLERY_IMAGES = [
  { src: CLASSROOM_SVG,    caption: 'Classroom Learning',    category: 'Academics',   wide: true  },
  { src: STUDY_GROUP_SVG,  caption: 'Group Study Session',   category: 'Learning',    wide: false },
  { src: ART_CRAFT_SVG,    caption: 'Art & Craft',           category: 'Activities',  wide: false },
  { src: TEACHER_SVG,      caption: 'Teacher Guidance',      category: 'Faculty',     wide: true  },
  { src: ASSEMBLY_SVG,     caption: 'Morning Assembly',      category: 'Events',      wide: false },
  { src: STORYTELLING_SVG, caption: 'Storytelling Circle',   category: 'Activities',  wide: false },
  { src: OUTDOOR_SVG,      caption: 'Outdoor Activities',    category: 'Sports',      wide: true  },
];
