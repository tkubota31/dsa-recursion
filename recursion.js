/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length ===0) return 1;

  return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, answer=0, idx=0) {
  if(words.length === idx) return answer;

  if(words[idx].length > answer){
    answer = words[idx].length
  }
  return longest(words,answer,idx +1)

}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, ans="") {
  if(idx >= str.length) return ans

  ans += str[idx]

  return everyOther(str, idx + 2,ans)

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=str.length-1, ans="") {
  if (idx < 0) return false

  ans += str[idx]

  if(ans === str) return true
  return isPalindrome(str, idx - 1, ans)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx >= arr.length) return -1
  if(arr[idx] === val) return idx
  return findIndex(arr,val, idx + 1, )
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = str.length-1, ans="") {
  if(idx < 0) return ans

  ans += str[idx]
  return revString(str, idx - 1, ans)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj,ans=[]) {
  for(let key in obj){
    if(typeof obj[key] === "string"){
      ans.push(obj[key])
    }
    if(typeof obj[key] === "object"){
      ans.push(...gatherStrings(obj[key]))
    }
  }
  return ans
}



/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right =arr.length-1) {
  if(left > right) return -1;

  let middleIdx = Math.floor((left+right)/2)

  if(arr[middleIdx] === val) return middleIdx;

  if(arr[middleIdx] < val){
    return binarySearch(arr,val,middleIdx+1,right)
  } else{
    return binarySearch(arr,val,left, middleIdx-1)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
