// const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&limit=50&term=YOASOBI`;

// $.getJSON(requestUrl, function (data) {
//     //送り返されたデータを使ってこの部分で色々やる
//     console.log(data)
// });

$("#btn").on("click", function () {
    const targetArtistName = $("#keyword").val();// 追加
    const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&limit=50&term=${targetArtistName}`;// 修正

    $.getJSON(requestUrl, function (data) {
        console.log(data);
        const previewUrl = data.results[0].previewUrl;
        $('#audio').attr("src", previewUrl);
        $('#audio')[0].play();
        
        //画面に１曲分の情報表示
        const songsFromAPI = data.results
        songsFromAPI.forEach(function(song ,index){
            console.log(index);
            const trackName = song.trackName; //曲名
            const artistName = song.artistName; //アーティスト名
            const artworkUrl = song.artworkUrl100; //画像
            const primaryGenreName = song.primaryGenreName;//楽曲タイプ
            const releaseDate = song.releaseDate.substring(0, 4);//リリース時期
            const music = `<div class="music">
                <img src="${artworkUrl}" alt="${trackName}">
                <div>
                    <p class="track-name">${trackName}</p>
                    <p class="artist-name">${artistName}</p>
                    <p class="primaryGenreName">${primaryGenreName}</p>
                    <p class="releaseDate">${releaseDate}</p>
                </div>
            </div>`;
            $("#result").append(music);
            //ここに繰り返したい処理の内容を書く
                console.log(song,index);
        });

    });
});

