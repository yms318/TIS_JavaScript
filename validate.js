 /*
        정규식 메타문자
        ^ : 시작을 의미
        $ : 끝
        a-z : 알파벳 소문자를 의미
        A-Z : 알파벳 대문자를 의미
        0-9 : 숫자를 의미
        + : 패턴이 한번 이상 반복됨을 의미
        [a-zA-Z]{1} : 알파벳이 한개 와야함
        */
       function isUserid(obj){
        var val=obj.value;
        // var pattern=new RegExp(/^[a-zA-Z0-9]+$_!/);
        var pattern=new RegExp(/^[a-zA-Z]{1}[a-zA-Z0-9_!]{3,11}$/);
        //test()함수, 패턴에 해당하는 문자열이면 true, 아니면 false 반환
        var b=pattern.test(val);
        console.log('id b='+b);
        return b;
    }//isUserid()----------------

    // ^[A-Za-z]{1} : 최소 한자는 알파벳 대소문자로 시작해야 함
    // \w : 알파벳 대소문자와 숫자를 의미
    // ! : 느낌표 들어가도 됨
    // _ : 밑줄
    // (4,9) : 4자 이상 9자 이내
    function isPwd(obj){
        var val=obj.value;
        var pattern=new RegExp(/^[A-Za-z]{1}[\w!_.]{4,9}$/);
        var b=pattern.test(val);
        console.log("pwd b="+b);
        return b;
    }

    function isKor(obj){
        var val=obj.value;
        var pattern=/^[가-힣\s]+$/;
        var b=pattern.test(val);
        console.log("iskor b="+b);
        return b;
    }

    /*날짜 유형 체크
        \b : 단어의 경계를 나타냄. 정확히 패턴이 일치해야 함을 의미
        \d{4} : 숫자 네개가 와야 함
        [-\/] : -이거나 /기호를 허용함
        \d{1,2} : 숫자 한개 또는 두개가 올 수 있음
        */
    function isDate(obj){
        var val=obj.value;
        var pattern=/\b^\d{4}[-\/]\d{1,2}[-\/]\d{1,2}$\b/;
        return pattern.test(val);
    }   
    function isPhone(obj1,obj2,obj3){
        var val=obj1.value+'-'+obj2.value+'-'+obj3.value;
        console.log(val);
        var pattern=/\b(010|011|016|019)[-]\d{3,4}[-]\d{4}\b/;
        var b=pattern.test(val);
        console.log("phone b="+b);
        return b;
    }
    function isEmail(obj){
        var val=obj.value;
        var pattern=/^[\w!_]+(\.)*@[a-zA-Z]+(\.)(com|net|co)(\.)?[a-z]*$/;
        /* 
        '?': 있거나 없거나
        '+': 한개 이상
        '*': 없거나 여러개까지
        */
        var b=pattern.test(val);
        console.log("email b="+b);
        return b;
    }