var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;

    for (let k = m + n - 1; k >= 0; k--) {
        if (j < 0) break;

        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
    }
};
let arr1=[1,2,3,0,0,0];
let arr2=[4,5,6]
merge(arr1,3,arr2,3);
console.log(arr1)