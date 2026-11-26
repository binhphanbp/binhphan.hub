/* =====================================================================
   BAF736 Investment Banking — Bilingual layer (English / Tiếng Việt)
   Lớp song ngữ cho toàn bộ giao diện và dữ liệu học liệu.

   Two helpers are exposed:
     T("key")        → translated UI string for the active language
     L(obj,"field")  → obj.fieldVi when Vietnamese is active and present,
                       otherwise obj.field (graceful fallback to English)

   Data files may therefore be translated incrementally: any item that
   has no *Vi variant simply continues to display in English.
   ===================================================================== */
(function () {
  "use strict";

  var STORE_KEY = "ibc_lang";

  var DICT = {
    /* ---------------- brand / topbar ---------------- */
    brandSub: {
      en: "Ho Chi Minh University of Banking · Faculty of Finance · 3 Credits · Dr Nam Ngo",
      vi: "Trường Đại học Ngân hàng TP.HCM · Khoa Tài chính · 3 tín chỉ · TS. Ngô Sỹ Nam"
    },
    roleStudent: { en: "Student", vi: "Sinh viên" },
    roleInstructor: { en: "‍Instructor", vi: "‍Giảng viên" },
    langLabel: { en: "Language", vi: "Ngôn ngữ" },

    /* ---------------- sidebar ---------------- */
    sideCourse: { en: "Course", vi: "Học phần" },
    sideChapters: { en: "Chapters", vi: "Các chương" },
    sidePractice: { en: "Practice & Exam Prep", vi: "Luyện tập & Ôn thi" },
    sideConsole: { en: "Instructor Console", vi: "Bảng điều khiển giảng viên" },
    sideSession: { en: "Session", vi: "Phiên làm việc" },

    navDashboard: { en: "Dashboard", vi: "Trang chủ" },
    navSyllabus: { en: "Syllabus (Course Outline)", vi: "Đề cương học phần" },
    navLibrary: { en: "Textbook Library", vi: "Thư viện giáo trình" },
    navLabs: { en: "Simulation Labs", vi: "Phòng mô phỏng" },
    navBank: { en: "Question Bank (study all)", vi: "Ngân hàng câu hỏi (tra cứu)" },
    navReview: { en: "Review Q&A (T/F & short)", vi: "Hỏi đáp ôn tập (Đ/S & ngắn)" },
    navEssays: { en: "Essay & Case Bank", vi: "Ngân hàng tự luận & tình huống" },
    navRevision: { en: "Revision Center (formulas · flashcards)", vi: "Trung tâm ôn tập (công thức · thẻ ghi nhớ)" },
    navQuiz: { en: "Practice Quiz", vi: "Trắc nghiệm luyện tập" },
    navResults: { en: "My Results", vi: "Kết quả của tôi" },
    navAdminHome: { en: "Admin Dashboard", vi: "Trang quản trị" },
    navAdminQuestions: { en: "Question Bank Manager", vi: "Quản lý ngân hàng câu hỏi" },
    navAdminContent: { en: "Lecture Content Editor", vi: "Soạn thảo nội dung bài giảng" },
    navAdminResults: { en: "Student Attempts", vi: "Kết quả sinh viên" },
    navAdminSecurity: { en: "Security & Audit Log", vi: "Bảo mật & Nhật ký" },
    navSignOut: { en: "Sign out", vi: "Đăng xuất" },

    /* ---------------- dashboard ---------------- */
    statChapters: { en: "Chapters", vi: "Số chương" },
    statLabs: { en: "Labs & tools", vi: "Mô phỏng & công cụ" },
    statBank: { en: "MCQ bank", vi: "Câu trắc nghiệm" },
    statRead: { en: "Content read", vi: "Đã đọc" },
    chapterHeading: { en: "Chapters", vi: "Các chương" },
    chapterSub: {
      en: "Lecture content follows the official BAF736 syllabus and the course texts (Rosenbaum &amp; Pearl 3e · Tran Tuan Vinh &amp; Ho Cong Huong · Castillo &amp; McAniff · Stowell).",
      vi: "Nội dung bài giảng bám sát đề cương học phần BAF736 và các giáo trình (Rosenbaum &amp; Pearl 3e · Trần Tuấn Vinh &amp; Hồ Công Hưởng · Castillo &amp; McAniff · Stowell)."
    },
    tileSections: { en: "sections", vi: "mục" },
    tileLab: { en: "Lab", vi: "Mô phỏng" },
    tileQuestions: { en: "questions", vi: "câu hỏi" },
    tileFinal: { en: "Final:", vi: "Thi cuối kỳ:" },
    tileQs: { en: "Qs", vi: "câu" },
    lastResult: { en: "Last quiz result:", vi: "Kết quả gần nhất:" },
    modeExam: { en: "Mock Final Exam", vi: "Thi thử cuối kỳ" },
    modePractice: { en: "Practice", vi: "Luyện tập" },
    credits: { en: "credits", vi: "tín chỉ" },
    /* ghép liền sau con số: "45h contact" / "45 giờ trên lớp" (bản Việt mang sẵn dấu cách) */
    contactHours: { en: "h contact", vi: " giờ trên lớp" },
    selfStudy: { en: "h self-study", vi: " giờ tự học" },
    prerequisite: { en: "Prerequisite:", vi: "Học phần tiên quyết:" },
    finalChip: { en: "Final: 40 MCQs · 60 min · 50%", vi: "Thi cuối kỳ: 40 câu · 60 phút · 50%" },
    textbookChip: { en: "Textbook: Rosenbaum &amp; Pearl 3e", vi: "Giáo trình: Rosenbaum &amp; Pearl 3e" },
    ttsChip: { en: "Text-to-speech enabled", vi: "Hỗ trợ đọc thành tiếng" },

    /* ---------------- chapter reader ---------------- */
    chapter: { en: "Chapter", vi: "Chương" },
    hours: { en: "hours", vi: "giờ" },
    sectionsRead: { en: "sections read", vi: "mục đã đọc" },
    learningObjectives: { en: "Learning objectives", vi: "Mục tiêu học tập" },
    readings: { en: "Readings:", vi: "Tài liệu đọc:" },
    listen: { en: "Listen", vi: "Nghe" },
    prevSection: { en: "← Previous section", vi: "← Mục trước" },
    nextSection: { en: "Next section →", vi: "Mục tiếp theo →" },
    finishChapter: { en: "Finish chapter ✔", vi: "Hoàn thành chương ✔" },
    openLab: { en: "Open Chapter", vi: "Mở mô phỏng Chương" },
    labWord: { en: "Lab", vi: "" },
    quizOn: { en: "Quiz on Chapter", vi: "Trắc nghiệm Chương" },
    figuresHeader: { en: "Figures &amp; diagrams", vi: "Hình vẽ &amp; sơ đồ" },
    casesHeader: { en: "Case studies", vi: "Tình huống thực tế" },
    reading: { en: "Reading:", vi: "Đang đọc:" },

    /* ---------------- labs ---------------- */
    labsTitle: { en: "Labs &amp; Illustration Tools", vi: "Phòng mô phỏng &amp; Công cụ minh hoạ" },
    labsSub: {
      en: "Interactive models for every chapter, plus general-purpose valuation tools — the same calculations required in the mid-term and the final exam.",
      vi: "Mô hình tương tác cho từng chương và các công cụ định giá tổng quát — chính là những phép tính cần dùng trong bài kiểm tra giữa kỳ và thi cuối kỳ."
    },
    labsChapterSims: { en: "Chapter simulations", vi: "Mô phỏng theo chương" },
    labsTools: { en: "Illustration tools", vi: "Công cụ minh hoạ" },
    howToUse: { en: "How to use:", vi: "Cách sử dụng:" },

    /* ---------------- quiz / exam ---------------- */
    quizTitle: { en: "Practice Quiz", vi: "Trắc nghiệm luyện tập" },
    quizSub: {
      en: "Questions come from the course test bank; every answer includes a worked explanation with its source.",
      vi: "Câu hỏi lấy từ ngân hàng đề của học phần; mỗi đáp án đều có lời giải thích kèm nguồn tham chiếu."
    },
    quizSetup: { en: "Set up your quiz", vi: "Thiết lập bài luyện tập" },
    scope: { en: "Scope:", vi: "Phạm vi:" },
    allChapters: { en: "All chapters", vi: "Tất cả các chương" },
    numQuestions: { en: "Number of questions:", vi: "Số câu hỏi:" },
    feedback: { en: "Feedback:", vi: "Phản hồi:" },
    fbInstant: { en: "Instant (after each answer)", vi: "Ngay lập tức (sau mỗi câu)" },
    fbEnd: { en: "At the end", vi: "Khi nộp bài" },
    startQuiz: { en: "Start quiz →", vi: "Bắt đầu →" },
    mockExamTitle: { en: "Mock Final Exam", vi: "Thi thử cuối kỳ" },
    mockExamSub: {
      en: "Simulates the real final: <b>40 questions, 60 minutes</b>, following the syllabus blueprint",
      vi: "Mô phỏng đúng đề thi thật: <b>40 câu, 60 phút</b>, theo ma trận đề của đề cương"
    },
    mockExamTail: {
      en: "with a weighting toward lower cognitive levels. Feedback only after submission.",
      vi: "với tỷ trọng nghiêng về các mức nhận thức thấp. Chỉ hiển thị đáp án sau khi nộp bài."
    },
    startExam: { en: "Start mock exam →", vi: "Bắt đầu thi thử →" },
    question: { en: "Question", vi: "Câu" },
    answered: { en: "answered", vi: "câu đã trả lời" },
    submit: { en: "Submit", vi: "Nộp bài" },
    correctMark: { en: "✔ Correct.", vi: "✔ Chính xác." },
    incorrectMark: { en: "✘ Incorrect — the answer is", vi: "✘ Chưa đúng — đáp án là" },
    sourceLabel: { en: "Source:", vi: "Nguồn:" },
    newQuiz: { en: "New quiz", vi: "Làm bài mới" },
    toResults: { en: "My results", vi: "Xem kết quả" },
    examResultNote: {
      en: "Mock final exam result (pass benchmark 50% · scale: score × 0.25 =",
      vi: "Kết quả thi thử (chuẩn đạt 50% · quy đổi: số câu đúng × 0,25 ="
    },
    reviewExplanations: {
      en: "Review the explanations below — every question shows its source.",
      vi: "Xem lời giải bên dưới — mỗi câu đều có nguồn tham chiếu."
    },

    /* ---------------- question bank ---------------- */
    bankTitle: { en: "Question Bank — Study Mode", vi: "Ngân hàng câu hỏi — Chế độ tra cứu" },
    bankSub1: {
      en: "Browse every question in the course bank with its correct answer, worked explanation and source.",
      vi: "Tra cứu toàn bộ câu hỏi của học phần kèm đáp án đúng, lời giải và nguồn tham chiếu."
    },
    bankSub2: { en: "questions across", vi: "câu hỏi thuộc" },
    bankSub3: { en: "chapters.", vi: "chương." },
    allLevels: { en: "All cognitive levels", vi: "Tất cả mức nhận thức" },
    searchQuestions: { en: "Search question text…", vi: "Tìm trong nội dung câu hỏi…" },
    revealAll: { en: "Reveal all answers", vi: "Hiện tất cả đáp án" },
    hideAll: { en: "Hide all answers", vi: "Ẩn tất cả đáp án" },
    matchCount: { en: "question(s) match — showing", vi: "câu hỏi phù hợp — đang hiển thị" },
    onThisPage: { en: "on this page. Click any question to reveal or hide its answer.", vi: "câu ở trang này. Bấm vào câu hỏi để hiện hoặc ẩn đáp án." },
    correctAnswer: { en: "✔ Correct answer:", vi: "✔ Đáp án đúng:" },
    noMatch: { en: "No questions match the current filters.", vi: "Không có câu hỏi nào khớp bộ lọc hiện tại." },
    pageWord: { en: "Page", vi: "Trang" },
    first: { en: "⏮ First", vi: "⏮ Đầu" },
    prev: { en: "← Prev", vi: "← Trước" },
    next: { en: "Next →", vi: "Sau →" },
    last: { en: "Last ⏭", vi: "Cuối ⏭" },

    lvl1: { en: "Know", vi: "Nhớ" },
    lvl2: { en: "Understand", vi: "Hiểu" },
    lvl3: { en: "Apply", vi: "Vận dụng" },
    lvl4: { en: "Analyze", vi: "Phân tích" },

    /* ---------------- review bank ---------------- */
    reviewTitle: { en: "Review Q&amp;A", vi: "Hỏi đáp ôn tập" },
    reviewSub: {
      en: "True/false statements and short-answer prompts with full explanations — the fastest way to check whether you really understood a chapter.",
      vi: "Các nhận định đúng/sai và câu hỏi ngắn kèm giải thích đầy đủ — cách nhanh nhất để kiểm tra bạn đã thực sự hiểu chương hay chưa."
    },
    items: { en: "items.", vi: "mục." },
    typeTF: { en: "True / False", vi: "Đúng / Sai" },
    typeShort: { en: "Short answer", vi: "Trả lời ngắn" },
    allTypes: { en: "All types", vi: "Tất cả dạng" },
    showingItems: { en: "item(s). Click any item to reveal its answer.", vi: "mục. Bấm vào từng mục để xem đáp án." },
    trueWord: { en: "TRUE", vi: "ĐÚNG" },
    falseWord: { en: "FALSE", vi: "SAI" },
    noItems: { en: "No items match the current filters.", vi: "Không có mục nào khớp bộ lọc." },

    /* ---------------- essay bank ---------------- */
    essayTitle: { en: "Essay &amp; Case Question Bank", vi: "Ngân hàng câu hỏi tự luận &amp; tình huống" },
    essaySub: {
      en: "Free-response questions with model answers and marking rubrics — practice for the mid-term written test (Process Assessment 1, Chapters 1–3) and beyond.",
      vi: "Câu hỏi tự luận kèm đáp án mẫu và thang chấm điểm — luyện tập cho bài kiểm tra giữa kỳ (Đánh giá quá trình 1, Chương 1–3) và thi cuối kỳ."
    },
    worthMarks: { en: "questions worth", vi: "câu hỏi, tổng" },
    marksTotal: { en: "marks total.", vi: "điểm." },
    allAssessments: { en: "All assessments", vi: "Tất cả hình thức" },
    midtermFilter: { en: "Mid-term (Ch.1–3)", vi: "Giữa kỳ (Ch.1–3)" },
    finalFilter: { en: "Final examination", vi: "Thi cuối kỳ" },
    revealModel: { en: "Reveal all model answers", vi: "Hiện tất cả đáp án mẫu" },
    hideModel: { en: "Hide all model answers", vi: "Ẩn tất cả đáp án mẫu" },
    genMidterm: { en: "Generate mock mid-term paper", vi: "Tạo đề giữa kỳ thử" },
    showingQs: { en: "question(s).", vi: "câu hỏi." },
    clickReveal: { en: "Click to reveal the model answer &amp; rubric", vi: "Bấm để xem đáp án mẫu &amp; thang điểm" },
    clickHide: { en: "Click to hide the model answer &amp; rubric", vi: "Bấm để ẩn đáp án mẫu &amp; thang điểm" },
    markingRubric: { en: "Marking rubric:", vi: "Thang chấm điểm:" },
    marks: { en: "marks", vi: "điểm" },
    typeEssay: { en: "Essay", vi: "Tự luận" },
    typeCalc: { en: "Calculation essay", vi: "Tự luận tính toán" },
    typeCase: { en: "Case study", vi: "Tình huống" },
    mockPaperTitle: { en: "Mock Mid-term Paper (Process Assessment 1)", vi: "Đề thi giữa kỳ thử (Đánh giá quá trình 1)" },
    mockPaperSub: {
      en: "Chapters 1–3 · closed book · Attempt on paper before revealing any model answer.",
      vi: "Chương 1–3 · không sử dụng tài liệu · Hãy tự làm ra giấy trước khi xem đáp án mẫu."
    },
    closePaper: { en: "Close paper", vi: "Đóng đề" },

    /* ---------------- revision centre ---------------- */
    revisionTitle: { en: "Revision Center", vi: "Trung tâm ôn tập" },
    revisionSub: {
      en: "Everything you need before the exams: the official exam structures, a formula sheet per chapter, and",
      vi: "Mọi thứ bạn cần trước kỳ thi: cấu trúc đề chính thức, bảng công thức từng chương và"
    },
    flashcardsOfTerms: { en: "flashcards of key terms.", vi: "thẻ ghi nhớ thuật ngữ." },
    finalExamHeading: { en: "Final Examination — 50%", vi: "Thi cuối kỳ — 50%" },
    questionsCol: { en: "Questions", vi: "Số câu" },
    pointsCol: { en: "Points", vi: "Điểm" },
    totalRow: { en: "Total — 60 minutes, closed book", vi: "Tổng — 60 phút, không tài liệu" },
    practiseWith: {
      en: "Practise with the Mock Final Exam — same blueprint and the same weighting toward lower cognitive levels.",
      vi: "Hãy luyện với bài Thi thử cuối kỳ — cùng ma trận đề và cùng tỷ trọng mức nhận thức."
    },
    pa1Heading: { en: "Process Assessment 1 — 20%", vi: "Đánh giá quá trình 1 — 20%" },
    pa1Text: {
      en: "Written / essay test after Chapter 3, covering <b>Chapters 1–3</b>, closed book, requiring application of knowledge (CLO1). Generate a mock paper in the <b>Essay &amp; Case Bank</b>.",
      vi: "Bài kiểm tra viết/tự luận sau Chương 3, phạm vi <b>Chương 1–3</b>, không sử dụng tài liệu, yêu cầu vận dụng kiến thức (CLO1). Tạo đề thử trong <b>Ngân hàng tự luận &amp; tình huống</b>."
    },
    pa2Heading: { en: "Process Assessment 2 — 20%", vi: "Đánh giá quá trình 2 — 20%" },
    pa2Text: {
      en: "Group topic selection after each session, presentation and cross-questioning of other groups, with a consolidated essay submitted at the final session (CLO3).",
      vi: "Nhóm chọn chủ đề sau mỗi buổi, thuyết trình và phản biện các nhóm khác, nộp bài tiểu luận tổng hợp ở buổi cuối (CLO3)."
    },
    attendanceHeading: { en: "️ Attendance — 10%", vi: "️ Chuyên cần — 10%" },
    attendanceText: {
      en: "Roll call each session at a random time; full attendance earns 10 points.",
      vi: "Điểm danh ngẫu nhiên mỗi buổi; tham dự đầy đủ được 10 điểm."
    },
    flashHeading: { en: "🃏 Flashcards — key terms", vi: "🃏 Thẻ ghi nhớ — thuật ngữ then chốt" },
    shuffleDeck: { en: "Shuffle deck", vi: "Xáo thẻ" },
    cardOf: { en: "Card", vi: "Thẻ" },
    ofWord: { en: "of", vi: "trên" },
    clickFlip: { en: "— click the card to flip", vi: "— bấm vào thẻ để lật" },
    termLabel: { en: "TERM", vi: "THUẬT NGỮ" },
    definitionLabel: { en: "DEFINITION", vi: "ĐỊNH NGHĨA" },
    clickReveal2: { en: "click to reveal", vi: "bấm để xem" },
    prevCard: { en: "← Previous", vi: "← Thẻ trước" },
    nextCard: { en: "Next card →", vi: "Thẻ tiếp →" },
    noCards: { en: "No cards for this filter.", vi: "Không có thẻ nào cho bộ lọc này." },
    formulaHeading: { en: "Formula sheet", vi: "Bảng công thức" },
    formulaSub: {
      en: "Every formula used in the labs, the question bank and the exams — grouped by chapter.",
      vi: "Toàn bộ công thức dùng trong phòng mô phỏng, ngân hàng câu hỏi và đề thi — sắp xếp theo chương."
    },
    checklistHeading: { en: "✅ Exam checklist", vi: "✅ Danh mục kiểm tra trước kỳ thi" },
    check1: { en: "Read all 6 chapters to 100% (progress bars on the Dashboard).", vi: "Đọc hết 6 chương đạt 100% (xem thanh tiến độ ở Trang chủ)." },
    check2: { en: "Score ≥ 70% on a chapter quiz for every chapter, then ≥ 70% on two mock finals.", vi: "Đạt ≥ 70% ở bài trắc nghiệm từng chương, sau đó ≥ 70% ở hai lần thi thử." },
    check3: { en: "Work every calculation essay in the Essay Bank on paper — the mid-term is closed book.", vi: "Tự làm ra giấy mọi câu tự luận tính toán — bài giữa kỳ không được dùng tài liệu." },
    check4: { en: "Re-run Labs 3, 5 and 6 changing inputs until you can predict the outputs before pressing anything.", vi: "Chạy lại Mô phỏng 3, 5 và 6, thay đổi dữ liệu đầu vào cho tới khi bạn đoán được kết quả trước khi bấm." },
    check5: { en: "Flip through all flashcards the night before; bring an approved pocket calculator.", vi: "Lật hết thẻ ghi nhớ vào tối hôm trước; mang theo máy tính cầm tay được phép." },

    /* ---------------- results ---------------- */
    resultsTitle: { en: "My Results", vi: "Kết quả của tôi" },
    resultsSub: { en: "All quiz and mock-exam attempts stored on this device.", vi: "Tất cả lượt luyện tập và thi thử được lưu trên thiết bị này." },
    noAttempts: { en: "No attempts yet — try a practice quiz or the mock final exam.", vi: "Chưa có lượt làm nào — hãy thử một bài trắc nghiệm hoặc thi thử cuối kỳ." },
    colDate: { en: "Date", vi: "Thời gian" },
    colType: { en: "Type", vi: "Hình thức" },
    colScope: { en: "Scope", vi: "Phạm vi" },
    colScore: { en: "Score", vi: "Điểm" },
    colByChapter: { en: "By chapter", vi: "Theo chương" },
    colMinutes: { en: "Minutes", vi: "Số phút" },
    chipExam: { en: "Exam", vi: "Thi thử" },
    chipPractice: { en: "Practice", vi: "Luyện tập" },
    clearResults: { en: "Clear all results on this device", vi: "Xoá toàn bộ kết quả trên thiết bị này" },
    confirmClear: { en: "Delete all stored attempts on this device?", vi: "Xoá toàn bộ lượt làm đã lưu trên thiết bị này?" },

    /* ---------------- library ---------------- */
    libraryTitle: { en: "Textbook Library", vi: "Thư viện giáo trình" },
    librarySub: {
      en: "Read the course textbooks online, or add your own PDFs. Reading happens inside the app — nothing is uploaded anywhere.",
      vi: "Đọc giáo trình của học phần ngay trong ứng dụng, hoặc thêm tệp PDF của riêng bạn. Việc đọc diễn ra hoàn toàn cục bộ — không tải lên bất kỳ đâu."
    },
    openNewTab: { en: "Open in new tab ↗", vi: "Mở tab mới ↗" },
    closeReader: { en: "Close reader", vi: "Đóng trình đọc" },
    readOnline: { en: "Read online", vi: "Đọc trực tuyến" },
    removeBtn: { en: "Remove", vi: "Xoá" },
    embedded: { en: "Embedded", vi: "Có sẵn" },
    thisSession: { en: "This session", vi: "Phiên này" },
    added: { en: "Added", vi: "Đã thêm" },
    addTextbook: { en: "Add a textbook", vi: "Thêm giáo trình" },
    addTextbookSub: {
      en: "Add any PDF to read inside the app — by web address (persists on this device) or by choosing a file from your computer (available for this session).",
      vi: "Thêm bất kỳ tệp PDF nào để đọc trong ứng dụng — bằng địa chỉ web (lưu trên thiết bị này) hoặc chọn tệp từ máy tính (chỉ trong phiên này)."
    },
    fTitle: { en: "Title", vi: "Tên tài liệu" },
    fAuthor: { en: "Author / year (APA)", vi: "Tác giả / năm (APA)" },
    fUrl: { en: "PDF web address (URL)", vi: "Địa chỉ web của tệp PDF" },
    fFile: { en: "…or choose a PDF file from this computer", vi: "…hoặc chọn tệp PDF từ máy tính này" },
    addBtn: { en: "Add textbook", vi: "Thêm giáo trình" },
    pdfNote: {
      en: "If the PDF does not display, use \"Open in new tab\". Rendering uses your browser's built-in PDF viewer.",
      vi: "Nếu tệp PDF không hiển thị, hãy dùng \"Mở tab mới\". Ứng dụng sử dụng trình đọc PDF sẵn có của trình duyệt."
    },

    /* ---------------- syllabus ---------------- */
    syllabusTitle: { en: "Syllabus —", vi: "Đề cương học phần —" },
    lecturerHeading: { en: "Lecturer", vi: "Giảng viên" },
    descriptionHeading: { en: "Course Description", vi: "Mô tả học phần" },
    clabelHeading: { en: "Course Learning Outcomes (CLOs)", vi: "Chuẩn đầu ra học phần (CLO)" },
    assessmentHeading: { en: "Assessment Structure", vi: "Cấu trúc đánh giá" },
    teachingPlanHeading: { en: "Teaching Plan", vi: "Kế hoạch giảng dạy" },
    materialsHeading: { en: "Learning Materials", vi: "Tài liệu học tập" },
    regulationsHeading: { en: "Course Regulations", vi: "Quy định học phần" },
    colCLO: { en: "CLO", vi: "CLO" },
    colDescription: { en: "Description", vi: "Nội dung" },
    colBloom: { en: "Bloom level", vi: "Mức Bloom" },
    colComponent: { en: "Component", vi: "Thành phần" },
    colWeight: { en: "Weight", vi: "Trọng số" },
    colMethod: { en: "Method", vi: "Hình thức" },
    colCLOs: { en: "CLOs assessed", vi: "CLO được đánh giá" },
    colHours: { en: "Hours", vi: "Số giờ" },
    colRefs: { en: "References", vi: "Tài liệu" },
    blueprintNote: { en: "<b>Final exam blueprint:</b>", vi: "<b>Ma trận đề thi cuối kỳ:</b>" },
    blueprintTail: { en: "(40 questions × 0.25 pts). Closed book.", vi: "(40 câu × 0,25 điểm). Không sử dụng tài liệu." },
    reg1: { en: "Attend on time and maintain a serious, proactive attitude; attendance is graded (10%).", vi: "Đi học đúng giờ, thái độ nghiêm túc và chủ động; chuyên cần được tính điểm (10%)." },
    reg2: { en: "Read materials beforehand and complete end-of-chapter questions and exercises.", vi: "Đọc tài liệu trước và hoàn thành câu hỏi, bài tập cuối chương." },
    reg3: { en: "Learning tools: personal computer, textbook and reference materials.", vi: "Phương tiện học tập: máy tính cá nhân, giáo trình và tài liệu tham khảo." },
    reg4: { en: "Exam incidents and academic integrity are handled according to HUB regulations.", vi: "Sự cố thi cử và liêm chính học thuật được xử lý theo quy định của HUB." },

    /* ---------------- admin ---------------- */
    adminTitle: { en: "Instructor Console", vi: "Bảng điều khiển giảng viên" },
    adminSub: {
      en: "Manage the question bank, edit lecture content, review student attempts and audit security events. All changes persist in this browser (localStorage) and apply instantly to the student interface.",
      vi: "Quản lý ngân hàng câu hỏi, chỉnh sửa nội dung bài giảng, xem kết quả sinh viên và kiểm tra nhật ký bảo mật. Mọi thay đổi được lưu trong trình duyệt này (localStorage) và áp dụng ngay cho giao diện sinh viên."
    },
    statActiveQs: { en: "Active questions", vi: "Câu hỏi đang dùng" },
    statAddedEdited: { en: "Added / edited / removed", vi: "Thêm / sửa / xoá" },
    statOverrides: { en: "Content overrides", vi: "Nội dung đã ghi đè" },
    statAttempts: { en: "Student attempts", vi: "Lượt làm bài" },
    coverageHeading: { en: "Question bank coverage vs final-exam blueprint (40 Qs)", vi: "Độ phủ ngân hàng câu hỏi so với ma trận đề thi (40 câu)" },
    colBlueprint: { en: "Blueprint (final)", vi: "Ma trận (cuối kỳ)" },
    colTotal: { en: "Total", vi: "Tổng" },
    colStatus: { en: "Status", vi: "Trạng thái" },
    sufficient: { en: "Sufficient", vi: "Đủ" },
    needsQuestions: { en: "Needs questions", vi: "Cần bổ sung" },
    assessmentOfficial: { en: "Assessment structure (official syllabus)", vi: "Cấu trúc đánh giá (theo đề cương)" },

    qmTitle: { en: "Question Bank Manager", vi: "Quản lý ngân hàng câu hỏi" },
    qmSub: {
      en: "Add, edit or remove multiple-choice questions. Changes are stored in this browser and take effect immediately for students.",
      vi: "Thêm, sửa hoặc xoá câu hỏi trắc nghiệm. Thay đổi được lưu trong trình duyệt này và có hiệu lực ngay với sinh viên."
    },
    newQuestion: { en: "+ New question", vi: "+ Câu hỏi mới" },
    exportBank: { en: "⬇ Export bank (JSON)", vi: "⬇ Xuất ngân hàng (JSON)" },
    resetChanges: { en: "Reset all changes", vi: "Khôi phục toàn bộ" },
    editBtn: { en: "✏️ Edit", vi: "✏️ Sửa" },
    deleteBtn: { en: "Delete", vi: "Xoá" },
    addedChip: { en: "Added", vi: "Đã thêm" },
    editedChip: { en: "Edited", vi: "Đã sửa" },
    answerWord: { en: "Answer", vi: "Đáp án" },
    fChapter: { en: "Chapter", vi: "Chương" },
    fLevel: { en: "Cognitive level", vi: "Mức nhận thức" },
    fQuestion: { en: "Question", vi: "Câu hỏi" },
    fOption: { en: "Option", vi: "Phương án" },
    fCorrect: { en: "Correct answer", vi: "Đáp án đúng" },
    fSource: { en: "Source", vi: "Nguồn" },
    fExplanation: { en: "Explanation", vi: "Giải thích" },
    saveChanges: { en: "Save changes", vi: "Lưu thay đổi" },
    addQuestion: { en: "Add question", vi: "Thêm câu hỏi" },
    cancel: { en: "Cancel", vi: "Huỷ" },

    ecTitle: { en: "Lecture Content Editor", vi: "Soạn thảo nội dung bài giảng" },
    ecSub: {
      en: "Edit the HTML of any lecture section. Overrides are stored in this browser and shown to students immediately; the original text is never lost and can be restored at any time.",
      vi: "Chỉnh sửa mã HTML của bất kỳ mục bài giảng nào. Nội dung ghi đè được lưu trong trình duyệt này và hiển thị ngay cho sinh viên; bản gốc không bao giờ mất và có thể khôi phục bất cứ lúc nào."
    },
    overridden: { en: "Overridden", vi: "Đã ghi đè" },
    original: { en: "Original", vi: "Bản gốc" },
    overridesStored: { en: "override(s) stored", vi: "nội dung đã ghi đè" },
    htmlSource: { en: "HTML source", vi: "Mã nguồn HTML" },
    saveOverride: { en: "Save override", vi: "Lưu bản ghi đè" },
    refreshPreview: { en: "Refresh preview", vi: "Làm mới xem trước" },
    restoreOriginal: { en: "↺ Restore original", vi: "↺ Khôi phục bản gốc" },
    livePreview: { en: "Live preview", vi: "Xem trước trực tiếp" },

    arTitle: { en: "Student Attempts", vi: "Kết quả làm bài của sinh viên" },
    arSub: {
      en: "Quiz and mock-exam attempts recorded in this browser. For classroom-wide collection you would run a shared server.",
      vi: "Các lượt luyện tập và thi thử được ghi trong trình duyệt này. Để thu thập toàn lớp cần triển khai máy chủ dùng chung."
    },
    noAttemptsAdmin: { en: "No attempts recorded on this device yet.", vi: "Chưa ghi nhận lượt làm nào trên thiết bị này." },
    statAvg: { en: "Average score", vi: "Điểm trung bình" },
    statMockExams: { en: "Mock exams", vi: "Lượt thi thử" },
    statQsLive: { en: "Questions live", vi: "Câu hỏi đang dùng" },
    perfByChapter: { en: "Performance by chapter (all attempts)", vi: "Kết quả theo chương (tất cả lượt làm)" },
    colCorrect: { en: "Correct", vi: "Số câu đúng" },
    colAttempted: { en: "Attempted", vi: "Số câu làm" },
    colAccuracy: { en: "Accuracy", vi: "Tỷ lệ đúng" },
    colSignal: { en: "Signal", vi: "Đánh giá" },
    solid: { en: "Solid", vi: "Tốt" },
    reviewSignal: { en: "Review", vi: "Cần ôn" },
    reteach: { en: "Re-teach", vi: "Cần giảng lại" },
    noData: { en: "no data", vi: "chưa có dữ liệu" },
    allAttempts: { en: "All attempts", vi: "Tất cả lượt làm" },
    exportCsv: { en: "⬇ Export CSV", vi: "⬇ Xuất CSV" },
    clearAttempts: { en: "Clear all attempts", vi: "Xoá toàn bộ lượt làm" },

    secTitle: { en: "Security &amp; Audit Log", vi: "Bảo mật &amp; Nhật ký hệ thống" },
    secSub: {
      en: "The instructor password is stored only as a salted SHA-256 hash. Access is protected by an attempt limit, a lockout and an inactivity timeout.",
      vi: "Mật khẩu giảng viên chỉ được lưu dưới dạng băm SHA-256 có muối. Truy cập được bảo vệ bằng giới hạn số lần thử, khoá tạm thời và tự động đăng xuất khi không hoạt động."
    },
    pwState: { en: "Password state", vi: "Trạng thái mật khẩu" },
    pwDefault: { en: "Default", vi: "Mặc định" },
    pwCustom: { en: "Custom", vi: "Đã đổi" },
    failedAttempts: { en: "Failed attempts", vi: "Lần thử sai" },
    idleTimeout: { en: "Idle timeout", vi: "Thời gian chờ" },
    auditEntries: { en: "Audit entries", vi: "Bản ghi nhật ký" },
    demoWarning: { en: "⚠ The demo password is still in use.", vi: "⚠ Vẫn đang dùng mật khẩu demo." },
    demoWarningSub: {
      en: "Anyone who knows it can open this console on this device. Set your own password below.",
      vi: "Bất kỳ ai biết mật khẩu này đều có thể mở bảng điều khiển trên thiết bị này. Hãy đặt mật khẩu riêng bên dưới."
    },
    changePw: { en: "Change instructor password", vi: "Đổi mật khẩu giảng viên" },
    pwCurrent: { en: "Current password", vi: "Mật khẩu hiện tại" },
    pwNew: { en: "New password (min 8 characters)", vi: "Mật khẩu mới (tối thiểu 8 ký tự)" },
    pwConfirm: { en: "Confirm new password", vi: "Xác nhận mật khẩu mới" },
    updatePw: { en: "Update password", vi: "Cập nhật mật khẩu" },
    pwWrong: { en: "Current password is incorrect.", vi: "Mật khẩu hiện tại không đúng." },
    pwTooShort: { en: "New password must be at least 8 characters.", vi: "Mật khẩu mới phải có ít nhất 8 ký tự." },
    pwMismatch: { en: "The two new passwords do not match.", vi: "Hai mật khẩu mới không khớp nhau." },
    pwUpdated: { en: "Password updated. It is stored only as a salted hash.", vi: "Đã cập nhật mật khẩu. Mật khẩu chỉ được lưu dưới dạng băm có muối." },
    auditLog: { en: "Audit log", vi: "Nhật ký hệ thống" },
    auditSub: { en: "The most recent 500 security and content events on this device.", vi: "500 sự kiện bảo mật và nội dung gần nhất trên thiết bị này." },
    colTime: { en: "Time", vi: "Thời gian" },
    colAction: { en: "Action", vi: "Hành động" },
    colDetail: { en: "Detail", vi: "Chi tiết" },
    noEvents: { en: "No events recorded.", vi: "Chưa có sự kiện nào." },
    clearAudit: { en: "Clear audit log", vi: "Xoá nhật ký" },

    /* ---------------- login modal ---------------- */
    loginTitle: { en: "Instructor Access", vi: "Truy cập giảng viên" },
    loginSub: {
      en: "Enter the instructor password to open the admin console. Access is protected by a hashed password, an attempt limit and an inactivity timeout.",
      vi: "Nhập mật khẩu giảng viên để mở bảng điều khiển. Truy cập được bảo vệ bằng mật khẩu băm, giới hạn số lần thử và tự động đăng xuất."
    },
    passwordPh: { en: "Password", vi: "Mật khẩu" },
    signIn: { en: "Sign in", vi: "Đăng nhập" },
    demoPw: { en: "Demo password:", vi: "Mật khẩu demo:" },
    demoPwTail: { en: "— change it in Security &amp; Audit after signing in.", vi: "— hãy đổi trong mục Bảo mật &amp; Nhật ký sau khi đăng nhập." },
    pwChanged: {
      en: "Password was changed by the instructor. It is stored only as a salted SHA-256 hash.",
      vi: "Mật khẩu đã được giảng viên thay đổi. Mật khẩu chỉ lưu dưới dạng băm SHA-256 có muối."
    },
    lockedFor: { en: "Too many failed attempts. Locked for", vi: "Quá nhiều lần thử sai. Bị khoá trong" },
    seconds: { en: "s.", vi: " giây." },
    failedAttempt: { en: "failed attempt", vi: "lần thử sai" },
    remaining: { en: "remaining before lockout.", vi: "lần còn lại trước khi bị khoá." },

    /* ---------------- misc ---------------- */
    confirmDeleteQ: { en: "Delete question", vi: "Xoá câu hỏi" },
    confirmDiscard: { en: "Discard all added, edited and deleted questions?", vi: "Huỷ toàn bộ câu hỏi đã thêm, sửa và xoá?" },
    confirmRestore: { en: "Restore the original text for", vi: "Khôi phục nội dung gốc cho" },
    confirmClearAudit: { en: "Clear the audit log?", vi: "Xoá nhật ký hệ thống?" },
    completeAll: { en: "Please complete the question text and all four options.", vi: "Vui lòng nhập nội dung câu hỏi và đủ bốn phương án." },
    enterTitle: { en: "Please enter a title.", vi: "Vui lòng nhập tên tài liệu." },
    providePdf: { en: "Provide a PDF web address or choose a file.", vi: "Hãy nhập địa chỉ PDF hoặc chọn một tệp." },
    httpOnly: { en: "Only http(s) URLs are allowed.", vi: "Chỉ chấp nhận địa chỉ http(s)." },
    ttsUnsupported: { en: "Text-to-speech is not supported in this browser.", vi: "Trình duyệt này không hỗ trợ đọc thành tiếng." },

    /* ---------------- 2026-11: những chỗ app.js từng viết cứng tiếng Anh / tiếng Việt ---------------- */
    brandTitle: { en: "Investment Banking", vi: "Nghiệp vụ Ngân hàng Đầu tư" },
    langBi: { en: "EN·VI", vi: "EN·VI" },
    langBiTitle: { en: "Bilingual: Vietnamese first, English underneath", vi: "Song ngữ: tiếng Việt trước, tiếng Anh bên dưới" },
    docTitle: { en: "BAF736 · Investment Banking — Interactive Course", vi: "BAF736 · Nghiệp vụ Ngân hàng Đầu tư — Học phần tương tác" },
    ttsVoice: { en: "Voice", vi: "Giọng đọc" },
    ttsSpeed: { en: "Speed", vi: "Tốc độ" },
    ttsPauseTitle: { en: "Pause / Resume", vi: "Tạm dừng / Tiếp tục" },
    ttsStopTitle: { en: "Stop", vi: "Dừng" },
    sectionWord: { en: "Section", vi: "Mục" },
    /* "bi": dạng dùng ở chế độ đối chiếu khi ghép "EN · VI" vô nghĩa (tiền tố, đơn vị đi kèm số) */
    chShort: { en: "Ch.", vi: "Chương ", bi: "Chương " },
    qsShort: { en: "Qs", vi: "câu", bi: "câu" },
    qsWord: { en: "questions", vi: "câu", bi: "câu" },
    navCaseLib: { en: "Case Study Library", vi: "Thư viện tình huống" },
    navAdminCases: { en: "Case analyses & codes", vi: "Tình huống & mã cấp quyền" },
    navAdminMeta: { en: "Home page & syllabus", vi: "Trang chủ & Đề cương" },
    metaEditorMissing: { en: "Could not load the editor (vendor/tool-meta-editor.js).", vi: "Không nạp được trình biên soạn (vendor/tool-meta-editor.js)." },
    loginMissingVault: { en: "Missing js/case_analysis.enc.js — run cong-cu/ma-hoa-phan-tich.js.", vi: "Thiếu tệp js/case_analysis.enc.js — chạy cong-cu/ma-hoa-phan-tich.js." },
    loginHintVault: { en: "The instructor password is in cong-cu/MAT-KHAU-GIANG-VIEN.txt on the installer's computer (never deployed).", vi: "Mật khẩu giảng viên nằm trong tệp cong-cu/MAT-KHAU-GIANG-VIEN.txt trên máy của người cài đặt (không đưa lên mạng)." },
    failedAttemptsLow: { en: "failed attempts", vi: "lần thử sai" },
    addedTextbook: { en: "Added textbook", vi: "Giáo trình đã thêm" },
    uploadedTag: { en: "Uploaded", vi: "Tải lên" },
    phTitle: { en: "e.g., Corporate and Investment Banking (Caselli)", vi: "VD: Corporate and Investment Banking (Caselli)" },
    phAuthor: { en: "e.g., Caselli, S. (2021)", vi: "VD: Caselli, S. (2021)" },
    syllProgram: { en: "Bachelor, Finance–Banking", vi: "Đại học, ngành Tài chính – Ngân hàng" },
    syllPa1Heading: { en: "Process Assessment 1 — Mid-term written test (20%)", vi: "Đánh giá quá trình 1 — Bài kiểm tra viết giữa kỳ (20%)" },
    syllPa1Text: {
      en: "Held after Chapter 3 · closed book · covers Chapters 1–3 and requires application of knowledge (CLO1). Practise with the <b>Essay &amp; Case Bank</b>.",
      vi: "Tổ chức sau Chương 3 · không sử dụng tài liệu · phạm vi Chương 1–3, yêu cầu vận dụng kiến thức (CLO1). Luyện tập với <b>Ngân hàng tự luận &amp; tình huống</b>."
    },
    syllPa2Heading: { en: "Process Assessment 2 — Group work (20%)", vi: "Đánh giá quá trình 2 — Làm việc nhóm (20%)" },
    syllPa2Text: {
      en: "Groups select topics after each session, present, and question other groups. A consolidated essay is submitted at the final session (CLO3).",
      vi: "Các nhóm chọn chủ đề sau mỗi buổi học, thuyết trình và chất vấn các nhóm khác. Bài tiểu luận tổng hợp được nộp vào buổi học cuối (CLO3)."
    },
    runExam: { en: "Mock Final Exam", vi: "Thi thử cuối kỳ" },
    runPractice: { en: "Practice Quiz", vi: "Trắc nghiệm luyện tập" },
    scopeChapter: { en: "Chapter {0}", vi: "Chương {0}" },
    scopeExam: { en: "Final exam blueprint", vi: "Ma trận đề thi cuối kỳ" },
    submittedTitle: { en: "Submitted", vi: "Đã nộp bài" },
    submittedSub: { en: "Your result will appear under <b>Results</b> once the instructor releases it.", vi: "Kết quả sẽ hiện ở mục <b>Kết quả</b> khi giảng viên công bố." },
    answersLocked: { en: "Your instructor has turned off answer display for your class.", vi: "Giảng viên đang tắt hiển thị đáp án cho lớp của bạn." },
    examResultLine: {
      en: "Mock final exam result (pass benchmark 50% · scale: score × 0.25 = {0}/10). ",
      vi: "Kết quả thi thử (chuẩn đạt 50% · quy đổi: số câu đúng × 0,25 = {0}/10). "
    },
    bankSubLine: {
      en: "Browse every question in the course bank with its correct answer, worked explanation and source. {0} questions across {1} chapters.",
      vi: "Tra cứu toàn bộ câu hỏi của học phần kèm đáp án đúng, lời giải và nguồn tham chiếu. {0} câu hỏi thuộc {1} chương."
    },
    bankMatchLine: {
      en: "{0} question(s) match — showing {1} on this page. Click any question to reveal or hide its answer.",
      vi: "{0} câu hỏi phù hợp — đang hiển thị {1} câu ở trang này. Bấm vào câu hỏi để hiện hoặc ẩn đáp án."
    },
    essaySubLine: {
      en: "Free-response questions with model answers and marking rubrics — practice for the mid-term written test (Process Assessment 1, Chapters 1–3) and beyond. {0} questions worth {1} marks total.",
      vi: "Câu hỏi tự luận kèm đáp án mẫu và thang chấm điểm — luyện tập cho bài kiểm tra giữa kỳ (Đánh giá quá trình 1, Chương 1–3) và thi cuối kỳ. {0} câu hỏi, tổng {1} điểm."
    },
    essayShowLine: {
      en: "Showing {0} question(s). Click any question to reveal or hide its model answer and rubric.",
      vi: "Đang hiển thị {0} câu hỏi. Bấm vào câu hỏi để hiện hoặc ẩn đáp án mẫu và thang chấm."
    },
    mockPaperSubN: {
      en: "Chapters 1–3 · closed book · {0} marks. Attempt on paper before revealing any model answer.",
      vi: "Chương 1–3 · không sử dụng tài liệu · {0} điểm. Hãy tự làm ra giấy trước khi xem đáp án mẫu."
    },
    paperQ: { en: "Question {0} ({1} marks · {2})", vi: "Câu {0} ({1} điểm · {2})" },
    reviewSubLine: {
      en: "True/false statements and short-answer prompts with full explanations — the fastest way to check whether you really understood a chapter. {0} items.",
      vi: "Các nhận định đúng/sai và câu hỏi ngắn kèm giải thích đầy đủ — cách nhanh nhất để kiểm tra bạn đã thực sự hiểu chương hay chưa. {0} mục."
    },
    reviewShowLine: { en: "Showing {0} item(s). Click any item to reveal its answer.", vi: "Đang hiển thị {0} mục. Bấm vào từng mục để xem đáp án." },
    revisionSubLine: {
      en: "Everything you need before the exams: the official exam structures, a formula sheet per chapter, and {0} flashcards of key terms.",
      vi: "Mọi thứ bạn cần trước kỳ thi: cấu trúc đề chính thức, bảng công thức từng chương và {0} thẻ ghi nhớ thuật ngữ."
    },
    cardLine: { en: "Card {0} of {1} — click the card to flip", vi: "Thẻ {0}/{1} — bấm vào thẻ để lật" },
    qmMatchLine: { en: "{0} match · page {1}/{2}", vi: "{0} câu phù hợp · trang {1}/{2}" },
    editQ: { en: "Edit {0}", vi: "Sửa {0}" },
    newQuestionTitle: { en: "New question", vi: "Câu hỏi mới" },
    phSrc: { en: "e.g. Ch.3 §3.3", vi: "VD: Chương 3 §3.3" },
    ecBlocks: {
      en: "Available blocks: &lt;div class=\"formula\"&gt; · &lt;div class=\"example\"&gt; · &lt;div class=\"keyterm\"&gt; · &lt;div class=\"note\"&gt; · standard &lt;h2&gt; &lt;h3&gt; &lt;p&gt; &lt;ul&gt; &lt;table&gt;.",
      vi: "Các khối dùng được: &lt;div class=\"formula\"&gt; · &lt;div class=\"example\"&gt; · &lt;div class=\"keyterm\"&gt; · &lt;div class=\"note\"&gt; · và các thẻ chuẩn &lt;h2&gt; &lt;h3&gt; &lt;p&gt; &lt;ul&gt; &lt;table&gt;."
    },
    ecEditingLang: { en: "You are editing the {0} version of this section.", vi: "Bạn đang sửa bản {0} của mục này." },
    langNameEn: { en: "English", vi: "tiếng Anh" },
    langNameVi: { en: "Vietnamese", vi: "tiếng Việt" },
    colKnowUnd: { en: "Bank: Know/Und.", vi: "Ngân hàng: Nhớ/Hiểu" },
    adminSubLine: {
      en: "Manage the question bank, edit lecture content, review student attempts and audit security events. All changes persist in this browser (localStorage) and apply instantly to the student interface.",
      vi: "Quản lý ngân hàng câu hỏi, chỉnh sửa nội dung bài giảng, xem kết quả sinh viên và kiểm tra nhật ký bảo mật. Mọi thay đổi được lưu trong trình duyệt này (localStorage) và áp dụng ngay cho giao diện sinh viên."
    },
    secSubVault: {
      en: "The instructor password opens an encrypted vault (PBKDF2-HMAC-SHA-256, 100,000 rounds) holding the case-analysis access codes; nothing about the password is stored in clear. Access is also protected by an attempt limit, a lockout and an inactivity timeout.",
      vi: "Mật khẩu giảng viên mở một két mã hoá (PBKDF2-HMAC-SHA-256, 100.000 vòng) chứa các mã cấp quyền xem bài phân tích tình huống; mật khẩu không được lưu ở dạng rõ. Truy cập còn được bảo vệ bằng giới hạn số lần thử, khoá tạm thời và tự đăng xuất khi không hoạt động."
    },
    pwFromTool: { en: "From tool", vi: "Theo công cụ" },
    pwChangedHere: { en: "Changed here", vi: "Đã đổi tại đây" },
    secVaultNote: {
      en: "Changing the password here re-locks the vault on <b>this device only</b>. To change it for every copy of the site, run <code>node cong-cu/ma-hoa-phan-tich.js --mat-khau=\"…\"</code> and redeploy the <code>web</code> folder.",
      vi: "Đổi mật khẩu ở đây chỉ khoá lại két trên <b>thiết bị này</b>. Muốn đổi cho mọi bản của trang, hãy chạy <code>node cong-cu/ma-hoa-phan-tich.js --mat-khau=\"…\"</code> rồi đưa lại thư mục <code>web</code> lên mạng."
    },
    pwNewMin: { en: "New password (min 8 characters)", vi: "Mật khẩu mới (tối thiểu 8 ký tự)" },
    pwUpdatedVault: { en: "Password updated on this device. The vault of access codes is now locked with the new password.", vi: "Đã cập nhật mật khẩu trên thiết bị này. Két mã cấp quyền nay được khoá bằng mật khẩu mới." },
    demoWarningSubCode: {
      en: "Anyone who knows <code>hub@baf736</code> can open this console on this device. Set your own password below.",
      vi: "Bất kỳ ai biết <code>hub@baf736</code> đều có thể mở bảng điều khiển trên thiết bị này. Hãy đặt mật khẩu riêng bên dưới."
    }
  };

  /* Ba chế độ, theo khuôn chung của các công cụ khoá học HUB (FIN719, FIN718, FMC):
       "en" → chỉ tiếng Anh · "vi" → chỉ tiếng Việt
       "bi" → đối chiếu: nhãn giao diện "EN · VI"; nội dung hiện tiếng Việt trước, tiếng Anh in nhạt
              bên dưới (lớp .bi-alt) — sinh viên đọc tiếng Việt để hiểu, đối chiếu tiếng Anh để đọc
              giáo trình gốc và đi thi. Thiếu bản dịch ở đâu thì chỗ đó chỉ hiện tiếng Anh. */
  var lang = "en";
  try {
    var saved = localStorage.getItem(STORE_KEY);
    if (saved === "vi" || saved === "en" || saved === "bi") lang = saved;
  } catch (e) {}

  function apDung() {
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "vi");
    var cl = document.body && document.body.classList;
    if (cl && typeof cl.toggle === "function") {   /* hộp cát của bộ kiểm không có toggle */
      cl.toggle("lang-vi", lang === "vi");
      cl.toggle("lang-bi", lang === "bi");
    }
  }

  window.I18N = {
    get lang() { return lang; },
    set: function (next) {
      if (next !== "vi" && next !== "en" && next !== "bi") return;
      lang = next;
      try { localStorage.setItem(STORE_KEY, next); } catch (e) {}
      apDung();
    },
    dict: DICT,
    /** number of dictionary keys — used by the self-check */
    size: Object.keys(DICT).length
  };

  function chen(s, args) {
    s = String(s == null ? "" : s);
    for (var i = 0; i < args.length; i++) s = s.split("{" + i + "}").join(args[i]);
    return s;
  }

  /** Translate a UI key. Falls back to English, then to the key itself.
   *  Chế độ đối chiếu: "EN · VI" (thuần văn bản — dùng được cả trong thuộc tính và <option>). */
  /* Biểu tượng đầu chuỗi (, …) giống nhau ở hai vế thì vế sau bỏ đi — tránh "Student · Sinh viên". */
  var DAU = /^[^0-9A-Za-zÀ-ỹ<(“"'\[]+/;
  function boDau(truoc, sau) {
    var a = DAU.exec(String(truoc)), b = DAU.exec(String(sau));
    return a && b && a[0].trim() && a[0].trim() === b[0].trim() ? String(sau).slice(b[0].length) : sau;
  }
  function noi(a, b) { return a + " · " + boDau(a, b); }

  window.T = function (key) {
    var entry = DICT[key];
    if (!entry) return key;
    if (lang === "bi") {
      if (entry.bi != null) return entry.bi;
      var e = entry.en || key, v = entry.vi || e;
      return e === v ? e : noi(e, v);
    }
    return entry[lang] || entry.en || key;
  };
  /** Như T() nhưng thay {0}, {1}… bằng tham số — cho những câu có con số ở giữa. */
  window.Tf = function (key) {
    var args = Array.prototype.slice.call(arguments, 1);
    var entry = DICT[key];
    if (!entry) return chen(key, args);
    if (lang === "bi" && entry.bi != null) return chen(entry.bi, args);
    var e = chen(entry.en || key, args), v = chen(entry.vi || entry.en || key, args);
    if (lang === "bi") return e === v ? e : noi(e, v);
    return lang === "vi" ? v : e;
  };

  var KHOI = /<(p|div|ul|ol|table|h[1-6]|section|figure|svg|blockquote|br)\b/i;
  function ghep(vi, en) {
    if (vi === undefined || vi === null || vi === "") return en;
    if (en === undefined || en === null || en === "" || vi === en) return vi;
    if (Array.isArray(vi) || Array.isArray(en)) {
      var a = Array.isArray(vi) ? vi : [], b = Array.isArray(en) ? en : [];
      var n = Math.max(a.length, b.length), out = [];
      for (var i = 0; i < n; i++) out.push(ghep(a[i], b[i]));
      return out;
    }
    if (typeof vi !== "string" || typeof en !== "string") return vi;
    var dai = KHOI.test(vi) || KHOI.test(en) || vi.replace(/<[^>]+>/g, "").length > 160;
    return dai
      ? vi + '<div class="bi-alt" lang="en">' + en + "</div>"
      : vi + '<span class="bi-alt" lang="en"> · ' + boDau(vi, en) + "</span>";
  }

  /**
   * Localised data accessor. Returns obj[field + "Vi"] when Vietnamese is
   * active and that variant exists and is non-empty; otherwise obj[field].
   * In bilingual mode returns Vietnamese followed by the English original (.bi-alt).
   * This lets the data files be translated incrementally without breaking.
   */
  window.L = function (obj, field) {
    if (!obj) return "";
    var v = obj[field + "Vi"];
    var coVi = v !== undefined && v !== null && v !== "";
    if (lang === "vi") return coVi ? v : obj[field];
    if (lang === "bi") return coVi ? ghep(v, obj[field]) : obj[field];
    return obj[field];
  };
  /** Bản THUẦN VĂN BẢN của L(): không chèn thẻ — dùng trong thuộc tính, <option>, esc(), đọc thành tiếng. */
  window.Lp = function (obj, field) {
    if (!obj) return "";
    var v = obj[field + "Vi"], e = obj[field];
    var coVi = v !== undefined && v !== null && v !== "";
    if (lang === "vi") return coVi ? v : e;
    if (lang === "bi" && coVi && typeof v === "string" && v !== e) return noi(v, e);
    return e;
  };
  /** Ghép hai khối đã dựng sẵn theo từng ngôn ngữ (đào sâu, tình huống, công thức…). */
  window.ghepKhoi = function (vi, en) { return ghep(vi, en); };

  /** True when the Vietnamese-only interface is active. Chế độ đối chiếu dùng isBi(). */
  window.isVi = function () { return lang === "vi"; };
  window.isBi = function () { return lang === "bi"; };
  /** Có hiện tiếng Việt không (vi hoặc đối chiếu) — cho những chỗ chỉ chọn MỘT bản. */
  window.coViet = function () { return lang !== "en"; };

  apDung();
  document.addEventListener("DOMContentLoaded", apDung);
})();
