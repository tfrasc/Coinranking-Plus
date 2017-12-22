//handle home page
chrome.storage.sync.get("coins", function (obj) {
  var found = false;
  if(obj.coins != null && obj.coins != '') {
    var coins = obj.coins.split(',');
    $('.grid:not(:first)').each(function() {
      var name = $(this).find('.coin-name').first().text();
      var img = $(this).find('.coin-list__body__row__cryptocurrency__prepend__icon__img').attr('src');
      var url = $(this).parent().parent().attr('href');
      for(var i = 0; i < coins.length && found == false; i++) {
        var fav_name = coins[i].split('|')[0];
        if(name === fav_name)
        {
          found = true;
        }
      }
      if(found == true)
      {
        var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorited'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/filled.png' /></span>";
      }
      else {
        var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorite'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png' /></span>";
      }
      $(this).before(span);
      found = false;
    })
  }
  else {
    $('.grid:not(:first)').each(function() {
      var name = $(this).find('.coin-name').first().text();
      var img = $(this).find('.coin-list__body__row__cryptocurrency__prepend__icon__img').attr('src');
      var url = $(this).parent().parent().attr('href');
      var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorite'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png' /></span>";
      $(this).before(span);
    });
  }
})

$(document).on('click', '.coin-list__body__row', function(e) {
  e.preventDefault();
})

$(document).on('click', '.grid', function() {
  window.location.href = $(this).parent().parent().attr('href');
})

$(document).on('click', '.favorite', function() {
  var name = $(this).data('name');
  var img = $(this).data('img');
  var url = $(this).data('url');
  _this = this;

  chrome.storage.sync.get("coins", function (obj) {
      var coins = obj.coins;

      if(coins !== '')
      {
        coins += ',';
      }
      coins += name + '|' + img + '|' + url;

      chrome.storage.sync.set({'coins': coins}, function() {
        $(_this).removeClass('favorite');
        $(_this).addClass('favorited');
        $(_this).find('img').attr('src', 'https://s3-us-west-1.amazonaws.com/memeo-development/public/filled.png');
      });
  });
});


$(document).on('click', '.search__container-item', function() {
  setTimeout(function() {
    chrome.storage.sync.get("coins", function (obj) {
      var found = false;
      if(obj.coins != null && obj.coins != '') {
        var coins = obj.coins.split(',');
        $('.grid:not(:first)').each(function() {
          var name = $(this).find('.coin-name').first().text();
          var img = $(this).find('.coin-list__body__row__cryptocurrency__prepend__icon__img').attr('src');
          var url = $(this).parent().parent().attr('href');
          for(var i = 0; i < coins.length && found == false; i++) {
            var fav_name = coins[i].split('|')[0];
            if(name === fav_name)
            {
              found = true;
            }
          }
          if(found == true)
          {
            var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorited'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/filled.png' /></span>";
          }
          else {
            var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorite'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png' /></span>";
          }
          $(this).before(span);
          found = false;
        })
      }
      else {
        $('.grid:not(:first)').each(function() {
          var name = $(this).find('.coin-name').first().text();
          var img = $(this).find('.coin-list__body__row__cryptocurrency__prepend__icon__img').attr('src');
          var url = $(this).parent().parent().attr('href');
          var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorite'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png' /></span>";
          $(this).before(span);
        });
      }
    })
  }, 500);
});

$(document).on('keyup', '#search', function() {
  setTimeout(function() {
    chrome.storage.sync.get("coins", function (obj) {
      var found = false;
      if(obj.coins != null && obj.coins != '') {
        var coins = obj.coins.split(',');
        $('.grid:not(:first)').each(function() {
          var name = $(this).find('.coin-name').first().text();
          var img = $(this).find('.coin-list__body__row__cryptocurrency__prepend__icon__img').attr('src');
          var url = $(this).parent().parent().attr('href');
          for(var i = 0; i < coins.length && found == false; i++) {
            var fav_name = coins[i].split('|')[0];
            if(name === fav_name)
            {
              found = true;
            }
          }
          if(found == true)
          {
            var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorited'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/filled.png' /></span>";
          }
          else {
            var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorite'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png' /></span>";
          }
          $(this).before(span);
          found = false;
        })
      }
      else {
        $('.grid:not(:first)').each(function() {
          var name = $(this).find('.coin-name').first().text();
          var img = $(this).find('.coin-list__body__row__cryptocurrency__prepend__icon__img').attr('src');
          var url = $(this).parent().parent().attr('href');
          var span = "<span style='position: absolute; left: 15%; margin-top: 10px; color: #3cd483' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "' class='favorite'><img style='height: 20px; width: 20px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png' /></span>";
          $(this).before(span);
        });
      }
    })
  }, 500);
});

$(document).on('click', '.favorited', function() {
  var name = $(this).data('name');
  var img = $(this).data('img');
  var url = $(this).data('url');
  _this = this;

  chrome.storage.sync.get("coins", function (obj) {
      var coin_str = obj.coins;
      var coins = obj.coins.split(',');

      for(var i = 0; i < coins.length; i++){
        var favorited_coin = coins[i].split('|');
        if(favorited_coin[0] === name){
          if(coins.length == 1)
          {
            coin_str = coin_str.replace(coins[i], '');
          }
          else if(i == coins.length - 1){
            coin_str = coin_str.replace(',' + coins[i], '');
          }
          else {
            coin_str = coin_str.replace(coins[i] + ',', '');
          }
        }
      }

      chrome.storage.sync.set({'coins': coin_str}, function() {
        $(_this).removeClass('favorited');
        $(_this).addClass('favorite');
        $(_this).find('img').attr('src', 'https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png');
      });
  });
});

//handle specific pages
if($('.coin-page').length > 0)
{
  var page_coin = $('.coin-page__icon-img').attr('alt').split(' (')[0];
  var found = false;

  chrome.storage.sync.get("coins", function (obj) {
    if(obj.coins != null && obj.coins != '') {
      var coins = obj.coins.split(',');

      for(var i = 0; i < coins.length; i++){
        var favorited_coin = coins[i].split('|');
        var name = favorited_coin[0];
        var img = favorited_coin[1];
        var url = favorited_coin[2];

        if(name === page_coin){
          found = true;
          break;
        }
      }
      if(found == true)
      {
        var span = "<div class='coin-page__coin-info-item favorited' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "'><img style='height: 20px; width: 20px; margin-top: 4px; margin-left: 10px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/filled.png' /></div>";
      }
      else {
        name = $('.coin-page__icon-img').attr('alt').split(' (')[0];
        img = $('.coin-page__icon-img').attr('src');
        url = window.location.href;
        var span = "<div class='coin-page__coin-info-item favorite' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "'><img style='height: 20px; width: 20px; margin-top: 4px; margin-left: 10px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png' /></div>";
      }
      $('.coin-page__coin-info').append(span);
    }
    else {
      var name = $('.coin-page__icon-img').attr('alt').split(' (')[0];
      var img = $('.coin-page__icon-img').attr('src');
      var url = window.location.href;
      var span = "<div class='coin-page__coin-info-item favorite' data-url='" + url + "' data-img='" + img + "' data-name='" + name + "'><img style='height: 20px; width: 20px; margin-top: 4px; margin-left: 10px;' src='https://s3-us-west-1.amazonaws.com/memeo-development/public/empty.png' /></div>";
      $('.coin-page__coin-info').append(span);
    }
  });
}
