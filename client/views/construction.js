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
			top: "320px",
			left: "",
			fontSize: "30px"
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
			left: "135px",
			fontSize: "18px"
		});
		$("#consText").html("It's still under <br/> construction...");
		$("#consText").removeClass("refresh");
		$(".brown-triangle-1").addClass("refresh");
	}
});