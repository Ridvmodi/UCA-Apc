#include<iostream>
using namespace std;

void moveRobot(int arr[10][10], int i, int j, int rowSize, int colSize) {
    if(i < 0 || j < 0 || i >= rowSize || j >= colSize || arr[i][j] == -1 ) 
         return;
    else {
        if(arr[i][j] != 0) {
            arr[i][j] = 0; 
            moveRobot(arr, i+1, j, rowSize, colSize);
            moveRobot(arr, i, j+1, rowSize, colSize);
            moveRobot(arr, i-1, j, rowSize, colSize);
            moveRobot(arr, i, j-1, rowSize, colSize);
        }
    }
}
int main() {

    int rowSize, colSize, i, j;
    int arr[10][10];
    cout<<"Enter the row and col size"<<endl;
    cin>>rowSize>>colSize;
    for(i = 0;i<rowSize;i++) {
        for(j = 0;j<colSize;j++) {
            cin>>arr[i][j];
        }
    }
    for(i = 0;i<rowSize;i++) {
        for(j = 0;j<colSize;j++) {
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }
    moveRobot(arr, 0, 0, rowSize, colSize);
    for(i = 0;i<rowSize;i++) {
        for(j = 0;j<colSize;j++) {
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }

}
