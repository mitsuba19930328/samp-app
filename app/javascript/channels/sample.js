
document.addEventListener('DOMContentLoaded', () => {
    console.log(document.getElementById('hello'));

    //以下はjavasc自体の動作テスト用コード
    // window.alert('test');

    //以下は文字入力のサンプル
    // let moji = prompt('数字を入力');
    // moji = parseInt(moji) + 30;

    //以下は文字入力判定
    // if(isNaN(moji)){
    //     window.alert('数字ではありません。');
    // }else{
    //     window.alert('数字です。')
    // };

    // //以下はJavasc教科書No09の年齢層分析プログラム（まずは答え見ずに独自でやってみる。）
    // //①ユーザーに年齢を入力させる
    // let age = prompt('あなたの年齢は？');
    //
    // //②入力した数値が数値に変換不可能ではないときだけ年齢層の判定を行う。
    // if(!isNaN(age)){
    //     //数値のため判定する。
    //     //③年齢に応じて「未成年」「成人」「高齢者」の3つの結果を表示する。
    //     if(age < 20){
    //         //未成年
    //         if(age <= 15){
    //             //義務教育年齢
    //             console.log('義務教育年齢')
    //         }else{
    //             //未成年
    //             console.log('未成年')
    //         }
    //     }else if(age >= 20 && age < 65){
    //         //成人
    //         console.log('成人')
    //     }else{
    //         //高齢者
    //         console.log('高齢者')
    //     }
    // }

    //Javascの繰り返し文
    //①while文
    // let shikin = 50000;
    // while(shikin > 30000){
    //     console.log('持ち金は' + shikin + 'です');
    //     shikin = shikin - 5000;
    // }

    //②for文
    // let money = 30000;
    // for(let i = 0; i < money; money -= 5000){
    //     console.log('所持金は' + money + 'です');
    // }

    //③拡張for文
    // let week = ['月','火','水','木','金','土','日'];
    // for(let oneDay of week){
    //     console.log(oneDay);
    // }



});
