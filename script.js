function GetVideoHighestQuality(){
    var outer_html = document.body.outerHTML
    var index_of_quality = outer_html.indexOf('videoQuality') + 16
    var quality = ''
    while(
        outer_html[index_of_quality] != 'p' && 
        outer_html[index_of_quality + 1] != '"' && 
        outer_html[index_of_quality + 2] != ',')
    {
        quality += outer_html[index_of_quality]
        index_of_quality++
    }
    return quality
}

function GetCurrentUrl(){
    var outer_html = document.body.outerHTML
    var index_of_url = outer_html.indexOf('"url"') + 8
    var url = ''
    while(outer_html[index_of_url] != '"' && outer_html[index_of_url + 1] != ','){
        url += outer_html[index_of_url]
        index_of_url++
    }
    return url
}

function OpenUrl(url){
    window.location.href = url
}

function UpgradeUrlToHigherQuality(url){
    return url += '?wersja=' + GetVideoHighestQuality() + 'p'
}

function Reload(){
    OpenUrl(UpgradeUrlToHigherQuality(GetCurrentUrl()))
}

Reload()