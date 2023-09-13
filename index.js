function isPalindrome(word) {
  let left = 0
  let right = word.length-1
  while(left<right){
    if(word[left] != word[right]){
      return false
    }
    left++
    right--
  }
  return true
}


/* 
left = 0
right = length(word)-1

while left < right do
left++
right--

if word[left] !== word[right] then
return false
end

return true

*/


/*
  my code assumes only letters or numbers will be passed in
  i set one counter for the left letter and one for the right
  run a while loop that runs until the left counter is more that the right counter
  this makes it so the two counters point to letters and they stop in the middle so as not to be redundant
  if the two pointers dont equal eachother then return false because its not a palindrome
  at the end return true because if it didnt ever return false then its true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
