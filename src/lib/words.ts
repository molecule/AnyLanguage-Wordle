import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { CONFIG } from '../constants/config'

export const isWordInWordList = (word: string) => {
  return WORDS.includes(word) || VALIDGUESSES.includes(word)
}

//export const isWinningWord = (word: string) => {
 // return solution === word
//}

export const getSpecificWord = (index: number) => {
  return {
    solution: WORDS[index % WORDS.length],
    solutionIndex: index,
    tomorrow: -1
  }
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = new Date(CONFIG.startDate).valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: WORDS[index % WORDS.length],
    solutionIndex: index,
    tomorrow: nextday,
  }
}

//export const { solution, solutionIndex, tomorrow } = getWordOfDay()
export const { solution, solutionIndex, tomorrow } = getSpecificWord(0)

