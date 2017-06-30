function letterCombinations (digits) {
    var mapping = ["0", "1", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    var length = digits && digits.length;
    if (!length) {
        return [];
    }
    var tmpArr = [];
    var result = [''];


    for (var i=0;i<length;i++) {
        var mappingStr = mapping[digits[i]];
        tmpArr = result;
        result = [];
        for (var j=0;j<tmpArr.length;j++) {
            for (var k=0;k<mappingStr.length;k++) {

                result.push(tmpArr[j]+mappingStr.charAt(k));
            }
        }
    }
    return result;
}

var result = letterCombinations('23');
console.log(result);