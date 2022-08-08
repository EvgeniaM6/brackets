module.exports = function check(str, bracketsConfig) {
  // your solution
  let result

  let openBrackets = []
  openBrackets.push(...bracketsConfig.map((item) => (item[0])))

  let bracketsPair = {}
  bracketsConfig.forEach((item) => {
    bracketsPair[item[1]] = item[0]
  })

  let stack = []
  for (let i = 0; i < str.length; i++) {
    const checkedBracket = str[i];
    let lastStackBracket = stack[stack.length - 1]
    
    if (openBrackets.includes(checkedBracket)) {
      if (checkedBracket !== bracketsPair[checkedBracket]) {
        stack.push(checkedBracket)
      } else {
        if (checkedBracket === lastStackBracket) {
          stack.pop()
        } else {
          stack.push(checkedBracket)
        }
      }

    } else {
      if (stack.length === 0) {
        return false
      }

      if (bracketsPair[checkedBracket] === lastStackBracket) {
        stack.pop()
      } else {
        return false
      }
    } 
  }
  return stack.length === 0
}
