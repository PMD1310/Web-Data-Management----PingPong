<pre>
var x=30; // defines y axis	
var	y=30; // defines x axis
var dx =8;
var dy =12;
var dt=2;
var hits =0;
var max_score=0;
var large=0;	
var var_speed=0;
var myvar1,myvar2,myvar3;



function initialize()
{
	
}

function startGame()
{
	
	 
	 myvar1=setInterval(moveBall, 200);
	 function frame() {
		 var elem = document.getElementById(&quot;ball&quot;);
			var ball_bottom = document.getElementById(&quot;ball&quot;).getBoundingClientRect().bottom;
			var ball_top = document.getElementById(&quot;ball&quot;).getBoundingClientRect().top;
			var ball_left = document.getElementById(&quot;ball&quot;).getBoundingClientRect().left;
			var ball_right = document.getElementById(&quot;ball&quot;).getBoundingClientRect().right;
			var left_court = document.getElementById(&quot;court&quot;).getBoundingClientRect().left;
			 var right_court = document.getElementById(&quot;court&quot;).getBoundingClientRect().right;
			 var top_court = document.getElementById(&quot;court&quot;).getBoundingClientRect().top;
			 var bottom_court = document.getElementById(&quot;court&quot;).getBoundingClientRect().bottom;
			 console.log(&quot;Left =&quot; + left_court + &quot;Right =&quot;+ right_court);
			 console.log(&quot;Top =&quot; + top_court + &quot;Bottom =&quot;+bottom_court);
			 console.log(&quot;Difference in the court = &quot; +(bottom_court-top_court));
			 
			 console.log(&quot;Left =&quot; +ball_left+ &quot;Right =&quot; +ball_right);
			 console.log(&quot;Top =&quot;+ball_top+ &quot;Bottom =&quot; +ball_bottom);
			 var pos = 0;
	   if ((bottom_court &lt; ball_bottom )  || (top_court &gt; ball_top ) || (left_court &gt; ball_left)) {
		   console.log(bottom_court)
		   console.log(ball_bottom)
	   } 
	   else
	   {
	     elem.style.top = (ball_top+15.3 - top_court) + &quot;px&quot;; 
	     elem.style.left = (ball_left+16 - left_court) + &quot;px&quot;; 
	   }    	
	   	
	   document.getElementById(&quot;paddle&quot;).onmousemove=movePaddle;
	   
	   
	   
	   if(document.getElementById(&quot;100&quot;).checked)
		{
			document.getElementById(&quot;messages&quot;).innerHTML = &quot;Speed selected is slow, Time interval: 200&quot;;
			clearInterval(myvar2);
			clearInterval(myvar3);
			myvar1=setInterval(moveBall, 100);	
			
			
		}
		else{
			clearInterval(myvar1);
			clearInterval(myvar2);
			clearInterval(myvar3);
		}
		 if(document.getElementById(&quot;200&quot;).checked)
		{
			document.getElementById(&quot;messages&quot;).innerHTML = &quot;Speed selected is medium, Time interval: 100&quot;;
				
			clearInterval(myvar1);
			clearInterval(myvar3);
			myvar2=setInterval(moveBall, 50);
		}
		else if(document.getElementById(&quot;300&quot;).checked)
		{
			document.getElementById(&quot;messages&quot;).innerHTML = &quot;Speed selected is fast, Time interval: 40&quot;;
			
			clearInterval(myvar2);
			clearInterval(myvar1);
			myvar3=setInterval(moveBall, 1);
		}
	   
	   	
	 
	 }
}


function movePaddle(event)
{
	
	var mycourt=document.getElementById(&quot;court&quot;);
	var mypaddle=document.getElementById(&quot;paddle&quot;);
	if(event.offsetY)
	{
	var paddlemove=event.offsetY;
	}
	else
	{
	var paddlemove=event.pageY-mycourt.offsetTop;	
	}
	if(paddlemove&lt;400 &amp;&amp; paddlemove&gt;70)
	{
		mypaddle.style.top=(paddlemove-70)+&quot;px&quot;;
	}
	else if(paddlemove&lt;70){
		mypaddle.style.top=&quot;0px&quot;;
	}
	else if(paddlemove&gt;400){
		mypaddle.style.top=&quot;400px&quot;;
	}
	
}
	 
function moveBall()
{
	var ball_bottom = document.getElementById(&quot;ball&quot;).getBoundingClientRect().bottom;
	var ball_top = document.getElementById(&quot;ball&quot;).getBoundingClientRect().top;
	var ball_left = document.getElementById(&quot;ball&quot;).getBoundingClientRect().left;
	var ball_right = document.getElementById(&quot;ball&quot;).getBoundingClientRect().right;
	var left_court = document.getElementById(&quot;court&quot;).getBoundingClientRect().left;
	 var right_court = document.getElementById(&quot;court&quot;).getBoundingClientRect().right;
	 var top_court = document.getElementById(&quot;court&quot;).getBoundingClientRect().top;
	 var bottom_court = document.getElementById(&quot;court&quot;).getBoundingClientRect().bottom;
	 console.log(&quot;Left =&quot; + left_court + &quot;Right =&quot;+ right_court);
	 console.log(&quot;Top =&quot; + top_court + &quot;Bottom =&quot;+bottom_court);
	 console.log(&quot;Difference in the court = &quot; +(bottom_court-top_court));
	 
	 
		  if(x &gt;=398||x&lt;=-82)
		{
		  dx = -dx;  
		}
		if(y&lt;7 )
		{
		 dy = -dy;  
		}
		
		var pleft=paddle.getBoundingClientRect().left;
		var pright=paddle.getBoundingClientRect().right;
		var ptop = paddle.getBoundingClientRect().top;
		var pbottom = paddle.getBoundingClientRect().bottom;
		console.log(&quot;Padlle Left = &quot; + pleft);
		console.log(&quot;Paddle Right = &quot; + pright);
		console.log(&quot;Padlle Top = &quot; + ptop);
		console.log(&quot;Paddle Bottom = &quot; +pbottom);
		
		if(y&gt;727)
		{
		if((ball_top &gt;= ptop) &amp;&amp; (ball_top &lt;= ptop+102))
		{
		dy=-dy;
		hits++;
		max_score=hits;
		document.getElementById(&quot;strikes&quot;).innerHTML = hits;
		}
		
		if(y&gt;765)
			{
			if(max_score&gt;large)
			{
			large=max_score;
			document.getElementById(&quot;score&quot;).innerHTML = large;
			}
			
			hits=0;max_score=0;
			x=0;y=-17;dx =8;dy =17;dt=1;
			document.getElementById(&quot;messages&quot;).innerHTML = &quot;You missed it! Please try again!&quot;;		
			//alert('reached');
			document.getElementById(&quot;ball&quot;).style.top= x+'px';
			document.getElementById(&quot;ball&quot;).style.left=y+'px';
			document.getElementById(&quot;strikes&quot;).innerHTML = hits;
			clearInterval(myvar1);
			clearInterval(myvar2);
			clearInterval(myvar3);
			}
		}
		
		x =x+dx*dt;
	    y =y+dy*dt;

		document.getElementById(&quot;ball&quot;).style.top=x+&quot;px&quot;;
		document.getElementById(&quot;ball&quot;).style.left=y+&quot;px&quot;;

}

function resetGame()
{
	clearInterval(myvar1);
	location.reload();
}
	
	   	










	   
</pre>
