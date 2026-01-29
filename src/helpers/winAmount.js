import { SUMS, GOLD_INDICES_SUMS } from "../constants/sums";

export const calculateGuaranteedAmount = (currentQuestionIndex) => {
	let guaranteedAmount = 0;

	GOLD_INDICES_SUMS.forEach((goldIndex) => {
		if (currentQuestionIndex > goldIndex) {
			guaranteedAmount = SUMS[goldIndex]
		}
	})

	return guaranteedAmount
}

export const getWinAmount = (questionIndex) => {
	return SUMS[questionIndex - 1] || 0
}