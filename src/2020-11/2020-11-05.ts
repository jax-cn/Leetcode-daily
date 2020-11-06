/*
单词接龙
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。

https://leetcode-cn.com/problems/word-ladder/submissions/
*/

// TODO: 做错了，需要重做
const compareResult = new Map<string, boolean>()
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let solutions = findNextWord(beginWord, wordList)
  while (solutions.length) {
    let result
    let newSolutions: {
      next: string
      rest: string[]
    }[] = []
    for (let i = 0; i < solutions.length; i++) {
      const { next, rest } = solutions[i]
      console.log(next, rest)
      if (next === endWord) {
        result = wordList.length - rest.length + 1
        break
      } else {
        newSolutions = newSolutions.concat(findNextWord(next, rest))
      }
    }
    if (result) {
      return result
    }
    solutions = newSolutions
  }
  return 0
  function findNextWord(word: string, wordList: string[]) {
    const nextWords = []
    for (let i = 0; i < wordList.length; i++) {
      if (isSibling(wordList[i], word)) {
        const restWordList = wordList.slice(0)
        restWordList.splice(i, 1)
        nextWords.push({
          next: wordList[i],
          rest: restWordList,
        })
      }
    }
    return nextWords
  }
  function isSibling(w1: string, w2: string) {
    const cacheKey1 = w1 + ',' + w2
    const cacheKey2 = w2 + ',' + w1
    const cacheResult =
      compareResult.get(cacheKey1) || compareResult.get(cacheKey2)
    if (cacheResult != null) return cacheResult
    let hasDiff = false
    for (let i = 0; i < w1.length; i++) {
      if (w1[i] !== w2[i]) {
        if (hasDiff) {
          hasDiff = false
          break
        } else {
          if (w2[i] === endWord[i]) break
          hasDiff = true
        }
      }
    }
    compareResult.set(cacheKey1, hasDiff)
    compareResult.set(cacheKey2, hasDiff)
    return hasDiff
  }
}

console.log(
  ladderLength('ymain', 'oecij', [
    'ymann',
    'yycrj',
    'oecij',
    'ymcnj',
    'yzcrj',
    'yycij',
    'xecij',
    'yecij',
    'ymanj',
    'yzcnj',
    'ymain',
  ])
)
