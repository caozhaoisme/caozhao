 var d1_hour=document.getElementById('d1_hour');
    var d2_minute=document.getElementById('d2_minute');
    var d3_second=document.getElementById('d3_second');
    runTime();
    function runTime(){
        var d1=new Date();
        var d2=new Date('2018/12/30');
        var cha=d2.valueOf()-d1.valueOf();
        //获取小时
        cha %=1000*60*60*24;
        d1_hour.innerHTML = getTwo(Math.floor(cha/(1000*60*60)));
        cha %= 1000*60*60;
        //获取分数
        d2_minute.innerHTML = getTwo(Math.floor(cha/(1000*60)));
        cha %= 1000*60;
        //获取秒数
        d3_second.innerHTML = getTwo(Math.floor(cha/(1000)));

    }
    setInterval(runTime,1000);
    function getTwo(num){
            if(num<10) num = '0'+num;
            return num;
        }

