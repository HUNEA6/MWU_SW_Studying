var idiots = {
    name : 'idiots',
    genre: 'punk rock',
    members: {
        roto: {
            memberName: 'roto',
            play: function(){
                // band undefined roto play start
                // 이유? : play 함수 안에 this가 roto 내를 가리키기 때문.
                // 그래서 memberName은 roto 내에 선언되어 있어서 roto가 출력되지만,
                // name은 roto 밖에 선언 되어 있어서 undefined가 출력된다.
                // 해결책: 그냥 this.name 말고 idiots.name 으로 하면 idiots의 내부에 선언된 name이 출력된다.
                console.log(`band ${this.name} ${this.memberName} play start`)
            }
        }
    }
}

idiots.members.roto.play()