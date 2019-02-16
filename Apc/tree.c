#include<stdio.h>
void check(int arr[10][10], int row, int col, int i, int j, int sum, int no) {
    if ( j<0 || i>=row || j>=col) {
        return;
        }
    else {
       
       sum += arr[i][j];
       printf("No in the Pattern %d \n",arr[i][j]);
       check(arr, row, col, i+1, j-1, sum, no);
       check(arr, row, col, i+1, j+1, sum, no);
        if(sum == no) {
        
        printf("No is Matched\n");
        
        }
     
    }

}
int main() {
    
    int n, row, col, root_i, root_j;
    printf("Enter the row and col\n");
    scanf("%d %d",&row,&col);
    printf("Enterr the no to compare\n");
    scanf("%d",&n);
    int arr[10][10];
    printf("enter the array elements\n");
    for(int i = 0;i< row;i++) {
        for(int j = 0;j<col;j++) {
            scanf("%d",&arr[i][j]);
        }
    }
    printf("Enter the Root point\n");
    scanf("%d %d",&root_i,&root_j);
    check(arr, row, col, root_i, root_j, 0, n);
     
}

