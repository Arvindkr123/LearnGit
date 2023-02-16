import java.util.*;

import javax.swing.text.WrappedPlainView;
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

// public class message{
//     public static void main(String[] args) {
//         int [] arr = {1,2,0};
//         int ans = firstMissingPositive(arr);
//         System.out.println(ans);
//     }

//     private static int firstMissingPositive(int[] arr) {
//         int i=0;
//         while(i<arr.length){
//             int correct = arr[i]-1;
//             if(arr[i]>0 && arr[i]<=arr.length && arr[i]!=arr[correct]){
//                 swap(arr, i, correct);
//             }else{
//                 i++;
//             }
//         }

//         //  case 2 
//         for (int index = 0; index < arr.length; index++) {
//              if(arr[index]!=index+1){
//                 return index+1;
//              }
//         }
//         return arr.length+1;
//     }
//     private static void swap(int[] arr, int i, int correct) {
//         int temp =arr[i];
//         arr[i]= arr[correct];
//         arr[correct] = temp;
//     }
// }

// bubble sort
// public class message{
//     public static void main(String[] args) {
//         int [] arr ={4,3,2,5,1};
//         System.out.println(Arrays.toString(arr));
//         // sort(arr);
//         // InsertionSort(arr);
//         SelectionSort(arr);
//         System.out.println(Arrays.toString(arr));
//     }

//     private static void SelectionSort(int[] arr) {
//         for (int i = 0; i < arr.length; i++) {
//             int min =i;
//             for (int j = i+1; j < arr.length; j++) {
//                 if(arr[min]>arr[j]){
//                     min = j;
//                 }
//             }

//             int temp = arr[min];
//             arr[min] = arr[i];
//             arr[i] = temp;
//         }
//     }

//     private static void InsertionSort(int[] arr) {
//         for (int i = 1; i < arr.length; i++) {
//             for (int j = 0; j <=i; j++) {
//                 if(arr[i]<arr[j]){
//                     int temp = arr[i];
//                     arr[i] = arr[j];
//                     arr[j] = temp;
//                 }
//             }
//         }
//     }

//     private static void sort(int[] arr) {
//         for (int i = 0; i < arr.length; i++) {
//             for (int j = 0; j < arr.length-i-1; j++) {
//                 if(arr[j]>arr[j+1]){
//                     int temp = arr[j];
//                     arr[j] = arr[j+1];
//                     arr[j+1] = temp;
//                 }
//             }
//         }
//     }
// }

// Maximum Number of Words Found in Sentences
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

public class message{
    // public static void main(String[] args) {
        // String[] sentences = {"alice and bob love leetcode", "i think so too", "this is great thanks very much"};
        // System.out.println(mostWordsFound(sentences));
        // int n = 82;
        // int [] arr = new int[n];
        // int count=0;
        // for(int i=5; i<82 && count<n; i++){
        //     int sum=0;
        //     while(i>0){
        //         int rem = i%10;
        //         sum+=rem;
        //         i/=10;
        //     }
        //     if(sum%5==0){

        //         arr[count] = i;
        //         count++;
        //     }

        // }
        // System.out.println(Arrays.toString(arr));
    // }

    // public static int mostWordsFound(String[] sentences) {
    //     int max = sentences[0].split(" ").length;
    //     for (int i = 0; i < sentences.length; i++) {
    //         if(max<sentences[i].split(" ").length){
    //             max = sentences[i].split(" ").length;
    //         }
    //     }

    //     return max;
    // }

    public static void main(String[] args) {
        System.out.println(reverse1("I am good"));
    }

    public static String reverse1(String s) {
        String [] words = s.split(" ");
        System.out.println(Arrays.toString(words));
        String rev ="";
        for (int i = 0; i < words.length; i++) {
            rev = words[i]+" "+rev;
        }
        return rev;
    }
    public static String reverse(String s) {
        // find the whitespaces
        int x = s.indexOf(" ");
        if(x==-1){
            return s;
        }

        return reverse(s.substring(x+1)+" "+s.substring(0,x));
    }
    public static int[][] count(int[][] arr1,int[][] arr2) {
        int n = arr1.length;
        int m = arr1[0].length;
        int ans[][] = new int[n][m];

        for(int i=0; i<n; i++){
            for (int j = 0; j <m; j++) {
                ans[i][j] = arr1[i][j] + arr2[i][j];
            }
        }

        return ans;
    }
}
