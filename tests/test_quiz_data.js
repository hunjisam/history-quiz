const assert = require('assert');
const { QUIZ_QUESTIONS, QuizEngine } = require('../quiz-data.js');

console.log('--- 퀴즈 데이터 및 엔진 단위 테스트 시작 ---');

// 1. 문항 개수 검증 (정확히 10문항)
assert.strictEqual(Array.isArray(QUIZ_QUESTIONS), true, 'QUIZ_QUESTIONS는 배열이어야 합니다.');
assert.strictEqual(QUIZ_QUESTIONS.length, 10, '문항 개수는 정확히 10개여야 합니다.');

// 2. 각 문항 필드 및 데이터 유효성 검증
QUIZ_QUESTIONS.forEach((q, idx) => {
    assert.strictEqual(q.id, idx + 1, `문항 id는 1부터 순서대로여야 합니다. (발견: ${q.id})`);
    assert.ok(typeof q.question === 'string' && q.question.trim().length > 10, `문항 ${q.id}의 질문이 너무 짧거나 비어있습니다.`);
    assert.ok(Array.isArray(q.options), `문항 ${q.id}의 선택지는 배열이어야 합니다.`);
    assert.strictEqual(q.options.length, 4, `문항 ${q.id}의 선택지는 4지선다여야 합니다.`);
    q.options.forEach((opt, optIdx) => {
        assert.ok(typeof opt === 'string' && opt.trim().length > 0, `문항 ${q.id}의 보기 ${optIdx + 1}이 비어있습니다.`);
    });
    assert.ok(Number.isInteger(q.answerIndex) && q.answerIndex >= 0 && q.answerIndex <= 3, `문항 ${q.id}의 정답 인덱스는 0~3 사이 정수여야 합니다.`);
    assert.ok(typeof q.explanation === 'string' && q.explanation.trim().length > 10, `문항 ${q.id}의 해설이 너무 짧거나 비어있습니다.`);
});
console.log('✓ 문항 데이터 검증 통과 (10문항 4지선다, 질문/해설 포맷 정상)');

// 3. QuizEngine 상태 관리 및 채점 로직 검증
const engine = new QuizEngine(QUIZ_QUESTIONS);
assert.strictEqual(engine.getCurrentIndex(), 0);
assert.strictEqual(engine.getScore(), 0);
assert.strictEqual(engine.isFinished(), false);

// 1번 문제 정답 제출
const q1 = engine.getCurrentQuestion();
const q1Correct = engine.submitAnswer(q1.answerIndex);
assert.strictEqual(q1Correct.isCorrect, true);
assert.strictEqual(engine.getScore(), 10);
assert.strictEqual(engine.isAnswered(), true);

// 중복 제출 방지 검증
assert.throws(() => {
    engine.submitAnswer(0);
}, /이미 답변이 제출되었습니다/);

// 다음 문제 이동
assert.strictEqual(engine.nextQuestion(), true);
assert.strictEqual(engine.getCurrentIndex(), 1);
assert.strictEqual(engine.isAnswered(), false);

// 2번 문제 오답 제출
const q2 = engine.getCurrentQuestion();
const wrongIndex = (q2.answerIndex + 1) % 4;
const q2Result = engine.submitAnswer(wrongIndex);
assert.strictEqual(q2Result.isCorrect, false);
assert.strictEqual(engine.getScore(), 10); // 오답이므로 점수 변화 없음

// 남은 문제 전부 풀기
for (let i = 2; i < 10; i++) {
    engine.nextQuestion();
    const q = engine.getCurrentQuestion();
    engine.submitAnswer(q.answerIndex); // 정답 제출
}

// 10번 문제 해설 확인 후 '결과 보기' 클릭하여 종료 상태로 이동
const hasNext = engine.nextQuestion();
assert.strictEqual(hasNext, false, '10번 문제 후에는 다음 문제가 없어야 합니다.');
assert.strictEqual(engine.isFinished(), true, '10문제를 모두 마치면 isFinished가 true여야 합니다.');
assert.strictEqual(engine.getScore(), 90); // 10문제 중 9문제 맞힘 (90점)
assert.strictEqual(engine.getCorrectCount(), 9);

// 리셋 기능 검증
engine.reset();
assert.strictEqual(engine.getCurrentIndex(), 0);
assert.strictEqual(engine.getScore(), 0);
assert.strictEqual(engine.getCorrectCount(), 0);
assert.strictEqual(engine.isFinished(), false);
assert.strictEqual(engine.isAnswered(), false);

console.log('✓ QuizEngine 상태 관리 및 채점 로직 검증 통과');
console.log('모든 단위 테스트 성공!');
