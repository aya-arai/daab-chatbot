'use strict';

//日付を日本語で表記
const datetime = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const jpdate = datetime.toLocaleDateString(undefined, options);


module.exports = (robot) => {
  /*
  robot.respond(/PING$/i, (res) => {
    res.send('PONG');
  });

  //direct
  robot.respond(/ADAPTER$/i, (res) => {
    res.send(robot.adapterName);
  });

  robot.respond(/ECHO (.*)$/i, (res) => {
    res.send(res.match[1]);
  });
  */

  //今日の日付
  robot.respond(/今日の日付$/i, (res) => {
    res.send(`今日は \0${jpdate} \0です。`);
  });
};
