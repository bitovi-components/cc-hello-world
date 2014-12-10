// Libraries
import can from "can";
import "can/view/stache/stache";

// Components
import "./cc-hello-world";

// NOTE: use can.$ instead of $
can.$(() => {
	window.data = new can.Map({
		target: "World"
	});
	can.$("body").prepend(can.view("#demo-template")(window.data));
});
