#include<iostream>
using namespace std;

int countWords(char str[20]) {

    int i = 0, count = 0;
    bool flag = false;
    while(str[i] != '\0') {
    
        if(str[i] == ' ') {
            if(flag == true)
                cout<<"Ending index of word is "<<i-1<<endl;
            flag = false;
        } else {
            if(flag == false) {
                count++;
                cout<<"Starting index of word is "<<i<<endl;
                flag = true;
            }

        }
        i++;    
    }
    cout<<"Ending index of word is "<<i-1<<endl;
    return count;

}

int main() {

    char str[20];
    cout<<"Enter the string"<<endl;
    cin.getline(str, 20);
    int count = countWords(str);
    cout<<"The count of the words in the string are "<<count;
    
}
