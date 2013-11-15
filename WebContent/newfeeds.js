var feedcontainer=document.getElementById("feeddiv")
var feedurl="http://feeds.finance.yahoo.com/rss/2.0/headline?s=AAPL&region=US&lang=en-US"
var feedlimit=5
var rssoutput="<b>Latest AAPL News:</b><br /><ul>"

function rssfeedsetup(){
var feedpointer=new google.feeds.Feed(feedurl) //Google Feed API method
feedpointer.setNumEntries(feedlimit) //Google Feed API method
feedpointer.load(displayfeed) //Google Feed API method
}

function displayfeed(result){
if (!result.error){
var thefeeds=result.feed.entries
for (var i=0; i<thefeeds.length; i++)
rssoutput+="<li><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>"
rssoutput+="</ul>"
feedcontainer.innerHTML=rssoutput
}
else
alert("Error fetching feeds!")
}

window.onload=function(){
rssfeedsetup()
}