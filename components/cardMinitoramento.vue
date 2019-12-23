<template>
<div class="cards_wrapper" >
	
		<div class="card">
		
		<div class="card_heading">

			<h2 class="h2">Monitorando</h2>	
			
		</div>
		
		
		<div class="card_trip">
			
			<div class="trip_from">
				
				<h2 class="h2">Origen</h2>

				<h1 class="h1">MGA</h1>
				
				
			</div>
			
			<div class="trip_icon">

          <v-icon>mdi-airplane</v-icon>
			</div>
			
			<div class="trip_to">
				
				<h2 class="h2">Destino</h2>

				<h1 class="h1">CGH</h1>
				
				
			</div>
			
		</div>
		
		<div class="card_divider">
			
			<div class="divider_left divider_hole">
				
			</div>
			
			<div class="divider">
				
			</div>
			
			<div class="divider_right divider_hole">
				
			</div>
			
		</div>
		
		<div class="card_seating">
			
			<div class="seating_passenger">
				
				<h2 class="h2">Status</h2>
				
				<h3 class="h3">
         <v-btn icon @click="monitorar(monitoractive = !monitoractive)">
        <v-icon :color="statusM">mdi-brightness-1</v-icon>
      </v-btn></h3>
				
			</div>
			
			<div class="seating_seat">
				
				<h2 class="h2">Data da Ida</h2>
				
				<h3 class="h3">10/02/2020</h3>
				
			</div>
      	<div class="seating_seat">
				
				<h2 class="h2">Data da Volta</h2>
				
				<h3 class="h3">28/02/2020</h3>
				
			</div>
			
		</div>
		
		
		</div>
		
	</div>
    
</template>
<script>
import moment from 'moment'
import axios from 'axios'
  export default {
   
    props: {
      source: String,
    },
    data: () => ({
      monitoractive:'',
      statusM:'',
     
    }),


  methods: {
    
    monitorar: function(index){
      if(index === true){
      this.statusM = '#25F230'
    }

      if(index === false){
        this.statusM = 'red'
      }

    
    }
  }

  }
</script>
<style lang="scss">
$content_width: 85%;


.titleh1 {

	font-weight: 200;
	font-size: 2.1em;
	margin: 0px;
}

.h1 {
color: #fff;
	font-weight: 200;
	font-size: 2.1em;
	margin: 0px;
}

.h2 {
	
color: #fff;
	font-weight: 100;
	font-size: .9em;
	margin: 0px;
}

.h3 {
	
  color: #fff;
	font-weight: 100;
	font-size: .9em;
	margin: 0px;
}

.cards_wrapper {
	text-align: center;
	padding-top: 20px;
}
.card:hover{
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

}

.card {
	width: 350px;
	border-radius: 20px;
	background: #0b519b;
    box-shadow: 0 1px 3px rgba(255, 247, 247, 0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	display: inline-block;
	margin: 10px;
	
	&_heading {
		padding-top: 25px;
		
		h2 {
			text-align: center;
		}
	}
	
	&_thumbnail {
		min-height: 150px;
		margin-top: -15px;
		
		img {
			width: 100%;
			height: auto;
		}
	}
	
	&_trip {
		text-align: center;
		width: $content_width;
		margin: 30px auto;
		display: flex;
		
		div {
			display: inline-block;
			height: 100%;
			vertical-align: middle;
			
			h1 {
				margin: 0px;
			}
			
			h2 {
				margin: 0px;
				letter-spacing: 2px;
			}
			
			&.trip_from {
				text-align: left;
				width: 35%;
				
				h2 {
					padding-left: 2px;
				}
			}
			
			&.trip_icon {
				width: 30%;
				
				img {
					padding-top: 20px;
					opacity: 1;
					width: 25px;
				}
			}
			
			&.trip_to {
				text-align: right;
				width: 35%;
				
				h2 {
					padding-right: 3px;
				}
			}
		}
	}
	
	&_divider {
		position: relative;
		width: 100%;
		
	
		
		
		.divider {
			width: $content_width;
			margin: auto;
			height: 2px;
			background: linear-gradient(to right, #fff 50%, transparent 50%);
 			background-size: 10px 8px, 100% 2px;
			opacity: .2;
		}
		
		.divider_right {
			right: -15px;
		}
	}
	
	&_seating {
		width: $content_width;
		margin: 30px auto;
		display: flex;
		
		div {
			display: inline-block;
			width: 50%;
			
			&.seating_passenger {
				text-align: left;
			}
			
			&.seating_seat {
				text-align: right;
			}
		}
	}
	
	&_details {
		width: $content_width;
		margin: 30px auto;
		display: flex;
		padding-bottom: 30px;
		
		div {
			display: inline-block;
			width: 33%;
			
			&.details_flight {
				text-align: left;
			}
			
			&.details_date {
				text-align: center;
			}
			
			&.details_time {
				text-align: right;
			}
		}
	}
}
</style>