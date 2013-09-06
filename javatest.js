window.onload = function(){
   
    // debug
    var de = document.getElementById('debug');
    de.innerHTML = '';

    var println = function debug01(a){
        de.innerHTML += a + '<br>';
    }
    var print = function debug02(a){
        de.innerHTML += a;
    }
    
    //////////////////////////////////////////////   
    print('aaa');
    print('bbb');
    println('ccc');
    println('ddd');
    print('eee');
    print('fff');
//    var num = 0;
//    for(int i=0; i<3; i++){
//        println(i+':aaa');
//        for(int i=0; i<2; i+){
//            println(i+'bbb');
//        }
//    }
}


