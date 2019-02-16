#include<iostream>
using namespace std;

char* getsubStr(char str[], int startIndex, int endIndex) {

    char *subStr = new char[20];
    int j = 0;
    for(int i = startIndex;i< startIndex + (endIndex - startIndex);i++,j++) {

        subStr[j] = str[i];

    }
    subStr[j] = '\0';
    return subStr;
}
int main() {

    char str[50], subStr[20];
    int i = 0, startIndex, endIndex;
    bool flag = false;
    cout<<"Enter the string"<<endl;
    cin.getline(str, 50);

    while(str[i] != '\0') {

        if(str[i] == ' ') {
            if(flag == true) {
                endIndex = i;
                cout<<getsubStr(str, startIndex, endIndex)<<endl;
            }
            flag = false;
        } else {
            if(flag == false) {
                startIndex = i;
                flag = true;
            }
        }
        i++;
    }
    if(str[i] == '\0') {
        endIndex = i;
        cout<<getsubStr(str, startIndex, endIndex)<<endl;
    }
}
