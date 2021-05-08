// create palace

var n = 5;
var src = [0, 0];
var des = [n -1, n-1];
var wall = [[1, 1], [2, 3], [3, 3]];
var next = [[0, -1], [0, 1], [-1, 0], [1, 0]];
var minCount = n * n + 1;
var stepPath = [];

var palace = [];
for (var i = 0; i < n; i++) {
    for (var j = 0; j< n; j++) {
        palace.push([i, j, 1]);
    }
}

for (var i = 0; i < wall.length; i++) {
    palace[wall[i][0] * 5 + wall[i][1]][2] = 0
}
console.log(palace);

function drawPalace(palace) {
    console.log('-----------');
    for (var i = 0; i < n; i++) {
        var palaceString = '';
        for (var j = 0; j < n; j++) {
            if (i === src[0] && j === src[1]) {
                palaceString += '^ ';
            } else if (i === des[0] && j === des[1]) {
                palaceString += '@ ';
            } else if (palace[i * n + j][2] === 1) {
                palaceString += '* ';
            } else if (palace[i * n + j][2] === 0) {
                palaceString += '# ';
            } else if (palace[i * n + j][2] === 2) {
                palaceString += '% ';
            }
        }
        console.log(palaceString + '|');
    }
    console.log('-----------');
}

drawPalace(palace);

function searchPath(beginPosition, result, stepCount) {
    if (beginPosition[0] === des[0] && beginPosition[1] === des[1]) {
        if (minCount > stepCount) {
            minCount = stepCount;
            stepPath = [];
            for (var j = 0; j < result.length; j++) {
                stepPath.push([result[j][0], result[j][1]]);
            }
            // console.log('result ', result);
           // result = [];
        }
        return;
    }

    for (var i = 0; i< next.length; i++) {
        var rowPosition = beginPosition[0] + next[i][0];
        var colPosition = beginPosition[1] + next[i][1];
        if (rowPosition < 0 || rowPosition >= n || colPosition < 0 || colPosition >= n) {
            continue;
        }
        
        if (palace[rowPosition * n + colPosition][2] === 1) {
            result.push([rowPosition, colPosition]);
            palace[rowPosition * n + colPosition][2] = 0;

            searchPath([rowPosition, colPosition], result, stepCount + 1)

            palace[rowPosition * n + colPosition][2] = 1;
            result.pop();
        }
    }
}

palace[src[0] * n + src[1]] = 0;
searchPath(src, [], 0);

for (var i = 0; i < stepPath.length; i ++) {
    palace[stepPath[i][0] * n + stepPath[i][1]][2] = 2;
}

if (minCount <= n * n) {
    drawPalace(palace);

    console.log('Shortest path: ' + minCount);
    console.log(stepPath);
} else {
    console.log("Can't find path");
}
