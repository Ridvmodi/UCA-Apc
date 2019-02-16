#include<iostream>
#include<string.h>
using namespace std;

struct word {
    int count;
    char name[50];
    struct word *next;
} *wordPtr;
struct Hash {
    struct word *head;
}h[256], *hashPtr;

int returnIstChar(char n[]) {
    return n[0];
}
void intialize(char str[]) {
    h[returnIstChar(str)].head = new word;
    h[returnIstChar(str)].head->count = 0;
    h[returnIstChar(str)].head->next = 0;
    strcpy(h[returnIstChar(str)].head->name, str);
}
void countWord(char str[]) {
    bool flag = false;
    wordPtr = h[returnIstChar(str)].head;
    while(wordPtr != 0) {
        if(strcmp(wordPtr->name,str) == 0) {
            flag = true;
            wordPtr->count++;
            break;
        }
        wordPtr = wordPtr->next;
    }
    if(flag == false) {
        wordPtr = new word;
        wordPtr->next = 0;
        h[returnIstChar(str)].head->next = wordPtr;
    }
}
void print() {

    for(int i = 0;i<256;i++) {
        if(h[i].head != 0 ) {
            wordPtr = h[i].head;
            while(wordPtr != 0) {
                cout<<"Name is "<<wordPtr->name<<" and the Count is "<<wordPtr->count<<endl;
                wordPtr = wordPtr->next;
            }
        }
    }
}
void split(char str[]) {
    int i = 0, wordStart, wordEnd, j = 0, index;
    bool flag = true;
    char subStr[20];
    while(str[i] != '\0') {
        if(str[i] != ' ') {
            if(flag == true) {
                wordStart = i;
            }
            flag = false;
        } else {
            if(flag == false) {
                wordEnd = i;
                flag = true;
                for(index = wordStart;index<wordStart +(wordEnd - wordStart);index++,j++){
                    subStr[j] = str[index];
                }
                subStr[j] = '\0';
                if(h[returnIstChar(subStr)].head == 0)
                    intialize(subStr);
                countWord(subStr);
                j = 0;
            }
        }
        i++;
    }
    if(str[i] == '\0') {
        wordEnd = i;
        for(index = wordStart;index<wordStart + wordEnd;index++,j++){
            subStr[j] = str[index];
        }
        subStr[j] = '\0';
        if(h[returnIstChar(subStr)].head == 0)
            intialize(subStr);
        countWord(subStr);
    }
}
int main()
{
    char str[50];
    cin.getline(str, 50);
    split(str);
    print();
}
