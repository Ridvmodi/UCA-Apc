#include<bits/stdc++.h>
#include<windows.h>
#include<conio.h>

using namespace std;
char foodValues[] = {'A', 'B', 'G', 'L', 'M', 'P', 'S', 'W'};
int rowSize = 15, colSize = 16;
class Snake {
public:
    int x, y;
    char value;
};
class Food {

public:
    int x, y;
    char value;
    Food() {
        foodGenrator();
    }
    void foodGenrator() {
        srand(time(0));
        x = (rand() % rowSize - 5) + 1;
        y = (rand() % colSize - 5) + 1;
        value = foodValues[rand() % 8];
    }
    bool checkFood(Snake &snakeBody){
       if(snakeBody.x == x && snakeBody.y == y) {
            foodGenrator();
            return true;
       }
       else
        return false;
    }
};
class Board {
public :
    char board[100][100];
    Board(Food food) {
        cout<<"Enter the Border size"<<endl;
        cin>>rowSize>>colSize;
       for(int i = 0;i<rowSize;i++) {
            for(int j = 0;j<colSize;j++) {
                if(i == 0 || j == 0 || i == rowSize -1 || j == colSize-1) {
                    board[i][j] = '*';
                }
                else
                    board[i][j] = ' ';
            }
       }
       updateBoard(food);
    }
    void updateBoard(Food food) {
        board[food.x][food.y] = food.value;
    }
    void updateBoard(vector<Snake> snakeBody) {
        for(int i = 0;i<snakeBody.size();i++) {
            board[snakeBody[i].x][snakeBody[i].y] = snakeBody[i].value;
        }
        printBoard();
    }
    void printBoard() {
        for(int i = 0;i<rowSize;i++) {
            for(int j = 0;j<colSize;j++) {
                cout<<board[i][j];
            }
            cout<<endl;
        }
    }
};
void snakeBirth(vector<Snake> &snakeBody) {
    srand(time(0));
    snakeBody[0].x = rand() % 10;
    snakeBody[0].y = rand() % 20;
    snakeBody[0].value = 'H';
    snakeBody[1].x = snakeBody[0].x;
    snakeBody[1].y = snakeBody[0].y + 1;
    snakeBody[1].value = '#';
}
void moveSnake(vector<Snake> &snakeBody, Board &boundary, char dir, Food &food) {

        int size = snakeBody.size() - 1;
        int obs_x, obs_y;
        Snake temp = snakeBody[size];
        boundary.board[snakeBody[size].x][snakeBody[size].y] = ' ';
        for(int i=size;i>0;i--) {
            snakeBody[i].x = snakeBody[i-1].x;
            snakeBody[i].y = snakeBody[i-1].y;
        }
        obs_x = snakeBody[0].x;
        obs_y = snakeBody[0].y;
        if(dir == 'a') {
            (snakeBody[0].y)--;
            if(boundary.board[obs_x][obs_y-1] == '#') {
                cout<<"GAME OVER";
                exit(0);
            }
            if(snakeBody[0].y == 0)
                snakeBody[0].y = colSize - 2;
        }
        else if(dir == 'd') {
            (snakeBody[0].y)++;
            if(boundary.board[obs_x][obs_y+1] == '#') {
                cout<<"GAME OVER";
                exit(0);
            }
            if(snakeBody[0].y == colSize - 1)
                snakeBody[0].y = 1;
        }
        else if(dir == 'w') {
            (snakeBody[0].x)--;
            if(boundary.board[obs_x-1][obs_y] == '#') {
                cout<<"GAME OVER";
                exit(0);
            }
            if(snakeBody[0].x == 0)
                snakeBody[0].x = rowSize - 2;
        }
        else if(dir == 's') {
            (snakeBody[0].x)++;
            if(boundary.board[obs_x+1][obs_y] == '#') {
                cout<<"GAME OVER";
                exit(0);
            }
            if(snakeBody[0].x == rowSize - 1)
                snakeBody[0].x = 1;
        }
        if(food.checkFood(snakeBody[0])){
            snakeBody.push_back(temp);
            boundary.board[snakeBody[size + 1].x][snakeBody[size + 1].y] = '#';
            if(boundary.board[food.x][food.y] == '#' || boundary.board[food.x][food.y] == 'H')
                food.foodGenrator();
            boundary.updateBoard(food);
        }
        boundary.updateBoard(snakeBody);

}

int main() {

    Food food;
    Board boundary(food);
    vector<Snake> snakeBody(2);
    snakeBirth(snakeBody);
    boundary.updateBoard(snakeBody);
    char dir = 'a';
    while(true) {
        if(kbhit()) {
            dir = getch();
            if(dir == 'x') {
                cout<<"GAME ENDED";
                break;
            }
            else if(dir == 'p')
                system("pause");
        }
        moveSnake(snakeBody, boundary, dir, food);
        Sleep(100);
        system("cls");
    }
}
