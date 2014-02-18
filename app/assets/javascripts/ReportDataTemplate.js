var reportDataTemplate = {

    horizontalBarChart:function(_for,values){
        var data=[];
        var value=[];
        data.push({key:_for})
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                value.push({"label":key,"value":values[key]});
            }
        }
        data[0]["values"]=value;
        return data;
    },
        pieChart:function(values){
            var data=[];
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    data.push({"key":key,"y":values[key]});
                }
            }
            return data;
        },

    verticalBarChart:function(_for,values){
        var data=[];
        var value=[];
        data.push({key:_for})
        for (var key in values) {
            if (values.hasOwnProperty(key)) {
                value.push({"x":key,"y":values[key]});
            }
        }
        data[0]["values"]=value;
        return data;
    }

    }
