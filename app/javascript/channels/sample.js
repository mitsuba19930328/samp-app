
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



    //関数について
    // let createMail = (destination,bill) => {
    //     let msg = `${destination}様\nお世話になっております。\nPT企画の斉藤です。\n今月の請求額は${bill}円でございます。`;
    //     console.log(msg);
    // };
    // let destination = '田中';
    // let bill = 5000;
    // createMail(destination,bill);

    // //まとめ問題②（自分でTRY）
    // //請求書を送る文章を作る。請求書に必要なのは、宛先、請求額（税金10%として計算）である。
    // let createMail = (destination,bill) => {
    //     let msg = `${destination}様\nお世話になっております。\nPT企画の斉藤です。\n今月の請求額は${bill}円でございます。`;
    //     console.log(msg);
    // };
    //
    // //オーナー情報を準備
    // let owner1 = { name:'山本', bill:40000, tax:true};
    // let owner2 = { name:'斉藤', bill:70000, tax:true};
    // let owners = [owner1,owner2];
    //
    // //オーナーへ順次メールを発送（あくまでここではコンソール）
    // for(let owner of owners){
    //     let ownerName = owner['name'];
    //     let ownerBill = owner['bill'];
    //     if(owner['tax']){
    //         ownerBill = ownerBill * 1.1;
    //     }
    //     createMail(ownerName,ownerBill);
    // }

    //htmlとの連携（本番の触り）
    // let elem = document.querySelector('p');
    // elem.innerText = 'テスト';

    // //独自課題（最初はHello Worldと表示あり。入力フォームがあり、入力ボタンを押すと、Hello Worldが入力フォームに入っていた文字列に変更になる。）
    // //①changeButtonを押された場合に②の処理が走るようにする
    // //②フォーム内に記載してある文字列を取得。それをid='hello'に入れるようにする
    // //以下はそれぞれの要素
    // let helloText = document.getElementById('hello');
    // let formText = document.getElementById('inputBox');
    // let changeButton = document.getElementById('changeButton');
    //
    // //以下で実際にHello Textをformに入力された内容に変更します。
    // changeButton.addEventListener("click", () => {
    //     helloText.innerText = formText.value;
    // });

    //総まとめ（自己作成）
    //文字置換アプリを作成
    //大きなフォームひとつ、小さなフォーム二つを用意
    //大きなフォームには原文
    //小さなフォーム1は変更したい文字を入れる。小さなフォーム2には変更後の文字を入れる。
    //ボタンを押したら原文の変更したい文字が、変更後の文字になって、原文表示されるようにする。

    let textBody = document.getElementById('inputBox');
    let textBodyValue = document.getElementById('inputBox').value;
    let beforeText = document.getElementById('beforeText').value;
    let afterText = document.getElementById('afterText').value;
    let changeButton = document.getElementById('changeButton');

    // console.log(textBody.value);


    //変更ボタンクリックで発火
    changeButton.addEventListener("click", () => {
        //テキスト変更処理を行います
        let afterTextBodyValue = changeText(textBodyValue,beforeText,afterText);
        //変更されたテキストをテキストエリアに代入
        textBody.innerText = afterTextBodyValue;
        console.log(textBody.innerText);
    });

    //changeTextで該当文字を検索、あればその部分を変更したい文字に置き換え
    let changeText = (textBodyValue, beforeText, afterText) =>{
        if(textBodyValue.includes(beforeText)){
            //textBodyに検索文字列が入っている場合は置換処理を行う
            let newTextBodyValue = textBodyValue.replaceAll(beforeText, afterText);
            return newTextBodyValue;
        }
    }















});
