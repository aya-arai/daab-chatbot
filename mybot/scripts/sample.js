'use strict';


module.exports = (robot) => {
    //挨拶メッセージ
	robot.respond(/おはようございます/i, (res) => {
		const text = res.message.user.name;
        res.send('おはようございます' + text + "さん");
	});

    //行事
    robot.respond(/バレンタインデー/i, (res) => {
		res.send({
            stamp_set: '3',
            stamp_index: '1152921507291203931',
            text: '毎年2月14日に行われます。'  
        });
	}); 
    robot.respond(/隅田川花火大会/i, (res) => {
		res.send({
            stamp_set: '3',
            stamp_index: '1152921507291204199',
            text: '毎年7月の第4週目に行われます。'  
        });
	});
    robot.respond(/ハロウィン/i, (res) => {
		res.send({
            stamp_set: '3',
            stamp_index: '1152921507291204202',
            text: '毎年10月31日に行われます'  
        });
	});

    //ノート機能
    robot.respond(/ノート共有したい$/, (res) => {
        res.send({
          note_title: 'タイトル(仮)',
          note_content: 'ここに詳細',
        });
      });
    
      //出席有無
    robot.respond(/忘年会$/i, (res) => {
        res.send({
            question: '2021年12月10日ですが、参加しますか？',
	        options: ['出席', '欠席', 'まだわからない'],
	        closing_type: 1 
        });
    });


}