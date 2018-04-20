//move clickable blocks based on height / width ratio

$( document ).ready(function() {
    var height = $(window).height();
    var width = $(window).width();
    var ratio = (width/height);
    console.log(ratio);
    if(ratio > 3){
        $("#shop-inner").css("transform", "scale(0.25)");
    }
    else if(ratio > 2.5 && ratio <= 3){
        $("#shop-inner").css("transform", "scale(0.35)");
    }
    else if(ratio > 2.1 && ratio <= 2.5){
        $("#shop-inner").css("transform", "scale(0.45)");
    }
    else{
        if (width > 2800){
            $("#shop-inner").css("transform", "scale(0.9)");
        }
        else if(width > 1900){
            $("#shop-inner").css("transform", "scale(0.7)");
        }
        else{
            $("#shop-inner").css("transform", "scale(0.55)");
        }

    }


    if(ratio > 1.8 && ratio <= 1.9){
        //block1
        $("#block").css("margin-top", "14%");
        
        //block2
        $("#block2").css("margin-top", "25%");
    }

    else if(ratio > 1.9 && ratio <= 2){
        //block1
        $("#block").css("margin-top", "9%");
        
        //block2
        $("#block2").css("margin-top", "22%");
    }

    else if(ratio > 2 && ratio <= 2.1){
        //block1
        $("#block").css("margin-top", "5%");
        
        //block2
        $("#block2").css("margin-top", "16%");
    }

    else if(ratio > 2.1 && ratio <= 2.2){
        //block1
        $("#block").css("margin-top", "1%");
        
        //block2
        $("#block2").css("margin-top", "12%");
    }

    else if(ratio > 2.2){
        //block1
        $("#block").css("margin-top", "0%");
        
        //block2
        $("#block2").css("margin-top", "5%");
    }
    else{
        //block1
        $("#block").css("margin-top", "21%");
        
        //block2
        $("#block2").css("margin-top", "31%");
    }

	var block = $("#block").closest(".col-6").position();
    if(width < 500){
        $("#content").css({
            'margin-top':15
        });
    }
	else if(width < 768 && width >= 500){
		$("#content").css({
			'margin-top':(block.top/2)-59
		});
	}
	else{
		$("#content").css({
			'margin-top':20
		});
	}
	
});


$( window ).resize(function() {
    var height = $(window).height();
    var width = $(window).width();
    var ratio = (width/height);

    if(ratio > 3){
        $("#shop-inner").css("transform", "scale(0.25)");
    }
    else if(ratio > 2.5 && ratio <= 3){
        $("#shop-inner").css("transform", "scale(0.35)");
    }
    else if(ratio > 2.1 && ratio <= 2.5){
        $("#shop-inner").css("transform", "scale(0.45)");
    }
    else{
        if (width > 2800){
            $("#shop-inner").css("transform", "scale(0.9)");
        }
        else if(width > 1900){
            $("#shop-inner").css("transform", "scale(0.7)");
        }
        else{
            $("#shop-inner").css("transform", "scale(0.55)");
        }
    }
    

    if(ratio > 1.8 && ratio <= 1.9){
        //block1
        $("#block").css("margin-top", "14%");
        
        //block2
        $("#block2").css("margin-top", "25%");
    }

    else if(ratio > 1.9 && ratio <= 2){
        //block1
        $("#block").css("margin-top", "9%");
        
        //block2
        $("#block2").css("margin-top", "22%");
    }

    else if(ratio > 2 && ratio <= 2.1){
        //block1
        $("#block").css("margin-top", "5%");
        
        //block2
        $("#block2").css("margin-top", "16%");
    }

    else if(ratio > 2.1 && ratio <= 2.2){
        //block1
        $("#block").css("margin-top", "1%");
        
        //block2
        $("#block2").css("margin-top", "12%");
    }

    else if(ratio > 2.2){
        //block1
        $("#block").css("margin-top", "0%");
        
        //block2
        $("#block2").css("margin-top", "5%");
    }
    else{
        //block1
        $("#block").css("margin-top", "21%");
        
        //block2
        $("#block2").css("margin-top", "31%");
    }
	
	var block = $("#block").closest(".col-6").position();
    if(width < 500){
        $("#content").css({
            'margin-top':15
        });
    }
    else if(width < 768 && width >= 500){
        $("#content").css({
            'margin-top':(block.top/2)-59
        });
    }
    else{
        $("#content").css({
            'margin-top':20
        });
    }
});