

waldayu.transducers["kumamoto_compare"] = (function() {
    var correspondences = {'l': 'ɾ', 'c': 't', 'ɕ': 's'};
    var keys = ['l', 'c', 'ɕ'];
    var regex = new RegExp("(" + keys.join('|') + ")", 'g');
    return function(str) {
        return str.replace(regex, function(a,b) {
            return correspondences[a];
        });
    };
})();var config = {
    "L1": {
        "name": "Kumamoto",
        "underlying": "",
        "compare": "kumamoto_compare",
        "lettersInLanguage" : ['a', 'i', 'u', 'e', 'o', 'k', 'g', 's', 'z', 't', 'c', 'd', 'n', 'h', 'p', 'b', 'm', 'j', 'ɾ', 'w']
    },
    "L2": {
        "name": "English",
        "underlying": "",
        "compare": ""
    }
};

/* Search Variables */
var l1_weights_config = {'underlying_form': 0.1, 'compare_form': 1.0};

var l1_thresholds_config = {'partial': 1.0, 'other': 4.0, 'exact': 0.0};

var l2_weights_config = {'definition': 1.0};

var l2_thresholds_config = {'partial': 1.9, 'other': 1000.0, 'exact': 0.9};
