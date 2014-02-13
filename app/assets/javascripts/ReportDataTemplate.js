var reportDataTemplate = {

        genderRatio: function (maleCount,femaleCount) {
            return  [{
                    key: "Gender",
                    values: [{"label": "Female",
                            "value": femaleCount},
                            {"label": "Male",
                            "value": maleCount}
                    ]}
            ];
        },

        pieChart:function(values){
            var data=[];
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    data.push({"key":key,"y":values[key]});
                }
            }
            return data;
        }

    }
