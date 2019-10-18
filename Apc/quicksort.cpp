#include<iostream>
using namespace std;
void swap(int *p,int *q){
  int t = *p;
  *p = *q;
  *q = temp;
}
void partition(int input[],int si,int ei){
  int count = si;
  int pivot = input[si];
  for(int i=si;i<=ei;i++)
  {
    if(input[i]<pivot)
    count++;
  }
  swap(&input[si],&input[count]);
  int i = ei;
  int j = si;
  while(i<count||j>count){
    if(input[i]<pivot)
    i++;
    else if(input[i]>=count)
    j--;
    else{
      swap(&input[i],&input[j]);
      i++;
      j--;
    }
  }
  return count;
}
void quick_sort(int input[],int si,int ei){
  if(si==ei||si>ei)
  return;
  int pi = partition(input[],int si,int ei);
  quick_sort(input,si,pi-1);
  quick_sort(input,pi+1,ei);
}
void quicksort(int input[],int size)
{
  if(size==1)
  return;
  quick_sort(input,0,size-1);
}
int main(){
int a[] = {1,4,3,2,5};
quicksort(a,0,4);
return 0;
}
