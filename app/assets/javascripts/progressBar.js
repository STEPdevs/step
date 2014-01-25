$(function() {
    //caching stuff
    $progress = $("#progress"), $amount = $("#amount"), panels = [], panels[0] = "panel1", panels[1] = "panel2", panels[3] = "thanks", i = 0, $formPanel = $(".form-panel");
    //call progress bar constructor
    $progress.progressbar({
        change: function() {
            //update amount label when value changes
            $amount.text($progress.progressbar("option", "value") + "%");
        }
    });
    //same function to reuse code
    function changepanel(n) {
        //hide current item
        $($formPanel[i]).fadeOut(500);
        //selects next item
        i = i + n;
        //hide next item
        $($formPanel[i]).delay(505).fadeIn();

        (i != 0) ? $("#back").attr("disabled", null) : $("#back").attr("disabled", "disabled");
        (i != 2) ? $("#next").attr("disabled", null) : $("#next").attr("disabled", "disabled");

        $progress.progressbar("option", "value", (i * 50) );
    }
    //set click handler for buttons
    $(".ex-form button").click(function(e) {
        //stop form submission
        e.preventDefault();

        //next or back?
        var n = ($(this).attr("id") != "back") ? 1 : -1;
        changepanel(n);
    });
});