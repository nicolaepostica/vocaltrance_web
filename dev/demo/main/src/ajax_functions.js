jQuery(document).ready(function($) {

    requestCurrentTrack();
    requestLastTenTracks();

    setInterval(requestCurrentTrack, 20000);
    setInterval(requestLastTenTracks, 20000);

    function requestLastTenTracks() {
        $.ajax({
            url: window.wp_data.ajax_url,
            type: "POST",
            data: {
                action: 'get_tracks'
            },
            success: function(data) {
                data = JSON.parse(data);
                data.forEach(function(item, index) {
                    $('#dropdown1 li:nth-child(' + (index + 1) + ') span').text(decodeEntities(item.track));
                    $('#dropdown1 li:nth-child(' + (index + 1) + ') span').attr('data-clipboard-text', decodeEntities(item.track));
                });
            }
        });
    }

    function requestCurrentTrack() {
        $.ajax({
            url: window.wp_data.ajax_url,
            type: "POST",
            data: {
                action: 'get_current_track'
            },
            success: function(data) {
                data = JSON.parse(data);
                $('#marquee').text(decodeEntities(data.track));
                $($('.paper.z-depth-1 a')[0]).text(decodeEntities(data.track));
                $($('.paper.z-depth-1 a')[2]).text(decodeEntities(data.track));
                $($('.paper.z-depth-1 a')[4]).text(decodeEntities(data.track));
                $($('.paper.z-depth-1 a')[6]).text(decodeEntities(data.track));
                $($('.paper.z-depth-1 a')[8]).text(decodeEntities(data.positive_playing));
                $($('.paper.z-depth-1 a')[10]).text(decodeEntities(data.positive_playing));
                $($('.paper.z-depth-1 a')[12]).text(decodeEntities(data.positive_playing));
                $($('.paper.z-depth-1 a')[14]).text(decodeEntities(data.chilout_playing));
                $($('.paper.z-depth-1 a')[16]).text(decodeEntities(data.chilout_playing));
                $($('.paper.z-depth-1 a')[18]).text(decodeEntities(data.chilout_playing));
                $($('.paper.z-depth-1 a')[20]).text(decodeEntities(data.uplifting_playing));
                $($('.paper.z-depth-1 a')[22]).text(decodeEntities(data.uplifting_playing));
                $($('.paper.z-depth-1 a')[24]).text(decodeEntities(data.uplifting_playing));
                $($('.paper.z-depth-1 a')[26]).text(decodeEntities(data.deep_playing));
                $($('.paper.z-depth-1 a')[28]).text(decodeEntities(data.deep_playing));
                $($('.paper.z-depth-1 a')[30]).text(decodeEntities(data.deep_playing));
                $('#marquee').attr('data-clipboard-text', decodeEntities(data.track));
                $('#onairMobile').text(decodeEntities(data.track));
                $('#onairMobile').attr('data-clipboard-text', decodeEntities(data.track));
            }
        })
    }
	
	function decodeEntities(encodedString) {
		var map = {amp: '&', lt: '<', gt: '>', quot: '"', '#039': "'"}
		return encodedString = encodedString.replace(/&([^;]+);/g, (m, c) => map[c])
	}

});
