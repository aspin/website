Template.construction.events({
	'click .construction': function () {
		$(".blue-circle-1").hide("slow");
		$(".red-square-1").hide("slow");
		$("#links").animate({
			left: "-200px"
		});
		$(".brown-triangle-1").animate({
			borderLeftWidth: "200px",
			borderRightWidth: "200px",
			borderBottomWidth: "400px",
			marginLeft: "19%",
			marginTop: "7%",
		});
		$("#consText").animate({
			top: "230px",
			fontSize: "30px",
			width: "200px",
			left: "-95px"
		})
		$("#consText").html("It's still under <br/> construction! :)");
		$("#consText").addClass("refresh");
		$(".brown-triangle-1").addClass("refresh");
	},
	'click .refresh': function () {
		$(".blue-circle-1").show("slow");
		$(".red-square-1").show("slow");
		$("#links").animate({
			left: "2.5%"
		});
		$(".brown-triangle-1").animate({
			borderLeftWidth: "140px",
			borderRightWidth: "140px",
			borderBottomWidth: "280px",
			marginLeft: "47%",
			marginTop: "23%",
		});
		$("#consText").animate({
			top: "150px",
			left: "-73px",
			fontSize: "23px",
			width: "140px"
		});
		$("#consText").html("It's still under <br/> construction...");
		$("#consText").removeClass("refresh");
		$(".brown-triangle-1").addClass("refresh");
	}
});

Template.construction.rendered = function () {
	$("#links").draggable();	
};