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
        }



    }
