$(function () {
	$(".a-link:not(.ignore)").on("click", route);
	function route(e) {
		e.preventDefault();
		var oThis = $(e.target);
		if (oThis.prop("tagName") != "A") oThis = oThis.closest("a");
		var h = oThis.attr("href").slice(1) || "s0";
		
		if (!$("#" + h).length) h = "s0";

		$(".nav-link")
			.removeClass("active")
			.filter('[href="#' + h + '"]')
			.addClass("active");
		$("#nv").collapse("hide");

		$('html, body').stop().animate({
			scrollTop: $("#" + h).offset().top - 60
		}, 800, function () {
			// CALLBACK: Runs instantly once the scroll animation finishes
			// Removes the hash marker from the address bar gracefully
			history.replaceState(null, null, window.location.pathname + window.location.search);
		});
	}
});