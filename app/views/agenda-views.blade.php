<!DOCTYPE html>
<html>
<head>
<link href='assets/css/calendar/fullcalendar.min.css' rel='stylesheet' />
<link href='assets/css/calendar/fullcalendar.print.css' rel='stylesheet' media='print' />
<script type="text/javascript" src='assets/js/moment.min.js'></script>
<script>

	$(document).ready(function() {	
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			height: 400,
			lang: 'es',

			//API KEY googlecalendar
			googleCalendarApiKey: 'AIzaSyAHYsbmQReQA99ZQNMqSKTCguHX71rWxW0',
		
			//ID del calendario ISM
			events: {
				googleCalendarId: '6a4rl73iiijl9pcu55sl46tvc4@group.calendar.google.com',
				color: '#0e8e5f'
			},
			
			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},
			
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
			
		});		
	});
</script>
<style>

	/*#calendar {
		height: 500px;
		margin: 0 auto;
		font-family: sans-serif;
	}*/

	th, td{
		color: black;
	}

	#loading {
		display: none;
		position: absolute;
		top: 10px;
		right: 10px;
	}

	#calendar {
		height: 450px;
		max-width: 900px;
		margin: 0 auto;
	}

</style>
</head>
<body>
<div class="row div-shadow">
	<div class="titulo-sec" style="background-color:#0e8e5f; width:100%;">
		<h2 style="padding:8px; color:white;">Agenda ISM</h2>
	</div>		
	<div class="pic-container">
		<div id='calendar' style="padding:8px;"></div>
	</div>
</div>
</body>
</html>
