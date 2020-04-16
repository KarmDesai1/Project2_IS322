import React from 'react';
import {render} from "react-dom";

function orderBy(sortValue){
    var sortResult = (sortValue  === 'name')?
        mockDatabase.sort(function (a,b))// {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA<nameB){
            return -1;
        }
        else
            return 1;
        }
        Database.sort(function (a,b) {
            return[sortValue]-b[sortValue];

        })
            //render list(sortValue);
}
