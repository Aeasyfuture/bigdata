$(function(){
    let lie=$("td");
    lie.css("text-align","center");
    let lie1=$("td:first-child");
    lie1.css("width","76px");
    let lie2=$("td:nth-child(2)");
    lie2.css("width","224px");
    lie2.css("white-space","nowrap");
    lie2.css("overflow","hidden");
    let lie3=$("td:nth-child(3)");
    lie3.css("width","398px");
    let lie4=$("td:nth-child(4)");
    lie4.css("width","170px");
    let lie5=$("td:nth-child(5)");
    lie5.css("width","224px");
    let hang=$("tr");
    hang.css("height","63px");

    // 翻页
    $(".page li:first-child").css("background","#4381e6");
    let next=0;
    function run(type="before") {
        if (type=="before") {
            next++;
            if (next >= $(".page li").length) {
                next = $(".page li").length-1;
            }
        } else {
            next--;
            if (next < 0) {
                next = 0;
            }
        }
        $(".page li").css("background","")
            .eq(next)
            .css("background","#4381e6");
    }
    $(".page li").click(function(){
        let index=$(this).index();
        $(".page li").css("background","")
            .eq(index)
            .css("background","#4381e6");
        next=index;
    })
    $(".after").click(function(){
        run("before");
    })
    $(".before").click(function(){
        run("after");
    })
    $(".tail").click(function(){
        next=$(".page li").length-2;
        run("before");
    })

})