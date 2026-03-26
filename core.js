
const App = {
  user: JSON.parse(localStorage.getItem('nexus_user') || 'null'),

  meetings: JSON.parse(localStorage.getItem('nexus_meetings') || 'null') || [
    { id:1, title:'Series A Discussion',   with:'Alex Morgan',  date:'2026-02-22', time:'10:00 AM', status:'confirmed' },
    { id:2, title:'Due Diligence Review',  with:'Priya Kapoor', date:'2026-02-25', time:'02:00 PM', status:'pending'   },
    { id:3, title:'Term Sheet Walkthrough',with:'James Liu',    date:'2026-02-28', time:'11:00 AM', status:'confirmed' },
    { id:4, title:'Product Demo',          with:'Sara Chen',    date:'2026-03-03', time:'03:00 PM', status:'pending'   },
    { id:5, title:'Product Demo',          with:'David Chen',    date:'2026-03-04', time:'03:00 PM', status:'pending'   },
    { id:6, title:'Term Sheet Walkthrough',with:'Maya Patel',    date:'2026-04-01', time:'04:00 PM', status:'pending'   },
  ],
};

/* ── MOCK USERS ─────────────────────────────────────────────── */
const MOCK_USERS = [
  { id:'e1', name:'Sarah Johnson', email:'sarah@techwave.io',      password:'password123', role:'entrepreneur', startup:'TechWave',      industry:'FinTech',     avatar:'SJ' },
  { id:'e2', name:'Marcus Chen',   email:'marcus@greenai.com',     password:'password123', role:'entrepreneur', startup:'GreenAI',       industry:'CleanTech',   avatar:'MC' },
  { id:'e3', name:'Priya Kapoor',  email:'priya@healthbridge.io',  password:'password123', role:'entrepreneur', startup:'HealthBridge',  industry:'HealthTech',  avatar:'PK' },
  { id:'i1', name:'Michael Torres',email:'michael@vcinnovate.com', password:'password123', role:'investor',     firm:'VC Innovate',      focus:'Early Stage',    avatar:'MT' },
  { id:'i2', name:'Lisa Park',     email:'lisa@capitalgroup.com',  password:'password123', role:'investor',     firm:'Capital Group',    focus:'Series A',       avatar:'LP' },
  { id:'i3', name:'James Liu',     email:'james@globalvc.com',     password:'password123', role:'investor',     firm:'Global VC',        focus:'Growth',         avatar:'JL' },
];

const ENTREPRENEURS = MOCK_USERS.filter(u => u.role === 'entrepreneur');
const INVESTORS     = MOCK_USERS.filter(u => u.role === 'investor');

/* ── HELPERS ─────────────────────────────────────────────────── */
const fmt     = n  => '$' + Number(n).toLocaleString();
const fmtTime = s  => `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
const MONTHS  = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const WDAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];