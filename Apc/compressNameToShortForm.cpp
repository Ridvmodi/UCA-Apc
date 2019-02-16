#include<iostream>
using namespace std;

void compressStr(char str[20], int index, int start) {

    for(int i = start;str[i]!='\0';i++,index++) {
        str[index] = str[i];
    }
    str[index] = '\0';
}


int main() {

    int i = 0, start, index = 0, prevStart;
    char str[30];
    bool flag = true;
    cin.getline(str,30);
    cout<<str;
    
    while(str[i] !='\0') {
    
        if(str[i] == ' ') {
            if(flag == true) {
                flag = false;
            }
        } else {
        
            if(flag == false) {
            
                prevStart = start;               
                start = i;
                str[index++] = str[prevStart];
                str[index++] = '.';
                flag = true;
                
            }
        
        }
        i++;
    }
    compressStr(str, index, start);
    cout<<endl<<str;
}
