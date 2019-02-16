#include<iostream>
using namespace std;
struct node {
    int i;
    node *next;
};
int main(){

    int n;
    node *head, *ptr;
    head = new node;
    ptr = new node;
    cin>>head->i;
    head->next = 0;
    cout<<"enter the value"<<endl;
    cin>>ptr->i;
    head->next=ptr;
    ptr->next=0;
    for(ptr = head;ptr
    !=0;ptr=ptr->next) {
        cout<<ptr->i<<endl;
    }
    return 0;
}
