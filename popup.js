var background = chrome.extension.getBackgroundPage();

$(document).ready(function() {

  // $('#start-btn').click(function() {
  //   if(first == false) {
  //     background.togglePlay();
  //   }
  //   else {
  //     background.load();
  //     first = false;
  //   }
  // });
  //
  // $('#next-btn').click(function() {
  //   background.next();
  // });
  //
  // $('#back-btn').click(function() {
  //   background.back();
  // });

  chrome.storage.sync.get("coins", function (obj) {
    if(obj.coins == null || obj.coins == '') {
      $('#favorites').append('<div class="no-coins">Add your favorite coins on <span class="home-button">Coinranking</span>!</div>')
    }
    else {
      var coins = obj.coins.split(',');
      for(var i = 0; i < coins.length; i++) {
        var vals = coins[i].split('|');
        $('#favorites').append('<div class="favorite" data-url="' + vals[2] + '"><img class="coin-img" src="' + vals[1] + '"/><span class="coin-name">' + vals[0] + '</span></div>');
      }
    }
  });

  $(document).on('click', '.favorite', function() {
    chrome.tabs.update({url: $(this).data('url')});
  });

  $(document).on('click', '.home-button', function() {
    chrome.tabs.update({url: 'https://coinranking.com/'});
  });

  $(document).on('click', '.title-img', function() {
    chrome.tabs.update({url: 'https://coinranking.com/'});
  });

});
