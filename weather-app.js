var weatherWidget = {
};

weatherWidget.key = '53a7b596c0520e29';

weatherWidget.init = function() {
  // 1. Use jQuery Ajax to fetch the weather for Toronto (or your city)
  // 'wunderground.com/api/' + weatherwidget.key + '/toronto';
  $.ajax({
    url:'http://api.wunderground.com/api/' + weatherWidget.key + '/conditions/q/Ontario/Toronto.json',
    type: 'GET',
    dataType: 'json',
    success: function(thing){
      $('.weather_image').attr('src',thing.current_observation.icon_url);
      $('.weather_string').text(thing.current_observation.weather);
      $('.temp_c').text(thing.current_observation.temp_c);
      $('.city_name').text(thing.current_observation.observation_location.city);
      $('.date_time').text(thing.current_observation.observation_time_rfc822);
    }
  });

}

$(document).ready(function(){
  weatherWidget.init();
});