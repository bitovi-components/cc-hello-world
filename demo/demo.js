// Libraries
import can from "can";
import "can/view/stache/stache";

// Components
import "cc-hello-world";

// Template
import template from "./demo.stache!";

export default can.Component.extend({
	tag: "cc-hello-world-demo",
	template: template,
	scope: {
		target: "World"
	}
});

// NOTE: This is something CanJS will eventually support automatically in the
//       future. For the time being, we use this hack only for the toplevel of
//       applications (such as this demo)
can.$(() => {
	can.$("cc-hello-world-demo").each((i, el) => {
		can.$(el).replaceWith(can.stache(el.outerHTML)());
	});
});
