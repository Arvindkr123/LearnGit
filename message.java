import java.util.*;

import javax.swing.text.DefaultStyledDocument.ElementSpec;

// Store the 20 prime number in the Array

// public class message{
//     public static void main(String args[]) {
//         int [] arr = new int[20];
//         int count =0;
//         int n =2;
//         while(count<20){
//                 boolean flag = true;
//                 for(int i=2; i*i<=n; i++){
//                     if(n%i==0){
//                         flag = false;
//                         break;
//                     }
//                 }
                
//                 if(flag==true){
//                     arr[count]=n;
//                     count+=1;
//                 }
//                 n+=1;
//         }
//         for(int i: arr){
//             System.out.print(i+" ");
//         }
//     }
// }


// print the subarray of all elements

// public class message{
//     public static void main(String[] args) {
//         int [] arr = {5,2,-4,-5, 3,-1,2,3,1};
//         int maxSum = arr[0];
//         for(int i=0; i<arr.length; i++){
//             int sum =0;
//             for(int j= i; j<arr.length; j++){
//                 // for(int k = j; k<=j; k++){
//                 //     // System.out.println(arr[k]);
//                 //     sum+=arr[k];
//                 // }

//                 sum+=arr[j];
//                 if(sum>maxSum){
//                     maxSum = sum;
//                 }
//             }
//         }
//         System.out.println(maxSum);
//     }
// }
// public class message{
//     public static void main(String[] args) {
//         int [] arr = {1,2,3,4,5};
        
//         for(int i=0; i<arr.length; i++){
//             for(int j= i; j<arr.length; j++){
//                 for(int k = j; k<=j; k++){
//                     System.out.println(arr[k]);
//                 }
//             }
//             System.out.println();
//         }
//     }
// }

// Running Sum is obtained as follows  [1, 2, 3, 4]
// public class message{
//     public static void main(String[] args) {
//         int [] arr = {1, 2, 3, 4};
//         System.out.println(Arrays.toString(runningSum(arr)));
//     }

//     public static int[] runningSum(int[] nums) {
//         for (int i = 1; i < nums.length; i++) {
//             nums[i] = nums[i-1]+nums[i];
//         }
//         return nums;
//     }
// }

// public class message{
//     public static void main(String[] args) {
//         int [][] arr={
//             {1,2,3},
//             {3,2,1}
//         };
//         System.out.println(maximumWealth(arr));


//     }
//     public static int maximumWealth(int[][] arr) {
//         int maxSum =0;
//         for (int i = 0; i < arr.length; i++) {
//             int row = 0;
//             for (int j = 0; j < arr[0].length; j++) {
//                 row+=arr[i][j];
//             }
//             if(row>maxSum){
//                 maxSum = row;
//             }
//         }
//         return maxSum;
//     }
// }

// Sum of All Odd Length Subarrays
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// public class message{
//     public static void main(String[] args) {
//         int [] arr ={1,4,2,5,3};
//         System.out.println(sumOddLengthSubarrays(arr));
//     }
//     public static int sumOddLengthSubarrays(int[] arr) {
//         int ans =0;
//         int n = arr.length;
//         for (int i = 0; i < n; i++) {
//             int k = ((i+1)*(n-i));
//             // odd length
//             ans+=(k+1)/2*arr[i];
//         } 
//         return ans;
//     }
// }

// Rotate Array
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// class message {
//     public static void main(String[] args) {
//         int arr[] = {1,2,3,4,5,6,7};
//         int k =3;
//         rotate(arr, k);
//         System.out.println(Arrays.toString(arr));
//     }
//     public static void rotate(int[] arr, int k) {
//         int n = arr.length;
//         k = k%n;
//         if(k<0){
//             k+=n;
//         }

//         reverse(arr,0,n-k-1);
//         reverse(arr,n-k,n-1);
//         reverse(arr, 0, n-1);
//     }
//     private static void reverse(int[] arr, int i, int j) {
//         while(i<j){
//             int temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//             i++;
//             j--;
//         }
//     }
// }

// public class message{
//     public static void main(String[] args) {
//         int [] arr ={4,3,2,7,8,2,3,1};
//         System.out.println(Arrays.toString(arr));
//         sort(arr);
//         System.out.println(Arrays.toString(arr));
//     }

//     static void sort(int[] arr) {
//         int i=0;
//         while(i<arr.length){
//             int correct = arr[i] -1;
//             if(arr[i]!=arr[correct]){
//                 swap(arr, i,correct);
//             }else{
//                 i++;
//             }
//         }
//     }

//     static void swap(int[] arr, int i, int correct) {
//         int temp =arr[i];
//         arr[i] = arr[correct];
//         arr[correct] = temp;
//     }
// }

// public class message{
//         public static void main(String[] args) {
//             // int [] arr ={4,3,2,7,8,2,3,1};
//             int [] arr= {3,0,1};
//             System.out.println(Arrays.toString(arr));
//             int ans = missingNumber(arr);
//             System.out.println(Arrays.toString(arr));
//             System.out.println(ans);
//         }

//         private static int missingNumber(int[] arr) {
//             int i=0;
//             while(i<arr.length){
//                 int correct = arr[i];
//                 if(arr[i]<arr.length && arr[i]!=arr[correct]){
//                     swap(arr, i, correct);
//                 }else{
//                     i++;
//                 }
//             }

//             // case 2 
//             for (int index = 0; index < arr.length; index++) {
//                 if(arr[index]!=index){
//                     return index;
//                 }
//             }
//             return -1;
//         }

//         private static void swap(int[] arr, int i, int j) {
//             int temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
// }

// public class message{
//     public static void main(String[] args) {
//         int [] arr ={4,3,2,7,8,2,3,1};
//         List<Integer> ans =findallMissingNumber(arr);
//         System.out.println(ans);
//     }

//     private static List<Integer> findallMissingNumber(int[] arr) {
//         int i=0;
//         while(i<arr.length){
//             int correct = arr[i]-1;
//             if(arr[i]!=arr[correct]){
//                 swap(arr, i, correct);
//             }else{
//                 i++;
//             }
//         }

//         List<Integer> ans = new ArrayList<>();
//         for (int index = 0; index < arr.length; index++) {
//             if(arr[index]!=index+1){
//                 ans.add(index+1);
//             }
//         }
//         return ans;
//     }

//     private static void swap(int[] arr, int i, int correct) {
//         int temp = arr[i];
//         arr[i] = arr[correct];
//         arr[correct] = temp;
//     }
// }

// find the duplicate number
// public class message{
//     public static void main(String[] args) {
//         int [] arr = {1,3,4,2,2};
//         System.out.println(findDuplicate(arr));
//     }

//     private static int findDuplicate(int[] arr) {
//         int i=0;
//         while(i<arr.length){

//             if(arr[i]!=i+1){
//                 int correct = arr[i]-1;
//                 if(arr[i]!=arr[correct]){
//                     swap(arr, i, correct);
//                 }else{
//                     return arr[i];
//                 }
//             }else{
//                 i++;
//             }
//         }
//         return -1;
//     }

//     private static void swap(int[] arr, int i, int correct) {
//         int temp = arr[i];
//         arr[i] = arr[correct];
//         arr[correct] =temp;
//     }
// }

// find all duplicate number
// public class message{
//     public static void main(String[] args) {
//         int [] arr ={4,3,2,7,8,2,3,1};
//         List<Integer> ans = findAllDupicate(arr);
//         System.out.println(ans);
//     }

//     private static List<Integer> findAllDupicate(int[] arr) {
//         int i=0;
//         while(i<arr.length){
//             int correct = arr[i]-1;
//             if(arr[i]!=arr[correct]){
//                 swap(arr, i, correct);
//             }else{
//                 i++;
//             }
//         }
        
//         // case 2 find all duplicate
//         List<Integer> ans = new ArrayList<>();
//         for (int index = 0; index < arr.length; index++) {
//             if(arr[index]!=index+1){
//                 ans.add(arr[index]);
//             }
//         }
        
//         return ans;
//     }

//     private static void swap(int[] arr, int i, int correct) {
//         int temp = arr[i];
//         arr[i] = arr[correct];
//         arr[correct] = temp;
//     }
// }

/*\
@ missing = index +1
@ duplicate = missing
 */

// Set mismatch
// public class message{
//     public static void main(String[] args) {
//         int [] arr ={1,2,2,4};
//         int [] ans =findmistach(arr);
//         System.out.println(Arrays.toString(ans));
//     }

//     private static int[] findmistach(int[] arr) {
//         int i=0;
//         while(i<arr.length){
//             int correct = arr[i]-1;
//             if(arr[i]!=arr[correct]){
//                 swap(arr, i, correct);
//             }else{
//                 i++;
//             }
//         }

//         // search for the first missing number
//         for (int index = 0; index < arr.length; index++) {
//             if(arr[index]!=index+1){
//                 return new int[]{arr[index], index+1};
//             }
//         }

//         return new int[]{-1, -1};
//     }

//     private static void swap(int[] arr, int i, int correct) {
//         int temp =arr[i];
//         arr[i]= arr[correct];
//         arr[correct] = temp;
//     }
// }

public class message{
    public static void main(String[] args) {
        int [] arr = {1,2,0};
        int ans = firstMissingPositive(arr);
        System.out.println(ans);
    }

    private static int firstMissingPositive(int[] arr) {
        int i=0;
        while(i<arr.length){
            int correct = arr[i]-1;
            if(arr[i]>0 && arr[i]<=arr.length && arr[i]!=arr[correct]){
                swap(arr, i, correct);
            }else{
                i++;
            }
        }

        //  case 2 
        for (int index = 0; index < arr.length; index++) {
             if(arr[index]!=index+1){
                return index+1;
             }
        }
        return arr.length+1;
    }
    private static void swap(int[] arr, int i, int correct) {
        int temp =arr[i];
        arr[i]= arr[correct];
        arr[correct] = temp;
    }
}