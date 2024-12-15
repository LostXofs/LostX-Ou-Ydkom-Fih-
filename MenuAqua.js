
        function Search() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('Acitve (' + h5gg.getResultsCount() + '/1)');
     
}

 
function Norecoil() {
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1016018816, 180, 'I32')
        alert('No Recoli Active (' + h5gg.getResultsCount() + '/1)');
	}

    function Aim180() {
		function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(1053273620, -2000, 'I32')
		searchAndReplace(1057048494, -2000, 'I32')
        searchAndReplace(1054951342, -2000, 'I32')
        alert('Aim 180 Active (' + h5gg.getResultsCount() + '/1)');
		}

        function so90() {
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925814228', 'I64');
    h5gg.clearResults();
    h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
    h5gg.editAll('4848124999925251973', 'I64');
    alert('Vesual Active (' + h5gg.getResultsCount() + '/1)');


}

function so88() {
    h5gg.clearResults();
    h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
    h5gg.searchNearby('0.01', 'F32', '0x8');
    h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
    h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
    h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
    h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
    h5gg.editAll('1.875', "F32");
    alert('Balas Magec Active (' + h5gg.getResultsCount() + '/1)');

}


function S8() {
    h5gg.editAll('4366458311853685297', 'I64');
    alert('Speed X8 Active (' + h5gg.getResultsCount() + '/1)');;

  }

  function S2() {
    h5gg.editAll('4397530849758414897', 'I64');
    alert('Speed X2 Active (' + h5gg.getResultsCount() + '/1)');

}

function Restore() {
    h5gg.editAll('4397530849764387586', 'I64');
    alert('Speed Disactive (' + h5gg.getResultsCount() + '/1)');

}


