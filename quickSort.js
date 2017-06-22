function quickSort(arr){

    qSort(arr,0,arr.length - 1);

}

function qSort(arr,low,high){

    if(low < high){

        var partKey = partition(arr,low,high);

        qSort(arr,low, partKey - 1);

        qSort(arr,partKey + 1,high);

    }

}

function partition(arr,low,high){

    var key = arr[low];  //使用第一个元素作为分类依据

    while(low < high){

        while(low < high && arr[high] >= key)

            high--;

        arr[low] = arr[high];

        while(low < high && arr[low] <= key)

            low++;

        arr[high] = arr[low];

    }

    arr[low] = key;

    return low;

}

var a = [10, 7, 12, 8];
quickSort(a);
console.log(a);