#include<iostream>
using namespace std;

void shift(char str[10], int charCount, int start) {

    int i ;
    for(i = start;str[i]!='\0';i++) {
    
        str[i - charCount] = str[i];
    
    }
    str[i-charCount] = '\0';

}

void compress(char str[10]) {

    int i = 0, charCount = 0;
    char compareTo = str[0];
    while(str[i] != '\0') {
    
        if(str[i] != compareTo) {
            
            str[(i - charCount) + 1] =(char)'0'+charCount;
            compareTo = str[i];
            shift(str, charCount-2, i);
            i -= (charCount - 2);
            charCount = 1;
        
        } else {
        
            charCount++;    
            
        }
        i++;
    
    }
    
    str[(i - charCount) + 1] =(char)'0'+charCount;
            compareTo = str[i];
            shift(str, charCount-2, i);

}

int main() {

    char str[10];
    cin>>str;
    compress(str);
    cout<<str;
 
}

