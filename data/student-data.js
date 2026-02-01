// ================================================================
// SAMPLE DATA - Pillai University Student Portal
// Student: Aryan Sharma (CS Engineering, Semester 6)
// ================================================================

const studentData = {
  personal: {
    name: "Aryan Sharma",
    studentId: "PIU2020001234",
    email: "aryan.sharma@student.piu.edu.in",
    phone: "+91 98765 43210",
    branch: "Computer Engineering",
    semester: 6,
    batch: "2020-2024",
    section: "B",
    rollNumber: "2020BTCSE001",
    bloodGroup: "O+",
    dob: "2002-08-15",
    avatar: "AS",
    emergencyContact: {
      name: "Rajesh Sharma",
      relation: "Father",
      phone: "+91 98765 43211"
    }
  },

  academic: {
    cgpa: 8.42,
    currentSemesterGPA: 8.15,
    totalCredits: 138,
    earnedCredits: 130,
    backlogs: 1,
    rank: 12,
    totalStudents: 180,
    
    semesterGrades: [
      { semester: 1, sgpa: 7.85, credits: 24, status: "Completed" },
      { semester: 2, sgpa: 8.12, credits: 23, status: "Completed" },
      { semester: 3, sgpa: 8.45, credits: 24, status: "Completed" },
      { semester: 4, sgpa: 7.92, credits: 22, status: "Completed", backlog: 1 },
      { semester: 5, sgpa: 8.78, credits: 23, status: "Completed" },
      { semester: 6, sgpa: 8.15, credits: 22, status: "In Progress" },
      { semester: 7, sgpa: null, credits: 24, status: "Upcoming" },
      { semester: 8, sgpa: null, credits: 20, status: "Upcoming" }
    ],

    currentSemesterSubjects: [
      {
        code: "CSE601",
        name: "Machine Learning",
        attendance: 82,
        totalClasses: 45,
        attendedClasses: 37,
        internal: 18,
        maxInternal: 20,
        external: null,
        maxExternal: 80,
        credits: 4,
        faculty: "Dr. Priya Menon",
        nextClass: "2026-02-03T10:00:00"
      },
      {
        code: "CSE602",
        name: "Distributed Systems",
        attendance: 72,
        totalClasses: 42,
        attendedClasses: 30,
        internal: 16,
        maxInternal: 20,
        external: null,
        maxExternal: 80,
        credits: 4,
        faculty: "Prof. Amit Kumar",
        nextClass: "2026-02-02T14:00:00"
      },
      {
        code: "CSE603",
        name: "Cryptography & Network Security",
        attendance: 88,
        totalClasses: 40,
        attendedClasses: 35,
        internal: 19,
        maxInternal: 20,
        external: null,
        maxExternal: 80,
        credits: 4,
        faculty: "Dr. Sneha Patil",
        nextClass: "2026-02-04T11:30:00"
      },
      {
        code: "CSE604",
        name: "Cloud Computing",
        attendance: 65,
        totalClasses: 38,
        attendedClasses: 25,
        internal: 15,
        maxInternal: 20,
        external: null,
        maxExternal: 80,
        credits: 3,
        faculty: "Prof. Ravi Deshmukh",
        nextClass: "2026-02-03T09:00:00"
      },
      {
        code: "CSE605",
        name: "Software Testing",
        attendance: 78,
        totalClasses: 36,
        attendedClasses: 28,
        internal: 17,
        maxInternal: 20,
        external: null,
        maxExternal: 80,
        credits: 3,
        faculty: "Ms. Kavita Joshi",
        nextClass: "2026-02-05T15:00:00"
      },
      {
        code: "CSE606L",
        name: "ML Lab",
        attendance: 91,
        totalClasses: 22,
        attendedClasses: 20,
        internal: 9,
        maxInternal: 10,
        external: null,
        maxExternal: 15,
        credits: 2,
        faculty: "Dr. Priya Menon",
        nextClass: "2026-02-04T14:00:00"
      },
      {
        code: "CSE607L",
        name: "Cloud Computing Lab",
        attendance: 86,
        totalClasses: 20,
        attendedClasses: 17,
        internal: 8,
        maxInternal: 10,
        external: null,
        maxExternal: 15,
        credits: 2,
        faculty: "Prof. Ravi Deshmukh",
        nextClass: "2026-02-06T10:00:00"
      }
    ],

    backlogs: [
      {
        code: "CSE404",
        name: "Theory of Computation",
        semester: 4,
        attempts: 2,
        lastAttemptScore: 38,
        passingMarks: 40,
        nextExam: "2026-03-15",
        status: "Re-exam scheduled"
      }
    ]
  },

  attendance: {
    overall: 78,
    currentSemester: 78,
    trend: "up",
    requiredClasses: 8,
    message: "Attend 8 more classes to reach 75%"
  },

  fees: {
    currentSemester: {
      total: 95000,
      paid: 95000,
      pending: 0,
      status: "Paid",
      dueDate: "2025-09-15",
      paidDate: "2025-09-10",
      transactionId: "PIU202509100001234"
    },
    history: [
      { semester: 6, amount: 95000, status: "Paid", date: "2025-09-10" },
      { semester: 5, amount: 95000, status: "Paid", date: "2025-02-08" },
      { semester: 4, amount: 90000, status: "Paid", date: "2024-09-12" },
      { semester: 3, amount: 90000, status: "Paid", date: "2024-02-15" }
    ],
    totalPaid: 550000,
    totalFees: 760000,
    remainingFees: 210000
  },

  library: {
    booksIssued: 2,
    maxBooks: 5,
    fineAmount: 120,
    books: [
      {
        id: "LIB001234",
        title: "Introduction to Machine Learning",
        author: "Ethem Alpaydin",
        isbn: "978-0262028189",
        issueDate: "2025-12-15",
        dueDate: "2026-01-14",
        status: "Issued",
        overdue: false,
        fine: 0
      },
      {
        id: "LIB001567",
        title: "Distributed Systems: Principles and Paradigms",
        author: "Andrew S. Tanenbaum",
        isbn: "978-1530281756",
        issueDate: "2025-11-20",
        dueDate: "2025-12-20",
        status: "Overdue",
        overdue: true,
        overdueDays: 43,
        fine: 120
      }
    ]
  },

  placements: {
    eligible: true,
    cgpaRequirement: 7.0,
    backlogRestriction: 2,
    registeredDrives: 4,
    applicationsSubmitted: 12,
    interviewsScheduled: 3,
    offers: 0,
    
    upcomingDrives: [
      {
        company: "TCS Digital",
        logo: "tcs-logo.png",
        position: "System Engineer",
        ctc: "7 LPA",
        date: "2026-02-15",
        location: "Mumbai",
        eligibility: { cgpa: 7.0, backlogs: 0 },
        status: "Registered",
        deadline: "2026-02-08"
      },
      {
        company: "Infosys",
        logo: "infosys-logo.png",
        position: "Power Programmer",
        ctc: "9 LPA",
        date: "2026-02-20",
        location: "Pune",
        eligibility: { cgpa: 7.5, backlogs: 0 },
        status: "Not Eligible",
        reason: "Backlog present",
        deadline: "2026-02-12"
      },
      {
        company: "Amazon",
        logo: "amazon-logo.png",
        position: "SDE Intern",
        ctc: "5 LPA (Intern)",
        date: "2026-03-01",
        location: "Bangalore",
        eligibility: { cgpa: 8.0, backlogs: 0 },
        status: "Available",
        deadline: "2026-02-20"
      },
      {
        company: "Accenture",
        logo: "accenture-logo.png",
        position: "Associate Software Engineer",
        ctc: "4.5 LPA",
        date: "2026-02-10",
        location: "Mumbai",
        eligibility: { cgpa: 6.5, backlogs: 2 },
        status: "Registered",
        deadline: "2026-02-05"
      }
    ],

    applications: [
      {
        company: "TCS Digital",
        position: "System Engineer",
        appliedDate: "2026-01-25",
        status: "Application Submitted",
        stage: "Resume Screening"
      },
      {
        company: "Wipro",
        position: "Project Engineer",
        appliedDate: "2026-01-20",
        status: "Interview Scheduled",
        stage: "Technical Round",
        interviewDate: "2026-02-08T10:00:00"
      },
      {
        company: "Cognizant",
        position: "Programmer Analyst",
        appliedDate: "2026-01-15",
        status: "Interview Scheduled",
        stage: "HR Round",
        interviewDate: "2026-02-05T14:00:00"
      }
    ]
  },

  events: {
    upcoming: [
      {
        title: "Mid-Semester Examination",
        date: "2026-03-15",
        type: "Exam",
        description: "Mid-sem exams for all subjects",
        time: "10:00 AM",
        venue: "Main Examination Hall",
        rsvp: false
      },
      {
        title: "Tech Fest - Innovision 2026",
        date: "2026-02-28",
        type: "Event",
        description: "Annual technical festival with workshops and competitions",
        time: "9:00 AM",
        venue: "College Campus",
        rsvp: true,
        registered: true
      },
      {
        title: "Guest Lecture: AI in Healthcare",
        date: "2026-02-10",
        type: "Seminar",
        description: "Industry expert talk on AI applications",
        time: "2:00 PM",
        venue: "Seminar Hall A",
        speaker: "Dr. Rajesh Patel, Google Health",
        rsvp: true,
        registered: false
      },
      {
        title: "Internship Drive - Microsoft",
        date: "2026-02-22",
        type: "Placement",
        description: "Summer internship opportunity",
        time: "11:00 AM",
        venue: "Placement Cell",
        rsvp: false
      }
    ],
    
    calendar: [
      { date: "2026-02-05", event: "HR Interview - Cognizant", type: "placement" },
      { date: "2026-02-08", event: "Technical Interview - Wipro", type: "placement" },
      { date: "2026-02-10", event: "Guest Lecture", type: "event" },
      { date: "2026-02-15", event: "TCS Drive", type: "placement" },
      { date: "2026-02-28", event: "Tech Fest", type: "event" },
      { date: "2026-03-15", event: "Mid-Sem Exam", type: "exam" }
    ]
  },

  announcements: [
    {
      id: 1,
      title: "Mid-Semester Exam Schedule Released",
      description: "The mid-semester examination schedule for Semester 6 has been published. Check the academic calendar for details.",
      type: "Academic",
      date: "2026-01-28",
      priority: "High",
      link: "#"
    },
    {
      id: 2,
      title: "Library Books Due - Return Before February 5",
      description: "All borrowed library books are due for return by February 5, 2026. Late returns will incur fines.",
      type: "Library",
      date: "2026-01-25",
      priority: "Medium",
      link: "#"
    },
    {
      id: 3,
      title: "Tech Fest Registrations Open",
      description: "Register now for Innovision 2026! Exciting workshops, competitions, and prizes await. Last date: Feb 20.",
      type: "Event",
      date: "2026-01-20",
      priority: "Medium",
      link: "#"
    },
    {
      id: 4,
      title: "New Placement Drive - Amazon SDE Intern",
      description: "Amazon is visiting campus for SDE Intern roles. Eligible students can apply before February 20.",
      type: "Placement",
      date: "2026-01-30",
      priority: "High",
      link: "#"
    }
  ],

  achievements: [
    {
      title: "Smart India Hackathon 2025 - Winner",
      description: "Won first prize in Software Edition",
      date: "2025-08-15",
      type: "Competition",
      certificate: true
    },
    {
      title: "Best Project Award",
      description: "Semester 5 - ML-based Disease Prediction System",
      date: "2025-06-20",
      type: "Academic",
      certificate: true
    },
    {
      title: "CodeChef 3-Star",
      description: "Achieved 3-star rating on CodeChef",
      date: "2025-05-10",
      type: "Coding",
      certificate: false
    }
  ],

  grievances: [
    {
      id: "GRV2026001",
      category: "Academic",
      subject: "Internal marks not updated",
      description: "Internal marks for CSE602 are not reflected in the portal",
      status: "In Progress",
      submittedDate: "2026-01-22",
      lastUpdate: "2026-01-28",
      anonymous: false
    }
  ],

  recentActivity: [
    {
      type: "attendance",
      title: "Attendance marked",
      description: "Machine Learning - Lecture 37",
      time: "2 hours ago",
      icon: "check-circle"
    },
    {
      type: "placement",
      title: "Application submitted",
      description: "TCS Digital - System Engineer",
      time: "1 day ago",
      icon: "briefcase"
    },
    {
      type: "exam",
      title: "Mid-sem schedule released",
      description: "Exams starting from March 15",
      time: "3 days ago",
      icon: "calendar"
    },
    {
      type: "library",
      title: "Book overdue reminder",
      description: "Distributed Systems book is overdue",
      time: "5 days ago",
      icon: "book"
    }
  ]
};

// Helper function to get attendance color
function getAttendanceColor(percentage) {
  if (percentage >= 75) return 'success';
  if (percentage >= 65) return 'warning';
  return 'danger';
}

// Helper function to format date
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-IN', options);
}

// Helper function to get relative time
function getRelativeTime(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = date - now;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays === -1) return 'Yesterday';
  if (diffDays > 0) return `In ${diffDays} days`;
  return `${Math.abs(diffDays)} days ago`;
}

// Calculate CGPA trend
function calculateCGPATrend() {
  const completed = studentData.academic.semesterGrades.filter(s => s.sgpa !== null);
  if (completed.length < 2) return 'neutral';
  const lastTwo = completed.slice(-2);
  return lastTwo[1].sgpa >= lastTwo[0].sgpa ? 'up' : 'down';
}
