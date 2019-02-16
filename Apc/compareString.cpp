#include<iostream>
#include<string.h>
using namespace std;

int strCompare(char str[], char secStr[]) {

    int i = 0;
    if(strlen(str) < strlen(secStr))
        return 1;
    else if(strlen(str) > strlen(secStr))
        return -1;
    while(str[i] != '\0' && secStr[i] != '\0') {
        if(str[i] < secStr[i])
            return 1;
        else if(str[i] > secStr[i])
            return -1;
        i++;
    }
    if(str[i] == '\0' && secStr[i] == '\0')
        return 0;

}


int main() {

    char str[50], secStr[50];
    int i = 0;
    cout<<"Enter the String"<<endl;
    cin.getline(str, 50);
    cout<<"Enter the String"<<endl;
    cin.getline(secStr, 50);
    cout<<strCompare(str, secStr);
}
