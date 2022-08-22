let arr = [1, 2, 4, 5, 6];

function BinarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  while (max >= min) {
    mid = Math.floor((min + max) / 2);
    midVal = arr[mid];
    console.log(mid, midVal);
    if (midVal < target) min = mid + 1;
    else if (midVal > target) max = mid - 1;
    else return mid;
  }
  return -1;
}

console.log("res", BinarySearch(arr, 3));
