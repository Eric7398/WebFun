$(document).ready(function () {

  $(".dropbutton").click(function () {
    $(".main-content").toggle(function () {

    });
  });

  $("#wa-drop").click(function () {
    console.log("Clicked #wa");
    $(".wa-laws").show(function () {

    });
  })

  $("#or-drop").click(function () {
    console.log("Clicked #or");
    $(".or-laws").show(function () {

    });

    $("#id-drop").click(function () {
      console.log("Clicked #or");
      $(".id-laws").show(function () {

      });







      $("#wa-booze-button").click(function () {
        console.log("Clicked on the wa booze button");
        $("#wa-booze").toggle(function () {
        })
      })

      $("#wa-weed-button").click(function () {
        console.log("Clicked on the wa weed button");
        $("#wa-weed").toggle(function () {
        })
      })



      $("#or-booze-button").click(function () {
        console.log("Clicked on the or booze button");
        $("#or-booze").show(function () {
        })
      })

      $("#or-weed-button").click(function () {
        console.log("Clicked on the or weed button");
        $("#or-weed").show(function () {
        })
      })

    })

    $("#id-booze-button").click(function () {
      console.log("Clicked on the id booze button");
      $("#id-booze").show(function () {
      })
    })

    $("#id-weed-button").click(function () {
      console.log("Clicked on the or weed button");
      $("#id-weed").show(function () {
      })
    })

  })



  /*
  
  
    $(".or .dropbutton").click(function () {
      console.log("Clicked #or");
      $(".or .dropdown-info").toggle(function () {
      })
    })
  
    $(".id .dropbutton").click(function () {
      console.log("Clicked #id");
      $(".id .dropdown-info").toggle(function () {
      })
    })
  
  
    $(".ca .dropbutton").click(function () {
      console.log("Clicked #ca");
      $(".ca .dropdown-info").toggle(function () {
      })
    })
  
    /*$("#wa-booze").click(function () {
        console.log("Clicked #wa");
        $('#wa-weed').children('option[value="1"]').css('display', 'none');
        $("#wa-weed ul li").toggle(function () {
        })
    })
    
    $("#wa-booze-button").click(function () {
        console.log("Clicked #wa");
        $('#wa-weed').children('option[value="1"]').css('display', 'none');
        $("#wa-weed ul li").toggle(function () {
        })
    })
    
    $("#wa-weed").click(function () {
        $("#wa-weed").slideToggle(function () {
        })
    })
    
    $("#wa-weed-button").click(function () {
        console.log("It did click");
        $("#wa-weed").toggle(function () {
        })
    })
    */

  $(".main-content").ready(function () {
    $(".main-content").hide(function () {
      $(".wa-laws").hide(function () {

      })
      $(".ca-laws").hide(function () {

      })
      $(".or-laws").hide(function () {

      })
      $(".id-laws").hide(function () {

      })
    })
  });



  $("#ca-weed").ready(function () {
    $("#ca-weed").hide(function () {
    })
  });

  $("#ca-booze").ready(function () {
    $("#ca-booze").hide(function () {
    })
  });

  $("#id-weed").ready(function () {
    $("#id-weed").hide(function () {
    })
  });

  $("#id-booze").ready(function () {
    $("#id-booze").hide(function () {
    })
  });

  $("#or-weed").ready(function () {
    $("#or-weed").hide(function () {
    })
  });

  $("#or-booze").ready(function () {
    $("#or-booze").hide(function () {
    })
  });

  $("#wa-weed").ready(function () {
    $("#wa-weed").hide(function () {
    })
  });

  $("#wa-booze").ready(function () {
    $("#wa-booze").hide(function () {
    })
  });
  $("#mymap button").click(function () {

    $("#map").toggle(function () {
      $("#tooltip").hide(function () {
        
        

  $('#map').usmap({
    'stateSpecificHoverStyles': {
        "AL": {fill: '#FF6961'},
        "AK": {fill: '#009F00'},
        "AZ": {fill: '#80FF80'},
        "AR": {fill: '#80FF80'},
        "CA": {fill: '#009F00'},
        "CO": {fill: '#009F00'},
        "CT": {fill: '#80FF80'},
        "DE": {fill: '#80FF80'},
        "FL": {fill: '#80FF80'},
        "GA": {fill: '#80FF80'},
        "HI": {fill: '#80FF80'},
        "ID": {fill: '#FF6961'},
        "IL": {fill: '#009F00'},
        "IN": {fill: '#FF6961'},
        "IA": {fill: '#FF6961'},
        "KS": {fill: '#FF6961'},
        "KY": {fill: '#FF6961'},
        "LA": {fill: '#80FF80'},
        "ME": {fill: '#009F00'},
        "MD": {fill: '#80FF80'},
        "MA": {fill: '#009F00'},
        "MI": {fill: '#009F00'},
        "MN": {fill: '#80FF80'},
        "MS": {fill: '#FF6961'},
        "MO": {fill: '#80FF80'},
        "MT": {fill: '#80FF80'},
        "NE": {fill: '#FF6961'},
        "NV": {fill: '#009F00'},
        "NH": {fill: '#80FF80'},
        "NJ": {fill: '#80FF80'},
        "NM": {fill: '#80FF80'},
        "NY": {fill: '#80FF80'},
        "NC": {fill: '#FF6961'},
        "ND": {fill: '#80FF80'},
        "OH": {fill: '#80FF80'},
        "OK": {fill: '#80FF80'},
        "OR": {fill: '#009F00'},
        "PA": {fill: '#80FF80'},
        "RI": {fill: '#80FF80'},
        "SC": {fill: '#FF6961'},
        "SD": {fill: '#FF6961'},
        "TN": {fill: '#FF6961'},
        "TX": {fill: '#FF6961'},
        "UT": {fill: '#80FF80'},
        "VT": {fill: '#009F00'},
        "VA": {fill: '#FF6961'},
        "WA": {fill: '#009F00'},
        "WV": {fill: '#80FF80'},
        "WI": {fill: '#FF6961'},
        "WY": {fill: '#FF6961'},
        "DC": {fill: '#FF6961'},
    },
    mouseover: function (event, data) {

        $('#tooltip').text(stateName[data.name]).show()
        $('#map').mousemove(function (e) {
            var mouseX = e.pageX - 65;
            var mouseY = e.pageY - 80;
            $('#tooltip').css({
                top: mouseY,
                left: mouseX,
            });
        });
    },

    mouseout: function (event, data) {
        $('#tooltip').hide();
    },
    
});
// not funtional atm, need to add state laws
let stateLaw = {
    "AL": "Alabama ",
    "AK": "Alaska ",
    "AZ": "Arizona ",
    "AR": "Arkansas ",
    "CA": "California ",
    "CO": "Colorado ",
    "CT": "Connecticut ",
    "DE": "Delaware ",
    "FL": "Florida ",
    "GA": "Georgia ",
    "HI": "Hawaii ",
    "ID": "Idaho ",
    "IL": "Illinois ",
    "IN": "Indiana ",
    "IA": "Iowa ",
    "KS": "Kansas ",
    "KY": "Kentucky ",
    "LA": "Louisiana ",
    "ME": "Maine ",
    "MD": "Maryland ",
    "MA": "Massachusetts ",
    "MI": "Michigan ",
    "MN": "Minnesota ",
    "MS": "Mississippi ",
    "MO": "Missouri ",
    "MT": "Montana ",
    "NE": "Nebraska ",
    "NV": "Nevada ",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma ",
    "OR": "Oregon ",
    "PA": "Pennsylvania ",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee ",
    "TX": "Texas ",
    "UT": "Utah ",
    "VT": "Vermont ",
    "VA": "Virginia ",
    "WA": "Washington ",
    "WV": "West Virginia",
    "WI": "Wisconsin ",
    "WY": "Wyoming ",
    "DC": "Washington D.C.",
}

let stateName = {
    "AL": "Alabama ",
    "AK": "Alaska ",
    "AZ": "Arizona ",
    "AR": "Arkansas ",
    "CA": "California ",
    "CO": "Colorado ",
    "CT": "Connecticut ",
    "DE": "Delaware ",
    "FL": "Florida ",
    "GA": "Georgia ",
    "HI": "Hawaii ",
    "ID": "Idaho ",
    "IL": "Illinois ",
    "IN": "Indiana ",
    "IA": "Iowa ",
    "KS": "Kansas ",
    "KY": "Kentucky ",
    "LA": "Louisiana ",
    "ME": "Maine ",
    "MD": "Maryland ",
    "MA": "Massachusetts ",
    "MI": "Michigan ",
    "MN": "Minnesota ",
    "MS": "Mississippi ",
    "MO": "Missouri ",
    "MT": "Montana ",
    "NE": "Nebraska ",
    "NV": "Nevada ",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma ",
    "OR": "Oregon ",
    "PA": "Pennsylvania ",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee ",
    "TX": "Texas ",
    "UT": "Utah ",
    "VT": "Vermont ",
    "VA": "Virginia ",
    "WA": "Washington ",
    "WV": "West Virginia",
    "WI": "Wisconsin ",
    "WY": "Wyoming ",
    "DC": "Washington D.C.",
}
})
})
})
});
