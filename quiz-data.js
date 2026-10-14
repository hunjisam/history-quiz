/**
 * 중학교 3학년 사회(역사) '조선 시대 문화' 퀴즈 데이터 및 상태 엔진
 */

const QUIZ_QUESTIONS = [
    {
        id: 1,
        question: "세종대왕이 한자를 몰라 억울한 일을 겪는 백성들을 가엽게 여겨 창제한 우리나라 고유의 문자는 무엇일까요?",
        options: [
            "이두",
            "훈민정음",
            "향찰",
            "구결"
        ],
        answerIndex: 1,
        explanation: "세종대왕은 백성들이 자신의 뜻을 쉽게 표현할 수 있도록 1443년에 훈민정음(한글)을 창제하였습니다."
    },
    {
        id: 2,
        question: "조선 세종 때 장영실 등이 제작한 것으로, 물이 차오르면 쇠구슬이 굴러 자동으로 종과 북을 쳐서 시간을 알려주던 시계는?",
        options: [
            "앙부일구",
            "혼천의",
            "자격루",
            "일성정시의"
        ],
        answerIndex: 2,
        explanation: "자격루는 물의 흐름을 이용해 정해진 시간마다 자동으로 종과 북을 울리던 조선의 표준 물시계입니다."
    },
    {
        id: 3,
        question: "조선 시대에 비가 내린 양을 과학적으로 측정하여 농사에 도움을 주기 위해 만든 세계 최초의 우량 측정 기구는?",
        options: [
            "풍기대",
            "측우기",
            "수표",
            "혼상"
        ],
        answerIndex: 1,
        explanation: "측우기는 세종 때 제작된 세계 최초의 강우량 측정기로, 전국 각지의 강수량을 통일된 규격으로 측정했습니다."
    },
    {
        id: 4,
        question: "태조부터 철종까지 25대 472년간의 역사를 사관들이 날짜순으로 꼼꼼히 기록한 유네스코 세계기록유산은 무엇일까요?",
        options: [
            "조선왕조실록",
            "승정원일기",
            "삼국사기",
            "고려사"
        ],
        answerIndex: 0,
        explanation: "조선왕조실록은 왕이라도 함부로 볼 수 없을 만큼 사관의 독립성과 객관성이 철저히 지켜진 세계적인 기록 문화유산입니다."
    },
    {
        id: 5,
        question: "조선 시대 선비들의 검소함과 절제미를 잘 나타내며, 유교적 지조와 결백을 상징하여 널리 사랑받은 도자기는?",
        options: [
            "상감청자",
            "백자",
            "토기",
            "옹기"
        ],
        answerIndex: 1,
        explanation: "조선 시대에는 소박하고 순수한 유교 선비 정신을 반영하는 백자가 널리 제작되고 발전하였습니다."
    },
    {
        id: 6,
        question: "조선 후기 실학자 정약용이 도르래 원리를 활용하여 무거운 돌을 쉽게 들어 올려 수원 화성 축조에 크게 기여한 도구는?",
        options: [
            "거중기",
            "녹로",
            "유형거",
            "신기전"
        ],
        answerIndex: 0,
        explanation: "정약용은 도르래를 이용한 거중기를 고안하여 수원 화성을 쌓는 데 드는 공사 기간과 경비를 크게 줄였습니다."
    },
    {
        id: 7,
        question: "조선 후기 농업과 상업의 발달로 서민의 경제력이 커지면서 유행한 서민 문화가 아닌 것은 무엇일까요?",
        options: [
            "판소리와 탈춤",
            "한글 소설 (춘향전, 홍길동전)",
            "민화",
            "고려가요와 향가"
        ],
        answerIndex: 3,
        explanation: "향가와 고려가요는 삼국~고려 시대의 문학이며, 조선 후기에는 판소리, 탈춤, 한글 소설, 민화 등 서민 문화가 크게 발달했습니다."
    },
    {
        id: 8,
        question: "조선 후기 서민들의 일상생활 모습(씨름, 서당, 대장간 등)을 해학적이고 생동감 넘치게 그린 대표적인 풍속 화가는?",
        options: [
            "김홍도",
            "안견",
            "강희안",
            "장승업"
        ],
        answerIndex: 0,
        explanation: "단원 김홍도는 조선 후기 서민들의 다양한 삶과 풍속을 정감 있고 해학적인 필치로 생생하게 그려냈습니다."
    },
    {
        id: 9,
        question: "중국 산수화 모방에서 벗어나 우리나라의 아름다운 실제 산천을 직접 답사하고 독창적인 화법으로 그린 '진경산수화'의 대표 화가는?",
        options: [
            "정선",
            "신사임당",
            "이암",
            "정약전"
        ],
        answerIndex: 0,
        explanation: "겸재 정선은 『인왕제색도』와 『금강전도』처럼 조선의 실제 자연 경관을 화폭에 담는 진경산수화를 완성했습니다."
    },
    {
        id: 10,
        question: "허준이 우리나라와 중국의 의학 서적을 종합하고, 우리 땅에서 나는 약재로 백성들을 쉽게 치료할 수 있도록 펴낸 유네스코 세계기록유산 의서는?",
        options: [
            "동의보감",
            "향약집성방",
            "의방유취",
            "마과회통"
        ],
        answerIndex: 0,
        explanation: "『동의보감』은 백성 누구나 쉽게 병을 예방하고 치료할 수 있도록 집대성한 조선 최고의 백과사전식 의학서입니다."
    }
];

class QuizEngine {
    constructor(questions = QUIZ_QUESTIONS) {
        this.questions = questions;
        this.currentIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.answered = false;
        this.userAnswers = [];
    }

    getCurrentIndex() {
        return this.currentIndex;
    }

    getTotalQuestions() {
        return this.questions.length;
    }

    getCurrentQuestion() {
        return this.questions[this.currentIndex];
    }

    isAnswered() {
        return this.answered;
    }

    isFinished() {
        return this.currentIndex >= this.questions.length;
    }

    getScore() {
        return this.score;
    }

    getCorrectCount() {
        return this.correctCount;
    }

    submitAnswer(selectedOptionIndex) {
        if (this.isFinished()) {
            throw new Error('이미 퀴즈가 종료되었습니다.');
        }
        if (this.answered) {
            throw new Error('이미 답변이 제출되었습니다.');
        }

        const currentQ = this.getCurrentQuestion();
        const isCorrect = (selectedOptionIndex === currentQ.answerIndex);

        this.answered = true;
        if (isCorrect) {
            this.correctCount += 1;
            this.score += 10;
        }

        const result = {
            questionId: currentQ.id,
            selectedIndex: selectedOptionIndex,
            correctIndex: currentQ.answerIndex,
            isCorrect: isCorrect,
            explanation: currentQ.explanation
        };

        this.userAnswers.push(result);
        return result;
    }

    nextQuestion() {
        if (!this.answered) {
            throw new Error('답변을 먼저 제출해야 다음 문제로 진행할 수 있습니다.');
        }
        this.currentIndex += 1;
        this.answered = false;
        return this.currentIndex < this.questions.length;
    }

    reset() {
        this.currentIndex = 0;
        this.score = 0;
        this.correctCount = 0;
        this.answered = false;
        this.userAnswers = [];
    }
}

// Node.js 환경 및 브라우저 환경 호환
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUIZ_QUESTIONS, QuizEngine };
}
if (typeof window !== 'undefined') {
    window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
    window.QuizEngine = QuizEngine;
}
