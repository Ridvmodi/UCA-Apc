#include<iostream>
using namespace std;
void removeSpace(char str[20], int spaceCount, int spaceEnd, int *index) {
    
    if(spaceCount > 1) {
        int i;
        for( i = spaceEnd;str[i]!='\0';i++) {
        
            str[i-spaceCount] = str[i];
        
        }
        str[i - spaceCount] = '\0';
        *index = spaceEnd - spaceCount;
    }

}
void checkWord(char str[20]) {
    
    int spaceCount = 0, spaceEnd, i;
    bool flag = false;
    for( i = 0;str[i]!='\0';i++) {
        if(str[i] == ' ') {
            spaceCount++;
            if(flag == true) {
                removeSpace(str, spaceCount-1, spaceEnd, &i);
                spaceCount--;
            }
            flag = false;
        } else {
        
            if(flag == false ) {
                
                flag = true;
                spaceEnd = i;
                removeSpace(str, spaceCount, spaceEnd, &i);
                spaceCount = 0;
                  
            }
       
        }
    
    }
    if(spaceCount > 0) {
    
        str[i-(spaceCount+1)] = '\0';
    }
    
}

int main() {

    char str[20];
    cin.getline(str,20);
    checkWord(str);
    cout<<str;
    return 0;
    
}
