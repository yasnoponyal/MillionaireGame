/**
 * Хук для управления подсказками
 */
export const useHints = ({
  currentQuestion,
  shuffledAnswers,
  isFiftyFiftyUsed,
  setIsFiftyFiftyUsed,
  isPhoneUsed,
  setIsPhoneUsed,
  visibleAnswers,
  setVisibleAnswers,
}) => {
  /**
   * Активация подсказки "50 на 50"
   * Оставляет только правильный ответ и один случайный неправильный
   */
  const handleFiftyFifty = () => {
    if (!isFiftyFiftyUsed && currentQuestion && shuffledAnswers.length > 0) {
      const wrongAnswers = shuffledAnswers.filter(
        answer => answer !== currentQuestion.correct
      );
      const randomWrongAnswer = wrongAnswers[
        Math.floor(Math.random() * wrongAnswers.length)
      ];
      
      // Если уже есть видимые ответы (использована другая подсказка)
      // объединяем с существующими
      if (visibleAnswers.length > 0) {
        // Создаём Set для уникальности
        const combined = new Set([
          ...visibleAnswers,
          currentQuestion.correct,
          randomWrongAnswer
        ]);
        setVisibleAnswers(Array.from(combined));
      } else {
        setVisibleAnswers([currentQuestion.correct, randomWrongAnswer]);
      }
      
      setIsFiftyFiftyUsed(true);
    }
  };

  /**
   * Активация подсказки "Звонок другу"
   * Показывает правильный ответ (подсвечивает его среди видимых)
   */
  const handlePhone = () => {
    if (!isPhoneUsed && currentQuestion && shuffledAnswers.length > 0) {
      // Если уже есть видимые ответы (например, использован 50/50)
      // добавляем правильный ответ к существующим
      if (visibleAnswers.length > 0) {
        // Создаём Set для уникальности
        const combined = new Set([
          ...visibleAnswers,
          currentQuestion.correct
        ]);
        setVisibleAnswers(Array.from(combined));
      } else {
        // Если ещё не использованы подсказки, показываем только правильный
        setVisibleAnswers([currentQuestion.correct]);
      }
      
      setIsPhoneUsed(true);
    }
  };

  return {
    handleFiftyFifty,
    handlePhone,
  };
};