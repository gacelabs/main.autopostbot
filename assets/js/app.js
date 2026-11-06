$(function () {
    const nav = [
        ["home", "Home"],
        ["features", "Features"],
        ["how", "How It Works"],
        ["pricing", "Pricing"],
        ["partners", "Partners"],
        ["about", "About"],
        ["blog", "Blog"],
        ["faq", "FAQ"],
        ["contact", "Contact"],
    ];
    const feats = [
        ["bag-check", "Shopee content", "Manage Shopee affiliate products.", 1],
        ["box-seam", "Amazon content", "Manage Amazon affiliate products.", 1],
        ["pencil-square", "Custom content", "Create and manage your own posts.", 1],
        ["puzzle", "Browser extension", "Scrape products and send them to your dashboard.", 1],
        ["facebook", "Facebook Pages", "Connect Pages and publish from one place.", 1],
        ["kanban", "Central dashboard", "Review, edit and organize imported content.", 1],
        ["threads", "Threads", "Publishing to Threads.", 0],
        ["youtube", "YouTube", "YouTube publishing support.", 0],
        ["cart4", "Temu", "Temu affiliate content.", 0],
    ];
    const badge = (l) =>
        l ? '<span class="chip live">Available</span>' : '<span class="chip soon">Coming soon</span>';
    const fcard = (f) =>
        `<div class="col-md-6 col-lg-4"><div class="card-x"><div class="ico"><i class="bi bi-${f[0]}"></i></div><div class="d-flex justify-content-between"><h5>${f[1]}</h5>${badge(f[3])}</div><p class="text-secondary mb-0">${f[2]}</p></div></div>`;
    $("#feat-all").html(feats.map(fcard).join(""));
    $("#feat-home").html(
        feats
            .filter((f) => f[3])
            .map(fcard)
            .join("")
    );
    const chip = (f) => 
        `<div class="col-6 col-md-3"><div class="card-x text-center"><div class="ico mx-auto"><i class="bi bi-${f[0]}"></i></div><b>${f[1]}</b><div class="mt-2">${badge(f[3])}</div></div></div>`;
    $("#sources").html([feats[0], feats[1], feats[2], feats[8]].map(chip).join(""));
    $("#socials").html([feats[4], feats[6], feats[7]].map(chip).join(""));
    $("#menu").html(
        nav.map((n) => `<li class="nav-item"><a class="nav-link" href="#${n[0]}">${n[1]}</a></li>`).join("")
    );
    const steps = [
        ["Install the extension", "Add the AutoPostBot extension to your browser right after subscribing."],
        ["Choose a source", "Open your affiliate shop (Shopee or Amazon) and pick products."],
        ["Scrape product info", "Use the extension to collect titles, images, prices and links."],
        ["Send to AutoPostBot", "Push the collected data to your web app in one click."],
        ["Manage & publish", "Edit content and publish to your Facebook Pages from the dashboard."],
    ];
    $("#steps").html(
        steps
            .map(
                (s, i) =>
                    `<div class="d-flex gap-3 mb-4"><div class="step-n">${i + 1}</div><div class="card-x w-100"><h5>${s[0]}</h5><p class="text-secondary mb-0">${s[1]}</p></div></div>`
            )
            .join("")
    );
    $("#flow-mini").html(
        ["puzzle|Install", "shop|Select shop", "cloud-download|Scrape", "send|Send", "megaphone|Publish"]
            .map((x) => {
                x = x.split("|");
                return `<div class="col-4"><div class="card-x p-3"><div class="ico mx-auto"><i class="bi bi-${x[0]}"></i></div><b class="small">${x[1]}</b></div></div>`;
            })
            .join("")
    );
    const plans = [["Basic", 0, 1, '3 Automations'], ["Professional", 1, 9, '15 Automations'], ["Enterprise", 0, 25, 'Unlimited']];
    $(".plans").html(
        plans
            .map(
                (p) =>
                    `<div class="col-md-4"><div class="card-x price ${p[1] ? "pop" : ""} text-center">${p[1] ? '<span class="chip soon mb-2">Most popular</span>' : ""}<h4>${p[0]}</h4><div class="display-6 fw-bold my-2"><span class="ph">$ ${p[2]}</span></div><p class="text-secondary small">per <span class="ph">month</span></p><ul class="list-unstyled text-start small"><li><i class="bi bi-check-circle-fill text-primary"></i> Browser extension</li><li><i class="bi bi-check-circle-fill text-primary"></i> Shopee, Amazon &amp; custom content</li><li><i class="bi bi-check-circle-fill text-primary"></i> Social media publishing</li><li><i class="bi bi-check-circle-fill text-primary"></i> <span class="ph">${p[3]}</span></li></ul><a href="#auth" class="btn ${p[1] ? "btn-grad" : "btn-outline-dark rounded-pill"} w-100">Subscribe</a></div></div>`
            )
            .join("")
    );
    $("#perks").html(
        [
            ["cash-coin", "Earn commissions", 'Earn <span class="ph">[X%]</span> on referred subscribers.'],
            ["stars", "Exclusive benefits", 'Partner-only perks <span class="ph">[to be announced]</span>.'],
            ["graph-up-arrow", "Grow your income", "Monetize your audience by sharing a tool they need."],
            ["people", "Join the community", "Connect with other AutoPostBot partners."],
        ]
            .map(
                (p) =>
                    `<div class="col-md-6 col-lg-3"><div class="card-x"><div class="ico"><i class="bi bi-${p[0]}"></i></div><h5>${p[1]}</h5><p class="text-secondary mb-0">${p[2]}</p></div></div>`
            )
            .join("")
    );
    $("#testi").html(
        [1, 2, 3]
            .map(
                (i) =>
                    `<div class="col-md-4"><div class="card-x"><div class="text-warning mb-2">★★★★★</div><p class="ph d-block">"[Testimonial ${i}: real customer feedback goes here]"</p><b>[Name]</b><div class="small text-secondary">[Role / channel]</div></div></div>`
            )
            .join("")
    );
    $("#vids").html(
        ["Getting started", "Installing the extension", "Publishing to Facebook"]
            .map(
                (t) =>
                    `<div class="col-md-4"><div class="card-x p-0 overflow-hidden"><div class="ratio ratio-16x9 text-white d-grid" style="background:var(--navy);place-items:center"><i class="bi bi-play-circle fs-1"></i></div><div class="p-3"><b>${t}</b><div class="small ph">[YouTube embed / link]</div></div></div></div>`
            )
            .join("")
    );
    $("#posts").html(
        [
            "How to choose affiliate products that convert",
            "Product update: What's new",
            "Facebook Page publishing best practices",
        ]
            .map(
                (t) =>
                    `<div class="col-md-4"><div class="card-x"><span class="chip soon mb-2">Article</span><h5>${t}</h5><p class="small text-secondary ph d-block">[Excerpt placeholder]</p><a href="#blog">Read more →</a></div></div>`
            )
            .join("")
    );
    const faqs = [
        [
            "What is AutoPostBot?",
            "A web app to manage affiliate content (Shopee, Amazon, custom) and publish to Facebook Pages, paired with a browser extension.",
        ],
        [
            "Do I need the browser extension?",
            "Yes. It scrapes products from your chosen shop and sends them to the web app, where you manage and publish.",
        ],
        ["Which affiliate sources are supported?", "Shopee, Amazon and custom content today. Temu is coming soon."],
        [
            "Which social platforms can I publish to?",
            "Facebook Pages today. Threads, YouTube and others are coming soon.",
        ],
        ["How do subscriptions work?", "Choose a plan on the Pricing page."],
        [
            "How do I join the Partnership Program?",
			"<a class='a-link' href='#contact'>Contact us via email</a> with the subject <b>Become a Partner</b>, and we'll get back to you with your personalized partner registration link.",
        ],
    ];
    const acc = (id, list) =>
        $(id).html(
            list
                .map(
                    (f, i) =>
                        `<div class="accordion-item"><h3 class="accordion-header"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#${id.slice(1)}${i}">${f[0]}</button></h3><div id="${id.slice(1)}${i}" class="accordion-collapse collapse" data-bs-parent="${id}"><div class="accordion-body">${f[1]}</div></div></div>`
                )
                .join("")
        );
    acc("#faq-home", faqs.slice(0, 4));
    acc("#faq-all", faqs);
    acc("#faq-partner", [
        faqs[5],
		["What are the commission rates?", "Commission rates range from 3% to 10%, depending on how frequently you refer and invite new customers."],
		["When and how are partners paid?", "Get paid via PayPal or Wise when your balance reaches $10 or every 30 days, based on your selected payout preference.."],
    ]);
    /* function route() {
        let h = location.hash.slice(1) || "home";
        if (!$("#" + h + ".page").length) h = "home";
        $(".page").removeClass("on");
        $("#" + h).addClass("on");
        $(".nav-link")
            .removeClass("active")
            .filter('[href="#' + h + '"]')
            .addClass("active");
        $("#nv").collapse("hide");
        window.scrollTo(0, 0);
        document.title =
            h == "home"
                ? "AutoPostBot – Affiliate Content & Social Publishing"
                : h.charAt(0).toUpperCase() + h.slice(1) + " | AutoPostBot";
    }
    $(window).on("hashchange", route);
    route(); */
	$(".nav-link, .a-link").on("click", route);
	function route(e) {
		if (window.location.hash) {
			// Example: Select an element matching the hash ID
			var h = window.location.hash.slice(1) || "home";
		} else {
			e.preventDefault();
			var oThis = $(e.target);
			if (oThis.prop("tagName") != "A") oThis = oThis.closest("a");
			var h = oThis.attr("href").slice(1) || "home";
		}
		
		if (!$("#" + h + ".page").length) h = "home";

		$(".nav-link")
			.removeClass("active")
			.filter('[href="#' + h + '"]')
			.addClass("active");
		$("#nv").collapse("hide");

		$('html, body').stop().animate({
			scrollTop: $("#" + h + ".page").offset().top - 60
		}, 800, function () {
			// CALLBACK: Runs instantly once the scroll animation finishes
			// Removes the hash marker from the address bar gracefully
			history.replaceState(null, null, window.location.pathname + window.location.search);
		});
	}
	route();
    $("#cform,.authf").on("submit", function (e) {
        e.preventDefault();
        const ok = this.checkValidity();
        $(this).addClass("was-validated");
        if (ok && this.id == "cform") $("#cok").removeClass("d-none");
    });
    $("#yr").text(new Date().getFullYear());
});
