#include<iostream>
using namespace std;

void compressString(char str[20]) {

    int charCount = 0, i = 0, countIndex = 0;
    char compareTo = str[0];
    while(str[i] != '\0') {
    
        if(str[i] != compareTo) {
        
            if(charCount == 1) {
            
                shiftRight(str, i);
            
            }
            str[countIndex] = compareTo;
            str[countIndex + 1] = (char) '0' + charCount;
            charCount = 1;
            countIndex += 2;
            compareTo = str[i];
        
        } else {
        
            charCount++;    
            
        }
        i++;
    
    }
    str[countIndex] = compareTo;
    str[countIndex + 1] = (char) '0' + charCount;
    countIndex += 2;
    str[countIndex] = '\0';
}

void shiftRight(char[20] str, int start) {
    
    char tempChar;
    while(str[start] != '\0') {
    
        tempChar = str[start + 1];
        str[start + 1] = str[start];
        start++;
        if(str[start] == '\0')
            str[start + 1] = tempChar;
    
    }
    str[start] = str[start - 1];
    str[start + 1] = '\0';

}
int main() {

    char str[20];
    cout<<"Enter the String"<<endl;
    cin>>str;
    compressString(str);
    cout<<str;
}
