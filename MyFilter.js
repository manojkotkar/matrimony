$(document).ready(function(){
				
				$(".custom-control-input").click(function(){
					$(".all").show();
					
					var gotra;
					if (!$('#checkKashayp').is(":checked") && !$('#checkKhalap').is(":checked") && !$('#checkMandav').is(":checked")
						&& !$('#checkGahilam').is(":checked") && !$('#checkGautam').is(":checked") && !$('#checkLokaksha').is(":checked")) {
						gotra = true;
					} else {
						if (!$('#checkKashayp').is(":checked")) 
							$(".Kashayp").hide();	
						
						if (!$('#checkKhalap').is(":checked")) 
							$(".Khalap").hide();	
						
						if (!$('#checkMandav').is(":checked")) 
							$(".Mandav").hide();	
						
						if (!$('#checkGahilam').is(":checked")) 
							$(".Gahilam").hide();	
						
						if (!$('#checkGautam').is(":checked")) 
							$(".Gautam").hide();	
						
						if (!$('#checkLokaksha').is(":checked")) 
							$(".Lokaksha").hide();
					}
					
					if (!$('#checkPune').is(":checked") && !$('#checkMumbai').is(":checked") && !$('#chceckNagpur').is(":checked")) {
						gotra = true;
					} else {
						//pune
						if (!$('#checkPune').is(":checked")) 
							$(".Pune").hide();
											
						//Mumbai
						if (!$('#checkMumbai').is(":checked")) 
							$(".Mumbai").hide();
						
						//Nagpur
						if (!$('#checkNagpur').is(":checked")) 
							$(".Nagpur").hide();
						
					}
					
					if (!$('#checkPune').is(":checked") && !$('#checkMumbai').is(":checked") && !$('#chceckNagpur').is(":checked")) {
						gotra = true;
					} else {
						//pune
						if (!$('#checkPune').is(":checked")) 
							$(".Pune").hide();
											
						//Mumbai
						if (!$('#checkMumbai').is(":checked")) 
							$(".Mumbai").hide();
						
						//Nagpur
						if (!$('#checkNagpur').is(":checked")) 
							$(".Nagpur").hide();
						
						
						
					}
					
					
				});
			
				
				
			});
function isNotCheckedById(id) {

    if ($('#'+id+'').is(":checked")) {
        return false;
    } else {
        return true;
    }
}
